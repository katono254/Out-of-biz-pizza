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

})
