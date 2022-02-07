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
        const res = await fetch('https://raw.githubusercontent.com/SaibotCook/AriesChatExtension/main/custom_emoji.json?token=GHSAT0AAAAAABRKXTUJHASP2EWWCQXHHJAKYQBMFHA');
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }
};

const displayCharacters = (characters) => {
    if (character.emojiURL === "") {

        const htmlString = characters
        .map((character) => {
            return `
                <text title="${character.aliases}">${character.emoji}</text>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
        
    } else {
        const htmlString = characters
        .map((character) => {
            return `
                <img src="${character.emojiURL}" title="${character.aliases}"></img>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
    }

};


loadCharacters();
