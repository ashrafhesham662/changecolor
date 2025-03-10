  

const changebackground = document.querySelector(".change-color");
const body = document.body;
const darkMode = document.querySelector(".dark-mode");

// تفعيل وإلغاء الوضع الليلي
darkMode.addEventListener("click", () => {
    body.classList.toggle("night");
});

// دالة تغيير اللون وإضافة رسالة toast
const changeBgColor = () => {
    changebackground.addEventListener("click", () => {
        if (body.classList.contains("night")) {
            body.classList.remove("night");
        } else {
            // توليد لون عشوائي للخلفية
            const randomHsl = Math.round(Math.random() * 360);
            const random2 = Math.round(Math.random() * 70);
            body.style.backgroundColor = `hsl(${randomHsl}, ${random2}%, 50%)`;

            // التحقق من وجود عنصر toast مسبقًا
            if (!document.querySelector(".toast")) {
                const toast = document.createElement("p");
                toast.classList.add("toast");
                toast.textContent = "يجب عليك تفعيل الوضع الليلي لراحة عينك";
                document.body.appendChild(toast);

                // إخفاء العنصر بعد 30 ثانية
                setTimeout(() => {
                    toast.style.opacity = "0";
                    setTimeout(() => {
                        toast.remove();
                    }, 500); // بعد انتهاء الـ transition يتم الحذف
                }, 30000);
            }
        }
    });
};

// استدعاء الدالة لتفعيل الحدث
changeBgColor();
