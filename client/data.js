flowchart = {

}

// questionInitialPrompt = 'Does the mushroom have?'

// questionInitialOption1Text = 'Gills?'
// questionInitialOption1Link = '/amanita/gills'

// questionInitialOption2Text = 'Pores?'
// questionInitialOption2Link = '/boletes/cap'

// questionInitialOption3Text = 'Teeth?'
// questionInitialOption3Link = 'hydnoid/tooth-like'




// questionInitial = {
// 	prompt: 'Does this mushroom have:',
// 	option1: {
// 		text: 'Gills?',
// 		link: '/amanita/gills'
// 	},
// 	option2: {
// 		text: 'Pores?',
// 		link: '/boletes/cap'
// 	},
// 	option3: {
// 		text: 'Teeth?',
// 		link: '/hydnoid/tooth-like'
// 	}
// }

//this is a true statement
// questionInitial.option1.text == 'Gills?'


// questionInitial = {
// 	prompt: 'Does this mushroom have:',
// 	options: [{
// 		text: 'Gills?',
// 		slug: 'amanita-gills'
// 	},{
// 		text: 'Pores?',
// 		slug: 'boletes-cap'
// 	},{
// 		text: 'Teeth?',
// 		slug: 'hydnoid-tooth-like'
// 	}]
// }


//this is a true statement
// questionInitial.options[0].text == 'Gills?'


//A yes/no page
//Amanita Object

flowchartRouts['amanita-gills'].options[1].slug // equals 'milkcap-russula-gills'

exampleObject = {
	0: 'first element',
	1: 'secod element',
	prop1: 1
	prop2: 2
	'prop3': 3
	'&^%$#$%^&*': 'wtf'
	nested: {
		propx: 2
		arr: [{
			lkdf: 'wow'
		}]
	}
}

exampleObject[0] // equals 'first element'
exampleObject.prop1 // equals 1
exampleObject['prop1'] // equals 1
exampleObject['prop3'] // equals 2
exampleObject['&^%$#$%^&*'] // equals 'wtf'

exampleObject['nested']['propx'] // equals 2

exampleObject.nested.propx // equals 2

exampleObject['nested']['arr'][0]['lkdf'] // equals 'wow'

key1 = 'nested'
key2 = 'arr'

exampleObject[key1][key2][0]['lkdf'] // equals 'wow'



flowchartRoutes = {

	'initial': {
		prompt: 'Does this mushroom have:',
		options: [{
			text: 'Gills?',
			slug: 'amanita-gills'
		},{
			text: 'Pores?',
			slug: 'boletes-cap'
		},{
			text: 'Teeth?',
			slug: 'hydnoid-tooth-like'
		}]
	},

	'amanita-gills': {
		prompt: 'Do mature specimens have white, pinkish, or yellow gills?',
		options: [{
			text: 'Yes',
			slug: 'amanita-veil'
		},{
			text: 'No',
			slug: 'milkcap-russula-gills'
		}]
	},

	//this is a true statement
	// amanitaGills.options[0].text == 'Yes'

	'amanita-veil': {
		prompt: 'Can you see a volva or scaly rings around the base of  younger instances of your mushroom?',
		options: [{
			text: 'Yes',
			slug: 'amanita-texture'
		},{
			text: 'No',
			slug: 'amanita-texture'
		}]
	},

	'amanita-texture': {
		prompt: 'Do any of them have patches or flakes on top?',
		options: [{
			text: 'Yes',
			slug: 'amanita-possitive-id'
		},{
			text: 'No',
			slug: 'mystery-possitive-id'
		}]
	},

	'amanita-possitive-id': {
		prompt: 'You may have an Amanita there.',
		options: [{
			text: 'View Amanitas',
			link: 'http://en.wikipedia.org/wiki/Amanita'
		}]
	}
}

















