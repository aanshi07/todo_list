$("#button").click(function(){
    var input = $("#input").val();
    $("#box").append('<li>' + input + ' <i class="fa-solid fa-check"></i> <i class="fa-solid fa-trash"></i>');
    $(this).val(" ");
});

$("ul").on("click",".fa-trash",function(){
    $(this).parent('li').fadeOut(200);
});
$("ul").on("click",".fa-check",function(){
    $(this).parent('li').toggleClass("checked");
});
