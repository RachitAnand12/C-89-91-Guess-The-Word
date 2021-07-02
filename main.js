function login () {
    player1Name = document.getElementById("player1_name").value;
    player2Name = document.getElementById("player2_name").value;

    localStorage.setItem("player1_name", player1Name)
    localStorage.setItem("player2_name", player2Name)

    window.location = "game_page.html"
}

