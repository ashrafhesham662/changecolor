const btnBg = document.querySelector(".change-color");
const body = document.body;
const darkMode = document.querySelector(".dark-mode");
const copyRight = document.querySelector(".Copy-right");

const clickDarkMode = () => {
  darkMode.addEventListener("click", (eo) => {
    body.classList.toggle("night");
    copyRight.classList.toggle("color");
  });
};
clickDarkMode();

const clickBtnBg = () => {
  btnBg.addEventListener("click", (eo) => {
    if (body.classList.contains("night")) {
      body.classList.remove("night");
    } else {
      const randomBg = Math.round(Math.random() * 360);
      body.style.backgroundColor = `hsl(${randomBg} , 35% , 50%)`;
      let toast = document.createElement("p");
      toast.classList.add("toast");
      toast.textContent = "لراحه عينك يمكنك تفعيل الوضع الليلي";
      document.body.appendChild(toast);
    }

    // if(!document.querySelector(".toast")){
    //   let toast = document.createElement("p");
    //   toast.classList.add("toast");
    //   toast.textContent = "لراحه عينك يمكنك تفعيل الوضع الليلي";
    //   document.body.appendChild(toast);
    // }
  });
};
clickBtnBg();
