import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Loader from "./components/shared/Loader";
import Layout from "./components/shared/Layout";
import ScrollToTop from "./components/shared/ScrollToTop";
import { Toaster } from "./components/ui/sonner";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/shared/ProtectedRoute";
import PublicRoute from "./components/shared/PublicRoute";
import AdminRoute from "./components/shared/AdminRoute";
import UserOnlyRoute from "./components/shared/UserOnlyRoute";
const About = lazy(() => import("./pages/About"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Contact = lazy(() => import("./pages/Contact"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Hero = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
const Profile = lazy(() => import("./pages/Profile"));
const NewPassword = lazy(() => import("./pages/NewPassword"));
const AllProducts = lazy(() => import("./pages/AllProducts"));
const Orders = lazy(() => import("./pages/Orders"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Users = lazy(() => import("./pages/Users"));
/* const Checkout = lazy(() => import("./pages/Checkout")); */

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 10 * 1000,
      },
    },
  });
  return (
    <Suspense fallback={<Loader />}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <ScrollToTop />
          <Toaster position="top-right" duration={4000} />
          <AuthProvider>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <Layout />
                  </ProtectedRoute>
                }
              >
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route
                  path="/cart"
                  element={
                    <UserOnlyRoute>
                      <Cart />
                    </UserOnlyRoute>
                  }
                />
                {/*     <Route
                  path="/checkout"
                  element={
                    <ProtectedRoute>
                      <Checkout />
                    </ProtectedRoute>
                  }
                /> */}
                <Route path="/Search" element={<Search />} />
                <Route
                  path="/wishlist"
                  element={
                    <UserOnlyRoute>
                      <Wishlist />
                    </UserOnlyRoute>
                  }
                />
                <Route
                  path="/productdetails/:id"
                  element={<ProductDetails />}
                />
                <Route path="/profile" element={<Profile />} />
                <Route
                  path="/dashboard"
                  element={
                    <AdminRoute>
                      <Dashboard />
                    </AdminRoute>
                  }
                />
                <Route
                  path="/order"
                  element={
                    <AdminRoute>
                      <Orders />
                    </AdminRoute>
                  }
                />
                <Route
                  path="/analytics"
                  element={
                    <AdminRoute>
                      <Analytics />
                    </AdminRoute>
                  }
                />
                <Route
                  path="/users"
                  element={
                    <AdminRoute>
                      <Users />
                    </AdminRoute>
                  }
                />
                <Route path="/allproducts" element={<AllProducts />} />
              </Route>
              <Route
                path="/register"
                element={
                  <PublicRoute>
                    <Register />
                  </PublicRoute>
                }
              />
              <Route
                path="/login"
                element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                }
              />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/newpassword/:token" element={<NewPassword />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </Suspense>
  );
};

export default App;
