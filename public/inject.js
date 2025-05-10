(function () {
    // Create floating button
    const button = document.createElement("button");
    button.innerText = "💬";
    button.style.position = "fixed";
    button.style.bottom = "20px";
    button.style.right = "20px";
    button.style.zIndex = "999998";
    button.style.fontSize = "24px";
    button.style.backgroundColor = "#1d4ed8"; // Tailwind blue-700
    button.style.color = "white";
    button.style.border = "none";
    button.style.borderRadius = "50%";
    button.style.width = "60px";
    button.style.height = "60px";
    button.style.cursor = "pointer";
    button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
    button.title = "Open Chat";
  
    // Create iframe (but don't append yet)
    const iframe = document.createElement("iframe");
    iframe.src = "https://yourdomain.com/widget "; // Change this to your deployed URL
    iframe.id = "chatbot-iframe";
    iframe.style.position = "fixed";
    iframe.style.bottom = "90px";
    iframe.style.right = "20px";
    iframe.style.width = "400px";
    iframe.style.height = "600px";
    iframe.style.borderRadius = "12px";
    iframe.style.border = "none";
    iframe.style.zIndex = "999999";
    iframe.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
    iframe.style.display = "none";
  
    // On click: show iframe, hide button
    button.onclick = () => {
      iframe.style.display = "block";
      button.style.display = "none";
    };
  
    // Optional: Add close button inside iframe or handle removal
    window.addEventListener("message", (event) => {
      if (event.data === "closeChat") {
        iframe.style.display = "none";
        button.style.display = "block";
      }
    });
  
    // Append both to body
    document.body.appendChild(iframe);
    document.body.appendChild(button);
  })();