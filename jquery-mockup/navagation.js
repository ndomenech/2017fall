$(function(){
    $("#header-placeholder").load("_header.html" , function () {
        $('.nav-link').removeClass("active")
        $(".nav-link[href='signup.html']").addClass("active")
    
    } );

   
    $(".btn-primary").click(Function(){
        $(this).closest(".col-md-4").css({ 'maxWidth': 'none' }).animate({ 'flex-bases' : '100%'})
    })
0
});
