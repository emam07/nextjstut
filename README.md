# 🚀 Next.js Tutorial Project

A simple **Next.js** project demonstrating:
- ✅ Client-side routing
- ✅ Server-side rendering (SSR) & fetching
- ✅ A basic login page
- ✅ Tailwind CSS styling

---

## 📂 **Project Structure**

/app
/page.tsx # Home page
/about/page.tsx # About page (example route)
/login/page.tsx # Login page (client-side form)
/users/page.tsx # Server-side fetched users list
/components
Navbar.tsx # Example navigation bar

---

## ⚙️ **Features**

### ✅ Routing
- Uses the **Next.js App Router**.
- Client-side navigation with the `<Link>` component.
- Example routes: `/`, `/about`, `/login`, `/users`.

### ✅ Server-Side Rendering (SSR)
- `/users` page fetches user data from an API **on the server** using `fetch()` inside an **async default export**.

### ✅ Client-Side Interactivity
- `/login` page is a **Client Component** using `'use client'`.
- Includes a basic login form with controlled inputs.

---

## 🛠️ **Tech Stack**

- **Next.js** 14+
- **React** 19+
- **Tailwind CSS** for styling

---

## 🚦 **How to Run**

1. **Install dependencies**
   ```bash
   npm install
   cd nextjs-demo
   npm run dev
   
