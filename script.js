const runButton = document.getElementById("run-button");
const codeEditor = document.getElementById("code-editor");
const outputFrame = document.getElementById("output-frame");

runButton.addEventListener("click", () => {
  const code = codeEditor.value;
  const iframeDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(code);
  iframeDoc.close();
});
