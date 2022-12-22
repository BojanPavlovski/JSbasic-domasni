let yourYear = prompt("Enter your year of birth");
let year = parseInt(yourYear);
let finalYear = (year - 4) % 12;

switch(finalYear){
    case 0:
        alert("Your chinese zodiac sign is a rat.");
        break;
    case 1:
        alert("Your chinese zodiac sign is an ox.");
        break;
    case 2:
        alert("Your chinese zodiac sign is a tiger.");
        break;
    case 3:
        alert("Your chinese zodiac sign is a rabbit.");
        break;
    case 4:
        alert("Your chinese zodiac sign is a dragon.");
        break;
    case 5:
        alert("Your chinese zodiac sign is a snake.");
        break;
    case 6:
        alert("Your chinese zodiac sign is a horse.");
        break;
    case 7:
        alert("Your chinese zodiac sign is a goat.");
        break;
    case 8:
        alert("Your zodiac zodiac sign is a monkey");
        break;
    case 9:
        alert("Your chinese zodiac sign is a rooster.");
        break;
    case 10:
        alert("Your chinese zodiac sign is a dog.");
        break;
    case 11:
        alert("Your chinese zodiac sign is a pig.");
        break;
    default:
        alert("Enter a valid year of birth!");
        break;

}