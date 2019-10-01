
var color_price_map = new Map();
color_price_map.set("After School Special", 0.00);
color_price_map.set("Morning Haze", 1.00);
color_price_map.set("Cozy Denim", 2.00);
color_price_map.set("Rainy Day", 1.00);
var filling_price_map = new Map();
filling_price_map.set("Duck Down", 24.99);
filling_price_map.set("Memory Foam", 21.99);
filling_price_map.set("Hyperallergenic Poly-Blend", 19.99);
var cart_count = 0;


window.onload = function(){
    var color = document.getElementById("color");
    var filling = document.getElementById("filling");
    var amount = document.getElementById("amount");
    var cart_btn = document.getElementById("cart_button");
    color.addEventListener("change", function(){ calculate_price(color, filling, amount); });
    filling.addEventListener("change", function(){ calculate_price(color, filling, amount) ; });
    amount.addEventListener("change", function(){ calculate_price(color, filling, amount) ; });
    cart_button.addEventListener("click", function(){ add_to_cart(); });
}


function calculate_price(color, filling, amount){
           var price = document.getElementById("price").innerHTML;
           var selected_color = color.options[color.selectedIndex].value
           var selected_filling = filling.options[filling.selectedIndex].value
           var selected_amount = amount.options[amount.selectedIndex].value
           var new_price = (parseFloat(color_price_map.get(selected_color)) + 
                            parseFloat(filling_price_map.get(selected_filling))) * parseInt(selected_amount)
           document.getElementById("price").innerHTML = "$" + new_price
        }


function add_to_cart() {
    cart_count += 1;
    document.getElementById("cart_item_number").innerHTML = cart_count;
}


