# 🛒 SnapKart

SnapKart is a full-featured e-commerce web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. Developed as part of a 5th semester Computer Engineering project, SnapKart allows users to browse, search, and purchase products online with ease.

## 📌 Project Status

Project snapshots:https://drive.google.com/drive/folders/1BVJe5mmownInOv-Un6TLoWhun7f171Xu?usp=drive_link

🚧 In Development – To be submitted by the end of the semester.

## Route Structure

### 🔐 User Routes (`/api/users`)

| Method | Endpoint              | Description               | Authentication | Role       |
| ------ | --------------------- | ------------------------- | -------------- | ---------- |
| POST   | `/register`           | User registration         | None           | Public     |
| POST   | `/login`              | User login                | None           | Public     |
| POST   | `/logout`             | User logout               | None           | Public     |
| GET    | `/me`                 | Get current user profile  | Required       | User/Admin |
| POST   | `/forgetpassword`     | Request password reset    | None           | Public     |
| PATCH  | `/newpassword/:token` | Reset password with token | None           | Public     |
| GET    | `/:id`                | Get user details by ID    | Required       | User/Admin |
| GET    | `/`                   | Get all users             | Required       | Admin      |
| PATCH  | `/updatepassword`     | Update user password      | Required       | User/Admin |

### 🛍️ Product Routes (`/api/products`)

| Method | Endpoint  | Description       | Authentication | Role       |
| ------ | --------- | ----------------- | -------------- | ---------- |
| POST   | `/`       | Add new product   | Required       | Admin      |
| GET    | `/`       | Get all products  | Required       | User/Admin |
| GET    | `/search` | Search products   | Required       | User/Admin |
| GET    | `/:id`    | Get product by ID | Required       | User/Admin |
| DELETE | `/:id`    | Delete product    | Required       | Admin      |

**Note**: Product creation includes photo upload and resizing functionality.

### ⭐ Review Routes (`/api/reviews`)

| Method | Endpoint | Description       | Authentication | Role  |
| ------ | -------- | ----------------- | -------------- | ----- |
| GET    | `/`      | Get all reviews   | Required       | Admin |
| POST   | `/`      | Create new review | Required       | User  |
| PATCH  | `/:id`   | Update review     | Required       | User  |
| DELETE | `/:id`   | Delete review     | Required       | User  |

### 📧 Contact Routes (`/api/contact`)

| Method | Endpoint | Description              | Authentication | Role  |
| ------ | -------- | ------------------------ | -------------- | ----- |
| POST   | `/`      | Send contact message     | Required       | User  |
| GET    | `/`      | Get all contact messages | Required       | Admin |
| DELETE | `/:id`   | Delete contact message   | Required       | Admin |

```
snapkart
├─ README.md
├─ backend
│  ├─ .env
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ cartController.js
│  │  ├─ contactController.js
│  │  ├─ errorController.js
│  │  ├─ orderController.js
│  │  ├─ productController.js
│  │  ├─ reviewController.js
│  │  ├─ userController.js
│  │  └─ wishListController.js
│  ├─ example.env
│  ├─ index.js
│  ├─ models
│  │  ├─ contactModel.js
│  │  ├─ orderModel.js
│  │  ├─ paymentModel.js
│  │  ├─ productModel.js
│  │  ├─ reviewModel.js
│  │  └─ userModel.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ product
│  ├─ routes
│  │  ├─ cartRoutes.js
│  │  ├─ contactRoutes.js
│  │  ├─ orderRoutes.js
│  │  ├─ productRoutes.js
│  │  ├─ reviewRoutes.js
│  │  ├─ userRoutes.js
│  │  └─ wishListRoutes.js
│  ├─ server.js
│  └─ utils
│     ├─ apiFeatures.js
│     ├─ appError.js
│     ├─ catchAsync.js
│     ├─ email.js
│     └─ multer.js
└─ frontend
   ├─ .env.development
   ├─ .env.production
   ├─ README.md
   ├─ components.json
   ├─ eslint.config.js
   ├─ example.env
   ├─ index.html
   ├─ package-lock.json
   ├─ package.json
   ├─ src
   │  ├─ App.tsx
   │  ├─ Loader.css
   │  ├─ assets
   │  │  ├─ about.webp
   │  │  ├─ about2.webp
   │  │  ├─ appBanner.webp
   │  │  ├─ banner1.webp
   │  │  ├─ banner2.webp
   │  │  ├─ banner3.webp
   │  │  ├─ banner4.webp
   │  │  ├─ banner5.webp
   │  │  ├─ cart.svg
   │  │  ├─ carttransparent.webp
   │  │  ├─ cod.webp
   │  │  ├─ empty-wishlist.svg
   │  │  ├─ emptyCart.webp
   │  │  ├─ esewa.webp
   │  │  ├─ feed1.webp
   │  │  ├─ feed2.webp
   │  │  ├─ feed3.webp
   │  │  ├─ feed4.webp
   │  │  ├─ feed5.webp
   │  │  ├─ feed6.webp
   │  │  ├─ hero.webp
   │  │  ├─ hero1.webp
   │  │  ├─ hero2.webp
   │  │  ├─ hero3.webp
   │  │  ├─ hero4.webp
   │  │  ├─ icon-small.png
   │  │  ├─ logo.webp
   │  │  ├─ qrcode.svg
   │  │  ├─ stripe.webp
   │  │  ├─ testimonial1.webp
   │  │  ├─ testimonial2.webp
   │  │  ├─ testimonial3.webp
   │  │  ├─ testimonial4.webp
   │  │  └─ testimonial5.webp
   │  ├─ components
   │  │  ├─ Analytics
   │  │  │  └─ Chart.tsx
   │  │  ├─ DashBoard
   │  │  │  ├─ AddProduct.tsx
   │  │  │  ├─ Analytics.tsx
   │  │  │  ├─ DashBoardTableItems.tsx
   │  │  │  ├─ EditProduct.tsx
   │  │  │  ├─ EditProductLoader.tsx
   │  │  │  └─ Notifications.tsx
   │  │  ├─ Footer
   │  │  │  ├─ Footer.tsx
   │  │  │  ├─ FooterBottom.tsx
   │  │  │  └─ IconTile.tsx
   │  │  ├─ Header
   │  │  │  ├─ HeaderTop.tsx
   │  │  │  └─ Navbar.tsx
   │  │  ├─ Home
   │  │  │  ├─ AppBanner.tsx
   │  │  │  ├─ Hero.tsx
   │  │  │  ├─ ImageSlider.tsx
   │  │  │  ├─ PaymentMethods.tsx
   │  │  │  ├─ ProductList.tsx
   │  │  │  ├─ ProductListSkeleton.tsx
   │  │  │  ├─ SocialFeed.tsx
   │  │  │  └─ Testimonial.tsx
   │  │  ├─ allproducts
   │  │  │  └─ Filter.tsx
   │  │  ├─ cart
   │  │  │  ├─ CartItems.tsx
   │  │  │  ├─ Cartheader.tsx
   │  │  │  ├─ EmptyCart.tsx
   │  │  │  └─ Loader.tsx
   │  │  ├─ orders
   │  │  │  ├─ EditOrder.tsx
   │  │  │  └─ Loader.tsx
   │  │  ├─ productDetails
   │  │  │  ├─ EditReview.tsx
   │  │  │  ├─ ExtraInfo.tsx
   │  │  │  ├─ Loader.tsx
   │  │  │  ├─ Placeholder.tsx
   │  │  │  ├─ Reviews.tsx
   │  │  │  └─ StarRating.tsx
   │  │  ├─ profile
   │  │  │  ├─ PasswordForm.tsx
   │  │  │  └─ UserDetailsForm.tsx
   │  │  ├─ shared
   │  │  │  ├─ AdminRoute.tsx
   │  │  │  ├─ Layout.tsx
   │  │  │  ├─ Loader.tsx
   │  │  │  ├─ Logo.tsx
   │  │  │  ├─ ProductTile.tsx
   │  │  │  ├─ ProtectedRoute.tsx
   │  │  │  ├─ PublicRoute.tsx
   │  │  │  ├─ ScrollToTop.tsx
   │  │  │  └─ UserOnlyRoute.tsx
   │  │  ├─ ui
   │  │  │  ├─ AceternityTabs.tsx
   │  │  │  ├─ DraggableCard.tsx
   │  │  │  ├─ alert-dialog.tsx
   │  │  │  ├─ alert.tsx
   │  │  │  ├─ avatar.tsx
   │  │  │  ├─ badge.tsx
   │  │  │  ├─ button.tsx
   │  │  │  ├─ card.tsx
   │  │  │  ├─ carousel.tsx
   │  │  │  ├─ chart.tsx
   │  │  │  ├─ dialog.tsx
   │  │  │  ├─ dropdown-menu.tsx
   │  │  │  ├─ form.tsx
   │  │  │  ├─ input.tsx
   │  │  │  ├─ label.tsx
   │  │  │  ├─ pagination.tsx
   │  │  │  ├─ scroll-area.tsx
   │  │  │  ├─ select.tsx
   │  │  │  ├─ separator.tsx
   │  │  │  ├─ sheet.tsx
   │  │  │  ├─ skeleton.tsx
   │  │  │  ├─ slider.tsx
   │  │  │  ├─ sonner.tsx
   │  │  │  ├─ switch.tsx
   │  │  │  ├─ table.tsx
   │  │  │  ├─ tabs.tsx
   │  │  │  ├─ testimonial.tsx
   │  │  │  ├─ textarea.tsx
   │  │  │  └─ tooltip.tsx
   │  │  ├─ users
   │  │  │  └─ Loader.tsx
   │  │  └─ wishlist
   │  │     ├─ EmptyWishlist.tsx
   │  │     ├─ WishListLoader.tsx
   │  │     ├─ WishlistHeader.tsx
   │  │     └─ WishlistItems.tsx
   │  ├─ context
   │  │  ├─ AuthContext.tsx
   │  │  └─ Theme-provider.tsx
   │  ├─ data
   │  │  └─ policyContent.ts
   │  ├─ index.css
   │  ├─ lib
   │  │  └─ utils.ts
   │  ├─ main.tsx
   │  ├─ pages
   │  │  ├─ About.tsx
   │  │  ├─ AllProducts.tsx
   │  │  ├─ Analytics.tsx
   │  │  ├─ Cart.tsx
   │  │  ├─ Contact.tsx
   │  │  ├─ Dashboard.tsx
   │  │  ├─ ForgotPassword.tsx
   │  │  ├─ Home.tsx
   │  │  ├─ Login.tsx
   │  │  ├─ NewPassword.tsx
   │  │  ├─ Orders.tsx
   │  │  ├─ PageNotFound.tsx
   │  │  ├─ PrivacyPolicy.tsx
   │  │  ├─ ProductDetails.tsx
   │  │  ├─ Profile.tsx
   │  │  ├─ Register.tsx
   │  │  ├─ Search.tsx
   │  │  ├─ Users.tsx
   │  │  └─ Wishlist.tsx
   │  ├─ services
   │  │  ├─ auth.ts
   │  │  ├─ axios.ts
   │  │  ├─ cart.ts
   │  │  ├─ checkout.ts
   │  │  ├─ contact.ts
   │  │  ├─ dashboard.ts
   │  │  ├─ payment.ts
   │  │  ├─ product.ts
   │  │  ├─ productList.ts
   │  │  ├─ reviews.ts
   │  │  ├─ search.ts
   │  │  ├─ user.ts
   │  │  └─ wishlist.ts
   │  ├─ types
   │  │  ├─ auth.ts
   │  │  ├─ contact.ts
   │  │  ├─ dashboard.ts
   │  │  ├─ filter.ts
   │  │  ├─ product.ts
   │  │  ├─ review.ts
   │  │  └─ user.ts
   │  ├─ utils
   │  │  ├─ ImageExports.ts
   │  │  ├─ config.ts
   │  │  └─ maskEmail.ts
   │  └─ vite-env.d.ts
   ├─ tsconfig.app.json
   ├─ tsconfig.json
   ├─ tsconfig.node.json
   ├─ vercel.json
   └─ vite.config.ts

```
