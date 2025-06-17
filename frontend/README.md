# SnapKart Frontend

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.3.1-purple.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.4-blue.svg)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A modern, responsive e-commerce frontend built with React 19, TypeScript, and Vite. This application provides a seamless shopping experience with advanced features like real-time cart management, wishlist functionality, and comprehensive admin dashboard.

## 🚀 Features

### **User Features**

- **Authentication System** - Secure login/register with JWT tokens
- **Product Catalog** - Browse and search products with advanced filtering
- **Shopping Cart** - Real-time cart management with persistent state
- **Wishlist** - Save favorite products for later
- **Product Reviews** - Rate and review products
- **Order Management** - Track order history and status
- **User Profile** - Manage personal information and preferences
- **Password Recovery** - Secure password reset functionality
- **Responsive Design** - Mobile-first approach with seamless UX

### **Admin Features**

- **Admin Dashboard** - Comprehensive overview with analytics
- **Product Management** - CRUD operations for products
- **Order Management** - Process and update order statuses
- **User Management** - View and manage user accounts
- **Analytics** - Sales and performance metrics
- **Contact Management** - Handle customer inquiries

### **Technical Features**

- **Modern React 19** - Latest React features with concurrent rendering
- **TypeScript** - Full type safety and better developer experience
- **React Query** - Advanced data fetching and caching
- **React Router** - Client-side routing with protected routes
- **Form Management** - React Hook Form with validation
- **UI Components** - Radix UI primitives with custom styling
- **Animations** - Smooth animations with Motion
- **Dark/Light Theme** - Theme switching
- **Code Splitting** - Lazy loading for optimal performance

## 🛠 Tech Stack

### **Core**

- **React** 19.0.0 - Modern UI library
- **TypeScript** 5.7.2 - Type-safe JavaScript
- **Vite** 6.3.1 - Fast build tool and dev server

### **Styling & UI**

- **TailwindCSS** 4.1.4 - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI primitives
- **Lucide React** - Beautiful SVG icons
- **React Icons** - Popular icon libraries
- **Class Variance Authority** - Component variant management
- **clsx** & **tailwind-merge** - Conditional styling utilities

### **State Management & Data Fetching**

- **TanStack React Query** 5.74.4 - Server state management
- **React Context** - Global state management
- **Axios** 1.8.4 - HTTP client for API calls

### **Routing & Navigation**

- **React Router DOM** 7.5.1 - Client-side routing
- **Protected Routes** - Authentication-based routing

### **Forms & Validation**

- **React Hook Form** 7.56.4 - Performant form library
- **Hookform Resolvers** - Form validation resolvers

### **UI Enhancement**

- **Motion** 12.7.4 - Animation library
<!-- - **DotLottie React** - Lottie animations -->
- **Embla Carousel** - Touch-friendly carousel
- **React Rating** - Star rating component
- **Recharts** - Data visualization charts
- **Sonner** - Beautiful toast notifications
- **date-fns** - Date utility library

### **Development Tools**

- **ESLint** - Code linting and formatting
- **TypeScript ESLint** - TypeScript-specific linting
- **Vite Plugin React SWC** - Fast refresh with SWC

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Backend API running (see backend README)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/f0rsakeN-afk/snapkart
cd snapkart/frontend
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

```bash
touch .env
```

4. **Configure your `.env` file:**

```env
VITE_BACKEND_URL=http://localhost:3000/api/v1
```

5. **Start the development server**

```bash
npm run dev
```

6. **Open your browser**

```
http://localhost:5173
```

## 📱 Available Routes

### **Public Routes**

- `/` - Home page with featured products
- `/about` - About us page
- `/contact` - Contact form
- `/privacypolicy` - Privacy policy
- `/login` - User login
- `/register` - User registration
- `/forgotpassword` - Password recovery
- `/newpassword/:token` - Reset password

### **Protected Routes (Authenticated Users)**

- `/search` - Product search
- `/productdetails/:id` - Product details
- `/allproducts` - All products listing
- `/profile` - User profile management

### **User-Only Routes**

- `/cart` - Shopping cart
- `/wishlist` - User wishlist

### **Admin-Only Routes**

- `/dashboard` - Admin dashboard
- `/order` - Order management
- `/analytics` - Sales analytics
- `/users` - User management

## 🔐 Authentication & Route Protection

The application implements comprehensive route protection:

- **PublicRoute** - Only accessible when not authenticated
- **ProtectedRoute** - Requires authentication
- **UserOnlyRoute** - Restricted to user role
- **AdminRoute** - Restricted to admin role

## 🎨 Styling & Theming

### **TailwindCSS Configuration**

- Custom color scheme
- Responsive breakpoints
- Component utilities
- Dark/light theme support

### **Component Variants**

Using Class Variance Authority for consistent component styling:

## 📊 State Management

### **React Query for Server State**

- Automatic caching and background updates
- Optimistic updates
- Error handling
- Loading states

````

### **Context API for Global State**

- Authentication state
- Theme preferences
- User information

## 🔧 Development Scripts

```bash
# Start development server
npm run dev

# Start development server with network access
npm run devExpose

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
````

## 🚀 Performance Optimizations

### **Code Splitting**

- Lazy loading of all page components
- Reduced initial bundle size
- Faster time to interactive

### **React Query Optimizations**

- Intelligent caching strategies
- Background refetching
- Stale-while-revalidate pattern

### **Image Optimization**

- Responsive images
- Lazy loading
- WebP format support

## 🧪 Building for Production

### **Build Process**

```bash
# Type checking and building
npm run build

# Preview the production build
npm run preview
```

### **Environment Variables for Production**

```env
VITE_BACKEND_URL=https://your-api-domain.com/api/v1
```

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile** (320px+) - Optimized for phones
- **Tablet** (768px+) - Enhanced tablet experience
- **Desktop** (1024px+) - Full desktop functionality
- **Large Desktop** (1280px+) - Expanded layouts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Development Guidelines**

- Follow TypeScript best practices
- Use ESLint configuration
- Write meaningful commit messages
- Add proper type definitions
- Test responsive design

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Naresh Rajbanshi**

---

## 🔧 Troubleshooting

### **Common Issues**

1. **Port already in use**

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

2. **Node modules issues**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

3. **TypeScript errors**

```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### **Development Tips**

- Use React Developer Tools for debugging
- Enable React Query DevTools in development
- Check network tab for API calls
- Use browser console for error tracking

