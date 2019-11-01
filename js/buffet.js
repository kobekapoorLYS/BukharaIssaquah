
function printBuffet(phpData)
{
  //remove old items
  $(".left, .right").empty();

  console.log(phpData);

  var values = Object.values(phpData);
  console.log(values);

  var i = 0;
  //loops through every item in the entrees object
  for (var value in values)
  {
    //html to insert for each food item
    var foodItem = "<div class='row'><div class='cell food'>" + values[i] + "</div></div>";

    console.log(foodItem);

    //alternates adding items to the left or right
    if (i % 2 == 0)
    {
      $(".left").append(foodItem);
    }
    else
    {
      $(".right").append(foodItem);
    }

    i++;
  }
  console.log("after loop");
}
