const changecolor = () => {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    const navBar = document.getElementById("navBar");
    navBar.classList.add("changeColorNav");
    const BtnNavBar = document.getElementById("btnNavBar");
    BtnNavBar.classList.add("changeColorNavBtn");
  } else {
    const navBar = document.getElementById("navBar");
    navBar.classList.remove("changeColorNav");
    const BtnNavBar = document.getElementById("btnNavBar");
    BtnNavBar.classList.remove("changeColorNavBtn");
  }
};
window.onscroll = function () {
  changecolor();
};

let i = 0;

setInterval(() => {
  i = Math.floor(Math.random() * 2000);
  const svgM = document.getElementsByTagName("g")[i + 2];
  if (svgM.style.opacity === "1") {
    svgM.style.opacity = "0";
  } else {
    svgM.style.opacity = "1";
  }
}, 5);
