console.log("Invoke by html tag");
define(['jquery'], function($){
    'use strict'
    return function(config, element){
        $(document).ready(function(){
            $(element).css({"background-color":"pink","border":"solid 1px red", "border-radius":"5px"})
            $(element).find(".productname").html(config.productName);
            $(element).find(".productprice").html(config.price);
            $(element).find(".product_description").html(config.description);

            /* 
            $(".productname").html(config.productName);
            $(".productprice").html(config.price);
            $(".product_description").html(config.description);
            */
        });
    }
});