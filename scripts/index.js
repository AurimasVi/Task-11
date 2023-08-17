import { getData, memory } from "./getData.js";
import { displayData } from "./displayData.js";
import { deleteItem } from "./delete.js";

const display = async () => {
  try {
    await getData();
    if (memory.length === 0) {
      document.querySelector(
        "tbody"
      ).innerHTML = `No skills to show. First, add skills...`;
    }
    displayData(memory);
    deleteItem();
  } catch (err) {
    alert(err);
  }
};

display();
