$(document).ready(function () {
// $(".tab-content div:not(:first)").hide(); // css display : none; ile kapadım.
$(".tab-content div:first").fadeIn();

//1. yol (Tab li)yi tab contente eşitliyoruz    İndex üzerinden gitme
// $(".tab li ").click(function () {
//
//     var indis = $(this).index();
//     $(".tab-content div").hide();
//     $(".tab-content div:eq("+ indis +")").show();
// $(".tab li").removeClass("active");
// $(".tab li:eq("+ indis + ")").addClass("active");

// })


    //2.Yol.. attribute üzerinden yapma class ekleme çıkarma işleminde indis lazım oluyor.
$(".tab li ").click(function () {
    var indis = $(this).index();
   var tab_content = $(this).attr("rel");
    $(".tab-content div").hide();
     $(tab_content).fadeIn();
    $(".tab li").removeClass("active");
    $(".tab li:eq("+ indis + ")").addClass("active");
})
})