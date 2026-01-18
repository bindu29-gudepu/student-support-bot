async function sendMessage() {
  let inputField = document.getElementById("userInput");
  let msg = inputField.value.trim();
  if (!msg) return;

  // Show user message
  document.getElementById("chatBox").innerHTML += 
    `<p class="user"><b>You:</b> ${msg}</p>`;
  inputField.value = "";

  // Send to backend
  let res = await fetch("/chat", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({message: msg})
  });

  let data = await res.json();

  // Show bot reply
  document.getElementById("chatBox").innerHTML += 
    `<p class="bot"><b>Bot:</b> ${data.reply}</p>`;

  // Auto-scroll
  let chatBox = document.getElementById("chatBox");
  chatBox.scrollTop = chatBox.scrollHeight;
}
