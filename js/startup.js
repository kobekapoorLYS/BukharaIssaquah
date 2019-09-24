//start off with entrees menu
loadMenu("appetizers");

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

  //now vegetarian tab
  $('#vegetationButton').click(function ()
  {
    loadMenu("vegetation");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Vegetarian");
  });

  //now drinks tab
  $('#entreesButton').click(function ()
  {
    loadMenu("entrees");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Drinks");
  });

  $('#dessertsButton').click(function ()
  {
    loadMenu("desserts");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Desserts");
  });
});