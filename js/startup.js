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

  //Vegetarian
  $('#vegetarianButton').click(function ()
  {
    loadMenu("vegetarian");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Vegetarian");
  });

  //Soups
  $('#soupsButton').click(function ()
  {
    loadMenu("soups");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Soups");
  });

  //Salads
  $('#saladsButton').click(function ()
  {
    loadMenu("salads");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Salads");
  });

  //Sauces
  $('#saucesButton').click(function ()
  {
    loadMenu("sauces");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Our Sauces");
  });

  //Tandoori Delight
  $('#tandooriDelightButton').click(function ()
  {
    loadMenu("tandooriDelight");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Tandoori Delight");
  });

  //Drinks
  $('#drinksButton').click(function ()
  {
    loadMenu("drinks");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Drinks");
  });

  //Desserts
  $('#dessertsButton').click(function ()
  {
    loadMenu("desserts");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Desserts");
  });

  //Tandoori Breads
  $('#tandooriBreadsButton').click(function ()
  {
    loadMenu("tandooriBreads");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Tandoori Breads");
  });

  //Biryani World
  $('#biryaniWorldButton').click(function ()
  {
    loadMenu("biryaniWorld");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Biryani World");
  });

  //Kids
  $('#kidsButton').click(function ()
  {
    loadMenu("kids");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Kids Corner");
  });

  //Sides
  $('#sidesButton').click(function ()
  {
    loadMenu("sides");
    $(".selectedMenu").removeClass("selectedMenu");
    $(this).addClass("selectedMenu");

    $("#menuHeader").text("Sides");
  });
});