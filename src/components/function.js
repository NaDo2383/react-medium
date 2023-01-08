
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
        document.getElementsByTagName("nav").style.backgroundColor = "white"
    }
}