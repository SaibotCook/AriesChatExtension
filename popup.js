const charactersList = document.getElementById('charactersList');
const searchBar = document.getElementById('searchBar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toString().toLowerCase();
    console.log(e.target.value.toString().toLowerCase());

    const filteredCharacters = hpCharacters.filter((character) => {
        return (
            character.aliases.toString().toLowerCase().includes(searchString) ||
            character.tags.toString().toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/SaibotCook/AriesChatExtension/main/custom_emoji.json');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    
    console.log("test");

    const htmlString = characters
        .map((character) => {
            return `
                <img class="emote" src="${character.emojiURL}" width="28px" heigth="28px" title="${character.aliases}" alt="${character.emoji}" />
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
