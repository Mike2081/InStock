const express = require('express');
let info = require('./warehouse-inventory.js');
let router = express.Router();

const addressInfo = info.address;

let inventory = [
	{
		id: 101,
		warehouseId: 1,
		address: addressInfo(101),
		inventoryType: 'Brainstation Classroom Items',
		name: 'Black Expo Markers',
		smallDescription: 'A pack of five black expo markers.',
		largeDescription:
			'A pack of five black expo-branded erasable markers to be used to write on standard white boards.',
		lastOrdered: '05/24/2018',
		orderedBy: 'Nigel Maynard',
		quantity: '12,000',
		instock: true
	},
	{
		id: 102,
		warehouseId: 1,
		address: addressInfo(102),
		inventoryType: 'Brainstation Classroom Items',
		name: "Ian's Pink Sweater",
		smallDescription: 'One pink sweater, worn by Ian Katsuno',
		largeDescription:
			'Each of these sweaters are authentic and property of Ian Katsuno. They have all been worn many times during his famous lectures',
		lastOrdered: '05/28/2018',
		orderedBy: 'Paulo Ribeiro',
		quantity: '21',
		instock: true
	},
	{
		id: 201,
		warehouseId: 2,
		address: addressInfo(201),
		inventoryType: 'Plants',
		name: 'Big Cactus',
		smallDescription: 'One six feet and three inch cactus.',
		largeDescription:
			'One healthy cactus standing at six feet and three inches tall. Water and sunlight not included.',
		lastOrdered: '05/16/2018',
		orderedBy: 'Graehme Tilley',
		quantity: '34',
		instock: true
	},
	{
		id: 202,
		warehouseId: 2,
		address: addressInfo(202),
		inventoryType: 'Plants',
		name: 'Spider Plant',
		smallDescription: 'One hanging Spider Plant',
		largeDescription:
			'This beautiful Spider Plant comes in a hangable pot that looks perfect on any patio or porch.',
		lastOrdered: '05/10/2018',
		orderedBy: 'Michael Doho',
		quantity: '289',
		instock: true
	},
	{
		id: 301,
		warehouseId: 3,
		address: addressInfo(301),
		inventoryType: 'Paper',
		name: 'Sand Paper',
		smallDescription: 'One stack of 300 sheets of 9000-grit sand paper',
		largeDescription:
			'This sand paper is great for sanding down materials to the finest of specificity. Targeted at consumers with high power levels.',
		lastOrdered: '05/29/2018',
		orderedBy: 'Tyler Noseworthy',
		quantity: '20,000',
		instock: true
	},
	{
		id: 302,
		warehouseId: 3,
		address: addressInfo(302),
		inventoryType: 'Paper',
		name: '22 carot gold Toilet Paper',
		smallDescription: 'One roll of 22 carot gold Toilet Paper',
		largeDescription:
			'Treat yourself to the luxury of this hand-crafted 22 carot gold Toilet Paper. Softer-than-silk, this T-P will have you feeling like the king of the throne.',
		lastOrdered: '05/22/2018',
		orderedBy: 'Ana Prosverina',
		quantity: '0',
		instock: false
	},
	{
		id: 401,
		warehouseId: 4,
		address: addressInfo(401),
		inventoryType: 'Records',
		name: '4 Your Eyez Only',
		smallDescription: "One copy of '4 Your Eyez Only' by J.Cole",
		largeDescription:
			"'4 Your Eyez Only' is the fourth studio album by American rapper J.Cole. It was released on December 9, 2016, by Dreamville Records.",
		lastOrdered: '05/04/2018',
		orderedBy: 'Lukas Richardson',
		quantity: '10,201',
		instock: true
	},
	{
		id: 402,
		warehouseId: 4,
		address: addressInfo(402),
		inventoryType: 'Records',
		name: 'KOD',
		smallDescription: "One copy of 'KOD' by J.Cole",
		largeDescription:
			"'KOD' is the fifth studio album by American rapper J.Cole. It was released on April 20, 2018 through Dreamville Records.",
		lastOrdered: '05/17/2018',
		orderedBy: 'Mike Babcock',
		quantity: '20,201',
		instock: true
	}
];

router.get('/', (req, res) => {
	res.json(inventory);
});

router.get('/:id', (req, res) => {
	let inventoryItems = inventory.find(item => item.id == req.params.id);
	if (inventoryItems == undefined) {
		res.status(404).json({ message: 'No item found with that ID' });
	} else {
		res.json(inventoryItems);
	}
});

router.delete('/:id/delete', (req, res) => {
	let id = req.params.id;
	let mapped = inventory.map(item => {
		return item.id;
	});
	let index = mapped.indexOf(Number(id));

	// console.log(mapped);
	// console.log(index);
	// console.log(req.params.id);
	inventory.splice(index, 1);
	res.json(inventory);
});

module.exports = router;
