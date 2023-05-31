const commentInput = document.getElementById("comment");
const commentText = document.querySelector("#comment-text");
const commentSubmit = document.querySelector("#comment-submit");
const deleteComment = document.querySelector("#delete-button");

commentSubmit.onclick = () => {
  commentText.innerHTML = commentInput.value;
  commentInput.value = "";
};


deleteComment.onclick= ()=>{

    commentText.innerHTML = ''
}