player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHtml = player1_name + " : ";
document.getElementById("player2_name").innerHtml = player2_name + " : ";

document.getElementById("player1_score").innerHtml = player1_score ; 
document.getElementById("player2_score").innerHtml = player2_score ; 

document.getElementById("player_question").innerHtml = "Question Turn - " + player1_name ; 
document.getElementById("player_answer").innerHtml = "Answer Turn - " + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    
}