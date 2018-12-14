// JavaScript source code
document.getElementById("my_button").addEventListener("click", find_quote);

function find_quote() {
    var message = [
        "Shrimp and Pasta Scampi: Level: Easy, Total Time: 30 min, Recipe: https://goo.gl/idkQQ6",
        "Baked Orange Chicken and Brown Rice: Level: Easy, Total Time: 2 hours, Recipe: https://goo.gl/doqdn9",
        "Soy Ginger Salmon with Vegetables: Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/Ja2q2F",
        "Cauliflower Fried Rice: Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/FKijQ4",
        "Honey Garlic Shrimp and Broccoli: Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/zeaM1e",
        "Roasted Chicken and Veggies: Level: Easy, Total Time: 15 min, Recipe: https://goo.gl/wVZikQ",
        "White Chicken Chili: Level: Easy, Total Time: 15 min, Recipe: https://goo.gl/2mFpqC",
        "Quinoa and Korean Beef Bowl: Level: Easy, Total Time: 15 min, Recipe: https://goo.gl/WB4aw9",
        "Seared Ahi Tuna Steaks: Level: Easy, Total Time: 6 min, Recipe: https://goo.gl/1aXx5e",
        "Poached Egg and Avocado Salad: Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/xv4Wqy",
        "Breakfast Microwave Muffin: Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/WPwFNt",
        "Breakfast Peanut Butter Banana Toast: Level: Easy, Total Time: 5 min, Recipe: https://goo.gl/WZzJNX",
        "Egg Breakfast Wrap with Bacon, Avocado, and Tomato: Level: Easy, Total Time: 15 min, Recipe: https://goo.gl/xj42cd",
        "Banana Berry Smoothies: Level: Easy, Total Time: 15 min, Recipe: https://goo.gl/4pYwNE",
        "Spicy Sun Dried Tomato Feta Omelette: Level: Easy, Total Time: 20 min, Recipe: https://goo.gl/Sqkt7N",
        "Classic Meat and Cheese Lasagna: Level: Medium, Total Time: several hours, Recipe: https://goo.gl/7Sx8RV",
        "Chicken Stir Fry with Rice Noodles: Level: Easy, Total Time: 30 min, Recipe: https://goo.gl/4nWCba",
        "Chinese-style Hot Pot: Level: Easy, Total Time: 30 min, Recipe: https://goo.gl/G9295w",
        "Strawberry Chocolate Almond Acai Bowls: Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/mrGcyW",
        "Italian Quinoa Salad with White Beans: Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/HVK2AP",
        "One-pot Zucchini Noodle Miso Soup: Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/DgNq69",
        "Tuna Wrap, Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/795ejM",
        "Tuna, Avocado, and Goat Cheese Panini, Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/r49dSw",
        "Open-faced Avocado BLT Sandwich, Level: Easy, Total Time: 10 min, Recipe: https://goo.gl/ZHLDRQ",
        "Sun Dried Tomato Spinach Grilled Cheese Sandwich, Level: Easy, Total Time: 20 min, Recipe: https://goo.gl/k1WRMF"
    ];

    var random_element = message[Math.floor(Math.random() * message.length)];

    window.alert(random_element);
}
