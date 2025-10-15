document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("langToggle")
  const langFlag = document.getElementById("langFlag")
  const langLabel = document.getElementById("langLabel")

  let currentLang = "en" // الوضع الافتراضي

  function updateLanguage() {
    const html = document.documentElement
    const isEnglish = currentLang === "en"
    html.lang = currentLang
    html.dir = isEnglish ? "ltr" : "rtl"

    // تحديث كل النصوص
    document.querySelectorAll("[data-en]").forEach((el) => {
      el.textContent = isEnglish ? el.dataset.en : el.dataset.ar
    })

    // تحديث الـ placeholders
    document.querySelectorAll("input, textarea").forEach((el) => {
      if (el.dataset.en)
        el.placeholder = isEnglish ? el.dataset.en : el.dataset.ar
    })

    // تحديث العلم والرمز
    langFlag.src = isEnglish
      ? "https://flagcdn.com/24x18/us.png"
      : "https://flagcdn.com/24x18/sy.png"
    langFlag.alt = isEnglish ? "US Flag" : "علم سوريا"
    langLabel.textContent = isEnglish ? "EN" : "AR"
  }

  // حدث الضغط على الزر
  langToggle.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en"
    updateLanguage()
  })

  // تحديث أولي عند تحميل الصفحة
  updateLanguage()
})
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide")
  const prevBtn = document.querySelector(".nav-btn.prev")
  const nextBtn = document.querySelector(".nav-btn.next")
  const dotsContainer = document.querySelector(".dots")

  let currentIndex = 0

  // إنشاء النقاط
  slides.forEach((_, i) => {
    const dot = document.createElement("button")
    dot.addEventListener("click", () => goToSlide(i))
    dotsContainer.appendChild(dot)
  })

  const dots = dotsContainer.querySelectorAll("button")
  dots[0].classList.add("active")

  function showSlide(index) {
    slides.forEach((s) => s.classList.remove("active"))
    dots.forEach((d) => d.classList.remove("active"))
    slides[index].classList.add("active")
    dots[index].classList.add("active")
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length
    showSlide(currentIndex)
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length
    showSlide(currentIndex)
  }

  function goToSlide(index) {
    currentIndex = index
    showSlide(index)
  }

  nextBtn.addEventListener("click", nextSlide)
  prevBtn.addEventListener("click", prevSlide)

  // تشغيل تلقائي كل 5 ثواني
  setInterval(nextSlide, 6000)
})
