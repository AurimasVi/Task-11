const displayData = (data) => {
  const tableBodyElement = document.querySelector("tbody");

  data.forEach((element) => {
    const trElement = document.createElement("tr");
    trElement.classList.add("added");
    trElement.classList.add(`${element.id}`);

    // ID table data
    const idElement = document.createElement("td");
    idElement.classList.add("id-data");
    idElement.textContent = element.id;

    // skill table data
    const skillElement = document.createElement("td");
    skillElement.classList.add("skill-data");
    skillElement.textContent = element.skill;

    // delete button
    const actionElement = document.createElement("td");
    actionElement.classList.add("action-element");
    const actionBtn = document.createElement("button");
    actionBtn.classList.add(`${element.id}`);
    actionBtn.textContent = "DELETE";

    actionElement.append(actionBtn);

    trElement.append(idElement, skillElement, actionElement);

    tableBodyElement.append(trElement);
  });
};

export { displayData };
