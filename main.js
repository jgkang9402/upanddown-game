// 랜덤번호 지정

// 사용자가 번호를 입력한다 그리고 go 라는 버튼을 누름

// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!

// 랜덤번호가 < 유저번호 Down

// 랜덤번호가 > 유저번호 Up

// Reset버튼을 누르면 게임이 리셋 된다

// 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)

// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다

// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다

let computerNum = 0;
let playButton = document.getElementById("play-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chanceArea = document.getElementById("chance-area")
let chances = 5
let gameOver = false
let history = [];




playButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function(){userInput.value="";});

function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1
    console.log("정답", computerNum)
}

function play() {
    let userValue = userInput.value

    if(userValue<1 || userValue>100){
        resultArea.textContent="1과 100사이 숫자를 입력해 주세요"
        return;
    }

    if(history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다."
        return;
    }

    chances --
    chanceArea.textContent=`You have ${chances} chances`;
    if(chances == 0){
        chanceArea.textContent=`You have ${chances} chances. You Faild`;

    }
    console.log("chance", chances)

    if (userValue < computerNum){
        resultArea.textContent = "Up!"
    }else if (userValue > computerNum){
        resultArea.textContent = "Down!"
    }else {
        resultArea.textContent = "Correct!"
        
    }

    history.push(userValue)
    console.log(history)

    if (chances < 1){
        gameOver=true
    }
    else if (chances == 1){
        chanceArea.textContent = "Last Chance!!"
        return;
    }

    if (gameOver == true || computerNum == userInput.value){
        playButton.disabled = true

    }
}

function reset(){
    //input창 정리
    userInput.value = "";

    //새로운 숫자생성
    pickRandomNum();

    gameOver = false
    playButton.disabled = false
    chances = 5
    chanceArea.textContent=`You have ${chances} chances`;
    history = [];
    

    resultArea.textContent = "New Game";
}

pickRandomNum()



