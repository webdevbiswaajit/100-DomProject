// Project Requairment
// 1.Changing the background color by genareting rgb color by clicking button

//stape:1--Create onload Handelar
window.onload = () => {
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("root");
  changeBtn.addEventListener("click", function () {
    const bgColor = generateRgbColor();
    root.style.backgroundColor = bgColor;
  });
};

function main() {}
//stape:2--Create Color genaretor Function

function generateRgbColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green}, ${blue})`;
}

//stape:3--Collect All Necessary Reference

//stape:4 --Handel The Click Event
