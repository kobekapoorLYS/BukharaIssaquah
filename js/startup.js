//start off with entrees menu
loadMenu("entrees");

$(document).ready(function ()
{
  //add functionality to each button
  $('#appetizerButton').click(function ()
  {
    //replace menu with desired one
    loadMenu("appetizers");
    //change selected button for color
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Appetizers");
  });

  $('#vegetationButton').click(function ()
  {
    loadMenu("vegetation");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Vegetation");
  });

  $('#entreesButton').click(function ()
  {
    loadMenu("entrees");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Entrees");
  });

  $('#dessertsButton').click(function ()
  {
    loadMenu("desserts");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Desserts");
  });
});