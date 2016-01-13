$(document).ready(function() {
  $("button").click(function() {
    var flavors = ["cinnamon", "coffee", "Coconut", "Toasted Almond Fudge", "Mint", "Rum Cherry", "Pistachio", "Caramel Swirl"];
    flavors.forEach(function(flavor) {
//      $(".flavor-list").attr("<li>").text(flavor);
      $("ul").append("<li>" + flavor + "");

    });
  });


});
