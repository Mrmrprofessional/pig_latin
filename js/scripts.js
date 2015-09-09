
var pigLatin = function(text) {
    var first = text.charAt(0);
    if (first == "a" || "e" || "i" || "u")
    {
        var result = (text + "ay");
    }
    console.log(result);
    return result;
}

$(document).ready(function() {
  $("form#text").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);
    if(!result) {
      $(".not").text("not");
    } else {
      $(".not").empty();
    }

    $("#result").show();
    event.preventDefault();
  });
});
