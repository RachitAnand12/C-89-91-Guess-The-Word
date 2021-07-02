p1Name = localStorage.getItem("player1_name")
p2Name = localStorage.getItem("player2_name")
p1Score = 0
p2Score = 0
qturn = "Player1"
aturn = "Player2"
document.getElementById("player1Name").innerHTML = p1Name + " : "
document.getElementById("player1Score").innerHTML = p1Score
//do the same for p2
document.getElementById("player2Name").innerHTML = p2Name + " : "
document.getElementById('player2Score').innerHTML = p2Score
document.getElementById("playerQuestion").innerHTML = "Question Turn - " + p1Name
document.getElementById("playerAnwser").innerHTML = "Anwser Turn - " + p2Name
function send() {
    getWORD = document.getElementById("word").value
    //convert the word into lowercase
    qWORD = getWORD.toLowerCase()
    console.log(qWORD)
    //make the first Replacement 
    letter1 = qWORD.charAt(1)
    console.log(letter1)
    replaced1 = qWORD.replace(letter1 , "_")
console.log(replaced1)

//make the second Replacement 
x = qWORD.length - 1
console.log(x)
letter2 = qWORD.charAt(x)
console.log(letter2)
replaced2 = replaced1.replace(letter2 , "_")
console.log(replaced2) 

//making the third Replacement 
y = Math.floor(qWORD.length / 2)
console.log(y)
letter3 = qWORD.charAt(y)
console.log(letter3)
replaced3 = replaced2.replace(letter3 , "_")
console.log(replaced3)

//create a tag for showing the question word in the output div
qTag = `<h4 id="word_display"> Q. ${replaced3} </h4> <br>`

aTag = `Answer <input id="word_input"> `

buttonTag = ` <br> <br> <button class="btn btn-success" onclick="check()"> Check </button> `

document.getElementById("word").value = ""
document.getElementById("output").innerHTML = qTag + aTag + buttonTag
}
function check() {
 getAnwser = document.getElementById("word_input").value
 anwser = getAnwser.toLowerCase()   
 //code for increasing the score when it is correct 
 if (anwser == qWORD) {
     //check who is anwsering the questions
     if (aturn == "Player1") {
         p1Score = p1Score + 1
         document.getElementById("player1Score").innerHTML = p1Score
     }
     else {
        p2Score = p2Score + 1
        document.getElementById('player2Score').innerHTML = p2Score
     }
         
     
 }
 if (qturn == "Player1") {
     qturn = "Player2"
     document.getElementById("playerQuestion").innerHTML = "Question Turn - " + p2Name    
 } else {
     qturn = "Player1"
     document.getElementById("playerQuestion").innerHTML = "Question Turn - " + p1Name
 }
 if (aturn == "Player2") {
     aturn = "Player1"
     document.getElementById("playerAnwser").innerHTML = "Anwser Turn - " + p1Name
 } else {
     aturn = "Player2"
     document.getElementById("playerAnwser").innerHTML = "Anwser Turn - " + p2Name
 }
 document.getElementById("output").innerHTML = ""
}