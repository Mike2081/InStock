const express = require('express');
let router = express.Router();

let warehouses = [
	{
		id: 1,
		address: {
			street: '123 Main Street West',
			city: 'Toronto, Canada',
			postalCode: 'M6J 2H2'
		},
		contact: {
			manager: 'Mara Weinberg',
			phoneNumber: '+1 416 678 2345',
			email: 'mweinberg@instock.com'
		},
		inventoryType: 'Brainstation Classroom Items',
		inventory: [
			{
				id: 101,
				name: 'Black Expo Markers',
				smallDescription: 'A pack of five black expo markers.',
				largeDescription:
					'A pack of five black expo-branded erasable markers to be used to write on standard white boards.',
				lastOrdered: '05/24/2018',
				quantity: '12,000',
				instock: true
			},
			{
				id: 102,
				name: "Ian's Pink Sweater",
				smallDescription: 'One pink sweater, worn by Ian Katsuno',
				largeDescription:
					'Each of these sweaters are authentic and property of Ian Katsuno. They have all been worn many times during his famous lectures',
				lastOrdered: '05/28/2018',
				quantity: '21',
				instock: true
			}
		]
	},
	{
		id: 2,
		address: {
			street: '420 King Street West',
			city: 'Toronto, Canada',
			postalCode: 'M5V 1K2'
		},
		contact: {
			manager: 'Auston Matthews',
			phoneNumber: '+1 647 876 3434',
			email: 'amatthews@instock.com'
		},
		inventoryType: 'Plants',
		inventory: [
			{
				id: 201,
				name: 'Big Cactus',
				smallDescription: 'One six feet and three inch cactus.',
				largeDescription:
					'One healthy cactus standing at six feet and three inches tall. Water and sunlight not included.',
				lastOrdered: '05/16/2018',
				quantity: '34',
				instock: true
			},
			{
				id: 202,
				name: 'Spider Plant',
				smallDescription: 'One hanging Spider Plant',
				largeDescription:
					'This beautiful Spider Plant comes in a hangable pot that looks perfect on any patio or porch.',
				lastOrdered: '05/10/2018',
				quantity: '289',
				instock: true
			}
		]
	},
	{
		id: 3,
		address: {
			street: '99 Sussex Drive',
			city: 'Ottawa, Ontario',
			postalCode: 'J9G 1J3'
		},
		contact: {
			manager: 'Michael Scott',
			phoneNumber: '+1 705 535 1600',
			email: 'mscott@instock.com'
		},
		inventoryType: 'Paper',
		inventory: [
			{
				id: 301,
				name: 'Sand Paper',
				smallDescription: 'One stack of 300 sheets of 9000-grit sand paper',
				largeDescription:
					'This sand paper is great for sanding down materials to the finest of specificity. Targeted at consumers with high power levels.',
				lastOrdered: '05/29/2018',
				quantity: '20,000',
				instock: true
			},
			{
				id: 302,
				name: '22 carot gold Toilet Paper',
				smallDescription: 'One roll of 22 carot gold Toilet Paper',
				largeDescription:
					'Treat yourself to the luxury of this hand-crafted 22 carot gold Toilet Paper. Softer-than-silk, this T-P will have you feeling like the king of the throne.',
				lastOrdered: '05/22/2018',
				quantity: '0',
				instock: false
			}
		]
	},
	{
		id: 4,
		address: {
			street: '2014 Forest Hills Drive',
			city: 'Fayetteville, North Carolina',
			postalCode: '72716'
		},
		contact: {
			manager: 'Jermaine Cole',
			phoneNumber: '+1 285 346 2014',
			email: 'jcole@instock.com'
		},
		inventoryType: 'Records',
		inventory: [
			{
				id: 401,
				name: '4 Your Eyez Only',
				smallDescription: "One copy of '4 Your Eyez Only' by J.Cole",
				largeDescription:
					"'4 Your Eyez Only' is the fourth studio album by American rapper J.Cole. It was released on December 9, 2016, by Dreamville Records.",
				lastOrdered: '05/04/2018',
				quantity: '10,201',
				instock: true
			},
			{
				id: 402,
				name: 'KOD',
				smallDescription: "One copy of 'KOD' by J.Cole",
				largeDescription:
					"'KOD' is the fifth studio album by American rapper J.Cole. It was released on April 20, 2018 through Dreamville Records.",
				lastOrdered: '05/17/2018',
				quantity: '20,201',
				instock: true
			}
		]
	}
];

router.get('/', (req, res) => {
	res.json(warehouses);
});

router.get('/:id', (req, res) => {
	let warehouse = warehouses.find(item => item.id == req.params.id);
	if (warehouse == undefined) {
		res.status(404).json({ message: 'No warehouse found with that ID' });
	} else {
		res.json(warehouse);
	}
});

router.post('/', (req, res) => {
	const warehouse = req.body;
	const empty = Object.values(warehouse)
		.map(value => value === null || value === '')
		.find(value => value === true);
	if (empty) {
		res.status(404).json({ message: 'POST request rejected due invalid data' });
	} else if (empty === undefined) {
		res.json({ message: 'warehouse was added' });
		warehouses.push(warehouse);
	}
});

module.exports = router;
module.exports.address = id => {
	const warehouse = warehouses.filter(item =>
		item.inventory.find(obj => obj.id == id)
	);
	const address = warehouse.map(obj => obj.address);
	return address[0].city;
};
