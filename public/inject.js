(function () {
    const scriptTag = document.currentScript;
    const projectId = scriptTag?.dataset.projectId || "default";
    const tags = (scriptTag?.dataset.tags || "").split(",").filter(Boolean);
  
    const iframe = document.createElement("iframe");
    iframe.src = `https://widget-chatbot-two.vercel.app/widget?project_id= ${projectId}&tags=${encodeURIComponent(tags.join(","))}`;
    iframe.style.position = "fixed";
    iframe.style.bottom = "20px";
    iframe.style.right = "20px";
    iframe.style.width = "400px";
    iframe.style.height = "550px";
    iframe.style.border = "none";
    iframe.style.zIndex = "999999";
    iframe.style.borderRadius = "12px";
    iframe.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
    iframe.style.transition = "transform 0.2s ease-in-out";
  
    // Optional hover effect
    iframe.addEventListener("mouseenter", () => {
      iframe.style.transform = "scale(1.02)";
    });
    iframe.addEventListener("mouseleave", () => {
      iframe.style.transform = "scale(1)";
    });
  
    document.body.appendChild(iframe);
  })();