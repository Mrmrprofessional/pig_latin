
var pigLatin = function(string)
    {
        console.log(string);
    var lowerString = string.toLowerCase();
    console.log(lowerString[0]);
    var vowels = ["a", "e", "i", "o", "u"];
    var index = vowels.indexOf(lowerString[0]);
    if(lowerString[0].match(/[aeiou]/g)){
        var result = lowerString + 'ay';
    }else{
        var add = lowerString + lowerString.charAt(0);
        var slice = add.slice(1);
        var result = pigLatin(slice);
    }
    return result;
}




// else if (letter !== "a" || "e" || "i" || "u" || "o"){
//     letter !==
// }



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
