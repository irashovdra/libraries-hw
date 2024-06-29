import { addNumbers, showMessage } from "./test2";
addNumbers();

showMessage();

// ДЕФОЛТНИЙ ЕКСПОРТ

const test = () => {
  console.log("TEST");
};

export default test;
