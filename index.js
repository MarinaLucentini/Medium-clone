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
