const deleteItem = () => {
  const deleteBtns = document.querySelectorAll("td button");

  deleteBtns.forEach((button) => {
    button.addEventListener("click", async () => {
      try {
        const itemClass = button.getAttribute("class");
        const response = await fetch(
          `https://melon-potent-period.glitch.me/skill/${itemClass}`,
          {
            method: "DELETE",
          }
        );
        window.location.href = "index.html";
        if (response.ok) {
          alert("Success, item deleted");
        } else {
          alert("Failed to delete item");
        }
      } catch (error) {
        alert(error);
      }
    });
  });
};

export { deleteItem };
