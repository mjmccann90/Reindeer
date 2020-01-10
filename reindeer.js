var colors = [
    "Blue",
    "Red",
    "Orange",
    "Purple",
    "Hazel",
    "Aquamarine",
    "Periwinkle",
    "Azure",
    "Fuchsia",
    "Chocolate",
    "Amber",
    "Amaranth"
];
var reindeer = [
    "Dasher",
    "Dancer",
    "Prancer",
    "Vixen",
    "Comet",
    "Cupid",
    "Donner",
    "Blitzen"
];
var hohohoElement = document.getElementById("reindeer");
var currentReindeer = "";

for (var i = 0; i < reindeer.length; i++) {
    currentReindeer = "<p>" + colors[i] + " " + reindeer[i] + "</p>";
    hohohoElement.innerHTML += currentReindeer;
}