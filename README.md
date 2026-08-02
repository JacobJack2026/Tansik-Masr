# Tansiq Egypt — Static Edition

نسخة ثابتة من الموقع تعمل مباشرة من المتصفح، دون Java أو Spring Boot أو قاعدة بيانات.

## التشغيل

افتح `index.html` في أي متصفح حديث.

## هيكل الملفات

```text
index.html
assets/
  css/style.css
  js/script.js
```

## ملاحظات

- الترشيحات محفوظة محليًا في `assets/js/script.js`.
- بيانات الحسابات التجريبية تُخزن في متصفح المستخدم فقط عبر `localStorage`؛ لا تستخدم هذه النسخة لكلمات مرور حقيقية.
- يمكن رفع المجلد مباشرةً إلى GitHub Pages أو Netlify للحصول على رابط عام.
