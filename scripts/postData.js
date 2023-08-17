const BASE_URL = "https://melon-potent-period.glitch.me/skills";

const postData = async (data) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    alert(error);
  }
};

export { postData };
