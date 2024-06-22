document.addEventListener("DOMContentLoaded", () => {
  const keys = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";"];
  let currentKeyIndex = 0;

  const keyElement = document.getElementById("key");
  const newGameButton = document.getElementById("newGameButton");

  function setNewKey() {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    keyElement.textContent = keys[currentKeyIndex];
  }

  function handleKeydown(event) {
    if (event.key.toUpperCase() === keys[currentKeyIndex]) {
      PNotify.success({
        text: "Правильна клавіша!",
        delay: 2000,
      });
      setNewKey();
    } else {
      PNotify.error({
        text: "Неправильна клавіша. Спробуйте ще раз!",
        delay: 2000,
      });
    }
  }

  function handleKeypress(event) {
    event.preventDefault();
  }

  newGameButton.addEventListener("click", () => {
    PNotify.info({
      text: "Нова гра розпочата!",
      delay: 2000,
    });
    setNewKey();
  });

  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("keypress", handleKeypress);

  // Перший виклик для встановлення початкової клавіші
  setNewKey();
});
