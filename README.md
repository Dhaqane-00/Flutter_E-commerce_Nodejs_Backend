# Flutter E-commerce Backend

## 🚀 Overview

A robust and scalable backend service built for a Flutter e-commerce application. This project implements a RESTful API using Node.js, Express, and MongoDB, featuring comprehensive user authentication, product management, order processing, and payment integration.

## ✨ Key Features

- 🔐 Secure Authentication & Authorization
- 📦 Product & Category Management
- 🛒 Shopping Cart Operations
- 💳 Payment Integration (EVC & Cash)
- 📱 OTP Verification System
- 📄 Swagger API Documentation
- 🖼️ File Upload Support
- 🔄 Order Management System

## 🛠️ Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT & bcrypt
- **Documentation**: Swagger/OpenAPI
- **File Upload**: Multer
- **Email Service**: Nodemailer
- **Payment Processing**: WaafiPay Integration

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Dhaqane-00/FlutterBackend.git
```
```bash
cd FlutterBackend
```
npm install

3. Configure environment variables:
Create a `.env` file in the root directory with the following variables:

```env
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
IMAGE_URL=your_image_base_url
MERCHANT_URL=your_waafi_merchant_url
```

4. Start the development server:
```bash
npm start
```

## 📚 API Documentation

The API documentation is available through Swagger UI at:

http://localhost:5000/api-docs


### Main API Endpoints

- **Authentication**
  - POST `/api/user/register` - User registration
  - POST `/api/user/login` - User login
  - POST `/api/user/OTPVerification` - Verify OTP

- **Products**
  - GET `/api/product/getAllProducts` - Get all products
  - POST `/api/product/createProduct` - Create new product (Admin)
  - PUT `/api/product/updateProduct/:id` - Update product
  - DELETE `/api/product/deleteProduct/:id` - Delete product

- **Orders**
  - POST `/api/order/createOrder` - Create new order
  - GET `/api/order/getOrders` - Get all orders
  - GET `/api/order/getUserOrder/:id` - Get user specific orders

## 🔒 Security Features

- Password Hashing (bcrypt)
- JWT Authentication
- MongoDB Sanitization
- Request Rate Limiting
- Role-based Access Control

## 🏗️ Project Structure

flutter_backend/
├── src/
│ ├── Controllers/ # Business logic
│ ├── Models/ # Database schemas
│ ├── Routers/ # Route definitions
│ ├── utils/ # Helper functions
│ └── Main.js # App configuration
├── public/ # Static files
└── server.js # Entry point


## 🔧 Development

### Running Tests

```bash
npm test
```


### Code Style
The project follows standard JavaScript conventions and uses ESLint for code quality.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Dhaqane** - *Initial work* - [Dhaqane-00](https://github.com/Dhaqane-00)

## 🙏 Acknowledgments

- Express.js community
- MongoDB team
- All contributors who helped shape this project

## 📞 Support

For support, email [contact information] or create an issue in the repository.

This README provides a comprehensive overview of the project, its features, setup instructions, and contribution guidelines. It's structured to help both new developers get started quickly and experienced developers understand the project's architecture and capabilities.