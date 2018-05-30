

function add1()
{
    alert("This will only reflect on your display screen.It will not change in original page!!");
    var prodName  =  prompt("enter your product name");
    var brand     =  prompt("enter brand name");
    var price     =  prompt("enter price");
    var pic   =  prompt("enter image url");
  
    

    var cln=$("#c1").clone();
    cln.attr("id","r1");
    $("#c").append(cln);

     $("#r1 #t").text(prodName);
    $("#r1 #brand").text(brand);
    $("#r1 #price").text(price);
    $("#r1 #pic").attr("src",pic);


   
    //$("#c1").clone().appendTo("#c")
    
}

