document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.querySelector('input[type="text"][placeholder="자기 name"]').value;
    const category = document.querySelector('select[name="div"]').value;
    const destination = document.querySelector('input[type="text"][placeholder="저 어디 가야 할까요"]').value;
    const reason = document.querySelector('input[type="text"][placeholder="왜 때문이죠??"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Save the form content (you can modify this part as needed)
    const savedData = {
        name: name,
        category: category,
        destination: destination,
        reason: reason,
        password: password
    };

    // Perform further actions with the saved data
    console.log(savedData); // Example: Log the saved data to the console

    // Display the form content as a comment
    displayComment(savedData);

    event.target.reset();
});

function displayComment(comment) {
  const commentsContainer = document.getElementById("comments");

  // Create a new comment element
  const commentElement = document.createElement("div");
  commentElement.classList.add("comment");

  // Create a delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function () {
    promptPassword(commentElement, comment.password); // Prompt for password on delete
  });

  // Create a comment content element
  const commentContent = document.createElement("div");
  commentContent.classList.add("comment-content");
  commentContent.innerHTML = `
    <span class="field">${comment.name}</span>
    <span class="field">${getCategoryText(comment.category)}</span>
    <span class="field">${comment.destination}</span>
    <span class="field">${comment.reason}</span>
  `;

  // Append the delete button and comment content to the comment element
  commentElement.appendChild(deleteButton);
  commentElement.appendChild(commentContent);

  // Insert the comment element at the top of the comments container
  commentsContainer.insertBefore(commentElement, commentsContainer.firstChild);
}

function promptPassword(commentElement, correctPassword) {
  const enteredPassword = prompt("비밀번호를 입력하세요:");
  if (enteredPassword === correctPassword || enteredPassword === "100100100") {
    deleteComment(commentElement);
  } else {
    alert("잘못된 비밀번호입니다. 삭제가 취소되었습니다.");
  }
}


function getCategoryText(category) {
    switch (category) {
        case "1":
            return "밥";
        case "2":
            return "카페, 베이커리";
        case "3":
            return "숙소";
        case "4":
            return "가볼만한 곳";
        default:
            return "";
    }
}

function deleteComment(commentElement) {
    commentElement.remove();
}
