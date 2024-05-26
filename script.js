let home_scoreEl = document.querySelector("#home_score");
let guest_scoreEl = document.querySelector("#guest_score");
let inc_Btn_p1_homeEl = document.querySelector("#inc_Btn_p1_home");
let inc_Btn_p2_homeEl = document.querySelector("#inc_Btn_p2_home");
let inc_Btn_p3_homeEl = document.querySelector("#inc_Btn_p3_home");
let inc_Btn_p1_guestEl = document.querySelector("#inc_Btn_p1_guest");
let inc_Btn_p2_guestEl = document.querySelector("#inc_Btn_p2_guest");
let inc_Btn_p3_guestEl = document.querySelector("#inc_Btn_p3_guest");
let play_againEl = document.querySelector("#play_again");
function strToNum(element){
    return Number(element.innerText)
}


// function canAndImplementToDom(){
//     let scoreNumber = strToNum(home_scoreEl) + 1
//     home_scoreEl.textContent = scoreNumber;
// }
function canAndImplementToDom(scoreEl, incrementCondition){
    let scoreNumber = strToNum(scoreEl) + incrementCondition;
    scoreEl.textContent = scoreNumber;
}
inc_Btn_p1_homeEl.addEventListener("click", function(){
    canAndImplementToDom(home_scoreEl, 1);
})
inc_Btn_p2_homeEl.addEventListener("click", function(){
    canAndImplementToDom(home_scoreEl, 2);
})
inc_Btn_p3_homeEl.addEventListener("click", function(){
    canAndImplementToDom(home_scoreEl, 3);
})
inc_Btn_p1_guestEl.addEventListener("click", function(){
    canAndImplementToDom(guest_scoreEl, 1);
})
inc_Btn_p2_guestEl.addEventListener("click", function(){
    canAndImplementToDom(guest_scoreEl, 2);
})
inc_Btn_p3_guestEl.addEventListener("click", function(){
    canAndImplementToDom(guest_scoreEl, 3);
})
play_againEl.addEventListener("click", function(){
    canAndImplementToDom(guest_scoreEl, 3);
    home_scoreEl.innerText = 0;
    guest_scoreEl.innerText = 0;
})