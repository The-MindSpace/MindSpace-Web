// Back-Top Button
document.addEventListener("scroll", function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const backToTopButton = document.querySelector(".back-to-top");

    // show/hide back to top button based on scroll position
    if (scrollTop > 50) {
        document.body.classList.add("scroll-down");
    } else {
        document.body.classList.remove("scroll-down");
    }
});

/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    document.querySelector("nav").style.color = "black";
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

// Function to scroll to the top when the button is clicked
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}