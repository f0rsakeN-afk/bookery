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
│  │  └─ productController.js
│  ├─ example.env
│  ├─ index.js
│  ├─ models
│  │  ├─ contactModel.js
│  │  ├─ product.js
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
   │  │  ├─ about.avif
   │  │  ├─ about2.avif
   │  │  ├─ banner1.jpg
   │  │  ├─ banner2.jpg
   │  │  ├─ banner3.jpg
   │  │  ├─ banner4.jpg
   │  │  ├─ banner5.jpg
   │  │  ├─ cart.svg
   │  │  ├─ carttransparent.png
   │  │  ├─ empty-wishlist.svg
   │  │  ├─ emptyCart.png
   │  │  ├─ feed1.png
   │  │  ├─ feed2.png
   │  │  ├─ feed3.png
   │  │  ├─ feed4.png
   │  │  ├─ feed5.png
   │  │  ├─ feed6.png
   │  │  ├─ hero.png
   │  │  ├─ hero.webp
   │  │  ├─ hero1.png
   │  │  ├─ hero2.png
   │  │  ├─ hero3.png
   │  │  ├─ logo.webp
   │  │  └─ search.png
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
   │  │  │  └─ Loader.tsx
   │  │  ├─ profile
   │  │  │  ├─ PasswordForm.tsx
   │  │  │  └─ UserDetailsForm.tsx
   │  │  ├─ shared
   │  │  │  ├─ Layout.tsx
   │  │  │  ├─ Loader.tsx
   │  │  │  ├─ Logo.tsx
   │  │  │  ├─ ProductTile.tsx
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
   │  │  │  ├─ textarea.tsx
   │  │  │  └─ tooltip.tsx
   │  │  └─ wishlist
   │  │     ├─ EmptyWishlist.tsx
   │  │     ├─ WishlistHeader.tsx
   │  │     └─ WishlistItems.tsx
   │  ├─ context
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