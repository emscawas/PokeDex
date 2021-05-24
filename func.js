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
        // pokemon height and weight
        let dt = data.height;
        let dtres = dt / 10.00;
        let wt = data.weight;
        let wtres = wt / 10.00;

        document.getElementById('height').textContent = "Height: " + dtres + "m";
        document.getElementById('weight').textContent = "Weight: " + wtres + "kg";
        // pokemon image
        let img = (document.getElementById(
            "pic"
        ).src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${change}.png`);

        // pokemon type
        const type = data.types.map((type) => type.type.name).join(',');
        document.getElementById('pkmntype').textContent = "Type:" + type;

        // pokemon moves
        let ulmoves = document.getElementById("ulmoves");
        ulmoves.textContent = "";

        // babalikan ko 'to

        let pkmoves = data.moves;
        if (pkmoves.length > 5) {
            for (let i = 0; i <= 3; i++) {
                const name = pkmoves[Math.floor(Math.random() * (data.moves.length - i) - i)].move.name;
                // name.slice(0, 4);
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(name));
                ulmoves.appendChild(li);
            }
        } else {
            for (let i = 0; i <= 3; i++) {
                var name = data.moves[i].move.name;
                let li = document.createElement("li");
                li.appendChild(document.createTextNode(name));
                ulmoves.appendChild(li);

            }
        }

        //
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