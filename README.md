🐲 The Dragon News – Next.js News Portal

একটি আধুনিক Next.js 16 News Portal Application, যেখানে Authentication, Dynamic Routing, API Integration এবং Responsive UI একসাথে ব্যবহার করা হয়েছে।

🚀 প্রোজেক্ট ওভারভিউ

এই প্রোজেক্টটি একটি ফুল ফাংশনাল নিউজ প্ল্যাটফর্ম যেখানে:

📰 Programming Hero API থেকে news fetch করা হয়
🔐 Better Auth দিয়ে login system
🗂️ Category wise news system
👤 Google / GitHub login support
🧭 Protected route system
📱 Fully responsive UI
⚙️ ব্যবহৃত টেকনোলজি
টেকনোলজি	কাজ
Next.js 16	Full-stack framework
React 19	UI development
Tailwind CSS	Styling
DaisyUI	UI components
Better Auth	Authentication system
MongoDB	Database
React Hook Form	Form handling
date-fns	Date format
React Fast Marquee	News ticker
React Icons	Icons
📁 প্রোজেক্ট স্ট্রাকচার
src/
 ├── app/
 │   ├── (auth)/
 │   │   ├── login/page.jsx        # Login page
 │   │   ├── register/page.jsx     # Register page
 │   │   └── layout.jsx            # Auth layout
 │   │
 │   ├── (main)/
 │   │   ├── page.js               # Home (redirect to category)
 │   │   ├── layout.jsx            # Main layout
 │   │   ├── loading.jsx           # Loading UI
 │   │   ├── about/page.jsx        # About page
 │   │   ├── career/page.jsx       # Protected page
 │   │   ├── category/[id]/        # Category wise news
 │   │   └── news/[id]/            # News details page
 │   │
 │   ├── api/auth/[...all]/route.js # Better Auth API
 │   ├── layout.js                  # Root layout
 │   ├── not-found.jsx              # 404 page
 │   └── globals.css               # Global styles
 │
 ├── components/
 │   ├── homesection/
 │   │   ├── AllCategory.jsx       # Category sidebar
 │   │   ├── DragonNews.jsx        # News card
 │   │   └── LoginSection.jsx      # Social login UI
 │   │
 │   └── shared/
 │       ├── Header.jsx            # Logo + Date
 │       ├── Navbar.jsx            # Navigation
 │       ├── Navlink.jsx           # Active link
 │       └── AutoRun.jsx           # News ticker
 │
 ├── lib/
 │   ├── auth.js                   # Better Auth config
 │   ├── auth-client.js            # Client auth
 │   └── data.js                   # API functions
 │
 ├── proxy.js                      # Route protection middleware
🔐 Authentication System (Better Auth)
1️⃣ Server Config (auth.js)
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URL);

export const auth = betterAuth({
  database: mongodbAdapter(client.db("dragon-news")),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {},
    github: {},
  },
});

📌 কেন ব্যবহার করা হয়েছে?

MongoDB তে user data store করার জন্য
Email + Social login support করার জন্য
Authentication system handle করার জন্য
2️⃣ Client Auth (auth-client.js)
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: "http://localhost:3000",
});

📌 কেন ব্যবহার করা হয়েছে?

Frontend থেকে login/signup করার জন্য
Session handle করার জন্য
3️⃣ API Route
import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);

📌 কেন ব্যবহার করা হয়েছে?

/api/auth/* request handle করার জন্য
Backend authentication connect করার জন্য
🧭 Routing System (Next.js App Router)
🔹 Home Redirect
// app/(main)/page.js
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/category/01");
}

📌 কেন ব্যবহার করা হয়েছে?

Default category page load করার জন্য
🔹 Dynamic Category Route
/category/[id]

📌 কেন ব্যবহার করা হয়েছে?

Category অনুযায়ী news দেখানোর জন্য
🔹 News Details Page
/news/[id]

📌 কেন ব্যবহার করা হয়েছে?

Full news details দেখানোর জন্য
📰 API Integration (data.js)
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

📌 কেন ব্যবহার করা হয়েছে?

API call clean রাখার জন্য
Reusable function বানানোর জন্য
🔐 Route Protection (middleware / proxy.js)
import { NextResponse } from "next/server";

export function middleware(req) {
  const isLoggedIn = false;

  if (!isLoggedIn && req.nextUrl.pathname.startsWith("/career")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

📌 কেন ব্যবহার করা হয়েছে?

Login ছাড়া protected page access বন্ধ করার জন্য
🧩 Components Usage
🟢 Navbar.jsx
import { useSession, signOut } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p>{session.user.name}</p>
          <button onClick={() => signOut()}>Logout</button>
        </>
      ) : (
        <a href="/login">Login</a>
      )}
    </div>
  );
};

📌 কেন ব্যবহার করা হয়েছে?

Login state অনুযায়ী UI change করার জন্য
🟢 DragonNews.jsx

📌 কাজ:

Single news card UI
Reusable component
🟢 AllCategory.jsx

📌 কাজ:

Category sidebar
Navigation system
🟢 AutoRun.jsx

📌 কাজ:

News ticker (marquee)
Latest news scroll effect
🎨 UI System
3 Column Layout
Left → Category
Center → News
Right → Login/Social
Responsive design (mobile friendly)
DaisyUI cards
Tailwind styling
🔑 Environment Variables
MONGODB_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
BETTER_AUTH_URL=

📌 কেন দরকার?

Sensitive data secure রাখার জন্য
⚠️ Limitations
Bookmark system নেই
Share button functional না
About/Career page simple
Error handling basic
🚀 Future Improvements

🔥 Bookmark system (user based)
🔥 Comment system
🔥 Admin panel
🔥 Dark mode
🔥 Toast notifications
🔥 News post system

💡 Final Summary

👉 The Dragon News হলো একটি Next.js 16 based full-stack news portal, যেখানে authentication, API integration, dynamic routing এবং modern UI system ব্যবহার করা হয়েছে।

👨‍💻 Author

Babul Hossan 