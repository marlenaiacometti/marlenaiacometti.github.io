
const btn = document.querySelector("button");
btn.addEventListener("click", () =>
  displayMessage("Your inbox is almost full — delete some emails!", "warning"),
);


function displayMessage(msgText, msgType) {
  const body = document.body;

  const panel = document.createElement("div");
  panel.setAttribute("class", "msgBox");
  body.appendChild(panel);

  const msg = document.createElement("p");
  msg.textContent = msgText;
  panel.appendChild(msg);

  const closeBtn = document.createElement("button");
  closeBtn.textContent = "x";
  panel.appendChild(closeBtn);

  closeBtn.addEventListener("click", () =>
    panel.parentNode.removeChild(panel),
  );

  if (msgType === "warning") {
    msg.style.backgroundImage = "url(icons/warning.png)";
    panel.style.backgroundColor = "#f55858";
  } else if (msgType === "chat") {
    msg.style.backgroundImage = "url(icons/chat.png)";
    panel.style.backgroundColor = "#a6dec4";
  } else {
    msg.style.paddingLeft = "20px";
  }
}