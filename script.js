"use strict";

const sampleColleges = [

{
 name: "طب بشري",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 298,
   percentage: 93.12
 },
 oldSystem: {
   total: 410,
   minimum: 382,
   percentage: 93.17
 },
 expected2026: 92.12,
 track: "مسار طبي"
},

{
 name: "طب بشري",
 university: "جامعة عين شمس",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 297.5,
   percentage: 92.96
 },
 oldSystem: {
   total: 410,
   minimum: 381,
   percentage: 92.92
 },
 expected2026: 91.96,
 track: "مسار طبي"
},

{
 name: "طب أسنان",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 296.5,
   percentage: 92.65
 },
 oldSystem: {
   total: 410,
   minimum: 380,
   percentage: 92.68
 },
 expected2026: 91.65,
 track: "مسار طبي"
},

{
 name: "صيدلة",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 293.5,
   percentage: 91.72
 },
 oldSystem: {
   total: 410,
   minimum: 376,
   percentage: 91.7
 },
 expected2026: 90.72,
 track: "مسار طبي"
},

{
 name: "علاج طبيعي",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 294,
   percentage: 91.87
 },
 oldSystem: {
   total: 410,
   minimum: 377,
   percentage: 91.95
 },
 expected2026: 90.87,
 track: "مسار طبي"
},

{
 name: "تمريض",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 244,
   percentage: 76.25
 },
 oldSystem: {
   total: 410,
   minimum: 312,
   percentage: 76.1
 },
 expected2026: 75.25,
 track: "مسار صحي"
},

// ===== هندسة وحاسبات وعلوم =====

{
 name: "هندسة",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "MATH",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 288,
   percentage: 90
 },
 oldSystem: {
   total: 410,
   minimum: 366,
   percentage: 89.27
 },
 expected2026: 89,
 track: "مسار هندسي"
},

{
 name: "هندسة",
 university: "جامعة عين شمس",
 type: "PUBLIC",
 section: "MATH",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 286,
   percentage: 89.37
 },
 oldSystem: {
   total: 410,
   minimum: 364,
   percentage: 88.78
 },
 expected2026: 88.37,
 track: "مسار هندسي"
},

{
 name: "هندسة",
 university: "جامعة حلوان",
 type: "PUBLIC",
 section: "MATH",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 283,
   percentage: 88.43
 },
 oldSystem: {
   total: 410,
   minimum: 361,
   percentage: 88
 },
 expected2026: 87.43,
 track: "مسار هندسي"
},

{
 name: "حاسبات وذكاء اصطناعي",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "MATH",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 276,
   percentage: 86.25
 },
 oldSystem: {
   total: 410,
   minimum: 353,
   percentage: 86.1
 },
 expected2026: 85.25,
 track: "مسار تقني"
},

{
 name: "حاسبات ومعلومات",
 university: "جامعة عين شمس",
 type: "PUBLIC",
 section: "MATH",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 272,
   percentage: 85
 },
 oldSystem: {
   total: 410,
   minimum: 348,
   percentage: 84.87
 },
 expected2026: 84,
 track: "مسار تقني"
},

{
 name: "ذكاء اصطناعي",
 university: "جامعة كفر الشيخ",
 type: "PUBLIC",
 section: "MATH",
 city: "كفر الشيخ",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 270,
   percentage: 84.37
 },
 oldSystem: {
   total: 410,
   minimum: 346,
   percentage: 84.39
 },
 expected2026: 83.37,
 track: "مسار تقني"
},

{
 name: "علوم",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 245,
   percentage: 76.56
 },
 oldSystem: {
   total: 410,
   minimum: 313,
   percentage: 76.34
 },
 expected2026: 75.56,
 track: "مسار علمي"
},

{
 name: "علوم",
 university: "جامعة عين شمس",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 243,
   percentage: 75.93
 },
 oldSystem: {
   total: 410,
   minimum: 310,
   percentage: 75.6
 },
 expected2026: 74.93,
 track: "مسار علمي"
},

{
 name: "تكنولوجيا حيوية",
 university: "جامعة النيل",
 type: "PRIVATE",
 section: "SCIENCE",
 city: "الجيزة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 230,
   percentage: 71.87
 },
 oldSystem: {
   total: 410,
   minimum: 295,
   percentage: 71.95
 },
 expected2026: 70.87,
 track: "مسار علمي"
},
 
// ===== كليات الاقتصاد والإدارة والأدبي =====

{
 name: "اقتصاد وعلوم سياسية",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "LITERARY",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 282,
   percentage: 88.12
 },
 oldSystem: {
   total: 410,
   minimum: 360,
   percentage: 87.8
 },
 expected2026: 87.12,
 track: "مسار إنساني"
},

{
 name: "ألسن",
 university: "جامعة عين شمس",
 type: "PUBLIC",
 section: "LITERARY",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 263,
   percentage: 82.18
 },
 oldSystem: {
   total: 410,
   minimum: 336,
   percentage: 81.95
 },
 expected2026: 81.18,
 track: "مسار لغات"
},

{
 name: "إعلام",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "LITERARY",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 256,
   percentage: 80
 },
 oldSystem: {
   total: 410,
   minimum: 328,
   percentage: 80
 },
 expected2026: 79,
 track: "مسار إبداعي"
},

{
 name: "تجارة",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "LITERARY",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 220,
   percentage: 68.75
 },
 oldSystem: {
   total: 410,
   minimum: 280,
   percentage: 68.29
 },
 expected2026: 67.75,
 track: "مسار أعمال"
},

{
 name: "تجارة",
 university: "جامعة عين شمس",
 type: "PUBLIC",
 section: "LITERARY",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 218,
   percentage: 68.12
 },
 oldSystem: {
   total: 410,
   minimum: 278,
   percentage: 67.8
 },
 expected2026: 67.12,
 track: "مسار أعمال"
},

{
 name: "حقوق",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "LITERARY",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 210,
   percentage: 65.62
 },
 oldSystem: {
   total: 410,
   minimum: 268,
   percentage: 65.36
 },
 expected2026: 64.62,
 track: "مسار قانوني"
},

{
 name: "آداب",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "LITERARY",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 205,
   percentage: 64.06
 },
 oldSystem: {
   total: 410,
   minimum: 260,
   percentage: 63.41
 },
 expected2026: 63.06,
 track: "مسار إنساني"
},

{
 name: "تربية",
 university: "جامعة عين شمس",
 type: "PUBLIC",
 section: "LITERARY",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 230,
   percentage: 71.87
 },
 oldSystem:
 {
   total: 410,
   minimum: 292,
   percentage: 71.21
 },
 expected2026: 70.87,
 track: "مسار تعليمي"
},

{
 name: "خدمة اجتماعية",
 university: "جامعة حلوان",
 type: "PUBLIC",
 section: "LITERARY",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 190,
   percentage: 59.37
 },
 oldSystem: {
   total: 410,
   minimum: 245,
   percentage: 59.75
 },
 expected2026: 58.37,
 track: "مسار اجتماعي"
},
 
// ===== باقي الكليات العلمية والتطبيقية =====

{
 name: "طب بيطري",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 272,
   percentage: 85
 },
 oldSystem: {
   total: 410,
   minimum: 348,
   percentage: 84.87
 },
 expected2026: 84,
 track: "مسار طبي"
},

{
 name: "طب بيطري",
 university: "جامعة المنصورة",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "الدقهلية",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 270,
   percentage: 84.37
 },
 oldSystem: {
   total: 410,
   minimum: 346,
   percentage: 84.39
 },
 expected2026: 83.37,
 track: "مسار طبي"
},

{
 name: "زراعة",
 university: "جامعة القاهرة",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 220,
   percentage: 68.75
 },
 oldSystem: {
   total: 410,
   minimum: 280,
   percentage: 68.29
 },
 expected2026: 67.75,
 track: "مسار زراعي"
},

{
 name: "زراعة",
 university: "جامعة عين شمس",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 218,
   percentage: 68.12
 },
 oldSystem: {
   total: 410,
   minimum: 278,
   percentage: 67.8
 },
 expected2026: 67.12,
 track: "مسار زراعي"
},

{
 name: "علوم صحية تطبيقية",
 university: "جامعة بني سويف",
 type: "PUBLIC",
 section: "SCIENCE",
 city: "بني سويف",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 250,
   percentage: 78.12
 },
 oldSystem: {
   total: 410,
   minimum: 320,
   percentage: 78
 },
 expected2026: 77.12,
 track: "مسار صحي"
},

{
 name: "فنون تطبيقية",
 university: "جامعة حلوان",
 type: "PUBLIC",
 section: "MATH",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 245,
   percentage: 76.56
 },
 oldSystem: {
   total: 410,
   minimum: 312,
   percentage: 76.09
 },
 expected2026: 75.56,
 track: "مسار إبداعي"
},

{
 name: "فنون جميلة",
 university: "جامعة حلوان",
 type: "PUBLIC",
 section: "MATH",
 city: "القاهرة",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 230,
   percentage: 71.87
 },
 oldSystem: {
   total: 410,
   minimum: 295,
   percentage: 71.95
 },
 expected2026: 70.87,
 track: "مسار إبداعي"
},

{
 name: "تكنولوجيا الصناعة والطاقة",
 university: "جامعة الدلتا التكنولوجية",
 type: "PUBLIC",
 section: "MATH",
 city: "الدقهلية",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 200,
   percentage: 62.5
 },
 oldSystem: {
   total: 410,
   minimum: 255,
   percentage: 62.19
 },
 expected2026: 61.5,
 track: "مسار تكنولوجي"
},

{
 name: "حاسبات ومعلومات",
 university: "جامعة المنصورة",
 type: "PUBLIC",
 section: "MATH",
 city: "الدقهلية",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 270,
   percentage: 84.37
 },
 oldSystem: {
   total: 410,
   minimum: 346,
   percentage: 84.39
 },
 expected2026: 83.37,
 track: "مسار تقني"
},

{
 name: "ذكاء اصطناعي",
 university: "جامعة بنها",
 type: "PUBLIC",
 section: "MATH",
 city: "القليوبية",
 year: 2025,
 newSystem: {
   total: 320,
   minimum: 268,
   percentage: 83.75
 },
 oldSystem: {
   total: 410,
   minimum: 343,
   percentage: 83.65
 },
 expected2026: 82.75,
 track: "مسار تقني"
}

];

// سجل رسمي مستخرج من بوابة التنسيق الحكومي لعام 2025 (قديم وحديث).
// تبقى البيانات النموذجية مضافة لعرض المدينة والجامعة عندما تكون متاحة.
const colleges = [
  ...(Array.isArray(window.officialGovernment2025) ? window.officialGovernment2025 : []),
  ...sampleColleges
];

const form = document.querySelector("#calculatorForm");
const results = document.querySelector("#results");
const list = document.querySelector("#collegeList");
const message = document.querySelector("#formMessage");
const submitButton = form.querySelector("button[type=submit]");
const modal = document.querySelector("#authModal");
const isCalculatorPage = window.location.pathname.toLowerCase().endsWith("calculator.html");
const signedInUser = JSON.parse(localStorage.getItem("tansiqUser") || "null");

if (isCalculatorPage && !signedInUser) {
  window.location.replace("index.html");
}

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector(".menu-button").addEventListener("click", (event) => {
  const nav = document.querySelector(".nav-area");
  const isOpen = nav.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "";
  const values = Object.fromEntries(new FormData(form));
  const score = Number(values.score);
  const total = Number(values.total);
  const system = values.system;
  const decline = Number(values.decline);

  if (!Number.isFinite(score) || score < 0 || score > total) {
    message.textContent = "أدخل مجموعًا صحيحًا لا يتجاوز المجموع الكلي.";
    return;
  }

  setLoading(true);
  window.setTimeout(() => {
    const percentage = Math.round((score * 10000) / total) / 100;
    const recommendations = colleges
      .filter((college) => college.section === values.section)
      .filter((college) => college.type === values.universityType)
      .map((college) => ({
        ...college,
        previousPercentage: college[system].percentage,
        expectedPercentage: roundPercentage(college[system].percentage - decline)
      }))
      .filter((college) => percentage >= college.expectedPercentage)
      .sort((first, second) => second.expectedPercentage - first.expectedPercentage);

    renderResults({
      percentage,
      recommendations,
      notice: `الحدود مبنية على تنسيق 2025 للنظام ${system === "newSystem" ? "الجديد" : "القديم"}، مع افتراض انخفاض ${decline}%؛ وهي استرشادية وليست إعلانًا رسميًا.`
    });
    setLoading(false);
  }, 250);
});

const systemSelect = document.querySelector("#system");
const totalSelect = document.querySelector("#total");
const scoreInput = document.querySelector("#score");

function syncSystemTotal() {
  const total = systemSelect.value === "newSystem" ? 320 : 410;
  totalSelect.value = String(total);
  scoreInput.max = String(total);
  scoreInput.placeholder = systemSelect.value === "newSystem" ? "مثال: 288" : "مثال: 368";
  if (Number(scoreInput.value) > total) scoreInput.value = "";
}

systemSelect.addEventListener("change", syncSystemTotal);
totalSelect.addEventListener("change", syncSystemTotal);
syncSystemTotal();

function roundPercentage(value) {
  return Math.round(value * 100) / 100;
}

function setLoading(loading) {
  submitButton.disabled = loading;
  submitButton.querySelector("span:first-child").textContent = loading ? "جارٍ البحث..." : "اعرض الكليات المناسبة";
  submitButton.querySelector(".loader").hidden = !loading;
}

function renderResults(data) {
  document.querySelector("#percentage").textContent = `${data.percentage}%`;
  document.querySelector("#notice").textContent = data.notice;
  list.replaceChildren();

  if (!data.recommendations.length) {
    list.innerHTML = '<p class="empty">لا توجد ترشيحات ضمن البيانات الاسترشادية الحالية. جرّب نوع جامعة آخر أو راجع التنسيق الرسمي.</p>';
  } else {
    data.recommendations.forEach((college) => {
      const card = document.createElement("article");
      card.className = "college-card";
      card.innerHTML = `<div><h3>${escapeHtml(college.name)} — ${escapeHtml(college.university)}</h3><p>${typeLabel(college.type)} · ${escapeHtml(college.city)} · ${escapeHtml(college.track)}</p><small>تنسيق 2025: ${college.previousPercentage}%</small></div><span class="minimum">متوقع: ${college.expectedPercentage}%</span>`;
      list.append(card);
    });
  }

  results.hidden = false;
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function typeLabel(type) {
  return type === "PUBLIC" ? "حكومية" : type === "PRIVATE" ? "خاصة" : "أهلية";
}

function escapeHtml(value) {
  const element = document.createElement("span");
  element.textContent = value;
  return element.innerHTML;
}

document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", () => openAuth(button.dataset.openModal));
});

modal.querySelector(".close-modal").addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

function openAuth(type) {
  const template = document.querySelector(`#${type}Template`);
  document.querySelector("#modalContent").replaceChildren(template.content.cloneNode(true));
  modal.showModal();
  modal.querySelector("form").addEventListener("submit", submitAuth);
}

function submitAuth(event) {
  event.preventDefault();
  const authForm = event.currentTarget;
  const feedback = document.createElement("p");
  const values = Object.fromEntries(new FormData(authForm));
  const users = JSON.parse(localStorage.getItem("tansiqUsers") || "[]");

  feedback.className = "auth-feedback";
  authForm.querySelector(".auth-feedback")?.remove();

  if (authForm.dataset.auth === "register") {
    if (users.some((user) => user.email.toLowerCase() === values.email.toLowerCase())) {
      feedback.textContent = "البريد الإلكتروني مستخدم بالفعل.";
      feedback.classList.add("error");
    } else {
      users.push({ name: values.name.trim(), email: values.email.trim(), password: values.password });
      localStorage.setItem("tansiqUsers", JSON.stringify(users));
      localStorage.setItem("tansiqUser", JSON.stringify({ name: values.name.trim(), email: values.email.trim() }));
      feedback.textContent = "تم إنشاء الحساب بنجاح.";
      feedback.classList.add("success");
    }
  } else {
    const user = users.find((item) => item.email.toLowerCase() === values.email.toLowerCase() && item.password === values.password);
    if (user) {
      localStorage.setItem("tansiqUser", JSON.stringify({ name: user.name, email: user.email }));
      feedback.textContent = "تم تسجيل الدخول بنجاح.";
      feedback.classList.add("success");
    } else {
      feedback.textContent = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
      feedback.classList.add("error");
    }
  }

  authForm.append(feedback);
  if (feedback.classList.contains("success")) {
    window.setTimeout(() => {
      modal.close();
      window.location.assign("calculator.html");
    }, 700);
  }
}
