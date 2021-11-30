import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得して、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

const createIncompleteList = (text) => {
  // create div
  const div = document.createElement("div");
  div.className = "list-row";

  // create li
  const li = document.createElement("li");
  li.innerText = text;

  // create complete button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromIncompletelist(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
  });
  // create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompletelist(deleteButton.parentNode);
  });

  // delete incomplete lis
  const deleteFromIncompletelist = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  };
  // append li
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // create new list
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
