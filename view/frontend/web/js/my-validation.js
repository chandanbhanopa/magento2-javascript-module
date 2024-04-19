define(['jquery'], function($){
    'use strict'
     return {
        firstname: "Chandan",
        lastname:"Bhanopa",
        showDetail:function(){
         return "Welcome to "+this.firstname +" "+this.lastname
        }
     }
});