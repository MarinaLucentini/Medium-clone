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
  i++;
  const svgM = document.getElementsByTagName("g")[i];
  if (svgM.style.opacity === 1) {
    clearInterval();
  } else {
    svgM.style.opacity = "1";
  }
}, 50);
// almeno le m appaiono, non sono riuscita a farle ciclare ho provato di tutto
// lavorerò il fine settimana per il responsive e cercherò di far scomparire e animare meglio queste m
