let myButton = document.querySelector("button");
let myHeading = document.querySelector("h2");

function setUserName() {
  let myName = prompt("请输入你的名字。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Hello," + myName;

  }
}

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Hello," + storedName;

  }
  
myButton.onclick = function () {
    setUserName();
  };
  