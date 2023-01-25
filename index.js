function sendMessage() {
  // Pobieranie wiadomości z inputu
  var message = document.getElementById("message").value;

  // Wysyłanie wiadomości do API
  fetch("https://api.popcat.xyz/chatbot?msg=" + message)
    .then(function(response) {
      // Sprawdzanie czy API jest online
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("API jest offline.");
      }
    })
    .then(function(data) {
      // Sprawdzanie czy ChatBot jest dostępny
      if(data.response.response == "Bot is tempoary offline") {
        var history = document.getElementById("history");
        var newMessage = document.createElement("div");
        newMessage.innerHTML = "<b>Ty:</b> " + message;
        history.appendChild(newMessage);
        newMessage = document.createElement("div");
        newMessage.innerHTML = "<b>ChatBot:</b> " + data.response.response;
        history.appendChild(newMessage);
      } else {
        var history = document.getElementById("history");
        var newMessage = document.createElement("div");
        newMessage.innerHTML = "<b>Ty:</b> " + message;
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
      alert(error);
    });
}
