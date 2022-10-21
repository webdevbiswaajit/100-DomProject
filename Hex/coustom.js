// Project Requairment
// 1.Changing the background color by genareting rgb color by clicking button

//stape:1--Create onload Handelar
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("changeBtn");
  const output = document.getElementById("output");
  changeBtn.addEventListener("click", function () {
    const bgColor = generateHexColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });
}
//stape:2--Create Color genaretor Function

function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

//stape:3--Collect All Necessary Reference

//stape:4 --Handel The Click Event
