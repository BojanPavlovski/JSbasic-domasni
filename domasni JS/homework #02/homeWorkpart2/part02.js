var yourYear = prompt("Year of birth:");
var year = parseInt(yourYear);
var finalYear = (year - 4) % 12;

if(finalYear == 0) {
    alert("Your chinese zodiac sign is a rat.");
}
else if(finalYear == 1) {
    alert("Your chinese zodiac sign is an ox. ");
}
else if(finalYear == 2) {
    alert("Your chinese zodiac sign is a tiger.");
}
else if(finalYear == 3) {
    alert("Your chinese sign is a rabbit.");

}
else if (finalYear == 4) {
    alert("Your chinese zodiac sign is a dragon.");
}
else if (finalYear == 5) {
    alert("Your chinese zodiac sign is a snake.");
}
else if (finalYear == 6) {
    alert("Your chinese zodiac sign is a horse.");
}
else if(finalYear == 7) {
    alert("Your chinese zodiac sign is a goat.");
}
else if (finalYear == 8) {
    alert("Your chinese zodiac sign is a monkey.");
}
else if(finalYear == 9) {
    alert("Your chinese zodiac sign is a rooster.");

}
else if(finalYear == 10) {
    alert("Your chinese zodiac sign is a dog.");
}
else if(finalYear == 11) {
    alert("Your chinese zodiac sign is a pig.")
} else{
    alert("Enter a valid year.")
}
