document.getElementById("view-history").addEventListener("click", () => {
  chrome.storage.local.get("history", (result) => {
    const history = result.history || [];
    const log = document.getElementById("history-log");
    log.innerHTML = "";
    history.slice(-10).reverse().forEach((entry) => {
      const li = document.createElement("li");
      li.textContent = `${entry.time}: from ${new URL(entry.from).hostname} to ${new URL(entry.to).hostname}`;
      log.appendChild(li);
    });
  });
});
