const formaRaspored = document.querySelector('#forma');
const predmet = document.querySelector('#predmet');
const profesor = document.querySelector('#profesor');
const datum = document.querySelector('#datum');
const vreme = document.querySelector('#vreme');

const itemContainer = document.querySelector('.item-container');

const addElToDOM = (elem) => {
	const item = document.createElement('div');
	item.className = 'item';
	const p0 = document.createElement('p');
	const p1 = document.createElement('p');
	const p2 = document.createElement('p');
	const p3 = document.createElement('p');
	const p4 = document.createElement('p');
	const p5 = document.createElement('p');

	p0.innerHTML = `<span>Predmet:</span> `;
	p1.innerHTML = `<span>Profesor:</span> `;
	p2.innerHTML = `<span>Datum: </span> `;
	p3.innerHTML = `<span>Vreme: </span> `;

	const btnobrisi = document.createElement('button');
	btnobrisi.textContent = 'Obrisi';

	const izmeniProf = document.createElement('button');
	izmeniProf.textContent = 'Izmeni Profesora';
	p4.appendChild(btnobrisi);
	p5.appendChild(izmeniProf);

	item.append(p0, p1, p2, p3);
	itemContainer.appendChild(item);
};

formaRaspored.addEventListener('submit', (e) => {
	e.preventDefault();
});
