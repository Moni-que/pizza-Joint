$(document).ready(function(){
    $("button#lastbutton").click(function(event){
        let name = $("input#name").val();
        let email = $("input#email").val();
        let phoneNumber = $("input#number").val();
    
        if ($("input#name").val() && $("input#email").val() &&$("input#number").val()){
            alert("Hi " + name + ",Thank you for reaching out to pizzaJoinnt.One of us will contact you shortly.");
        }else {
            alert("Please fill the form")
        } 

    });
});

function Pizza(size, crust){
    this.size = size;
    this.crust = crust;
    this.toppings = [];
    this.price = 0;
}
Pizza.prototype.cost = function(){
    var price = 0;
    if (this.size === "small"){
        price += 7;
    }else if (this.size === "medium"){
        price += 9;
    }else{
        price += 11;
    }

Pizza.prototype.cost = function(){
    var price = 0;
    if (this.crust === "cripsy"){
        price +=2;
    }else if(this.crust ==="stuffed"){
        price +=3;
    }else{
        price +=1;
    }
    }
    Pizza.prototype.cost = function(){
    var price = 0;
    if(this.toppings === "onion"){
        price +=1;
    }
    else if(this.toppings === "chicken"){
        price +=1;
    }
    else if(this.toppings === "sausage"){
        price +=1;
    }
    else if(this.toppings === "mushroom"){
        price +=1;
    }
    else{
        price +=1;
    }
    }
}