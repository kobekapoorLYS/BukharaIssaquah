/**
 * loads a specific menu from menu.json
 * @param {any} type which menu to load
 */
function loadMenu(type)
{
  //access menu json
  $.getJSON("menu/menu.json", function (json)
  {
    //default if there is a wrong menu
    if (json[type] == undefined)
    {
      type = "appetizers";
    }

    //change header
    switch (type)
    {
      case "appetizers":
        //change selected button for color
        $(".selectedMenu").removeClass("selectedMenu");
        $('#appetizerButton').addClass("selectedMenu");
        $("#menuHeader").text("Appetizers");
        break;
      case "vegetarian":
        $(".selectedMenu").removeClass("selectedMenu");
        $('#vegetarianButton').addClass("selectedMenu");
        $("#menuHeader").text("Vegetarian");
        break;
      case "soups":
        $(".selectedMenu").removeClass("selectedMenu");
        $('#soupsButton').addClass("selectedMenu");
        $("#menuHeader").text("Soups");
        break;
      case "salads":
        $(".selectedMenu").removeClass("selectedMenu");
        $('#saladsButton').addClass("selectedMenu");
        $("#menuHeader").text("Salads");
        break;
      case "sauces":
        $(".selectedMenu").removeClass("selectedMenu");
        $('#saucesButton').addClass("selectedMenu");
        $("#menuHeader").text("Our Sauces");
        break;
      case "tandooridelight":
        $(".selectedMenu").removeClass("selectedMenu");
        $('#tandooriDelightButton').addClass("selectedMenu");
        $("#menuHeader").text("Tandoori Delight");
        break;
      case "drinks":
        $(".selectedMenu").removeClass("selectedMenu");
        $('#drinksButton').addClass("selectedMenu");
        $("#menuHeader").text("Drinks");
        break;
      case "desserts":
        $(".selectedMenu").removeClass("selectedMenu");
        $('#dessertsButton').addClass("selectedMenu");
        $("#menuHeader").text("Desserts");
        break;
      case "tandooribreads":
        $(".selectedMenu").removeClass("selectedMenu");
        $('#tandooriBreadsButton').addClass("selectedMenu");
        $("#menuHeader").text("Tandoori Breads");
        break;
      case "biryaniworld":
        $(".selectedMenu").removeClass("selectedMenu");
        $('#biryaniWorldButton').addClass("selectedMenu");
        $("#menuHeader").text("Biryani World");
        break;
      case "kids":
        $(".selectedMenu").removeClass("selectedMenu");
        $('#kidsButton').addClass("selectedMenu");
        $("#menuHeader").text("Kids Corner");
        break;
      case "sides":
        $(".selectedMenu").removeClass("selectedMenu");
        $('#sidesButton').addClass("selectedMenu");
        $("#menuHeader").text("Sides");
        break;
    }


    //remove old items
    $(".left, .right").empty();


    //loops through every item in the entrees object
    for (var i = 0; i < json[type].length; i++)
    {
      //html to insert for each food item
      var foodItem = "<div class='row'><div class='cell food'>" + json[type][i].name + "</div><div class='cell price'>" + json[type][i].price + "</div></div ><div class='row'><div class='cell desc'>" + json[type][i].description + "</div></div>";

      //alternates adding items to the left or right
      if (i % 2 == 0)
      {
        $(".left").append(foodItem);
      }
      else
      {
        $(".right").append(foodItem);
      }
    }
  });
}