const shareButton = document.querySelectorAll("a.share-button");

function displayShareSection() {
  const shareSectionDesktop = document.querySelector("#share-section-desktop");
  const shareSectionMobile = document.querySelector("#share-section-mobile");
  let screen = window.matchMedia("(min-width: 900px)");
  let buttonArrow = this.children[0].children[0];
  if (screen.matches && shareSectionDesktop.classList.contains("active")) {
    this.classList.remove("share-button--dark");
    buttonArrow.setAttribute("fill", "hsl(217, 19%, 35%)");
    shareSectionDesktop.classList.add("pop-out");
    setTimeout(() => {
      shareSectionDesktop.classList.remove("active", "pop-out");
    }, 500);
  } else if (screen.matches) {
    shareSectionDesktop.classList.add("active");
    this.classList.add("share-button--dark");
    buttonArrow.setAttribute("fill", "hsl(210, 46%, 95%)");
  } else if (shareSectionMobile.classList.contains("active")) {
    shareSectionMobile.classList.add("slide-down");
    setTimeout(() => {
      shareSectionMobile.classList.remove("active", "slide-down");
    }, 500);
  } else {
    shareSectionMobile.classList.add("active");
  }
}

for (i = 0; i < shareButton.length; i++) {
  shareButton[i].addEventListener("click", displayShareSection);
}
