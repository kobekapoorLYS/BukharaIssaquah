/**
 * loads a specific menu from menu.json
 * @param {any} type which menu to load
 */
function loadMenu(type)
{
  //access menu json
  $.getJSON("menu/menu.json", function (json)
  {
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