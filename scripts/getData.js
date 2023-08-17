const BASE_URL = "https://melon-potent-period.glitch.me/skills";
const memory = [];

const getData = async () => {
  try {
    const response = await fetch(BASE_URL);
    let data = await response.json();

    data.forEach((element) => memory.push(element));
    return memory;
  } catch (error) {
    alert(error);
  }
};
export { getData, memory };
