import { postData } from "./postData.js";

const form = document.querySelector("#form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const skillField = document.querySelector("#input-skill");
  let inputValue = skillField.value;
  try {
    await postData({ skill: inputValue });
    window.location.href = "index.html";
  } catch (error) {
    alert(error);
  }
});
