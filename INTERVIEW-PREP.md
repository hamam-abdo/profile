# 🎯 Full-Stack Interview Prep — Hamam Sadek

أسئلة إنترفيو فول-ستاك مرتّبة بالمستوى. ذاكر كل قسم، وأي سؤال متعرفش تجاوبه بثقة = **نقطة ترجعلها**.

**المستويات:** 🟢 أساسي (Junior) · 🟡 متوسط (Mid) · 🔴 متقدّم (Senior)

> طريقة الاستخدام: جاوب من دماغك الأول، بعدين ابحث. اللي جاوبته صح من غير بحث = نقطة قوة. اللي بحثت عنه = حطّه في قايمة المراجعة.

---

## 1) JavaScript / TypeScript

- 🟢 الفرق بين `let` / `const` / `var` (scope + hoisting)؟
- 🟢 الفرق بين `==` و `===`؟
- 🟢 إيه هو `null` vs `undefined`؟
- 🟡 اشرح الـ **Event Loop**: إزاي JS (single-threaded) بتتعامل مع async من غير ما تتجمّد؟
- 🟡 الفرق بين **Promise** و **async/await**؟ وإيه `Promise.all`؟
- 🟡 إيه الـ **closure**؟ ومثال عملي ليه؟
- 🟡 الفرق بين `map` / `filter` / `reduce`؟
- 🟡 إيه معنى **immutability** وليه مهمة في React؟
- 🔴 الفرق بين shallow copy و deep copy؟ وإزاي تعمل deep copy؟
- 🔴 **TypeScript:** الفرق بين `interface` و `type`؟ وإيه `generics` ومتى تستخدمها؟
- 🔴 إيه `unknown` vs `any` vs `never`؟

---

## 2) React

- 🟢 إيه الـ Virtual DOM؟ وإزاي React بيحدّث الواجهة؟
- 🟢 الفرق بين props و state؟
- 🟢 إيه الـ `key` في الـ lists وليه مهمة؟
- 🟡 إمتى يشتغل `useEffect`؟ وإيه الـ dependency array؟ وإيه الـ cleanup؟
- 🟡 الفرق بين `useMemo` و `useCallback`؟ وإمتى تحتاجهم فعلاً؟
- 🟡 إيه الـ **prop drilling** وإزاي تتجنبه (Context / state management)؟
- 🟡 إيه الـ **controlled** vs **uncontrolled** components؟
- 🔴 اشرح مشكلة **re-renders** الزيادة وإزاي تحسّن الأداء؟
- 🔴 إيه الـ **custom hook** وإمتى تعمل واحد؟

---

## 3) Next.js (App Router)

- 🟢 إيه الفرق بين **Server** و **Client Components**؟ وإيه `"use client"`؟
- 🟢 إيه الفرق بين `<Link>` و `<a>`؟
- 🟡 إيه الـ **SSR** / **SSG** / **ISR** / **CSR**؟ وإمتى تستخدم كل واحد؟
- 🟡 الفرق بين **Server Action** و **Route Handler (API route)**؟ وإمتى تختار كل واحد؟
- 🟡 إزاي بتعمل **data fetching** في Server Component؟ وإزاي تعمل caching/revalidate؟
- 🟡 إيه الـ `loading.tsx` و `error.tsx` و `layout.tsx`؟
- 🔴 إزاي بتتعامل مع **environment variables** (الفرق بين `NEXT_PUBLIC_` وغيرها)؟
- 🔴 إيه الـ **middleware** في Next.js وإمتى تستخدمه (مثلاً حماية الراوتس)؟
- 🔴 إزاي تحسّن **Core Web Vitals** (LCP, CLS) في Next؟

---

## 4) Databases · SQL · Prisma

- 🟢 الفرق بين **SQL** و **NoSQL**؟ وإمتى تختار كل واحد؟
- 🟢 إيه الـ **Primary Key** و **Foreign Key**؟
- 🟡 أنواع العلاقات: **1:1 / 1:m / m:n** — مثال على كل واحدة وإزاي تتعمل في Prisma؟
- 🟡 إيه الـ **migration**؟ وليه مهمة في الفريق؟
- 🟡 إيه الـ **index** وإزاي بيسرّع الـ queries؟ وإمتى تضيفه؟
- 🟡 إيه مشكلة **N+1 query** وإزاي Prisma بيحلها (`include` / `select`)؟
- 🔴 إيه الـ **transaction** ومتى تحتاجها (`prisma.$transaction`)؟
- 🔴 الفرق بين **JOIN** أنواعه (inner / left)؟
- 🔴 إيه الـ **connection pooling** وليه مهم مع serverless (زي Neon)؟

---

## 5) Backend · API Design

- 🟢 إيه الـ **HTTP methods** (GET/POST/PUT/PATCH/DELETE) ومعنى كل واحد؟
- 🟢 إيه أشهر **status codes** (200, 201, 400, 401, 403, 404, 500)؟
- 🟡 إيه مبادئ **REST**؟ وإزاي تصمّم endpoint كويس؟
- 🟡 إيه الـ **validation** وليه لازم على السيرفر مش بس الفرونت (Zod)؟
- 🟡 إزاي تتعامل مع **errors** بشكل موحّد في الـ API؟
- 🟡 إيه الـ **webhook** ومثال عملي (Stripe)؟
- 🔴 إيه الـ **rate limiting** وليه؟
- 🔴 الفرق بين **REST** و **GraphQL** و **tRPC**؟
- 🔴 إيه الـ **pagination** وأنواعها (offset vs cursor)؟

---

## 6) Authentication & Authorization 🔑

- 🟢 الفرق بين **Authentication** و **Authorization**؟
- 🟡 إيه الـ **JWT**؟ وإيه اللي جواه؟ وإزاي بيشتغل؟
- 🟡 الفرق بين **session-based** و **token-based** auth؟
- 🟡 إيه الـ **OAuth** (تسجيل دخول بجوجل/جيتهب)؟
- 🟡 إزاي تخزّن الـ **passwords** صح (hashing — bcrypt/argon)؟ ليه مش plain text؟
- 🟡 **role-based access control (RBAC):** إزاي تمنع مستخدم من بيانات مستخدم تاني؟
- 🔴 إيه الفرق بين **access token** و **refresh token**؟
- 🔴 أين تخزّن الـ token (cookie httpOnly vs localStorage) وليه (XSS/CSRF)؟

---

## 7) Payments — Stripe 💳

- 🟡 إيه الفرق بين **one-time payment** و **subscription**؟
- 🟡 إيه الـ **Checkout Session**؟
- 🟡 ليه لازم تستخدم **webhook** تتأكد إن الدفع تم (مش تعتمد على الـ redirect)؟
- 🔴 إزاي تتعامل مع **failed payments** وتجديد الاشتراك؟
- 🔴 إزاي تأمّن الـ webhook (signature verification)؟

---

## 8) Testing 🧪

- 🟢 الفرق بين **unit** / **integration** / **E2E** tests؟
- 🟡 إيه الـ **mocking** ومتى تستخدمه؟
- 🟡 إزاي تكتب test لـ API route أو function (Vitest/Jest)؟
- 🔴 إزاي تكتب **E2E test** لتدفّق تسجيل دخول (Playwright)؟

---

## 9) DevOps · Deployment ⚙️

- 🟢 إيه الفرق بين **development** و **production** build؟
- 🟡 إيه الـ **Docker** وإيه فايدة الـ container؟ وإيه الـ `Dockerfile`؟
- 🟡 إيه الـ **CI/CD**؟ ومثال بـ **GitHub Actions** (تشغّل tests قبل النشر)؟
- 🟡 إزاي تدير **secrets / env variables** في الإنتاج بأمان؟
- 🔴 الفرق بين النشر على **Vercel** و **VPS/Docker**؟ ومتى تختار كل واحد؟

---

## 10) Security 🛡️

- 🟢 إيه الـ **HTTPS** وليه مهم؟
- 🟡 إيه الـ **XSS** وإزاي تتجنبه؟
- 🟡 إيه الـ **SQL Injection** وهل Prisma بيحميك منه؟ ليه؟
- 🟡 إيه الـ **CSRF**؟
- 🔴 إيه أهم بنود **OWASP Top 10**؟
- 🔴 إزاي تتعامل مع **CORS**؟

---

## 11) Performance & Scaling 🚀

- 🟡 إيه الـ **caching** وأنواعه (browser, CDN, server, DB)؟
- 🟡 إيه الـ **lazy loading** و **code splitting**؟
- 🔴 إيه الـ **Redis** ومتى تستخدمه؟
- 🔴 إيه الـ **background jobs / queues** (مثلاً إرسال إيميلات) — BullMQ؟
- 🔴 إزاي تتعامل مع **رفع وتخزين الصور** بكفاءة (S3 / Cloudinary)؟

---

## 12) System Design (سيناريو عملي) 🧩

> دي بيسألوها للـ Mid/Senior. فكّر بصوت عالي مش إجابة واحدة صح.

- 🔴 صمّم **Orderly** من الصفر: المطاعم، المنيو، الطلبات، الأدوار، الاشتراكات. إيه الجداول؟ إيه الـ API؟ إزاي تأمّنه؟
- 🔴 لو فجأة 10,000 مستخدم بيطلبوا في نفس الوقت — إيه اللي هيقع الأول وإزاي تتعامل (caching, DB pooling, scaling)؟
- 🔴 إزاي تعمل نظام **real-time** للطلبات (المطبخ يشوف الطلب فوراً) — WebSockets / Supabase Realtime / SSE؟

---

## ✅ خطة المذاكرة المقترحة

1. ابدأ بالأقسام اللي فيها أكتر "مش عارف".
2. ركّز على **6 (Auth)** و **5 (Backend/API)** و **4 (DB)** — دول اللي بيفرقوا في الفول-ستاك.
3. كل مفهوم بتذاكره، **طبّقه عملياً** في مشروع (الأفضل: Orderly).
4. ارجع للأسئلة كل أسبوع وقيّم نفسك تاني.

**بالتوفيق! 💪**
