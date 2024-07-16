const navMenu = document.querySelector(".nav-menu");

function active() {
    navMenu.classList.toggle("active");
}

window.onscroll = () => {
    navMenu.classList.remove("active");
};

window.addEventListener('scroll', function() { 
    const header = this.document.querySelector('nav');
    header.classList.toggle('sticky', window.scrollY > 0);
});



