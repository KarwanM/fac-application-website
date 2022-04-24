const themeSelector = () =>{
    const selectTheme = document.getElementById("selectTheme");
    const themeProvider = document.getElementById("themeProvider");

    const activeTheme = (theme) =>{
        themeProvider.setAttribute("href", `./themes/${theme}.css`)
    }

    selectTheme.addEventListener("change", () =>{
        activeTheme(selectTheme.value)
    })
}

themeSelector();

let currentSlide = 0;
const slides = document.getElementsByClassName("requirement");

slides[currentSlide].style.display = "block";

const timer = setInterval(() => {
  if (currentSlide === 3) {
    currentSlide = 0;
    for (i = 0; i < slides.length; i++) {
      if (i === currentSlide) {
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
  } else {
    currentSlide = currentSlide + 1;
    for (i = 0; i < slides.length; i++) {
      if (i === currentSlide) {
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
  }
}, 3000);

const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = 3;
    for (i = 0; i < slides.length; i++) {
      if (i === currentSlide) {
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
  } else {
    currentSlide = currentSlide - 1;
    for (i = 0; i < slides.length; i++) {
      if (i === currentSlide) {
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
  }
};

const nextSlide = () => {
  if (currentSlide === 3) {
    currentSlide = 0;
    for (i = 0; i < slides.length; i++) {
      if (i === currentSlide) {
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
  } else {
    currentSlide = currentSlide + 1;
    for (i = 0; i < slides.length; i++) {
      if (i === currentSlide) {
        slides[i].style.display = "block";
      } else {
        slides[i].style.display = "none";
      }
    }
  }
};
