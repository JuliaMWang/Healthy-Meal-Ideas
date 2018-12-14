// JavaScript source code
document.getElementById("my_button").addEventListener("click", find_quote);

function find_quote() {
    var message = [
        "Shrimp and Pasta Scampi: Level: Easy, Total Time: 30 min, Recipe: https://goo.gl/idkQQ6",
        "Baked Orange Chicken and Brown Rice: Level: Easy, Total Time: 2 hours, Recipe: https://goo.gl/doqdn9",
        "Soy Ginger Salmon with Vegetables: Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/Ja2q2F",
        "Cauliflower Fried Rice: Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/FKijQ4",
        "Honey Garlic Shrimp and Broccoli: Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/zeaM1e",
        "Roasted Chicken and Veggies: Level: Easy, Total Time: 15 min, Recipe: https://goo.gl/wVZikQ"
    ];

    var random_element = message[Math.floor(Math.random() * message.length)];

    window.alert(random_element);
}
