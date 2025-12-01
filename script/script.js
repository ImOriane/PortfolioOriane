function urlPrevious() {
    var p = sessionStorage.getItem('url_prev');
    p = p ? p : '';
    sessionStorage.setItem('url_prev', location.href);
    return p;
}
function fadeBackground (pageActuel) {
    pagePrecedente=urlPrevious();
    if (pagePrecedente.includes("index.html")) {
      if (pageActuel !== "index.html") {
          document.querySelector("#bg").classList.add("bgfadeOut");
      }
    } else {
      if (pageActuel === "index.html") {
          document.querySelector("#bg").classList.add("bgfadeIn");
      }
    }
  }


