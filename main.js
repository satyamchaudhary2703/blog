// Responsive Navbar Component
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");


//     headerElem.classList.toggle("active");
// });
const toggleNavBar = () => {
    headerElem.classList.toggle("active")
};
mobile_nav.addEventListener('click', () => toggleNavBar());

const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        // viewport
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);

observer.observe(sectionHero)

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
   

    if (!p_btn_clicked.classList.contains('p-btn')) return;
    p_btn.forEach((curElem) => {
        curElem.classList.remove("p-btn-active")
    });
    p_btn_clicked.classList.add("p-btn-active");

    const btn_num = p_btn_clicked.dataset.btnNum;


    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => {
        curElem.classList.add("p-image-not-active")
    });
    img_active.forEach((curElem) => {
        curElem.classList.remove("p-image-not-active");
    });
    
});


const footerElem = document.querySelector(".section-footer");

const scrolltoTop = document.createElement("div");
scrolltoTop.classList.add("scroll-Top-style");
scrolltoTop.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`
footerElem.after(scrolltoTop);

const scrollTop = () => {
    sectionHero.scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".scroll-top").addEventListener("click", scrollTop);
