(function () {
    let el = document.querySelector(".title-link")
    let el_text = document.querySelector(".title-link .title");

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    el.onclick = function (e) {
        e.preventDefault();
        el_text.style.color= getRandomColor();
    }
})();