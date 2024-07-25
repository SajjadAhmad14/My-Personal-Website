const work = document.querySelector(".work");
const project1Btn = document.getElementById("project1-show");
const project2Btn = document.getElementById("project2-show");
const project3Btn = document.getElementById("project3-show");
const project4Btn = document.getElementById("project4-show");
const project1Desktop = document.getElementById("desktop-project1-show");
const project2Desktop = document.getElementById("desktop-project2-show");
const project3Desktop = document.getElementById("desktop-project3-show");
const project4Desktop = document.getElementById("desktop-project4-show");
const body = document.querySelector("body");
const headline = document.querySelector(".headline");

const projects = [
  (project1 = {
    name: "Stepsify",
    description:
      "This is a steps tracker app. User can set a running target and add steps to meet daily target. User can see progess and stats.",
    featuredImage: "./assets/stepsify.png",
    featuredImageDesktop: "./assets/project1-desktop.png",
    technologies: ["RoR", "React", "javascript"],
    liveLink: "",
    sourceLink: "",
  }),
  (project2 = {
    name: "Foodie",
    description:
      "This app is a food search app. User can search for food by selecting a food category.",
    featuredImage: "./assets/project-2.png",
    featuredImageDesktop: "./assets/project1-desktop.png",
    technologies: ["html", "css", "javascript"],
    liveLink: "",
    sourceLink: "",
  }),
  (project3 = {
    name: "Tonic",
    description: "",
    featuredImage: "",
    featuredImageDesktop: "./assets/project1-desktop.png",
    technologies: "",
    liveLink: "",
    sourceLink: "",
  }),
  (project4 = {
    name: "Multi-Post Stories",
    description: "",
    featuredImage: "",
    featuredImageDesktop: "./assets/project1-desktop.png",
    technologies: "",
    liveLink: "",
    sourceLink: "",
  }),
];
let projectName = "";
let projectImg = "";
let projectDescription = "";
let projectTechs = [];
const popUpMobile = document.createElement("div");
const desktopPopUp = document.createElement("div");
popUpMobile.classList.add("pop-up-mobile");
desktopPopUp.classList.add("pop-up-desktop");
popUpMobile.innerHTML = `
  <div class="work-card poppins" id = "popup-card">
    <h3 id = "project-name">${project1.name}</h3>
    <div class="role poppins" id = "margin" >
      <h4>CANOPY</h4>
      <ul>
        <li>Back End Dev</li>
        <li>2015</li>
      </ul>
    </div>
    <div><img src=${project1.featuredImage} alt="project1-image" id = "popup-image-mobile"/></div>
    <p>${project1.description}</p>
    <ul class="work-languages" id = "popup-techs">
      <li class="lang-items">
      ${project1.technologies[0]}
      </li>
      <li class="lang-items">
      ${project1.technologies[1]}
      </li>
      <li class="lang-items">
      ${project1.technologies[2]}
      </li>
    </ul>
    <div id = "popup-btns">
      <button type="button" id = "live-btn-mobile">See live<img src = "./assets/live.png" alt = "live demo" id = "live-icon"></button>
      <button type="button" id = "source-btn-mobile">See Source <img src = "./assets/git.png" alt = "live demo" id = "live-icon"> </button>
    <div>
  </div>
  <i class="fa-solid fa-xmark pop-close"></i>`;
body.append(popUpMobile);
desktopPopUp.innerHTML = `<div class = "poppins">
<div id = "popup-card-desktop">
<h3 id = "project-name-large">${project1.name}</h3>
<i class="fa-solid fa-xmark pop-close-large"></i>
<ul class="role-large poppins">
   <li id = "role-name">CANOPY</li>
   <li>Back End Dev</li>
  <li>2015</li>
</ul>
<div><img src=${project1.featuredImage} alt="project1-image" id = "popup-image-large"/></div>
<div class = "project-large-details">
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry.
</p>
<ul class="work-languages" id = "popup-techs">
      <li class="lang-items">
      ${project1.technologies[0]}
      </li>
      <li class="lang-items">
      ${project1.technologies[1]}
      </li>
      <li class="lang-items">
      ${project1.technologies[2]}
      </li>
    </ul>
</div>
<div id = "popup-btns-large">
<button type="button" id = "live-btn-large">See live<img src = "./assets/live.png" alt = "live demo" id = "live-icon-large"></button>
<button type="button" id = "source-btn-large">See Source <img src = "./assets/git.png" alt = "live demo" id = "live-icon-large"> </button>
<div>
</div> 
`;
body.append(desktopPopUp);
popUpMobile.style.display = "none";
desktopPopUp.style.display = "none";
const showAndBlur = () => {
  popUpMobile.style.display = "block";
  desktopPopUp.style.display = "block";
  body.classList.add("overflow");
  work.classList.add("blur-work");
};

project1Btn.addEventListener("click", () => {
  document.getElementById("project-name").innerText = project1.name;
  document.getElementById("popup-image-mobile").src = "./assets/project-1.png";
  showAndBlur();
});
project2Btn.addEventListener("click", () => {
  document.getElementById("project-name").innerText = project2.name;
  document.getElementById("popup-image-mobile").src = "./assets/project-2.png";
  showAndBlur();
});
project3Btn.addEventListener("click", () => {
  document.getElementById("project-name").innerText = project3.name;
  document.getElementById("popup-image-mobile").src = "./assets/project3.png";
  showAndBlur();
});
project4Btn.addEventListener("click", () => {
  document.getElementById("project-name").innerText = project4.name;
  document.getElementById("popup-image-mobile").src = "./assets/project4.png";
  showAndBlur();
});
project1Desktop.addEventListener("click", () => {
  console.log("test")
  showAndBlur();
  popUpMobile.style.display = "none";
  work.classList.add("blur-work-desktop");
  headline.classList.add("blur-headline");
  document.getElementById("project-name-large").innerText = project1.name;
  document.getElementById("popup-image-large").src =
    "./assets/project1-popup-img.png";
});
project2Desktop.addEventListener("click", () => {
  showAndBlur();
  popUpMobile.style.display = "none";
  work.classList.add("blur-work-desktop");
  headline.classList.add("blur-headline");
  document.getElementById("project-name-large").innerText = project2.name;
  document.getElementById("popup-image-large").src =
    "./assets/project1-popup-img.png";
});
project3Desktop.addEventListener("click", () => {
  showAndBlur();
  popUpMobile.style.display = "none";
  work.classList.add("blur-work-desktop");
  headline.classList.add("blur-headline");
  document.getElementById("project-name-large").innerText = project3.name;
  document.getElementById("popup-image-large").src =
    "./assets/project1-popup-img.png";
});
project4Desktop.addEventListener("click", () => {
  showAndBlur();
  popUpMobile.style.display = "none";
  work.classList.add("blur-work-desktop");
  headline.classList.add("blur-headline");
  document.getElementById("project-name-large").innerText = project4.name;
  document.getElementById("popup-image-large").src =
    "./assets/project1-popup-img.png";
});
closePopup = document.querySelector(".pop-close");
closePopup.addEventListener("click", () => {
  popUpMobile.style.display = "none";
  body.classList.remove("overflow");
  work.classList.remove("blur-work");
});

closePopupLarge = document.querySelector(".pop-close-large");
closePopupLarge.addEventListener("click", () => {
  desktopPopUp.style.display = "none";
  removePopUp();
});

const removePopUp = () => {
  body.classList.remove("overflow");
  work.classList.remove("blur-work");
  work.classList.remove("blur-work-desktop");
  headline.classList.remove("blur-headline");
}

  // console.log(resumeBtn)
