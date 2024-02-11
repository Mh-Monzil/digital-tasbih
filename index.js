const greenBtn1 = document.getElementById("btn-green-1");
const redBtn1 = document.getElementById("btn-red-1");
const subhanAllah = document.getElementById("card-1-count");
const greenBtn2 = document.getElementById("btn-green-2");
const redBtn2 = document.getElementById("btn-red-2");
const alhamdulillah = document.getElementById("card-2-count");
const greenBtn3 = document.getElementById("btn-green-3");
const redBtn3 = document.getElementById("btn-red-3");
const Allahuakbar = document.getElementById("card-3-count");
const resetAll = document.getElementById("reset-all");


let cardCount1 = 0;
greenBtn1.addEventListener('click', () => {
    let count1 = subhanAllah.innerText;
    let numberCount1 = parseInt(count1);
    cardCount1 = numberCount1 + 1;
    // console.log(cardCount1);

    subhanAllah.innerText = cardCount1;
})

redBtn1.addEventListener('click', () => {
    let count1 = subhanAllah.innerText;
    let numberCount1 = parseInt(count1);
    if(numberCount1 > 0){
        cardCount1 = numberCount1 - 1;
        // console.log(cardCount1);
        subhanAllah.innerText = cardCount1;
    }
    else{
        alert("you can't added negative value");
    }
    
})




let cardCount2 = 0;
greenBtn2.addEventListener('click', () => {
    let count2 = alhamdulillah.innerText;
    let numberCount2 = parseInt(count2);
    cardCount2 = numberCount2 + 1;
    // console.log(cardCount2);

    alhamdulillah.innerText = cardCount2;
})

redBtn2.addEventListener('click', () => {
    let count2 = alhamdulillah.innerText;
    let numberCount2 = parseInt(count2);
    if(numberCount2 > 0){
        cardCount2 = numberCount2 - 1;
        // console.log(cardCount2);
        alhamdulillah.innerText = cardCount2;
    }
    else{
        alert("you can't added negative value");
    }
    
})



let cardCount3 = 0;
greenBtn3.addEventListener('click', () => {
    let count3 = Allahuakbar.innerText;
    let numberCount3 = parseInt(count3);
    cardCount3 = numberCount3 + 1;
    // console.log(cardCount3);

    Allahuakbar.innerText = cardCount3;
})

redBtn3.addEventListener('click', () => {
    let count3 = Allahuakbar.innerText;
    let numberCount3 = parseInt(count3);
    if(numberCount3 > 0){
        cardCount3 = numberCount3 - 1;
        // console.log(cardCount3);
        Allahuakbar.innerText = cardCount3;
    }
    else{
        alert("you can't added negative value");
    }
    
})


resetAll.addEventListener('click', () => {
    subhanAllah.innerText = 0;
    alhamdulillah.innerText = 0;
    Allahuakbar.innerText = 0;
})