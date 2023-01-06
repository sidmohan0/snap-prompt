// Add a click event listener to the snapshot button
document.getElementById("snapshot-button").addEventListener("click", function() {
  // Take a snapshot of the current tab
  chrome.tabs.captureVisibleTab(null, {}, function(dataUrl) {
    // Convert the snapshot to a blob
    var blob = dataUrlToBlob(dataUrl);
    // Extract the text from the snapshot using OpenAI's API
    extractText(blob, function(text) {
      // Display the extracted text in a code block
      var output = document.getElementById("output");
      output.innerHTML = "<pre><code>" + text + "</code></pre>";
      // Add a copy button
      var copyButton = document.createElement("button");
      copyButton.innerHTML = "Copy";
      copyButton.addEventListener("click", function() {
        // Copy the text to the clipboard
        copyToClipboard(text);
      });
      output.appendChild(copyButton);
    });
  });
});

// Convert a data URL to a blob
function dataUrlToBlob(dataUrl) {
  var parts = dataUrl.split(",");
  var contentType = parts[0].split(":")[1];
  var raw = window.atob(parts[1]);
  var rawLength = raw.length;
  var uInt8Array = new Uint8Array(rawLength);
  for (var i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
 
