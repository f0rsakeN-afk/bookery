# SnapKart Backend API

[![Node.js](https://img.shields.io/badge/Node.js-16.x+-green.svg)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.1.0-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.15.0-green.svg)](https://mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC)

A robust e-commerce backend API built with Node.js, Express.js, and MongoDB. This API provides comprehensive functionality for managing products, users, orders, cart, wishlist, reviews, and contact messages.

## 🚀 Features

- **User Authentication & Authorization** - JWT-based authentication with role-based access control
- **Product Management** - Full CRUD operations for products with image upload
- **Shopping Cart** - Add, update, and remove items from cart
- **Wishlist** - Save products for later purchase
- **Order Management** - Complete order processing with status tracking
- **Review System** - Product reviews and ratings
- **Contact System** - Customer inquiry management
- **Admin Dashboard** - Analytics and user management
- **Security** - Rate limiting, CORS, password hashing
- **File Upload** - Image processing with Sharp

## 🛠 Tech Stack

- **Runtime**: Node.js 16.x+
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcryptjs
- **File Upload**: Multer with Sharp for image processing
- **Email**: Nodemailer
- **Security**: CORS, Express Rate Limit, Cookie Parser
- **Development**: Nodemon, Morgan (logging)

## 📦 Dependencies

```json
{
  "bcryptjs": "^3.0.2",
  "body-parser": "^2.2.0",
  "cookie-parser": "^1.4.7",
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "express": "^5.1.0",
  "express-rate-limit": "^7.5.0",
  "jsonwebtoken": "^9.0.2",
  "mongodb": "^6.15.0",
  "mongoose": "^8.13.2",
  "morgan": "^1.10.0",
  "multer": "^2.0.1",
  "nodemailer": "^7.0.3",
  "sharp": "^0.34.2"
}
```

## 🚦 Getting Started

### Prerequisites

- Node.js 16.x or higher
- MongoDB database
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/f0rsakeN-afk/snapkart
cd snapkart/backend
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
touch .env.example .env
```

4. Configure your `.env` file:

```env
NODE_ENV=development
PORT=3000
DATABASE_URI=mongodb://localhost:27017/snapkart
JWT_SECRET=your-jwt-secret
JWT_EXPIRES_IN=90d
EMAIL_USERNAME=your-email
EMAIL_PASSWORD=your-password
```

5. Start the development server

```bash
npm start
```

## 📚 API Documentation

### Base URL

```
http://localhost:3000/api/v1
```

### Authentication

All protected routes require a valid JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## 🔐 User Routes

### Authentication

| Method  | Endpoint                    | Description               | Access |
| ------- | --------------------------- | ------------------------- | ------ |
| `POST`  | `/users/register`           | Register new user         | Public |
| `POST`  | `/users/login`              | User login                | Public |
| `POST`  | `/users/logout`             | User logout               | Public |
| `POST`  | `/users/forgetpassword`     | Request password reset    | Public |
| `PATCH` | `/users/newpassword/:token` | Reset password with token | Public |

### User Management

| Method  | Endpoint                    | Description              | Access    |
| ------- | --------------------------- | ------------------------ | --------- |
| `GET`   | `/users/me`                 | Get current user profile | Protected |
| `GET`   | `/users/:id`                | Get user details         | Protected |
| `GET`   | `/users/`                   | Get all users            | Admin     |
| `PATCH` | `/users/updatepassword/:id` | Update user password     | Protected |
| `PATCH` | `/users/updateme/:id`       | Update user profile      | Protected |

## 🛍️ Product Routes

| Method   | Endpoint          | Description       | Access    |
| -------- | ----------------- | ----------------- | --------- |
| `POST`   | `/product/`       | Add new product   | Admin     |
| `GET`    | `/product/`       | Get all products  | Protected |
| `GET`    | `/product/search` | Search products   | Protected |
| `GET`    | `/product/:id`    | Get product by ID | Protected |
| `DELETE` | `/product/:id`    | Delete product    | Admin     |

### Product Features

- Image upload with automatic resizing
- Product search functionality
- Category and price filtering

## 🛒 Cart Routes

| Method   | Endpoint           | Description               | Access |
| -------- | ------------------ | ------------------------- | ------ |
| `GET`    | `/cart/`           | Get user's cart           | User   |
| `POST`   | `/cart/`           | Add item to cart          | User   |
| `PATCH`  | `/cart/:productId` | Update cart item quantity | User   |
| `DELETE` | `/cart/:productId` | Remove item from cart     | User   |

## ❤️ Wishlist Routes

| Method   | Endpoint               | Description               | Access |
| -------- | ---------------------- | ------------------------- | ------ |
| `GET`    | `/wishlist/`           | Get user's wishlist       | User   |
| `POST`   | `/wishlist/`           | Add item to wishlist      | User   |
| `DELETE` | `/wishlist/:productId` | Remove item from wishlist | User   |

## 📦 Order Routes

| Method  | Endpoint            | Description         | Access |
| ------- | ------------------- | ------------------- | ------ |
| `POST`  | `/orders/`          | Create new order    | User   |
| `GET`   | `/orders/myorders`  | Get user's orders   | User   |
| `GET`   | `/orders/`          | Get all orders      | Admin  |
| `GET`   | `/orders/analytics` | Get order analytics | Admin  |
| `PATCH` | `/orders/:orderId`  | Update order status | Admin  |

## ⭐ Review Routes

| Method   | Endpoint      | Description           | Access |
| -------- | ------------- | --------------------- | ------ |
| `POST`   | `/review/`    | Create product review | User   |
| `GET`    | `/review/`    | Get all reviews       | Admin  |
| `PATCH`  | `/review/:id` | Update review         | User   |
| `DELETE` | `/review/:id` | Delete review         | User   |

## 📞 Contact Routes

| Method   | Endpoint       | Description            | Access |
| -------- | -------------- | ---------------------- | ------ |
| `POST`   | `/contact/`    | Send contact message   | User   |
| `GET`    | `/contact/`    | Get all messages       | Admin  |
| `DELETE` | `/contact/:id` | Delete contact message | Admin  |

## 🔒 Security Features

### Rate Limiting

```javascript
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});
```

### CORS Configuration

```javascript
app.use(
  cors({
    origin: ["http://localhost:5173", "https://yourfrontend.com"],
    credentials: true,
  })
);
```

### Authentication Middleware

- JWT token verification
- Role-based access control (User/Admin)
- Password hashing with bcryptjs
<!--

## 📱 Response Format

### Success Response

```json
{
  "status": "success",
  "data": {
    // Response data
  }
}
```

### Error Response

```json
{
  "status": "error",
  "message": "Error description",
  "error": {
    // Error details
  }
} -->
```

## 🚀 Deployment

### Environment Variables for Production

```env
NODE_ENV=production
PORT=3000
DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/snapkart
JWT_SECRET=your-super-secure-jwt-secret
JWT_EXPIRES_IN=90d
```

### Start Production Server

```bash
npm run start:prod
```

## 🧪 Development

### Available Scripts

- `npm start` - Start development server with nodemon
- `npm run start:prod` - Start production server
- `npm test` - Run tests (currently not implemented)

### Development Tools

- **Nodemon** for automatic server restart
- **Morgan** for HTTP request logging
- **Body Parser** for parsing request bodies
- **Cookie Parser** for handling cookies

## 📊 API Analytics

The API provides comprehensive analytics for administrators:

- Order statistics
- User registration metrics
- Product performance
- Revenue tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Naresh Rajbanshi**

---

### API Status Codes

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error
