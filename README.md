# 🛒 SnapKart

SnapKart is a full-featured e-commerce web application built using the MERN (MongoDB, Express.js, React, Node.js) stack. Developed as part of a 5th semester Computer Engineering project, SnapKart allows users to browse, search, and purchase products online with ease.

## 📌 Project Status

🚧 In Development – To be submitted by the end of the semester.
```
bookery
├─ README.md
├─ backend
│  ├─ .env
│  ├─ controllers
│  │  └─ contactController.js
│  ├─ example.env
│  ├─ index.js
│  ├─ models
│  │  ├─ contactModel.js
│  │  └─ userModel.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  └─ contactRoutes.js
│  ├─ server.js
│  └─ utils
│     └─ catchAsync.js
└─ frontend
   ├─ .env
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
   │  │  ├─ cart.svg
   │  │  ├─ carttransparent.png
   │  │  ├─ empty-wishlist.svg
   │  │  ├─ emptyCart.png
   │  │  ├─ hero.webp
   │  │  ├─ logo.webp
   │  │  └─ search.png
   │  ├─ components
   │  │  ├─ DashBoard
   │  │  │  ├─ AddProduct.tsx
   │  │  │  └─ Analytics.tsx
   │  │  ├─ Footer
   │  │  │  ├─ Footer.tsx
   │  │  │  ├─ FooterBottom.tsx
   │  │  │  └─ IconTile.tsx
   │  │  ├─ Header
   │  │  │  ├─ HeaderTop.tsx
   │  │  │  └─ Navbar.tsx
   │  │  ├─ Home
   │  │  │  ├─ Hero.tsx
   │  │  │  ├─ ProductList.tsx
   │  │  │  └─ ProductListSkeleton.tsx
   │  │  ├─ cart
   │  │  │  ├─ CartItems.tsx
   │  │  │  ├─ Cartheader.tsx
   │  │  │  └─ EmptyCart.tsx
   │  │  ├─ profile
   │  │  │  ├─ PasswordForm.tsx
   │  │  │  └─ UserDetailsForm.tsx
   │  │  ├─ shared
   │  │  │  ├─ Layout.tsx
   │  │  │  ├─ Loader.tsx
   │  │  │  ├─ Logo.tsx
   │  │  │  └─ ScrollToTop.tsx
   │  │  ├─ ui
   │  │  │  ├─ AceternityTabs.tsx
   │  │  │  ├─ alert-dialog.tsx
   │  │  │  ├─ avatar.tsx
   │  │  │  ├─ badge.tsx
   │  │  │  ├─ button.tsx
   │  │  │  ├─ card.tsx
   │  │  │  ├─ dialog.tsx
   │  │  │  ├─ dropdown-menu.tsx
   │  │  │  ├─ form.tsx
   │  │  │  ├─ input.tsx
   │  │  │  ├─ label.tsx
   │  │  │  ├─ scroll-area.tsx
   │  │  │  ├─ select.tsx
   │  │  │  ├─ separator.tsx
   │  │  │  ├─ sheet.tsx
   │  │  │  ├─ skeleton.tsx
   │  │  │  ├─ switch.tsx
   │  │  │  ├─ table.tsx
   │  │  │  ├─ tabs.tsx
   │  │  │  └─ textarea.tsx
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
   │  │  ├─ payment.ts
   │  │  ├─ user.ts
   │  │  └─ wishlist.ts
   │  ├─ types
   │  │  ├─ auth.ts
   │  │  ├─ contact.ts
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
```
snapkart
├─ README.md
├─ backend
│  ├─ .env
│  ├─ controllers
│  │  └─ contactController.js
│  ├─ example.env
│  ├─ index.js
│  ├─ models
│  │  ├─ contactModel.js
│  │  └─ userModel.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  └─ contactRoutes.js
│  ├─ server.js
│  └─ utils
│     └─ catchAsync.js
└─ frontend
   ├─ .env
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
   │  │  ├─ hero3_800x800.png
   │  │  ├─ logo.webp
   │  │  └─ search.png
   │  ├─ components
   │  │  ├─ DashBoard
   │  │  │  ├─ AddProduct.tsx
   │  │  │  └─ Analytics.tsx
   │  │  ├─ Footer
   │  │  │  ├─ Footer.tsx
   │  │  │  ├─ FooterBottom.tsx
   │  │  │  └─ IconTile.tsx
   │  │  ├─ Header
   │  │  │  ├─ HeaderTop.tsx
   │  │  │  └─ Navbar.tsx
   │  │  ├─ Home
   │  │  │  ├─ Hero.tsx
   │  │  │  ├─ ProductList.tsx
   │  │  │  ├─ ProductListSkeleton.tsx
   │  │  │  ├─ SocialFeed.tsx
   │  │  │  └─ Testimonial.tsx
   │  │  ├─ cart
   │  │  │  ├─ CartItems.tsx
   │  │  │  ├─ Cartheader.tsx
   │  │  │  └─ EmptyCart.tsx
   │  │  ├─ profile
   │  │  │  ├─ PasswordForm.tsx
   │  │  │  └─ UserDetailsForm.tsx
   │  │  ├─ shared
   │  │  │  ├─ Layout.tsx
   │  │  │  ├─ Loader.tsx
   │  │  │  ├─ Logo.tsx
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
   │  │  ├─ payment.ts
   │  │  ├─ product.ts
   │  │  ├─ user.ts
   │  │  └─ wishlist.ts
   │  ├─ types
   │  │  ├─ auth.ts
   │  │  ├─ contact.ts
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
```
snapkart
├─ README.md
├─ backend
│  ├─ .env
│  ├─ controllers
│  │  └─ contactController.js
│  ├─ example.env
│  ├─ index.js
│  ├─ models
│  │  ├─ contactModel.js
│  │  └─ userModel.js
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ routes
│  │  └─ contactRoutes.js
│  ├─ server.js
│  └─ utils
│     └─ catchAsync.js
└─ frontend
   ├─ .env
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
   │  │  ├─ hero3_800x800.png
   │  │  ├─ logo.webp
   │  │  └─ search.png
   │  ├─ components
   │  │  ├─ DashBoard
   │  │  │  ├─ AddProduct.tsx
   │  │  │  └─ Analytics.tsx
   │  │  ├─ Footer
   │  │  │  ├─ Footer.tsx
   │  │  │  ├─ FooterBottom.tsx
   │  │  │  └─ IconTile.tsx
   │  │  ├─ Header
   │  │  │  ├─ HeaderTop.tsx
   │  │  │  └─ Navbar.tsx
   │  │  ├─ Home
   │  │  │  ├─ Hero.tsx
   │  │  │  ├─ ProductList.tsx
   │  │  │  ├─ ProductListSkeleton.tsx
   │  │  │  ├─ SocialFeed.tsx
   │  │  │  └─ Testimonial.tsx
   │  │  ├─ cart
   │  │  │  ├─ CartItems.tsx
   │  │  │  ├─ Cartheader.tsx
   │  │  │  └─ EmptyCart.tsx
   │  │  ├─ profile
   │  │  │  ├─ PasswordForm.tsx
   │  │  │  └─ UserDetailsForm.tsx
   │  │  ├─ shared
   │  │  │  ├─ Layout.tsx
   │  │  │  ├─ Loader.tsx
   │  │  │  ├─ Logo.tsx
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
   │  │  ├─ payment.ts
   │  │  ├─ product.ts
   │  │  ├─ user.ts
   │  │  └─ wishlist.ts
   │  ├─ types
   │  │  ├─ auth.ts
   │  │  ├─ contact.ts
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