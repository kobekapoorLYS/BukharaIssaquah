
$(document).ready(function ()
{
  var menuToLoad = getAllUrlParams().m;
  if (menuToLoad != undefined) loadMenu(menuToLoad);
  else loadMenu("appetizers");
});