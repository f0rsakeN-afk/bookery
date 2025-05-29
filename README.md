# 🛒 SnapKart

SnapKart is a full-featured e-commerce web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. Developed as part of a 5th semester Computer Engineering project, SnapKart allows users to browse, search, and purchase products online with ease.

## 📌 Project Status

🚧 In Development – To be submitted by the end of the semester.

```
snapkart
├─ README.md
├─ backend
│  ├─ .env
│  ├─ controllers
│  │  ├─ authController.js
│  │  ├─ contactController.js
│  │  ├─ errorController.js
│  │  ├─ productController.js
│  │  └─ userController.js
│  ├─ example.env
│  ├─ index.js
│  ├─ models
│  │  ├─ contactModel.js
│  │  ├─ productModel.js
│  │  └─ userModel.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  ├─ contactRoutes.js
│  │  ├─ productRoutes.js
│  │  └─ userRoutes.js
│  ├─ server.js
│  └─ utils
│     ├─ apiFeatures.js
│     ├─ appError.js
│     ├─ catchAsync.js
│     └─ email.js
└─ frontend
   ├─ .env.development
   ├─ .env.production
   ├─ README.md
   ├─ components
   │  └─ ProductDetails.tsx
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
   │  │  ├─ stripe.webp
   │  │  ├─ testimonial1.webp
   │  │  ├─ testimonial2.webp
   │  │  ├─ testimonial3.webp
   │  │  ├─ testimonial4.webp
   │  │  └─ testimonial5.webp
   │  ├─ components
   │  │  ├─ DashBoard
   │  │  │  ├─ AddProduct.tsx
   │  │  │  ├─ Analytics.tsx
   │  │  │  ├─ DashBoardTableItems.tsx
   │  │  │  └─ Notifications.tsx
   │  │  ├─ Footer
   │  │  │  ├─ Footer.tsx
   │  │  │  ├─ FooterBottom.tsx
   │  │  │  └─ IconTile.tsx
   │  │  ├─ Header
   │  │  │  ├─ HeaderTop.tsx
   │  │  │  └─ Navbar.tsx
   │  │  ├─ Home
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
   │  │  │  └─ EmptyCart.tsx
   │  │  ├─ productDetails
   │  │  │  ├─ ExtraInfo.tsx
   │  │  │  └─ Loader.tsx
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
   │  │  │  └─ ScrollToTop.tsx
   │  │  ├─ ui
   │  │  │  ├─ AceternityTabs.tsx
   │  │  │  ├─ DraggableCard.tsx
   │  │  │  ├─ alert-dialog.tsx
   │  │  │  ├─ avatar.tsx
   │  │  │  ├─ badge.tsx
   │  │  │  ├─ button.tsx
   │  │  │  ├─ card.tsx
   │  │  │  ├─ carousel.tsx
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
   │  │  └─ wishlist
   │  │     ├─ EmptyWishlist.tsx
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
   │  │  ├─ Cart.tsx
   │  │  ├─ Contact.tsx
   │  │  ├─ Dashboard.tsx
   │  │  ├─ ForgotPassword.tsx
   │  │  ├─ Home.tsx
   │  │  ├─ Login.tsx
   │  │  ├─ NewPassword.tsx
   │  │  ├─ PageNotFound.tsx
   │  │  ├─ PrivacyPolicy.tsx
   │  │  ├─ ProductDetails.tsx
   │  │  ├─ Profile.tsx
   │  │  ├─ Register.tsx
   │  │  ├─ Search.tsx
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
   │  │  ├─ search.ts
   │  │  ├─ user.ts
   │  │  └─ wishlist.ts
   │  ├─ types
   │  │  ├─ auth.ts
   │  │  ├─ contact.ts
   │  │  ├─ filter.ts
   │  │  ├─ product.ts
   │  │  └─ user.ts
   │  ├─ utils
   │  │  ├─ ImageExports.ts
   │  │  └─ config.ts
   │  └─ vite-env.d.ts
   ├─ tsconfig.app.json
   ├─ tsconfig.json
   ├─ tsconfig.node.json
   ├─ vercel.json
   └─ vite.config.ts

```
