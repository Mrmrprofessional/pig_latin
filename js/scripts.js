var words = function(words){
    var split = words.split(" ");
    var final = "";
    for(var i = 0; i < split.length; i++){
        var latin = pigLatin(split[i]);
        final += latin + " ";
        var result = final.substr(0, final.length-1);
    }
    return result;
}


var pigLatin = function(string){
    var counter = 0;
    var lowerString = string.toLowerCase();
    if(lowerString[0].match(/[q]/g)){
        var add = lowerString + "qu";
        var slice = add.slice(2);
        counter++;
        var result = pigLatin(slice);
    }else if(lowerString[0].match(/[y]/g) && counter > 0){
        var add = lowerString + "y";
        var slice = add.slice(1);
        counter++;
        var result = pigLatin(slice);
    }else if(lowerString[0].match(/[aeiouy]/g)){
        var result = lowerString + 'ay';
    }else{
        var add = lowerString + lowerString.charAt(0);
        var slice = add.slice(1);
        counter++;
        var result = pigLatin(slice);
    }
    return result;
}




$(document).ready(function() {
    $("form#text").submit(function(event){
        var string = $("input#string").val();
        var result = words(string);
        $(".string").text(result);
        $("#result").show();
        event.preventDefault();
    });
});

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
