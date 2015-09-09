
var pigLatin = function(string) {
    var lowerString = string.toLowerCase();
    var first = lowerString.charAt(0);
    if (first == "a" || "e" || "i" || "u" || "o") //and sometimes"y"
    {
        var result = (lowerString + "ay");
    }
    console.log(result);
    return result;
}

// $(document).ready(function() {
//   $("form#text").submit(function(event) {
//     var year = parseInt($("input#year").val());
//     var result = leapYear(year);
//
//     $(".year").text(year);
//     if(!result) {
//       $(".not").text("not");
//     } else {
//       $(".not").empty();
//     }
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
