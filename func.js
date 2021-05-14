const fetchpkmn = async (change) => {
    try {
        const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${change}`
        );
        if (!res.ok) {
            throw new Error(res.status);
        }
        const data = await res.json();
        console.log(data.name);
        // pokemon name
        let nm = (document.getElementById("neym").textContent =
            change + ". " + data.name);

        // pokemon image
        let img = (document.getElementById(
            "pic"
        ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${change}.png`);

        // pokemon type

        document.getElementById('pkmntype').textContent = "Type:" + data.types[0].type.name;
        console.log(data.types.length);
        // pokemon moves
        let ulmoves = document.getElementById("ulmoves");
        ulmoves.textContent = "";

        for (let i = 0; i <= 3; i++) {
            var name = data.moves[Math.floor(Math.random() * data.moves.length)].move.name;
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(name));
            ulmoves.appendChild(li);
        }

    } catch (error) {
        console.log(error);
    }
};

const nxt = async () => {
    let nm = document.getElementById("neym");
    let add = parseInt(nm.textContent) + 1;
    await fetchpkmn(add);
};

const prv = async () => {
    let nm = document.getElementById("neym");
    let sub = parseInt(nm.textContent) - 1;
    await fetchpkmn(sub);
};

fetchpkmn(1);