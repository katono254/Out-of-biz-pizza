$(function () {
    $('.summary').hide();
    $(".cd-overlay").hide();
    $("hide-this").hide()
})
$("#place-order").click(function (event) {
    event.preventDefault();
    let type = $("#type:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = $("#toppings option:selected").val();
    let number = $("#number").val();
    console.log(size);
    let order = (t, s, c, t, n, total) => {
        return { t, s, c, t, n, total };
    };
    let price, totalPrice
    switch (type) {
        case type = "wizzle-pizza":
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
        case type = "wizzle":
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
                            let newOrder = order(type, size, crust, topping, number, totalPrice);
                            console.log(newOrder);
                            $('.cdata-overlay').slideUp();
                            $('#list-order').slideDown();
                            $('.deliver').show(1000);
                            $('.delivernot').show(1000);

                            $("#list-order").text(" ");
                            $("#list-order").append("<br>" + "Type :   " + newOrder.t + "<br>" + "Size :   "
                                + newOrder.s + "<br>" + "Crust :     "
                                + newOrder.c + "<br>" + "Toppings :     "
                                + newOrder.t + "<br>" + " Number of pizzas :    "
                                + newOrder.n + "<br>" + "Total Price :  "
                                + newOrder.total + "<br><br>").css('font-family', 'Mansalva cursive ').css('font-size', '24px');
                    };


                    $(".deliver").click(function () {
                        $('.summary').slideUp();
                        $('#list-order').slideUp();
                        $('.summary').text("Provide location details").slideDown();
                        $('.delivernot').hide(1000);
                        $('.cdata-overlay').slideDown();
                    });



                    $(".delivernot").click(function () {

                    });

                    
            };
    }

})
$(function myDelivery(){
    alert("Your delivery fee is 50ksh");


})

