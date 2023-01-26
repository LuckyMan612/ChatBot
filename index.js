function sendMessage() {
  // Pobieranie wiadomości z inputu
  var message = document.getElementById("message").value;

  // Wysyłanie wiadomości do API
  fetch("https://raw.githubusercontent.com/LuckyMan612/ChatBot/main/test.json")
    .then(function(response) {
      // Sprawdzanie czy API jest online
      if (response.ok) {
        return response.json();
      } else {
      // Wyświetlanie błędu na czacie
      console.log("Unfortunately, the server is offline at the moment....");
      var history = document.getElementById("history");
      var newMessage = document.createElement("div");
      newMessage.innerHTML = "<b>ChatBot:</b> " + "Unfortunately, I can not give you an answer to this question, for the reason that the server to which I send the query did not send me a response, most likely the server is off at the moment. Sorry for the inconvenience!";
      history.appendChild(newMessage);
      }
    })
    .then(function(data) {
      // Sprawdzanie czy ChatBot jest dostępny
      if(data.response.response == "Bot is tempoary offline") {
        var history = document.getElementById("history");
        var newMessage = document.createElement("div");
        newMessage.innerHTML = "<b>You:</b> " + message;
        history.appendChild(newMessage);
        newMessage = document.createElement("div");
        newMessage.innerHTML = "<b>ChatBot:</b> " + data.response;
        history.appendChild(newMessage);
      } else {
        var history = document.getElementById("history");
        var newMessage = document.createElement("div");
        newMessage.innerHTML = "<b>You:</b> " + message;
        history.appendChild(newMessage);
        newMessage = document.createElement("div");
        newMessage.innerHTML = "<b>ChatBot:</b> " + data.response.response;
        history.appendChild(newMessage);
      }
      // Czyszczenie inputu
      document.getElementById("message").value = "";
    })
    .catch(function(error) {
      // Wyświetlanie błędu
      console.log(error)
    });
}
