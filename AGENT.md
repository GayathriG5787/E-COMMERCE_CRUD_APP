# AGENT.md

You are an expert Full Stack Next.js engineer helping build a production-quality E-commerce CRUD application.

You write clean, maintainable, scalable code.

You prioritize:

* readability
* simplicity
* reusable components
* clean architecture
* industry best practices

Always prefer simple and understandable solutions over unnecessary abstractions.

---

# Project Overview

We are building a Full Stack E-commerce application for managing clothes.

There are two roles:

## Admin

Admin can:

* Create products
* Update products
* Delete products
* View all products
* View registered users

## User

User can:

* Register/Login
* Browse products
* View product details
* Add products to cart
* Remove products from cart
* View cart

---

# Technology Stack

Frontend + Backend:

* Next.js 15 (App Router)
* TypeScript

UI:

* Tailwind CSS
* Shadcn UI

State Management:

* Redux Toolkit

Forms:

* React Hook Form
* Zod

Database:

* MongoDB Atlas
* Mongoose

Authentication:

* JWT
* bcryptjs

API:

* Next.js API Routes

HTTP Client:

* Axios

Deployment:

* Vercel

---

# Development Philosophy

Build feature by feature.

For every feature:

1. Understand the requirement.
2. Keep implementation simple.
3. Prefer reusable code.
4. Avoid overengineering.
5. Use server components where possible.
6. Use client components only when required.
7. Write readable code.
8. Maintain proper folder structure.

---

# Important Rules

DO NOT USE:

* Express.js
* Multer
* Jest
* Unnecessary libraries

Images should be stored as:

```ts
image:
"https://..."
```

Store image URLs directly in MongoDB.

---

# Architecture

Use this structure:

```txt
src/

app/

(api)

(auth)

(admin)

(products)

(cart)

components/

components/ui/

lib/

models/

store/

schemas/

hooks/

utils/

middleware.ts
```

---

# App Structure

```txt
app/

login/

register/

products/

[id]/

cart/

admin/

dashboard/

products/

users/

api/
```

---

# API Routes

Authentication

```txt
POST /api/auth/register

POST /api/auth/login
```

Products

```txt
GET /api/products

GET /api/products/:id

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id
```

Users

```txt
GET /api/users
```

Cart

```txt
GET /api/cart

POST /api/cart

DELETE /api/cart/:productId
```

---

# Database Models

## User

```ts
{
 name:string,

 email:string,

 password:string,

 role:"admin" | "user",

 createdAt:Date
}
```

---

## Product

```ts
{
 title:string,

 description:string,

 price:number,

 discount:number,

 clothType:string,

 brand:string,

 size:string,

 color:string,

 stock:number,

 image:string,

 createdAt,

 updatedAt
}
```

---

## Cart

```ts
{
 user:ObjectId,

 items:[

 {

 product:ObjectId,

 quantity:number

 }

 ]
}
```

---

# Authentication Rules

Use:

* JWT
* bcryptjs

Store:

```txt
token
```

inside:

```txt
httpOnly cookie
```

Never store passwords in plain text.

Always hash passwords.

---

# Validation Rules

Use:

* React Hook Form
* Zod

Validate:

Register:

```txt
name

email

password
```

Product:

```txt
title

price

discount

clothType

stock

image
```

Show proper validation messages.

---

# State Management

Use Redux Toolkit.

Create:

```txt
authSlice

productSlice

cartSlice
```

Each slice:

```txt
loading

error

data
```

---

# UI Rules

Use:

Tailwind CSS

*

Shadcn UI

---

Use Shadcn for:

* Button
* Input
* Card
* Dialog
* Form
* Table
* Sheet
* Dropdown Menu

---

Use Tailwind for:

* Layout
* Product Grid
* Hero Section
* Navbar
* Footer
* Dashboard Layout

---

# Mobile First

The app MUST be:

* Mobile responsive
* Tablet responsive
* Desktop responsive

Follow:

```txt
mobile

→ tablet

→ desktop
```

---

# Product Card UI

Each product card should contain:

* Product Image

* Title

* Price

* Discount

* Cloth Type

* Add to Cart button

Use:

Shadcn Card

and

Shadcn Button

---

# Admin Dashboard

Admin Dashboard should contain:

Statistics:

* Total Users

* Total Products

* Total Cart Items

---

Product Management:

* Search

* Add Product

* Edit Product

* Delete Product

---

User Management:

Display:

* Name

* Email

* Role

* Created Date

---

# Error Handling

Always use:

```ts
try{

}catch(error){

}
```

Return:

```json
{
"success":false,
"message":"Error message"
}
```

Use proper status codes:

```txt
200

201

400

401

403

404

500
```

---

# MongoDB Rules

Use:

```ts
lib/mongodb.ts
```

Single connection pattern.

Avoid reconnecting on every request.

---

# Component Rules

Create reusable components only when:

* Used more than once

OR

* Represents a UI concept

Examples:

```txt
Navbar

ProductCard

ProductForm

CartDrawer

Pagination

SearchBar
```

Do not create tiny one-time components.

---

# Code Quality

Always:

* Use TypeScript

* Avoid any

* Use async/await

* Use descriptive names

* Keep functions small

* Keep API logic separate

* Keep business logic clean

---

# AI Usage

Use AI for:

* Tailwind generation

* API integration assistance

* Error debugging

* Code optimization

Mention AI usage in README.

---

# Deployment

Frontend + Backend:

Deploy on:

Vercel

Database:

MongoDB Atlas

---

# Final Goal

The application should:

✓ JWT Authentication

✓ Admin CRUD

✓ User Cart

✓ Validation

✓ Responsive UI

✓ Clean Architecture

✓ Production Quality Code

✓ Deployment Ready

Always prioritize:

Simple

Readable

Scalable

Maintainable code.


# Additional Guard Rails

## New Feature / Library Rule (VERY IMPORTANT)

DO NOT implement:

* new features
* new libraries
* new architectural patterns
* new design systems
* alternative approaches

without explicit user permission.

If there is a significantly better approach:

1. Explain:

* why it is better
* advantages
* disadvantages
* impact on the current project

2. Ask:

> "This can be implemented with the current stack, but using X would simplify the implementation and improve maintainability. Do you want me to use it?"

Wait for approval.

Never make the decision automatically.

---

# Real-time Features Rule

The assignment includes:

* Socket.io/WebSocket for cart updates
* Product stock alerts

This is a BONUS feature.


If real-time functionality becomes important:

Explain:

* Why it matters
* Why Socket.io is a standard solution
* How it affects architecture

Then ask for permission before implementation.

---

# Version Stability Rule (VERY IMPORTANT)

Always use:

* stable versions
* well-supported packages
* officially recommended versions

Avoid:

* alpha versions
* beta versions
* experimental APIs
* newly released packages

Before using any library:

1. Check compatibility.

2. Ensure:

* Next.js version compatibility
* React version compatibility
* Tailwind version compatibility
* Shadcn compatibility

3. Prefer:

The same ecosystem versions.

Example:

```txt
Next.js 15

React 19

Tailwind CSS 4

Shadcn Latest compatible with Tailwind v4

Redux Toolkit 2.x

React Hook Form 7.x

Zod 4.x

Axios latest stable

MongoDB 6+

Mongoose 8.x

bcryptjs latest stable

Tailwind CSS v4

Shadcn compatible with Tailwind v4

Redux Toolkit latest stable

Mongoose latest stable
```

Avoid mixing incompatible versions.

Prevent:

* peer dependency conflicts

* deprecated APIs

* migration issues

---

# Simplicity Rule

Always prefer:

Simple code

instead of

Smart code.

Prefer:

```ts
if(user){

 return user

}
```

instead of:

```ts
return user?.profile?.settings?.permissions ?? defaultPermissions
```

unless genuinely required.

---

Prefer:

Small functions

Readable logic

Clear variable names

Explicit code

---

Avoid:

* clever abstractions

* deeply nested code

* generic factories

* unnecessary custom hooks

* premature optimization

---

# Architecture Rule

Build the simplest version first.

Then:

Refactor only if:

* code is duplicated

* component is reused

* complexity increases

Never overengineer.

---

# UI Consistency Rule

Maintain a consistent design system.

Always use:

## Colors

Keep colors inside:

```txt
global.css
```

Example:

```css
:root{

--background:

--foreground:

--primary:

--secondary:

--muted:

--destructive:

--border:

--card:

}
```

Never hardcode:

```txt
bg-[#1a1a1a]

text-[#5f5f5f]

border-[#dadada]
```

throughout the project.

---

# Standard Color Palette

Use neutral professional colors:

Background

```txt
#ffffff
```

Foreground

```txt
#09090b
```

Primary

```txt
#18181b
```

Secondary

```txt
#f4f4f5
```

Muted

```txt
#71717a
```

Success

```txt
#22c55e
```

Danger

```txt
#ef4444
```

Border

```txt
#e4e4e7
```

---

# Global CSS Rule

Common styles must live in:

```txt
src/app/globals.css
```

Examples:

Buttons

Containers

Section spacing

Typography

Card shadows

Animations

Colors

Border radius

---

Avoid:

Repeated Tailwind classes everywhere.

If a pattern appears multiple times:

Create:

```css
.btn-primary

.card-container

.section-title

.page-container

.input-field
```

inside:

```txt
globals.css
```

and reuse them.

---

# Design Consistency Rule

The entire application should have:

* consistent spacing

* consistent font sizes

* consistent border radius

* consistent shadows

* consistent button styles

* consistent form styles

* consistent loading states

---

Follow:

One design system

One color palette

One spacing system

One typography system

throughout the project.

---

# Final Principle

Whenever there is a choice:

Choose:

✓ Simplicity

✓ Readability

✓ Stability

✓ Consistency

over

✗ Cleverness

✗ Abstraction

✗ Experimental features

✗ Unnecessary complexity


Before installing any package:

1. Check package compatibility.

2. Explain:

- Why the package is needed
- Alternatives
- Bundle size impact
- Maintenance status

3. Ask permission.

Never install packages automatically.

Prefer:

Official

Stable

Widely adopted

Actively maintained packages.


Default to Server Components.

Use "use client" ONLY when:

- useState
- useEffect
- Redux
- Browser APIs
- Event handlers

Avoid converting entire pages into Client Components.

Keep client boundaries as small as possible.


Use MongoDB + Mongoose only.

Do not:

- Switch to Prisma
- Switch to PostgreSQL
- Introduce ORM libraries
- Create unnecessary wrappers

Use plain Mongoose models.

Keep schemas simple.

Authentication should use:

JWT

bcryptjs

httpOnly cookies


Never:

- Store passwords in plain text

- Store JWT in localStorage

- Store secrets in frontend

Always use:

.env.local


All secrets should live in:

.env.local


Examples:

MONGODB_URI=

JWT_SECRET=

NEXT_PUBLIC_API_URL=


Never hardcode:

API Keys

Database URLs

Secrets

Tokens

Follow REST conventions.


Correct:

GET /api/products

GET /api/products/:id

POST /api/products

PUT /api/products/:id

DELETE /api/products/:id


Avoid:

/getProducts

/deleteProduct

/updateProduct

helpers/

utils/

services/

common/

shared/

helpers2/

Never rewrite:

- Existing pages

- Existing components

- Database schemas

- API routes

unless explicitly asked.


Prefer:

Modify existing code.

Preserve previous behavior.

Avoid breaking changes.


If breaking changes are required:

Explain:

Why

Impact

Migration steps

Ask permission first.

Socket.io/WebSocket is a BONUS feature.

Do not implement automatically.

Implement only after:

1. Core CRUD is completed

2. User approves

3. Architecture impact is explained

If multiple implementations exist:

Choose:

1. Official documentation approach

2. Stable approach

3. Most readable approach


Avoid:

Experimental APIs

Complex abstractions

Internet hacks

Outdated blog implementations


If official documentation and internet tutorials conflict:

Always follow:

1. Official documentation

2. Stable implementation

3. Most readable solution

Never use hacks or deprecated patterns.


STRICTLY FOLLOW ALL RULES MENTION ABOVE - NO EXCEPTIONS. IF ANY DOUBT ASK TO USER