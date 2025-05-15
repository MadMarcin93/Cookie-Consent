(() => {
  const cookieBox = document.querySelector(".wrapper");
  buttons = document.querySelectorAll(".button");

  const executeCodes = () => {
    if (document.cookie.includes("roadmap.sh")) return;
    cookieBox.classList.add("show");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        cookieBox.classList.remove("show");

        // If button has id 'acceptBtn'
        if (button.id === "acceptBtn") {
          document.cookie =
            "cookieBy = roadmap.sh; max-age=" + 60 * 60 * 24 * 30;
        }
      });
    });
  };

  //executeCode functiuon will be called on webpage load
  window.addEventListener("load", executeCodes);
})();
