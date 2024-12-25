const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you so much my Genesis!!!";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
});

// Give a message button above the gif, hide it first and show it when the Yes button is clicked
const messageBtn = document.createElement("button");
messageBtn.innerHTML = "This is a message for you, Genesis!";
messageBtn.style.color = "#e94d58";
messageBtn.style.textAlign = "center";
messageBtn.classList.add("message-btn");
messageBtn.style.display = "none"; // Hide the button initially
messageBtn.style.margin = "0 auto"; // Center the button
messageBtn.style.display = "block"; // Center the button
messageBtn.addEventListener("click", () => {
  alert("You are my everything, Genesis! I will wait for you and I will always make my love for you grow stronger every day. I love you so much!");
});
gif.insertAdjacentElement("beforebegin", messageBtn);
messageBtn.style.display = "none"; // Hide the button initially

// Show the message button when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you so much my Genesis!!!";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGI1cW5wMWhpaDF5b3pjdTF0OHZrcHJvaGkzOHJteDhmd245OGRnZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Vuw9m5wXviFIQ/giphy.gif";
  messageBtn.style.display = "block"; // Show the button
});



// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
