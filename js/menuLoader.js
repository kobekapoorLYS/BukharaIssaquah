//access menu json
$.getJSON("menu/menu.json", function (json)
{
  //loops through every item in the entrees object
  for (var i = 0; i < json.entrees.length; i++)
  {
    //html to insert for each food item
    var foodItem = "<div class='row'><div class='cell food'>" + json.entrees[i].name + "</div><div class='cell price'>" + json.entrees[i].price + "</div></div ><div class='row'><div class='cell desc'>" + json.entrees[i].description + "</div></div>";

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
