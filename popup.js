// JavaScript source code
document.getElementById("my_button").addEventListener("click", find_quote);

function find_quote() {
    var message = [
        "Shrimp and Pasta Scampi
        Level: Easy
        Total Time: 30 min
        Recipe: https://goo.gl/idkQQ6"
    ];

    var random_element = message[Math.floor(Math.random() * message.length)];

    window.alert(random_element);
}
