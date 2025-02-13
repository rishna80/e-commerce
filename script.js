document.addEventListener("DOMContentLoaded", function () {
    const navBar = document.getElementById("navBar");
    const bar = document.getElementById("bar");
    const closeBtn = document.getElementById("close");
    
    if (bar && navBar) {
        bar.addEventListener("click", function () {
            navBar.style.right = "0px";
        });
    }
    
    if (closeBtn && navBar) {
        closeBtn.addEventListener("click", function () {
            navBar.style.right = "-300px";
        });
    }
});
