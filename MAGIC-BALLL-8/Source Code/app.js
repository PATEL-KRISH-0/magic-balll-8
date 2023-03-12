let btn = document.querySelector('.btn');
let d_b = document.body
let arr = ["Yes", "Off Course", "No", "Never"];

btn.onclick = () => {

    let q = prompt("Type any yes/no question");
    console.log(q);
    // IF USER WILL ENTER NOTHING
    if (q == "") {
        alert("Plese enter somthing and try again")
    }

    else {

        let b_8 = d_b.querySelector(".ball");
        b_8.style.animation = "shake 0.5s"


        setTimeout(() => {

            let number1 = Math.floor(Math.random() * 4);
            let text1 = document.querySelector(".b-8")
            text1.innerHTML = arr[number1];

            //FONT SIZE FOR MOBLE 
            if (screen.width < 636) {
                if (number1 == 1) {
                    text1.style.fontSize = "4rem";
                }
                else if (number1 == 3) {
                    text1.style.fontSize = "7rem";
                }
                else {
                    text1.style.fontSize = "10rem";
                }
            }
            //FONT SIZR FOR PC 
            else {
                if (number1 == 1) {
                    text1.style.fontSize = "5rem";
                }
                else {

                    text1.style.fontSize = "10rem";
                }
            }

            b_8.style.animation = "none"
        }, 500);
    }
}