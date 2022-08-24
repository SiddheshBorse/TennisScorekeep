
const player1 = document.querySelector("#player1")
const player2 = document.querySelector("#player2")
const selector = document.querySelector('#winner');
const btn1 = document.querySelector('#inc');
const btn2 = document.querySelector('#dec');
const btn3 = document.querySelector('#res');
let winningscore = 1;
let p1score = 0;
let p2score = 0;
selector.addEventListener("input", (e) => {
    winningscore = selector.value;
    console.log(winningscore)
})
btn1.addEventListener("click", () => {
    p1score += 1;
    player1.innerText = p1score;
    if (p1score == winningscore) {
        player1.style.color = 'green';
        player2.style.color = 'red';

        btn1.setAttribute("disabled", "");
        btn2.setAttribute("disabled", "");


    }
})
btn2.addEventListener("click", () => {
    p2score += 1;
    player2.innerText = p2score;
    if (p2score == winningscore) {
        player2.style.color = 'green';
        player1.style.color = 'red';

        btn1.setAttribute("disabled", "");
        btn2.setAttribute("disabled", "");


    }
})
btn3.addEventListener("click", () => {
    p1score = 0;
    p2score = 0;
    btn1.removeAttribute("disabled", "");
    btn2.removeAttribute("disabled", "");
    player1.innerText = 0;
    player2.innerText = 0;
    player2.style.color = 'black';
    player1.style.color = 'black';

})


