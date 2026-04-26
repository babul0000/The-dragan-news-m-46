🐲 The Dragon News – Next.js News Portal

একটি আধুনিক Next.js 16 News Portal Application, যেখানে Authentication, Dynamic Routing, API Integration এবং Responsive UI একসাথে ব্যবহার করা হয়েছে

🚀 প্রোজেক্ট ওভারভিউ

এই প্রোজেক্টটি একটি ফুল ফাংশনাল নিউজ প্ল্যাটফর্ম যেখানে:

📰 Programming Hero API থেকে news fetch করা হয়
🔐 Better Auth দিয়ে login system
🗂️ Category wise news system
👤 Google / GitHub login support
🧭 Protected route system
📱 Fully responsive UI


| Technology         | কাজ                   |
| ------------------ | --------------------- |
| Next.js 16         | Full-stack framework  |
| React 19           | UI development        |
| Tailwind CSS       | Styling               |
| DaisyUI            | UI components         |
| Better Auth        | Authentication system |
| MongoDB            | Database              |
| React Hook Form    | Form handling         |
| date-fns           | Date format           |
| React Fast Marquee | News ticker           |
| React Icons        | Icons                 |


📁 প্রোজেক্ট স্ট্রাকচার

src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.jsx
│   │   ├── register/page.jsx
│   │   └── layout.jsx
│   │
│   ├── (main)/
│   │   ├── page.js
│   │   ├── layout.jsx
│   │   ├── loading.jsx
│   │   ├── about/page.jsx
│   │   ├── career/page.jsx
│   │   ├── category/[id]/
│   │   └── news/[id]/
│   │
│   ├── api/auth/[...all]/route.js
│   ├── layout.js
│   ├── not-found.jsx
│   └── globals.css

├── components/
│   ├── homesection/
│   │   ├── AllCategory.jsx
│   │   ├── DragonNews.jsx
│   │   └── LoginSection.jsx
│   │
│   └── shared/
│       ├── Header.jsx
│       ├── Navbar.jsx
│       ├── Navlink.jsx
│       └── AutoRun.jsx

├── lib/
│   ├── auth.js
│   ├── auth-client.js
│   └── data.js

└── proxy.js

🔐 Authentication System (Better Auth)
1️⃣ Server Config (auth.js)
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URL);

export const auth = betterAuth({
  database: mongodbAdapter(client.db("dragon-news")),
  emailAndPassword: { enabled: true },
  socialProviders: {
    google: {},
    github: {},
  },
});

2️⃣ Client Auth (auth-client.js)
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
});

3️⃣ API Route
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);

🧭 Routing System
/category/[id] → Category wise news
/news/[id] → News details
🔹 Home Redirect

import { redirect } from "next/navigation";

export default function Home() {
  redirect("/category/01");
}

API Integration (data.js)

export const category = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  return res.json();
};

export const categoryId = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
  return res.json();
};

export const newParams = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
  return res.json();
};

🔐 Route Protection (middleware)
import { NextResponse } from "next/server";

export function middleware(req) {
  const isLoggedIn = false;

  if (!isLoggedIn && req.nextUrl.pathname.startsWith("/career")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

🎨 UI System
3 Column Layout
Fully Responsive Design
DaisyUI Components
Tailwind Styling

🔑 Environment Variables

MONGODB_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
BETTER_AUTH_URL=

🚀 Future Improvements
Bookmark system
Comment system
Admin panel
Dark mode
Toast notifications

💡 Final Summary

👉 The Dragon News হলো একটি Next.js 16 based full-stack news portal যেখানে authentication, API integration, dynamic routing এবং modern UI system ব্যবহার করা হয়েছে।

👨‍💻 Author

Babul Hossan