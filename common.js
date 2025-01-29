$("#portfolio .btn").click(function(){
    if($(this).text()=="All"){
        $("#portfolio .btn").removeClass("active")
        $(this).addClass("active")
        $(".work").fadeIn()
    }
    else if($(this).text()=="Website"){
        $("#portfolio .btn").removeClass("active")
        $(this).addClass("active")
        $(".work").fadeOut(0)
        $(".website").fadeIn()
    }  
    else if($(this).text()=="Branding"){
        $("#portfolio .btn").removeClass("active")
        $(this).addClass("active")
        $(".work").fadeOut(0)
        $(".branding").fadeIn()
    }
})

$(".accordion a").click(function(e){
    e.preventDefault();

    if($(this).hasClass("active")==false){
        $(".accordion a").removeClass("active")
        $(this).addClass("active")
        $(".accordion p").slideUp();
        $(this).next("p").slideDown()
    }
 })