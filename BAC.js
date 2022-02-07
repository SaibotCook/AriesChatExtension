document.body.style.border = "5px solid red";

var emotes = [
    [":kekw:", "https://i.imgur.com/glOqRah.png"],[":pog:", "https://i.imgur.com/8bmyqLD.png"]
];

var x = document.getElementsByClassName("q");

for (var n in emotes) {
    document.body.innerHTML = document.body.innerHTML.replace(emotes[n][0], '<img src="'+emotes[n][1]+'" title="'+emotes[n][0]+'" width="28" height="28">');
}


