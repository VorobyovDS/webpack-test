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

/*
(function () {
    let hello ="hello word";
    let temp, i;
    let j = hello.length-1;
    console.log(hello.split(""));



    function revers() {
        let hello1= hello.split("");
        for(i=0; i<j; i++, j--) {
        temp=hello1[i];
        hello1[i]=hello1[j];
        hello1[j]=temp;
        console.log("test"+hello1);
        }
        console.log(hello1.join(""));
    }
    revers();

})();*/
