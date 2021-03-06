// JavaScript source code
document.getElementById("my_button").addEventListener("click", find_quote);

function find_quote() {
    var message = [
        "Shrimp and Pasta Scampi: Total Time: 30 min, Recipe: https://goo.gl/idkQQ6",
        "Baked Orange Chicken and Brown Rice: Total Time: 2 hours, Recipe: https://goo.gl/doqdn9",
        "Soy Ginger Salmon with Vegetables: Total Time: 10 min, Recipe: https://goo.gl/Ja2q2F",
        "Thai Chicken Lettuce Wraps: Total Time: 15 min, Recipe: https://goo.gl/mBY97A",
        "Udon Noodle Soup: Total Time: 50 min, Recipe: https://goo.gl/3xSLcQ",
        "Cauliflower Fried Rice: Total Time: 10 min, Recipe: https://goo.gl/FKijQ4",
        "Honey Garlic Shrimp and Broccoli: Total Time: 10 min, Recipe: https://goo.gl/zeaM1e",
        "Roasted Chicken and Veggies: Total Time: 15 min, Recipe: https://goo.gl/wVZikQ",
        "White Chicken Chili: Total Time: 15 min, Recipe: https://goo.gl/2mFpqC",
        "Spicy Asian Chicken Salad (Paleo Friendly): Total Time: 5 min, Recipe: https://goo.gl/EhcmEi",
        "Quinoa and Korean Beef Bowl: Total Time: 15 min, Recipe: https://goo.gl/WB4aw9",
        "Seared Ahi Tuna Steaks: Total Time: 6 min, Recipe: https://goo.gl/1aXx5e",
        "Poached Egg and Avocado Salad: Total Time: 10 min, Recipe: https://goo.gl/xv4Wqy",
        "Breakfast Microwave Muffin: Total Time: 10 min, Recipe: https://goo.gl/WPwFNt",
        "Breakfast Peanut Butter Banana Toast: Total Time: 5 min, Recipe: https://goo.gl/WZzJNX",
        "Egg Breakfast Wrap with Bacon, Avocado, and Tomato: Total Time: 15 min, Recipe: https://goo.gl/xj42cd",
        "Banana Berry Smoothies: Total Time: 15 min, Recipe: https://goo.gl/4pYwNE",
        "Spicy Sun Dried Tomato Feta Omelette:  Total Time: 20 min, Recipe: https://goo.gl/Sqkt7N",
        "Classic Meat and Cheese Lasagna: Total Time: several hours, Recipe: https://goo.gl/7Sx8RV",
        "Chicken Stir Fry with Rice Noodles: Total Time: 30 min, Recipe: https://goo.gl/4nWCba",
        "Chinese-style Hot Pot: Total Time: 30 min, Recipe: https://goo.gl/G9295w",
        "Strawberry Chocolate Almond Acai Bowls: Total Time: 10 min, Recipe: https://goo.gl/mrGcyW",
        "Italian Quinoa Salad with White Beans: Total Time: 10 min, Recipe: https://goo.gl/HVK2AP",
        "One-pot Zucchini Noodle Miso Soup: LTotal Time: 10 min, Recipe: https://goo.gl/DgNq69",
        "Tuna Wrap, Total Time: 10 min, Recipe: https://goo.gl/795ejM",
        "Tuna, Avocado, and Goat Cheese Panini, LTotal Time: 10 min, Recipe: https://goo.gl/r49dSw",
        "Open-faced Avocado BLT Sandwich, Total Time: 10 min, Recipe: https://goo.gl/ZHLDRQ",
        "Sun Dried Tomato Spinach Grilled Cheese Sandwich, Total Time: 20 min, Recipe: https://goo.gl/k1WRMF",
        "Vegan BLT Sandwich, Total Time: 10 min, Recipe: https://goo.gl/N2HdRj",
        "Chicken Tortilla Lettuce Wraps, Total Time: 30 min, Recipe: https://goo.gl/rjs1X7",
        "Sweet Potato, Corn, and Black Bean Enchiladas, Total Time: 30 min, Recipe: https://goo.gl/vRFaVu",
        "Creamy Vegan Corn and Red Pepper Blender Soup, Total Time: 10 min, Recipe: https://goo.gl/3AgjLk",
        "Margherita Flatbread Pizza, Total Time: 15 min, Recipe: https://goo.gl/9NGjbL",
        "Chicken Hummus Wrap, Total Time: 10 min, Recipe: https://goo.gl/bPMyY8",
        "Sun Dried Tomato and Basil Pinwheels: Total Time: 20 min, Recipe: https://goo.gl/PgRy4U",
        "Avocado Caprese Chicken Salad: Total Time: 15 min, Recipe: https://goo.gl/BzdXWj",
        "Spinach Lasagna, Total Time: 1 hour, Recipe: https://goo.gl/7e5Rpk",
        "Spinach Tomato Tortellini Soup, Total Time: 20 min, Recipe: https://goo.gl/Ro9dWs",
        "Broccoli Slaw Fish Tacos, Total Time: 10 min, Recipe: https://goo.gl/JSoEDg"
    ];

    var random_element = message[Math.floor(Math.random() * message.length)];

    window.alert(random_element);
}
