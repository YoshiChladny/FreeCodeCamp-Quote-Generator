

var quotes = ["George Bush doesn't care about black people.", "HUH", "UNH","AH AH AH AH","I AM A GOD","HURRY UP WITH MY DAMN CROISSANT", "YOU DON'T HAVE ALL THE ANSWERS SWAY", "We all self-conscious. I'm just the first to admit it", "I still think I am the greatest","Fashion Breaks my heart", "I don't event listen to rap. My apartment is too nice to listen to rap in","I'm not a fan of books", "I feel like I'm too busy writing history to read it"];


var images = ["firstimg.png","secondimg.jpg"];


var amtOfQuotes = quotes.length -1;
var amtOfImages = images.length -1;
$("#btn").click(function () {
  var randIndex = (Math.floor(Math.random() * amtOfQuotes));
  var randImg = (Math.floor(Math.random() * amtOfImages));
  $(".quotation").text("“" +(quotes[randIndex])+ "”");



});
