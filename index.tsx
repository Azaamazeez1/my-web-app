// index.tsx - نقطة الدخول والتركيب

import React from 'react';
// يجب استخدام ReactDOM/client للإصدارات الحديثة من React
import ReactDOM from 'react-dom/client'; 

// استيراد المكون الرئيسي الذي قمنا بتعريفه في ملف App.tsx
// (هذا هو المكون الذي يحتوي على كل التوجيهات والمكونات التي أرسلتها سابقًا)
import App from './App'; 

// 1. تحديد العنصر الجذري (Root Element) من index.html
const rootElement = document.getElementById('root');

// 2. التحقق من وجود العنصر ثم تركيب التطبيق
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  
  root.render(
    // StrictMode يساعد في اكتشاف المشاكل المحتملة
    <React.StrictMode>
      {/* استدعاء المكون الرئيسي App ليعرض كل شيء */}
      <App />
    </React.StrictMode>
  );
} else {
  // رسالة خطأ في حال عدم العثور على <div id="root">
  console.error("Failed to find the root element in index.html.");
}
