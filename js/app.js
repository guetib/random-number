let nbr = Document.getElementById('nbr');
let btn = Document.getElementById('nbr');
let nb;

btn.addEventListener('click', rendom);
function rendom() {
    nb = getRandomInt(101);
}

if (nb > nbr) {
    console.log("le numero est plus grand ");
} else if (nb > nbr) {
    console.log("le numero est plus grand ");

} else
    console.log("vous êtes gagnez c'est la bonne numero");
