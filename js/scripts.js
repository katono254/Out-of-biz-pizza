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
        case type="matumbo-pizza":
        switch (size){
            case size="small":

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
        case size = "medium":
        price =200;
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
        price =400;
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
        case flavour = "chickentikka":
        switch (size) {
            case size = "small":
                price = 100;
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
                case flavour = "periperi-chicken":
                switch (size) {
                    case size = "small":
                        price = 100;
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
                        case flavour = "meat-deluxe":
                        switch (size) {
                            case size = "small":
                                price = 100;
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
                        }
                        switch (topping) {
                            case topping = "matumbo":
                                totalPrice = totalPrice + 100;
                                break;
                            case topping = "tomatoes":
                                totalPrice = totalPrice + 50;
                                break;
                            case topping = "mushroom":
                                totalPrice = totalPrice + 30;
                                break;
                            case topping = "dania":
                                totalPrice = totalPrice + 30;
                                break;
                            case topping = "maccoroni":
                                totalPrice = totalPrice + 50;
                                break;
                                case topping = "pineapple":
                                totalPrice = totalPrice + 50;
                                break;
                            case topping = "apples":
                                totalPrice = totalPrice + 20;
                                break;
                            case topping = "cheese":
                                totalPrice = totalPrice + 40;
                                break;
                            case topping = "meat":
                                totalPrice = totalPrice + 40;
                                break;
                            case topping = "black-pepper":
                                totalPrice = totalPrice + 70;
                                break;
                            case topping = "omena-slices":
                                totalPrice = totalPrice + 60;
                                break;
                                
                            





                  

          
    }

})
