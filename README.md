# 🛍️ MELIOVA Online Shop

**Beautiful, just as you are.** - A modern, full-stack e-commerce platform for cosmetics and beauty products.

![MELIOVA Logo](https://img.shields.io/badge/MELIOVA-Beautiful%2C%20just%20as%20you%20are-6b8e23?style=for-the-badge)

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Architecture](#-architecture)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [API Documentation](#-api-documentation)
- [Deployment](#-deployment)
- [Contributing](#-contributing)

## 🌟 Overview

MELIOVA is a comprehensive e-commerce solution designed specifically for beauty and cosmetics products. The platform provides a seamless shopping experience with modern UI/UX design, robust backend services, and scalable architecture.

### Key Highlights

- **Modern React Frontend** with responsive design
- **Spring Boot Backend** with RESTful APIs
- **MongoDB Database** for flexible data storage
- **Docker Containerization** for easy deployment
- **Real Product Catalog** with categories: Makeup, Skin Care, Hair Care, and Health
- **Shopping Cart & Checkout** with order management
- **Search & Filter** functionality

## ✨ Features

### 🛒 E-Commerce Features

- **Product Catalog** - Browse products by categories
- **Product Details** - Detailed product information with images
- **Search Functionality** - Find products by name, brand, or description
- **Shopping Cart** - Add/remove items with quantity management
- **Checkout Process** - Complete order placement with customer details
- **Order Success Page** - Order confirmation with unique ID

### 🎨 UI/UX Features

- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern Interface** - Clean, professional design
- **Product Images** - High-quality product photography
- **Interactive Elements** - Smooth animations and hover effects
- **Brand Consistency** - Cohesive color scheme (#6b8e23 green theme)

### 🔧 Technical Features

- **RESTful API** - Well-structured backend endpoints
- **Data Seeding** - Automatic database population
- **CORS Support** - Cross-origin resource sharing
- **Error Handling** - Comprehensive error management
- **Docker Ready** - Containerized deployment

## 🏗️ Architecture

### System Architecture

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐    MongoDB    ┌─────────────────┐
│                 │   ◄─────────►   │                 │  ◄─────────►  │                 │
│   React Frontend│                 │ Spring Boot API │               │ MongoDB Database│
│   (Port: 5173)  │                 │  (Port: 8081)   │               │  (Port: 27017)  │
└─────────────────┘                 └─────────────────┘               └─────────────────┘
         │                                   │                                 │
         │                                   │                                 │
    ┌─────────┐                         ┌─────────┐                     ┌─────────┐
    │  Vite   │                         │  Gradle │                     │  Docker │
    │ Dev     │                         │  Build  │                     │ Volume  │
    │ Server  │                         │  System │                     │ Storage │
    └─────────┘                         └─────────┘                     └─────────┘
```

### Component Architecture

#### Frontend (React)

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation & search
│   └── ProductCard.jsx # Product display card
├── pages/              # Page components
│   ├── Home.jsx       # Product catalog
│   ├── ProductDetail.jsx # Single product view
│   ├── Cart.jsx       # Shopping cart
│   ├── Checkout.jsx   # Order placement
│   └── Success.jsx    # Order confirmation
├── context/           # State management
│   └── CartContext.jsx # Shopping cart state
└── api/               # Backend communication
    └── client.js      # API calls
```

#### Backend (Spring Boot)

```
src/main/java/com/meliova/
├── api/                    # REST Controllers & DTOs
│   ├── ApiController.java # Product endpoints
│   ├── OrdersController.java # Order management
│   └── ProductDto.java    # Data transfer objects
├── config/                # Configuration
│   └── CorsConfig.java   # CORS settings
├── product/              # Product domain
│   ├── ProductDocument.java # MongoDB entity
│   ├── ProductRepo.java    # Data repository
│   └── ProductService.java # Business logic
├── order/               # Order domain
│   ├── OrderDocument.java # Order entity
│   ├── OrderRepo.java    # Order repository
│   └── OrderService.java # Order processing
└── seed/               # Data initialization
    └── DataSeeder.java # Database seeding
```

## 🛠️ Technology Stack

### Frontend

- **React 19.1.1** - Modern UI library
- **React Router DOM 7.9.1** - Client-side routing
- **Vite 7.1.0** - Fast build tool and dev server
- **CSS Modules** - Scoped styling
- **ESLint** - Code quality and formatting

### Backend

- **Java 21** - Latest LTS Java version
- **Spring Boot 3.3.2** - Application framework
- **Spring Data MongoDB** - Database integration
- **Spring Web** - RESTful web services
- **Spring Validation** - Request validation
- **SpringDoc OpenAPI** - API documentation (Swagger)
- **Gradle** - Build automation

### Database

- **MongoDB 7** - NoSQL document database
- **Docker Volume** - Data persistence

### DevOps

- **Docker & Docker Compose** - Containerization
- **Multi-stage Dockerfile** - Optimized builds
- **GitHub** - Version control

## 📁 Project Structure

```
MELIOVA-Online-Shop/
├── README.md                    # This file
├── docker-compose.yml           # Docker services configuration
├── docker/
│   └── backend/
│       └── Dockerfile          # Backend container definition
├── shop/
│   ├── front/                  # React frontend application
│   │   ├── package.json        # Frontend dependencies
│   │   ├── vite.config.js      # Vite configuration
│   │   ├── index.html          # Main HTML file
│   │   ├── src/                # Source code
│   │   │   ├── components/     # Reusable components
│   │   │   ├── pages/          # Page components
│   │   │   ├── context/        # React context
│   │   │   ├── api/            # API client
│   │   │   ├── App.jsx         # Main app component
│   │   │   ├── main.jsx        # App entry point
│   │   │   └── index.css       # Global styles
│   │   └── public/
│   │       └── img/            # Product images
│   └── backend/                # Spring Boot backend
│       ├── build.gradle        # Build configuration
│       ├── src/main/
│       │   ├── java/           # Java source code
│       │   └── resources/
│       │       ├── application.properties
│       │       └── data/
│       │           └── products.json # Product data
│       └── build/              # Build artifacts
└── .gitignore                  # Git ignore rules
```

## 🚀 Getting Started

### Prerequisites

- **Docker & Docker Compose** - For containerized development
- **Git** - For version control
- **Node.js 22+** (optional, for local frontend development)
- **Java 21+** (optional, for local backend development)

### Quick Start with Docker (Recommended)

1. **Clone the repository**

   ```bash
   git clone https://github.com/asalghabeljoo/meliova-online-shop.git
   cd meliova-online-shop
   ```

2. **Start all services**

   ```bash
   docker compose up -d --build
   ```

3. **Access the application**

   - **Frontend**: http://localhost:5173
   - **Backend API**: http://localhost:8081
   - **API Documentation**: http://localhost:8081/swagger-ui.html

4. **Stop services**
   ```bash
   docker compose down
   ```

### Verify Installation

- Visit http://localhost:5173 to see the MELIOVA shop
- Check that product images are loading
- Test the shopping cart functionality
- Try the search feature

## 💻 Development

### Local Frontend Development

```bash
cd shop/front
npm install
npm run dev
```

The frontend will be available at http://localhost:5173 with hot reload.

### Local Backend Development

```bash
cd shop/backend
./gradlew bootRun
```

The backend will be available at http://localhost:8081.

### Database Access

MongoDB runs in a Docker container and uses a persistent volume for data storage.

```bash
# Access MongoDB shell
docker exec -it shop-database-1 mongosh

# View products collection
use shop
db.products.find().pretty()
```

### Adding New Products

1. Edit `shop/backend/src/main/resources/data/products.json`
2. Add product images to `shop/front/public/img/`
3. Restart backend to reload data:
   ```bash
   docker compose restart server
   ```

### Code Quality

```bash
# Frontend linting
cd shop/front
npm run lint

# Backend build and test
cd shop/backend
./gradlew build
```

## 📚 API Documentation

### Available Endpoints

| Method | Endpoint             | Description                               |
| ------ | -------------------- | ----------------------------------------- |
| GET    | `/api/products`      | Get paginated products with search/filter |
| GET    | `/api/products/{id}` | Get single product by ID                  |
| GET    | `/api/categories`    | Get all product categories                |
| POST   | `/api/orders`        | Create new order                          |

### Example API Calls

```bash
# Get all products
curl http://localhost:8081/api/products

# Search products
curl "http://localhost:8081/api/products?q=mascara"

# Filter by category
curl "http://localhost:8081/api/products?category=Makeup"

# Get single product
curl http://localhost:8081/api/products/MU-LIP-RED01

# Create order
curl -X POST http://localhost:8081/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "address": "123 Main St",
    "currency": "EUR",
    "items": [{"sku": "MU-LIP-RED01", "name": "Velvet Lipstick", "price": 18.90, "qty": 1}]
  }'
```

### Swagger UI

Visit http://localhost:8081/swagger-ui.html for interactive API documentation.

## 🌐 Deployment

### Production Deployment

1. **Set up your server**

   ```bash
   ssh -i "~/.ssh/id_rsa" ubuntu@your-server-ip
   ```

2. **Clone and deploy**

   ```bash
   git clone https://github.com/asalghabeljoo/meliova-online-shop.git
   cd meliova-online-shop
   docker compose up -d --build
   ```

3. **Configure CORS** (if needed)
   Edit `shop/backend/src/main/java/com/meliova/config/CorsConfig.java`:
   ```java
   .allowedOrigins("http://localhost:5173", "http://your-server-ip:5173")
   ```

### Environment Variables

For production, consider setting:

```bash
# Backend (application.properties)
MONGODB_URI=mongodb://database:27017/shop
SERVER_PORT=8081

# Frontend (for build)
VITE_API_URL=http://your-server-ip:8081
```

### SSL/HTTPS Setup

For production, set up a reverse proxy (nginx) with SSL certificates.

## 🤝 Contributing

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Test locally**
   ```bash
   docker compose up -d --build
   ```
5. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
6. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Code Style

- **Frontend**: Follow React best practices, use CSS Modules
- **Backend**: Follow Spring Boot conventions, use proper REST principles
- **Commits**: Use conventional commit messages

### Testing

```bash
# Backend tests
cd shop/backend
./gradlew test

# Frontend linting
cd shop/front
npm run lint
```

## 📝 License

This project is private and proprietary to MELIOVA.

## 👥 Team

- **Developer**: [Your Name]
- **Repository**: https://github.com/asalghabeljoo/meliova-online-shop

## 🐛 Issues & Support

For issues and feature requests, please create an issue in the GitHub repository.

---

**MELIOVA - Beautiful, just as you are.** ✨
