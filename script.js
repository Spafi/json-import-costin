/**
 * Fisierele JSON(JavaScript Object Notation) sunt foarte asemanatoare cu obiectele din JavaScript.
 * Numele sunt string-uri, iar proprietatile pot fi: string, number, array, null, undefined
 */

/** Ca sa ai access la un fisier json, trebuie sa il importi si sa pui assert { type: 'json' },
 * Nu-ti bate capul cu asta, e doar cea mai simpla metoda pentru ce stii tu pana acum, nu o sa folosesti asa.
 */
import heroesJson from './heroes.json' assert { type: 'json' };

class Hero {
	constructor(name, image, attack, mana) {
		this.name = name;
		this.image = image;
		this.attack = attack;
		this.mana = mana;
	}
}

/**
 * Ca sa avem access la ce e in JSON, luam obiectele din JSON si creem obiectele pe care le-am definit noi in JavaScript,
 * adica mapam ce e in JSON la ce e in JS.
 *
 * ATENTIE: Daca intri in obiectul heroes.json, o sa vezi ca totul e bagat intr-o lista
 *
 * Pentru exemplul nostru:
 *
 * Asa arata primul obiect din JSON              Asa arata un Hero nou
 * 	{                                            new Hero(
 *	"nameFromJson": "Hero1",		------------->						  name,
 *	"image": "Hero1.jpg", 		  ------------->              image,
 *	"attack": 100,       		    ------------->              attack,
 *	"mana": 6                   ------------->              mana
 *  }                                                      )
 *
 * Prin functia asta mapam proprietatile din obiectele JSON la proprietatile din clasa Hero
 *
 *
 */
function getHeroes(heroesJson) {
	// initializam o lista goala care va contine lista de obiecte Hero
	const heroesList = [];

	for (let jsonHero of heroesJson) {
		// parcurgem lista JSON si pentru fiecare obiect din JSON cream un obiect Hero
		// caruia ii dam ca parametri numele proprietatilor din JSON
		const hero = new Hero(
			// la name am pus special "nameFromJson" in loc de name ca sa intelegi ca nu trebuie ca proprietatea sa aiba acelasi nume
			jsonHero.nameFromJson,
			jsonHero.image,
			jsonHero.attack,
			jsonHero.mana
		);

		// dupa care il adaugam la lista creata anterior
		heroesList.push(hero);
	}

	// apoi returnam lista de heroes
	return heroesList;
}



// Aici cream un HTMLElement in functie de un obiect Hero
const createHeroElement = (hero) =>
	`
		<div>
			<p>${hero.name}</p>
			<img src="assets/${hero.image}" width="200"> 
			<p>${hero.attack}</p>
			<p>${hero.mana}</p>
		</div>
	`;


// Functia asta afiseaza in pagina elementele hero create anterior
function displayHeroes(heroesJson) {

	// cream lista de obiecte Hero in functie de obiectul json
	const heroesList = getHeroes(heroesJson);

	// parcurgem lista de heroes 
	for (let hero of heroesList) {
		// pentru fiecare cream HTML-ul
		const heroElement = createHeroElement(hero);

		// si il introducem in pagina in containerul cu id-ul heroesContainer
		document
			.getElementById('heroesContainer')
			.insertAdjacentHTML('beforeend', heroElement);
	}
}



displayHeroes(heroesJson);
