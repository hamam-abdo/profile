# 📱 React Native Roadmap — Hamam Sadek

خريطة تعلّم **تطبيقات الموبايل** مبنية على مهاراتك الحالية (React · Next.js · TypeScript · Tailwind · Supabase).
انت مش بتبدأ من الصفر — انت **بتترجم** مهارة عندك منها 70–80% جاهز.

**المستويات:** 🟢 أساسي · 🟡 متوسط · 🔴 متقدّم
**العلامات:** ✅ خلصته · 🔄 بذاكره · ❌ لسه

> **القرار المحسوم:** **React Native + Expo** — لأنه *نفس React*. بدل `<div>` تكتب `<View>`، وبدل `<p>` تكتب `<Text>`. خلاص.

---

## 🗺️ نظرة سريعة (الطريق كله)

```
الأساسيات ← Navigation ← Data & State ← مميزات الجهاز ← Styling ← النشر ← مشروع Orderly Mobile
   (1)          (2)          (3)             (4)          (5)       (6)          (7)
```

**الهدف النهائي:** نسخة موبايل من **Orderly** (منيو + طلب + auth) = أقوى حاجة تحطها في الـ CV.

---

## 0) التجهيز (يوم واحد) 🛠️

- [ ] ❌ ثبّت **Node** (عندك أصلاً) + **Expo CLI**
- [ ] ❌ نزّل تطبيق **Expo Go** على موبايلك (iOS/Android)
- [ ] ❌ أنشئ أول مشروع وشغّله:

```bash
npx create-expo-app@latest orderly-mobile
cd orderly-mobile
npx expo start
```
اسكان الـ QR بتطبيق Expo Go → هتشوف تطبيقك على موبايلك مباشرة. 🎉

**📚 المصدر:** [docs.expo.dev — Get Started](https://docs.expo.dev/get-started/introduction/)

---

## 1) الأساسيات — Core Components 🟢

> هنا بتتعلم "لهجة الموبايل". الـ hooks اللي بتعرفها (`useState`/`useEffect`) نفسها بالظبط.

- [ ] 🟢 `View` (زي `div`) · `Text` (أي نص لازم جواه) · `Image`
- [ ] 🟢 `StyleSheet.create` + **Flexbox** (كله flex by default، والاتجاه `column` مش `row`)
- [ ] 🟢 `ScrollView` — للمحتوى اللي بينزل
- [ ] 🟢 `Pressable` / `TouchableOpacity` — بدل `onClick` بقى `onPress`
- [ ] 🟢 `TextInput` — الإدخال (controlled بنفس طريقة الويب)
- [ ] 🟡 `FlatList` — **مهم جداً** لعرض اللِستات بكفاءة (بدل `.map` في لستة طويلة)
- [ ] 🟡 `SafeAreaView` — عشان النوتش وحواف الشاشة

**⚡ تمرين:** حوّل شاشة **Hero** بتاعت بورتفوليو (اسم + دور + زرار) لموبايل.

**📚 المصادر:**
- 🌍 **Programming with Mosh** → دوّر: `React Native Tutorial for Beginners`
- 🌍 [reactnative.dev — Core Components](https://reactnative.dev/docs/components-and-apis)
- 🇸🇦 دوّر: `React Native أساسيات عربي 2025`

---

## 2) التنقّل — Navigation 🟡

> في الويب بتنقّل بالـ URL. في الموبايل شاشات فوق بعض + تاب بار تحت.

- [ ] 🟡 **Expo Router** (file-based routing — *شبه App Router بتاع Next.js بالظبط*)
- [ ] 🟡 **Stack Navigation** (شاشة تفتح فوق التانية + زرار Back)
- [ ] 🟡 **Tabs** (البار السفلي: Home / Menu / Orders / Profile)
- [ ] 🟡 تمرير بيانات بين الشاشات (params)
- [ ] 🔴 **Protected routes** (منع الدخول قبل تسجيل الدخول)

**⚡ تمرين:** اعمل تطبيق بـ 3 تابات وكل تاب فيه شاشة تفاصيل تفتح منها.

**📚 المصادر:**
- 🌍 **Simon Grimm** (قناة `Galaxies.dev`) → دوّر: `Expo Router Tutorial` — **ده أهم مصدر ليك**
- 🌍 [docs.expo.dev — Router](https://docs.expo.dev/router/introduction/)

---

## 3) البيانات و الحالة — Data & State 🟡

> الجميل إن الـ backend بتاعك (Supabase/Neon/Next API) **مايتغيرش**. نفس الـ `fetch`.

- [ ] 🟢 `fetch` / `axios` (نفس اللي بتعرفه)
- [ ] 🟡 **React Query (TanStack Query)** — للـ fetching + caching + loading/error states
- [ ] 🟡 **AsyncStorage** — بديل `localStorage` (تخزين محلي)
- [ ] 🟡 Global state: **Zustand** (أبسط من Redux وكفاية لأغلب التطبيقات)
- [ ] 🟡 التعامل مع الفورمز: **React Hook Form** + **Zod** (نفس اللي في الويب)

**⚡ تمرين:** اجلب منيو حقيقي من Supabase واعرضه في `FlatList`.

**📚 المصادر:**
- 🌍 **notJust.dev (Beto)** → دوّر: `React Native Supabase` — *بيبني بنفس استاكك بالظبط*
- 🌍 [TanStack Query — React Native](https://tanstack.com/query/latest)

---

## 4) مميزات الجهاز — Native Features 🟡🔴

> دي الحاجات اللي **مفيش ليها مقابل في الويب** — وهي اللي بتفرّق التطبيق.

- [ ] 🟡 **Permissions** — طلب إذن قبل أي حاجة حساسة
- [ ] 🟡 **الكاميرا** (`expo-camera`) — مفيد جداً لـ QR بتاع Orderly!
- [ ] 🟡 **اللوكيشن** (`expo-location`)
- [ ] 🟡 رفع الصور (`expo-image-picker`)
- [ ] 🔴 **Push Notifications** (`expo-notifications`) — "طلبك جاهز 🍽️"
- [ ] 🔴 التعامل مع الكيبورد + الحالات (online/offline)

**⚡ تمرين:** اعمل ماسح **QR** يفتح منيو المطعم (ده جوهر Orderly).

**📚 المصادر:**
- 🌍 [docs.expo.dev — Camera](https://docs.expo.dev/versions/latest/sdk/camera/) · [Notifications](https://docs.expo.dev/push-notifications/overview/)
- 🌍 **Simon Grimm** → دوّر: `Expo Push Notifications`

---

## 5) التنسيق و الحركة — Styling & Animation 🟡

> مهارتك في Tailwind **مش هتضيع**.

- [ ] 🟢 `StyleSheet` بإتقان + Flexbox
- [ ] 🟡 **NativeWind** — Tailwind classes في React Native بالظبط زي ما بتعمل! 🎯
- [ ] 🟡 Responsive (`Dimensions` / `useWindowDimensions`)
- [ ] 🔴 **Reanimated** + **Gesture Handler** — أنيميشن وإيماءات ناعمة (swipe/drag)

**📚 المصادر:**
- 🌍 [nativewind.dev](https://www.nativewind.dev/)
- 🌍 **Catalin Miron** → دوّر: `React Native Reanimated animations`

---

## 6) البناء و النشر — Build & Deploy 🔴

> مش Vercel وخلاص — فيه App Stores ومراجعة بشرية.

- [ ] 🟡 **EAS Build** (تبني ملف التطبيق سحابياً)
- [ ] 🔴 النشر على **Google Play** ($25 مرة واحدة)
- [ ] 🔴 النشر على **App Store** ($99/سنة — محتاج جهاز/حساب Apple)
- [ ] 🟡 **OTA Updates** (تحديثات فورية من غير مراجعة المتجر — ميزة Expo القوية)

**📚 المصادر:**
- 🌍 [docs.expo.dev — EAS Build](https://docs.expo.dev/build/introduction/)

---

## 7) المشروع النهائي — Orderly Mobile 🏆

طبّق كل ده في نسخة موبايل من **Orderly**:

- [ ] Auth (Login/Signup) بـ **Supabase**
- [ ] تابات: Menu · Cart · Orders · Profile
- [ ] `FlatList` للمنيو + بحث + فلترة
- [ ] Cart بـ **Zustand** + إتمام الطلب
- [ ] ماسح **QR** يفتح منيو الطاولة
- [ ] **Push notification** لما الطلب يجهز
- [ ] بناء ونشر تجريبي بـ **EAS**

> ده وحده = بورتفوليو موبايل محترم + قصة قوية في أي إنترفيو.

---

## 📊 جدول الفرق: Web vs Mobile (مرجع سريع)

| الحاجة | Web (اللي بتعمله دلوقتي) | Mobile (React Native) |
|--------|--------------------------|------------------------|
| الحاويات | `<div>` / `<span>` | `<View>` |
| النصوص | `<p>` / `<h1>` | `<Text>` (إجباري) |
| الضغط | `onClick` | `onPress` |
| اللِستات | `.map()` | `FlatList` |
| التنسيق | CSS / Tailwind | `StyleSheet` / NativeWind |
| التنقّل | URL / App Router | Expo Router (Stack/Tabs) |
| التخزين | `localStorage` | `AsyncStorage` |
| النشر | Vercel (فوري) | App/Play Store (مراجعة) |
| الـ Backend | نفسه | **نفسه** (Supabase/Neon) |

---

## 🎥 أفضل القنوات (احفظها)

**🌍 إنجليزي (الأقوى):**
1. **Simon Grimm** / `Galaxies.dev` — متخصص Expo، محدّث دايماً ⭐
2. **notJust.dev (Beto)** — مشاريع كاملة بـ Expo + Supabase (استاكك بالظبط) ⭐
3. **Programming with Mosh** — أفضل بداية منظمة
4. **JavaScript Mastery** / **Code with Nomi** — مشاريع عملية كاملة

**🇸🇦 عربي:**
- دوّر: `React Native كورس كامل عربي 2025`
- أساسياتك من **Elzero Web School** كفاية تخليك تفهم أي شرح إنجليزي

**📄 توثيق (ابدأ منه فعلاً):**
- [docs.expo.dev](https://docs.expo.dev) ⭐ · [reactnative.dev](https://reactnative.dev)

---

## ✅ خطة زمنية مقترحة (~4 أسابيع)

| الأسبوع | التركيز |
|---------|---------|
| **1** | التجهيز + الأساسيات (قسم 0 و 1) — حوّل شاشة Hero |
| **2** | Navigation + Data (قسم 2 و 3) — تطبيق بتابات + API |
| **3** | ربط Supabase (auth + list حقيقي) + NativeWind |
| **4** | **Orderly Mobile** (قسم 7) — ابنِ ووثّق بفيديو للـ CV |

**بالتوفيق يا حمام! 💪 انت أقرب مما تتخيّل — دي ترجمة مش تعلّم من الصفر.**
