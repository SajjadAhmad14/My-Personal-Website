const btn = document.getElementById("ham");
const background = document.getElementById("background");
headline = document.querySelector(".headline");
background.style.display = "none";
body = document.querySelector("body");
btn.addEventListener("click", () => {
  headline.classList.add("blur-headline");
  logo = document.getElementById("logo");
  btnContainer = document.querySelector(".hamburger-container");
  logo.style.display = "none";
  btnContainer.style.display = "none";
  background.style.display = "block";
  body.classList.add("overflow");
});

close = document.querySelector(".close");
close.addEventListener("click", () => {
  logo.style.display = "block";
  btnContainer.style.display = "block";
  background.style.display = "none";
  headline.classList.remove("blur-headline");
  body.classList.remove("overflow");
});

document.querySelectorAll(".overlay-nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    background.style.display = "none";
    body.classList.remove("overflow");
    headline.classList.remove("blur-headline");
    logo.style.display = "block";
    btnContainer.style.display = "block";
  });
});

form = document.querySelector(".contact-form");
const email = document.getElementById("email");
const userName = document.getElementById("name");
let emailValue = "";
email.addEventListener("change", (e) => {
  emailValue = e.target.value;
});

form.addEventListener("submit", (e) => {
  if (emailValue.toLowerCase() !== emailValue) {
    e.preventDefault();
    const para = document.createElement("span");
    para.innerText = `Email is invalid! Please add all lower case!`;
    para.classList.add("validation-error");
    form.appendChild(para);
  }
});

email.addEventListener("change", () => {
  localStorage.setItem("email", email.value);
});

userName.addEventListener("change", () => {
  localStorage.setItem("name", userName.value);
});

emailVal = localStorage.getItem("email");
nameVal = localStorage.getItem("name");
if (localStorage.getItem("email") == null || localStorage.getItem("email") == "") {
  email.value = "Your email";
  console.log("if email")
  console.log(email.value)
} else {
  email.value = emailVal;
  console.log("else email")
  console.log(typeof(email.value))
}

if (localStorage.getItem("name") == null || localStorage.getItem("name") == "") {
  userName.value = "Your name";
  console.log("if name")
  console.log(userName.value)

} else {
  userName.value = nameVal;
  console.log("else name")
  console.log(typeof(userName.value))
}
