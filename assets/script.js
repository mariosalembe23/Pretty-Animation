"use strict";

const ActivePanel = (activeClassSide, inactiveClassSide, classNameElement) => {
  const Panel = document.querySelector(`.${classNameElement}`);
  const backScreen = document.querySelector(".backScreen");
  backScreen.classList.remove("backScreenInactive");
  backScreen.classList.add("backScreenActive");
  Panel.classList.remove(inactiveClassSide);
  Panel.classList.add(activeClassSide);
};

const InactivePanel = (
  activeClassSide,
  inactiveClassSide,
  classNameElement
) => {
  console.log(activeClassSide, inactiveClassSide, classNameElement);
  const panel = document.querySelector(`.${classNameElement}`);
  const backScreen = document.querySelector(".backScreen");

  backScreen.classList.remove("backScreenActive");
  backScreen.classList.add("backScreenInactive");

  panel.classList.remove(`${activeClassSide}`);
  panel.classList.add(`${inactiveClassSide}`);

  setTimeout(() => {
    backScreen.classList.remove("backScreenInactive");
    backScreen.classList.add("backScreen");
  }, 500);
};

const MakeGeneralEffect = (
  activeClassSide,
  inactiveClassSide,
  classNameElement,
  statusEvent
) => {
  if (statusEvent === "active")
    ActivePanel(activeClassSide, inactiveClassSide, classNameElement);
  else InactivePanel(activeClassSide, inactiveClassSide, classNameElement);
};
