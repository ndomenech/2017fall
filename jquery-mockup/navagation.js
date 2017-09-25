$(function(){
    $("#header-placeholder").load("_header.html" , function () {
        $("#nav-placeholder").load(navProperties.mainNav, function(){
            $('.nav-link').removeClass("active")
            $(`#${navProperties.currentSection}-link`).addClass("active")
        } )
    } );

   
    $(".btn-primary").click(Function(){
        $(this).closest(".col-md-4").css({ 'maxWidth': 'none' }).animate({ 'flex-bases' : '100%'})
    })
0
});
