
const btnNav = document.querySelectorAll(".btn-nav");

btnNav.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        const destino = link.getAttribute("data-target");
        const secao = document.getElementById(destino);

        window.scroll({
            top: secao.offsetTop,
            behavior: "smooth"
        })
        console.log("destino: " + destino);
    })
})