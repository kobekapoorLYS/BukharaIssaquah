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
  $('#vegetarianButton').click(function ()
  {
    loadMenu("vegetarian");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Vegetarian");
  });

  //now drinks tab
  $('#drinksButton').click(function ()
  {
    loadMenu("drinks");
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