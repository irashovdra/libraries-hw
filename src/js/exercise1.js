import { notice, defaultModules } from "@pnotify/core";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/core/dist/PNotify.css";
defaultModules.set(PNotifyMobile, {});

const keys = ["A", "S", "D", "F", "J", "K", "L", ";", "W", "E"];
let currentKeyIndex = 0;

const keyElement = document.getElementById("key");
const newGameButton = document.getElementById("new-game");

function updateKey() {
  keyElement.textContent = keys[currentKeyIndex];
}

function startNewGame() {
  currentKeyIndex = 0;
  updateKey();
  notice({
    text: "Гра почалася! Натисніть правильну клавішу.",
    type: "info",
    delay: 2000,
  });
}

document.addEventListener("keydown", (event) => {
  const pressedKey = event.key.toUpperCase();
  if (pressedKey === keys[currentKeyIndex]) {
    currentKeyIndex++;
    if (currentKeyIndex < keys.length) {
      updateKey();
    } else {
      notice({
        text: "Ви виграли! Почніть нову гру.",
        type: "success",
        delay: 2000,
      });
    }
  } else {
    notice({
      text: "Неправильна клавіша! Спробуйте ще раз.",
      type: "error",
      delay: 2000,
    });
  }
});

document.addEventListener("keypress", (event) => {
  event.preventDefault();
});

newGameButton.addEventListener("click", startNewGame);

startNewGame();
