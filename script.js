// Todo: Make M+ M- and MC functional
const input = document.querySelector(".input")
const buttons = document.querySelectorAll(".button")
let string = "";
const inp = document.querySelector('input')

buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
        // console.log("clicked")
        // console.log(btn.textContent)
        if (e.target.innerHTML == "=") {
            string = eval(string)
            // alert()
            inp.value = string
        } else if (e.target.innerHTML == 'C') {
            string = ""; inp.value = "";
        } else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            // console.log(string)
            inp.value = string;
        }
    })
});


