(function () {
  const scriptTag = document.currentScript;
  const projectId = scriptTag?.dataset.projectId || "default";
  const tags = (scriptTag?.dataset.tags || "").split(",").filter(Boolean);

  const iframe = document.createElement("iframe");
  iframe.src = `https://gregarious-malasada-46a300.netlify.app/widget?project_id=${projectId}&tags=${encodeURIComponent(tags.join(","))}`;
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "430px";
  iframe.style.height = "480px";
  iframe.style.border = "none";
  iframe.style.zIndex = "999999";
  iframe.style.borderRadius = "12px";
  iframe.style.backgroundColor = "transparent"; // 👈 Set transparent background
  iframe.allowTransparency = true; // 👈 For legacy browser support

  document.body.appendChild(iframe);
})();