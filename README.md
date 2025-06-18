# 🛒 SnapKart - Complete E-Commerce Solution

[![Node.js](https://img.shields.io/badge/Node.js-16.x+-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.15.0-green.svg)](https://mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-blue.svg)](https://expressjs.com/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.4-blue.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

A modern, full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js). SnapKart provides a comprehensive online shopping experience with advanced features for both customers and administrators.

## 📱 Project Overview

SnapKart is a complete e-commerce solution featuring:

- **Modern Frontend**: Built with React 19, TypeScript, and TailwindCSS
- **Robust Backend**: Node.js/Express.js API with MongoDB
- **Advanced Features**: Real-time cart management, wishlist, reviews, analytics
- **Security**: JWT authentication, role-based access control, rate limiting
- **Performance**: Optimized with React Query, lazy loading, and image processing

### 🎯 Project Status

**🚧 In Development** – College project for 5th semester Computer Engineering

**📸 Project Demo**: [View Screenshots](https://drive.google.com/drive/folders/1BVJe5mmownInOv-Un6TLoWhun7f171Xu?usp=drive_link)

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   React Frontend │    │  Express.js API │    │   MongoDB Atlas │
│                 │    │                 │    │                 │
│  • TypeScript   │◄──►│  • Node.js      │◄──►│  • Mongoose ODM │
│  • TailwindCSS  │    │  • JWT Auth     │    │  • Cloud DB     │
│  • React Query  │    │  • Multer       │    │  • Aggregation  │
│  • Vite         │    │  • Rate Limiting│    │  • Indexing     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## 🚀 Features

### 👥 User Experience

- **🔐 Authentication**: Secure JWT-based login/register with password recovery
- **🛍️ Product Catalog**: Browse, search, and filter products with advanced options
- **🛒 Shopping Cart**: Real-time cart management with persistent state
- **❤️ Wishlist**: Save favorite products for later purchase
- **⭐ Reviews & Ratings**: Rate and review products with 5-star system
- **📦 Order Tracking**: Complete order history with status updates
- **👤 User Profile**: Manage personal information and preferences
- **📱 Responsive Design**: Mobile-first approach across all devices

### 🔧 Admin Features

- **📊 Analytics Dashboard**: Sales metrics, user statistics, revenue tracking
- **📦 Product Management**: Full CRUD operations with image upload
- **📋 Order Management**: Process orders and update delivery status
- **👥 User Management**: View and manage customer accounts
- **📧 Contact Management**: Handle customer inquiries and support
- **📈 Reports**: Comprehensive business intelligence and insights

### 🛡️ Security & Performance

- **🔒 JWT Authentication**: Secure token-based authentication
- **🚦 Rate Limiting**: API protection against abuse (100 req/hour)
- **🌐 CORS Configuration**: Cross-origin resource sharing setup
- **🔐 Password Hashing**: bcryptjs encryption for user passwords
- **📸 Image Processing**: Sharp-powered image optimization
- **⚡ Performance**: Lazy loading, code splitting, caching strategies

## 🛠 Tech Stack

### Frontend

| Technology          | Version | Purpose                                    |
| ------------------- | ------- | ------------------------------------------ |
| **React**           | 19.0.0  | Modern UI library with concurrent features |
| **TypeScript**      | 5.7.2   | Type-safe JavaScript development           |
| **Vite**            | 6.3.1   | Fast build tool and dev server             |
| **TailwindCSS**     | 4.1.4   | Utility-first CSS framework                |
| **React Query**     | 5.74.4  | Server state management & caching          |
| **React Router**    | 7.5.1   | Client-side routing with protection        |
| **React Hook Form** | 7.56.4  | Performant form management                 |
| **Radix UI**        | Latest  | Accessible, unstyled UI primitives         |
| **Recharts**        | 2.15.3  | Data visualization for analytics           |

### Backend

| Technology     | Version | Purpose                           |
| -------------- | ------- | --------------------------------- |
| **Node.js**    | 16.x+   | JavaScript runtime environment    |
| **Express.js** | 5.1.0   | Web application framework         |
| **MongoDB**    | 6.15.0  | NoSQL database with Mongoose ODM  |
| **JWT**        | 9.0.2   | JSON Web Token authentication     |
| **bcryptjs**   | 3.0.2   | Password hashing and encryption   |
| **Multer**     | 2.0.1   | File upload middleware            |
| **Sharp**      | 0.34.2  | High-performance image processing |
| **Nodemailer** | 7.0.3   | Email sending capabilities        |

## 🚦 Quick Start

### Prerequisites

- **Node.js** 16.x or higher
- **MongoDB** database (local or Atlas)
- **npm** or **yarn** package manager

### 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/f0rsakeN-afk/snapkart
cd snapkart
```

2. **Backend Setup**

```bash
cd backend
npm install

# Create environment file
cp example.env .env

# Configure your .env file
PORT=
DATABASE_URL=
DATABASE_PASSWORD=
NODE_ENV=
JWT_SECRET=
JWT_EXPIRES_IN=
JWT_COOKIE_EXPIRES_IN=
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_HOST=
EMAIL_PORT=

# Start backend server
npm start
```

3. **Frontend Setup**

```bash
cd ../frontend
npm install

# Create environment file
cp example.env .env

# Configure your .env file
VITE_BACKEND_URL=http://localhost:3000/api/v1

# Start frontend development server
npm run dev
```

4. **Access the application**

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000/api/v1

## 📚 API Documentation

### Base URL

```
http://localhost:3000/api/v1
```

### 🔐 Authentication Routes (`/users`)

| Method  | Endpoint              | Description            | Access    |
| ------- | --------------------- | ---------------------- | --------- |
| `POST`  | `/register`           | User registration      | Public    |
| `POST`  | `/login`              | User login             | Public    |
| `POST`  | `/logout`             | User logout            | Public    |
| `POST`  | `/forgetpassword`     | Request password reset | Public    |
| `PATCH` | `/newpassword/:token` | Reset password         | Public    |
| `GET`   | `/me`                 | Get current user       | Protected |
| `GET`   | `/:id`                | Get user details       | Protected |
| `GET`   | `/`                   | Get all users          | Admin     |
| `PATCH` | `/updatepassword/:id` | Update password        | Protected |
| `PATCH` | `/updateme/:id`       | Update profile         | Protected |

### 🛍️ Product Routes (`/product`)

| Method   | Endpoint  | Description       | Access    |
| -------- | --------- | ----------------- | --------- |
| `POST`   | `/`       | Add new product   | Admin     |
| `GET`    | `/`       | Get all products  | Protected |
| `GET`    | `/search` | Search products   | Protected |
| `GET`    | `/:id`    | Get product by ID | Protected |
| `DELETE` | `/:id`    | Delete product    | Admin     |

### 🛒 Cart Routes (`/cart`)

| Method   | Endpoint      | Description      | Access |
| -------- | ------------- | ---------------- | ------ |
| `GET`    | `/`           | Get user's cart  | User   |
| `POST`   | `/`           | Add item to cart | User   |
| `PATCH`  | `/:productId` | Update cart item | User   |
| `DELETE` | `/:productId` | Remove from cart | User   |

### ❤️ Wishlist Routes (`/wishlist`)

| Method   | Endpoint      | Description          | Access |
| -------- | ------------- | -------------------- | ------ |
| `GET`    | `/`           | Get user's wishlist  | User   |
| `POST`   | `/`           | Add to wishlist      | User   |
| `DELETE` | `/:productId` | Remove from wishlist | User   |

### 📦 Order Routes (`/orders`)

| Method  | Endpoint     | Description         | Access |
| ------- | ------------ | ------------------- | ------ |
| `POST`  | `/`          | Create new order    | User   |
| `GET`   | `/myorders`  | Get user's orders   | User   |
| `GET`   | `/`          | Get all orders      | Admin  |
| `GET`   | `/analytics` | Get order analytics | Admin  |
| `PATCH` | `/:orderId`  | Update order status | Admin  |

### ⭐ Review Routes (`/review`)

| Method   | Endpoint | Description     | Access |
| -------- | -------- | --------------- | ------ |
| `POST`   | `/`      | Create review   | User   |
| `GET`    | `/`      | Get all reviews | Admin  |
| `PATCH`  | `/:id`   | Update review   | User   |
| `DELETE` | `/:id`   | Delete review   | User   |

### 📧 Contact Routes (`/contact`)

| Method   | Endpoint | Description      | Access |
| -------- | -------- | ---------------- | ------ |
| `POST`   | `/`      | Send message     | User   |
| `GET`    | `/`      | Get all messages | Admin  |
| `DELETE` | `/:id`   | Delete message   | Admin  |

## 🎨 Frontend Routes

### 🌐 Public Routes

- `/` - Home page with featured products
- `/about` - About us page
- `/contact` - Contact form
- `/privacypolicy` - Privacy policy
- `/login` - User login
- `/register` - User registration
- `/forgotpassword` - Password recovery
- `/newpassword/:token` - Reset password

### 🔒 Protected Routes

- `/search` - Product search
- `/productdetails/:id` - Product details
- `/allproducts` - All products listing
- `/profile` - User profile management

### 👤 User-Only Routes

- `/cart` - Shopping cart
- `/wishlist` - User wishlist

### 👨‍💼 Admin-Only Routes

- `/dashboard` - Admin dashboard
- `/order` - Order management
- `/analytics` - Sales analytics
- `/users` - User management

## 🚀 Deployment

### Environment Variables

**Backend (.env)**

```env
PORT=
DATABASE_URL=
DATABASE_PASSWORD=
NODE_ENV=
JWT_SECRET=
JWT_EXPIRES_IN=
JWT_COOKIE_EXPIRES_IN=
EMAIL_USERNAME=
EMAIL_PASSWORD=
EMAIL_HOST=
EMAIL_PORT=
```

**Frontend (.env)**

```env
VITE_BACKEND_URL=
```

### Build Commands

```bash
# Backend
cd backend
npm run start:prod

# Frontend
cd frontend
npm run build
npm run preview
```

## 📁 Project Structure

```
snapkart
├─ Backend.md
├─ Frontend.md
├─ README.md
├─ backend
│  ├─ .env
│  ├─ README.md
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
   ├─ dist
   │  ├─ assets
   │  │  ├─ About-C0FWf3c7.js
   │  │  ├─ AllProducts-CO8C7o4u.js
   │  │  ├─ Analytics-DtBvdC90.js
   │  │  ├─ Cart-xFLVs1fk.js
   │  │  ├─ Contact-DHGc1TGF.js
   │  │  ├─ Dashboard-BDATE_0S.js
   │  │  ├─ ForgotPassword-D5sfe8eq.js
   │  │  ├─ Home-DI-PhmKg.js
   │  │  ├─ Login-B9zqmW-X.js
   │  │  ├─ NewPassword-C0O6dpXo.js
   │  │  ├─ Order-CXSd4M0Y.js
   │  │  ├─ Orders-nPjKm0XV.js
   │  │  ├─ PageNotFound-Cc1sF1UK.js
   │  │  ├─ PrivacyPolicy-OhTv2fsq.js
   │  │  ├─ ProductDetails-C92b-3lo.js
   │  │  ├─ ProductTile-wqQ2TF4d.js
   │  │  ├─ Profile-C4PQaLdl.js
   │  │  ├─ Register-B5_7mCRo.js
   │  │  ├─ Search-Zvruu06V.js
   │  │  ├─ Users-Don3yHp9.js
   │  │  ├─ Wishlist-CaVGaBtw.js
   │  │  ├─ about-JfLIb8Rv.webp
   │  │  ├─ about2-BK8-yKyz.webp
   │  │  ├─ alert-dialog-D3gt6Wm6.js
   │  │  ├─ appBanner-cYMzvsV1.webp
   │  │  ├─ badge-CDIVGjm3.js
   │  │  ├─ banner1-CUtf7aTz.webp
   │  │  ├─ banner2-DdTVTnMR.webp
   │  │  ├─ banner3-C_L1DM7l.webp
   │  │  ├─ banner4-CHpH5jjg.webp
   │  │  ├─ banner5-CQCLvNFu.webp
   │  │  ├─ card-C5jJkLVL.js
   │  │  ├─ cart-DIoAtBG5.svg
   │  │  ├─ cart-SXS24RqL.js
   │  │  ├─ carttransparent-D3WxIXJY.webp
   │  │  ├─ chevron-left-lZLf_zF4.js
   │  │  ├─ chevron-right-FcI2Fxgu.js
   │  │  ├─ cod-DVVZyIqp.webp
   │  │  ├─ contact-DdBCGZlZ.js
   │  │  ├─ dashboard-BIDQK9Dg.js
   │  │  ├─ dialog-BHTWJ5tM.js
   │  │  ├─ emptyCart-CWzg3ZfX.webp
   │  │  ├─ en-US-D8UQXs-H.js
   │  │  ├─ esewa-DVklyvUr.webp
   │  │  ├─ feed1-DM3mNoMS.webp
   │  │  ├─ feed2-CMp09vt6.webp
   │  │  ├─ feed3-C-bp25T9.webp
   │  │  ├─ feed4-DjOyxyRY.webp
   │  │  ├─ feed5-D5CF5m45.webp
   │  │  ├─ feed6-nVXm3W5W.webp
   │  │  ├─ form-BD7UqhnD.js
   │  │  ├─ format-DX3nmTRq.js
   │  │  ├─ hero-BGsnVHaV.webp
   │  │  ├─ hero1-xHIdiyP9.webp
   │  │  ├─ hero2-C9eDVu-P.webp
   │  │  ├─ hero3-m-rnBwfB.webp
   │  │  ├─ hero4-DaqaD6r8.webp
   │  │  ├─ icon-small-DR6P0I1Y.png
   │  │  ├─ iconBase-Xx60jysZ.js
   │  │  ├─ index-BdQq_4o_.js
   │  │  ├─ index-BfyTjZOl.js
   │  │  ├─ index-CcHvRQoA.js
   │  │  ├─ index-Kwrw7szZ.css
   │  │  ├─ index.esm-B8pw0gLX.js
   │  │  ├─ input-utGfDaUk.js
   │  │  ├─ label-DCwyIPY2.js
   │  │  ├─ loader-circle-IrYuC8T3.js
   │  │  ├─ logo-DK9Sf1jg.webp
   │  │  ├─ maskEmail-CLOFojmK.js
   │  │  ├─ pencil-CexBQ8T5.js
   │  │  ├─ plus-DGdPMp0n.js
   │  │  ├─ product-C0b3mV4Q.js
   │  │  ├─ qrcode-CMpVUin7.svg
   │  │  ├─ scroll-area-BEOb05KU.js
   │  │  ├─ select-4zyjuqj_.js
   │  │  ├─ skeleton-C1iI35bt.js
   │  │  ├─ star-DPg5VbyR.js
   │  │  ├─ stripe-BZhlhl3O.webp
   │  │  ├─ table-Cst5uOLV.js
   │  │  ├─ testimonial1-hZmocdhZ.webp
   │  │  ├─ testimonial2-HWty2s4M.webp
   │  │  ├─ testimonial3-YBSmez7b.webp
   │  │  ├─ testimonial4-ZVuUam1w.webp
   │  │  ├─ testimonial5-Dv2z2--w.webp
   │  │  ├─ textarea-CtO2ufc1.js
   │  │  ├─ truck-CyQFE_wq.js
   │  │  ├─ useQuery-IEbagxAm.js
   │  │  ├─ user-BlrrtB0R.js
   │  │  └─ wishlist-DCwrGHJ4.js
   │  └─ index.html
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
   │  │  ├─ checkout
   │  │  │  └─ CheckoutDialog.tsx
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
   │  │  │  ├─ OrderCardSkeleton.tsx
   │  │  │  ├─ PasswordForm.tsx
   │  │  │  ├─ UserDetailsForm.tsx
   │  │  │  └─ UserOrderHistory.tsx
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
   │  │  │  ├─ radio-group.tsx
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
   │  │  ├─ Checkout.tsx
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
   │  │  ├─ Order.ts
   │  │  ├─ analytics.ts
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
   │  │  ├─ cart.ts
   │  │  ├─ contact.ts
   │  │  ├─ dashboard.ts
   │  │  ├─ filter.ts
   │  │  ├─ order.ts
   │  │  ├─ orderAdmin.ts
   │  │  ├─ product.ts
   │  │  ├─ review.ts
   │  │  ├─ user.ts
   │  │  └─ wishlist.ts
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

## 🧪 Development Scripts

### Backend

```bash
npm start          # Development with nodemon
npm run start:prod # Production mode
```

### Frontend

```bash
npm run dev        # Development server
npm run devExpose  # Dev server with network access
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint checking
```

## 🔒 Security Features

- **JWT Authentication & cookies** with secure token management
- **Password Hashing** using bcryptjs
- **Rate Limiting** to prevent API abuse
- **CORS Configuration** for cross-origin requests
- **Input Validation** and sanitization
- **Protected Routes** with role-based access
- **Secure File Upload** with type validation

## 📱 Responsive Design

- **Mobile First** approach with breakpoints:
  - Mobile: 320px+
  - Tablet: 768px+
  - Desktop: 1024px+
  - Large Desktop: 1280px+

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add some amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint configuration
- Write meaningful commit messages
- Test responsive design
- Add proper error handling

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Naresh Rajbanshi** - Computer Engineering Student

---

## 🚀 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal/esewa)
- [ ] Real-time notifications
- [ ] Progressive Web App (PWA)
- [ ] Advanced search with filters
- [ ] Multi-language support
- [ ] Social media login
- [ ] Live chat support
- [ ] Inventory management
- [ ] Coupon/discount system
- [ ] Advanced analytics dashboard

## 📈 Performance Metrics

- **Frontend**: Built with Vite for fast HMR
- **Backend**: Optimized with proper indexing
- **Database**: MongoDB aggregation pipelines
- **Images**: Sharp processing for optimization
- **Caching**: React Query for client-side caching
- **Code Splitting**: Lazy loading for reduced bundle size

---

_Built with ❤️ for Computer Engineering 5th Semester Project_
