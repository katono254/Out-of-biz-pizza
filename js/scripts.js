$(function () {
    $('.summary').hide();
   $(".cd-overlay").hide();
   $("hide-this").hide()
})
$("#place-order").click(function(){
    let type=$("type-of-pizza:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = $("#toppings option:selected").val();
    let number = $("#number").val();
    let order = (f, s, c, t, n, total) => {
        return {f, s, c, t, n, total};
    };
    let price, totalPrice
    switch (type) {
        case type="matumbo":
        switch (size){
            case size="small"
            price=100;
            if (crust==="thin"){
            totalPrice = (price * number) + 50;
            } else if (crust === "thick") {
            totalPrice = (price * number) + 70;
            } else if(crust ==="big"){
            totalPrice = (price * number) + 200;
            } else {
            totalPrice = (price * number) + 190;
            }
            break;
            case size = "medium":
            price = 200;
           if (crust === "thin") {
            totalPrice = (price * number) + 50;
            } else if (crust === "thick") {
            totalPrice = (price * number) + 70;
            } else if (crust === "big") {
            totalPrice = (price * number) + 200;
            } else {
            totalPrice = (price * number) + 190;
            }
            break;
            case size = "large":
            price = 400;
            if (crust === "thin") {
            totalPrice = (price * number) + 50;
            } else if (crust === "thick") {
            totalPrice = (price * number) + 70;
            } else if (crust === "big") {
            totalPrice = (price * number) + 200;
            } else {
            totalPrice = (price * number) + 190;
            }
            break;
        }
         break;
         case type = "matumbo":
         switch (size) {
        case size = "small":
        price =100;
        if (crust === "thin") {
        totalPrice = (price * number) + 50;
        } else if (crust === "thick") {
         totalPrice = (price * number) + 70;
        } else if (crust === "big") {
            totalPrice = (price * number) + 200;
        } else {
        totalPrice = (price * number) + 190;
        }
        break;   
          
    }

})
