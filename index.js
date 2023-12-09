// const navbar = 
//     document.querySelector('.navbar');
// let lastScrollTop = 0;

// window.addEventListener(
//     "scroll", 
//     () => {
//     var { pageYOffset } = window;
//     if (pageYOffset > lastScrollTop) {
//         // downward scroll
//         navbar.classList.remove("visible");
//     } else if (pageYOffset < lastScrollTop) {
//         // upwards scroll
//         navbar.classList.add("visible");
//     } 
//     lastScrollTop = 
//         pageYOffset <= 0 ? 0 : pageYOffset;
//     },
//     { passive: true }

// async function myasync() {
//     // return "hello world" 
//     return Promise.resolve("hello world"); 
// }
// myasync().then((data)=>{
//     console.log(data);
// })


const button = document.querySelector('.butt');

button.addEventListener("click", setDark);

function setDark() {
    document.body.style.background = "black";

}