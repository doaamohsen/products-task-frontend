# Products task pp Angular Frontend

This is a complete Angular 15+ application built with Bootstrap 5 for ProductsApp. It connects to AWS Lambda backend services for authentication, products, shopping cart, and address management.

---

## 📦 Project Structure

- Authentication (Login, Register)
- Product listing
- Shopping Cart (Add, Remove, View)
- Address Management (CRUD)
- JWT Authorization via Interceptor
- Responsive layout with Bootstrap 5

---
## 📦 Project Structure

trustapp-angular/
├── src/
│   ├── app/
│   │   ├── components/          # UI Components (home, cart, address, auth)
│   │   ├── services/            # AuthService, ProductService, CartService, AddressService
│   │   ├── interceptors/        # AuthInterceptor (adds JWT token)
│   │   ├── models/              # Interfaces for User, Product, CartItem, Address
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
|   |── environments/
│   |   ├── environment.ts           # <— Replace with your API_BASE
|   └── index.html




## 🧩 Prerequisites (Install First)

- [Node.js](https://nodejs.org/) (v18.x preferred)
- [Angular CLI](https://angular.io/cli)

## 🔧 Setup Instructions

1. **Clone the repository or download ZIP**
2. **Install dependencies**

```bash
npm install -g @angular/cli

cd product-task-app-angular/

npm install

ng serve --configuration development