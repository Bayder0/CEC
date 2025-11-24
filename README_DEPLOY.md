# كيفية نشر الموقع على الإنترنت / How to Deploy the Website

## الطريقة الموصى بها: Vercel (الأسهل والأفضل) / Recommended: Vercel

### لماذا Vercel؟ / Why Vercel?
- ✅ مجاني تماماً / Completely free
- ✅ صُنع من قبل مبدعي Next.js / Made by Next.js creators
- ✅ يدعم جميع ميزات Next.js / Supports all Next.js features
- ✅ نشر سريع (دقيقتين) / Quick deployment (2 minutes)
- ✅ رابط مخصص / Custom URL

### خطوات النشر / Deployment Steps:

#### 1. رفع الكود على GitHub / Upload Code to GitHub:

```bash
# إنشاء مستودع Git
git init

# إضافة جميع الملفات
git add .

# عمل commit
git commit -m "Initial commit - Nahrain Continuing Education Center"

# تغيير اسم الفرع إلى main
git branch -M main

# إضافة رابط المستودع (استبدل YOUR_USERNAME و YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# رفع الكود
git push -u origin main
```

#### 2. النشر على Vercel / Deploy to Vercel:

1. اذهب إلى: https://vercel.com
2. سجل دخول بحساب GitHub الخاص بك
3. اضغط "Add New Project" أو "Import Project"
4. اختر المستودع الذي رفعته
5. Vercel سيكتشف Next.js تلقائياً
6. اضغط "Deploy"
7. انتظر دقيقة... وستحصل على رابط مثل: `your-project.vercel.app`

### ملاحظات مهمة / Important Notes:

⚠️ **الإضافات من لوحة التحكم:**
- الإضافات من لوحة التحكم لن تبقى بعد إعادة التشغيل على Vercel (لأنه serverless)
- الحل: استخدام قاعدة بيانات (MongoDB, Supabase, إلخ) - يمكن إضافتها لاحقاً

---

## الطريقة البديلة: GitHub Pages (أصعب - يحتاج تعديلات)

⚠️ **GitHub Pages لا يدعم Next.js بالكامل** - يحتاج تحويل الموقع إلى static site فقط

هذا سيعطل:
- ❌ إضافة الدورات من لوحة التحكم
- ❌ API routes

**لا أوصي بهذا الخيار**

---

## الخلاصة / Summary:

**استخدم Vercel** - إنه الأسهل والأفضل والأسرع!

رابط الموقع سيكون: `https://your-project-name.vercel.app`

