flowchart = {

}
//Initial question options
//!!Missing light-spored gilled mushrooms without a ring!!
flowchartRoutes = {

	'initial': {
		prompt: 'Does the mushroom have:',
		options: [{
			text: 'Gills',
			slug: 'amanita-gills'
		},{
			text: 'Pores',
			slug: 'bolete-cap'
		},{
			text: 'Teeth',
			slug: 'hydnoid-tooth-like'
		}]
	},

//Amanita Track//
	'amanita-gills': {
		prompt: 'Do mature specimens have white, pinkish, or yellow gills?',
		options: [{
			text: 'Yes',
			slug: 'amanita-veil'
		},{
			text: 'No',
			slug: 'russula-gills'
		}]
	},

	//this is a true statement
	// amanitaGills.options[0].text == 'Yes'

	'amanita-veil': {
		prompt: "Can you see scaly rings or a volva at the mushroom's base? It will be easier to see on younger specimens.",
		options: [{
			text: 'Yes',
			slug: 'amanita-texture'
		},{
			text: 'No',
			slug: 'amanita-texture'
		}]
	},

	'amanita-texture': {
		prompt: 'Do they have any patches or flakes on top?',
		options: [{
			text: 'Yes',
			slug: 'amanita-possitive-id'
		},{
			text: 'No',
			slug: 'other-possitive-id'
		}]
	},

	'amanita-possitive-id': {
		prompt: 'You may have an Amanita there.',
		options: [{
			text: 'View Amanitas',
			link: 'http://en.wikipedia.org/wiki/Amanita'
		}]
	},

//Russula Track//
	'russula-gills': {
		prompt: 'Is there a veil covering the young gills?',
		options: [{
			text: 'Yes',
			slug: 'russula-veil'
		},{
			text: 'No',
			slug: 'russula-veil'
		}]
	},

	'russula-veil': {
		prompt: 'Is there a thin veil that dissapears and does not form a ring on the stalk?',
		options: [{
			text: 'Yes',
			slug: 'russula-brittle'
		},{
			text: 'No',
			slug: 'darkspore-gills'
		}]
	},

	'russula-brittle': {
		prompt: 'Does the stalk break like chalk? It may look milky or juicy when cut.',
		options: [{
			text: 'Yes',
			slug: 'russula-possitive-id'
		},{
			text: 'No',
			slug: 'chanterelle-fibrous'
		}]
	},

	'russula-possitive-id': {
		prompt: 'Sounds like a Milk Cap or some sort of Russula.',
		options: [{
			text: 'View Russulaceae',
			link: 'http://en.wikipedia.org/wiki/Russulaceae'
		}]
	},

//Miscellaneous Dark Spored Mushrooom Track//
'darkspore-ring': {
	prompt: 'Are the young gills covered by a veil that usually forms a ring on the stalk?',
	options: [{
		text: 'Yes',
		slug: 'darkspore-gills'
	},{
		text: 'No',
		slug: 'russula-veil'
	}]
},

'darkspore-gills': {
	prompt: 'Are the gills attached to the stalk of the mushroom?',
	options: [{
		text: 'Yes',
		slug: 'darkspore-spores'
	},{
		text: 'No',
		slug: 'darkspore-spores'
	}]
},

'darkspore-spores': {
	prompt: 'Are the spores and mature gills different colors from each other?',
	options: [{
		text: 'Yes',
		slug: 'darkspore-spores'
	},{
		text: 'No',
		slug: 'agaricus-spore-color'
	},{
		text: 'Want to know more about making a spore print?',
		link: 'http://mushplanet.com/cultivation_manual/making-spore-print.html'
	}]
},

'darkspore-spore-color': {
	prompt: 'Are the spores rusty-orange, brown, cinnamon or black colored?',
	options: [{
		text: 'Yes',
		slug: 'darkspore-gill-color'
	},{
		text: 'No',
		slug: 'spore-color'
	},{
		text: 'Want to know more about making a spore print?',
		link: 'http://mushplanet.com/cultivation_manual/making-spore-print.html'
	}]
},

'darkspore-gill-color': {
	prompt: 'Are the mature gills white, yellow, or greenish?',
	options: [{
		text: 'Yes',
		slug: 'spore-color'
	},{
		text: 'No',
		slug: 'darkspore-possitive-id'
	}]
},

'darkspore-possitive-id': {
	prompt: 'It seems you have found some kind of a dark spored mushroom.',
	options: [{
		text: 'View Dark-Spored Mushrooms',
		link: 'http://www.mykoweb.com/CAF/skey/agaric.html'
	}]
},

//Track for light spored gilled mushrooms with a ring//
'light-spore-color': {
	prompt: 'Are the spores white or perhaps greenish?',
	options: [{
		text: 'Yes',
		slug: 'light-spore-possitive-id'
	},{
		text: 'No',
		slug: 'other-possitive-id'
	},{
		text: 'Want to know more about making a spore print?',
		link: 'http://mushplanet.com/cultivation_manual/making-spore-print.html'
	}]
},

'light-spore-possitive-id': {
	prompt: 'Your journey is far from over, it would seem you have found a miscellaneous light-spored gilled mushroom with a ring.',
	options: [{
		text: 'View Light-Spored Mushrooms with Rings',
		link: 'http://www.mushroomexpert.com/gilled_pale.html'
	}]
},

//Chanterelle Track//
'chanterelle-fibrous': {
	prompt: 'Does the stem look fibrous when broken? It may also become juicy or milky when cut.',
	options: [{
		text: 'Yes',
		slug: 'chanterelle-spore-color'
	},{
		text: 'No',
		slug: 'russula-brittle'
	}]
},

'chanterelle-spore-color': {
	prompt: 'Are the spores white, pinkish, yellow or lilac tinged?',
	options: [{
		text: 'Yes',
		slug: 'chanterelle-gill-color'
	},{
		text: 'No',
		slug: 'darkspore-gills'
	},{
		text: 'Want to know more about making a spore print?',
		link: 'http://mushplanet.com/cultivation_manual/making-spore-print.html'
	}]
},

'chanterelle-gill-color': {
	prompt: 'Are the mature gills either pale or brightly colored?',
	options: [{
		text: 'Yes',
		slug: 'chanterelle-gills'
	},{
		text: 'No',
		slug: 'darkspore-spore-color'
	}]
},

'chanterelle-gills': {
	prompt: 'Are the gills kind of thick, blunt, and strangely forked or connected by cross veins?',
	options: [{
		text: 'Yes',
		slug: 'chanterelle-possitive-id'
	},{
		text: 'No',
		slug: 'other-possitive-id'
		//swap for light spored without ring//
	}]
},

//Second Chanterelle Track//
'chanterelle-texture': {
	prompt: 'Is the cap and stalk jellylike?',
	options: [{
		text: 'Yes',
		slug: 'other-possitive-id'
	},{
		text: 'No',
		slug: 'chanterelle-habitat'
	}]
},

'chanterelle-habitat': {
	prompt: 'Is it growing on the ground?',
	options: [{
		text: 'Yes',
		slug: 'chanterelle-surface'
	},{
		text: 'No',
		slug: 'chanterelle-habitat2'
	}]
},

'chanterelle-habitat2': {
	prompt: 'Is it growing underground or on corn?',
	options: [{
		text: 'Yes',
		slug: 'chanterelle-surface'
	},{
		text: 'No',
		slug: 'other-possitive-id'
	}]
},

'chanterelle-surface': {
	prompt: 'Is the underside wrinkled or veined? *In one case the cap is trumpetlike with a smooth underside.',
	options: [{
		text: 'Yes',
		slug: 'chanterelle-possitive-id'
	},{
		text: 'No',
		slug: 'other-possitive-id'
	}]
},

'chanterelle-possitive-id': {
	prompt: 'You have stumbled on a chanterelle or false chanterelle.',
	options: [{
		text: 'View Chanterelles and False Chanterelles',
		link: 'http://en.wikipedia.org/wiki/Chanterelle'
	}]
},

//Agaricus Track//
'agaricus-spore-color': {
	prompt: 'Are the spores brown?',
	options: [{
		text: 'Yes',
		slug: 'agaricus-gill-color'
	},{
		text: 'No',
		slug: 'other-possitive-id'
	},{
		text: 'Want to know more about making a spore print?',
		link: 'http://mushplanet.com/cultivation_manual/making-spore-print.html'
	}]
},

'agaricus-gill-color': {
	prompt: 'Are the spores white, pinkish, yellow or lilac tinged?',
	options: [{
		text: 'Yes',
		slug: 'agaricus-free-gill'
	},{
		text: 'No',
		slug: 'other-possitive-id'
	},{
		text: 'Want to know more about making a spore print?',
		link: 'http://mushplanet.com/cultivation_manual/making-spore-print.html'
	}]
},

'agaricus-free-gill': {
	prompt: 'Are the mature gills pale or brightly colored?',
	options: [{
		text: 'Yes',
		slug: 'agaricus-possitive-id'
	},{
		text: 'No',
		slug: 'other-possitive-id'
	}]
},

'agaricus-possitive-id': {
	prompt: 'You have stumbled on a agaricus or false agaricus.',
	options: [{
		text: 'View Agaricus Mushrooms',
		link: 'http://en.wikipedia.org/wiki/Agaricus'
	}]
},

//Bolete Track//
'bolete-cap': {
	prompt: 'Are the spores brown?',
	options: [{
		text: 'Yes',
		slug: 'bolete-stalk'
	},{
		text: 'No',
		slug: 'polypore-cap'
	},{
		text: 'Want to know more about making a spore print?',
		link: 'http://mushplanet.com/cultivation_manual/making-spore-print.html'
	}]
},

'bolete-stalk': {
	prompt: 'Are the spores white, pinkish, yellow or lilac tinged?',
	options: [{
		text: 'Yes',
		slug: 'bolete-texture'
	},{
		text: 'No',
		slug: 'polypore-cap'
	},{
		text: 'Want to know more about making a spore print?',
		link: 'http://mushplanet.com/cultivation_manual/making-spore-print.html'
	}]
},

'bolete-texture': {
	prompt: 'Are the mature gills pale or brightly colored?',
	options: [{
		text: 'Yes',
		slug: 'bolete-possitive-id'
	},{
		text: 'No',
		slug: 'polypore-cap'
	}]
},

'bolete-possitive-id': {
	prompt: 'You are looking at some sort of Bolete.',
	options: [{
		text: 'View Boletes',
		link: 'http://en.wikipedia.org/wiki/Boletus'
	}]
},

//Polypore Track//
'polypore-cap': {
	prompt: 'Is the mushroom tough or woody?',
	options: [{
		text: 'Yes',
		slug: 'polypore-tubes'
	},{
		text: 'No',
		slug: 'polypore-form'
	}]
},

'polypore-form': {
	prompt: 'Is the mushroom growing on wood in a shelflike or bracketlike formation?',
	options: [{
		text: 'Yes',
		slug: 'polypore-tubes'
	},{
		text: 'No',
		slug: 'polypore-tubes'
	}]
},

'polypore-tubes': {
	prompt: 'Is the stalk growing off-center and are the tubes rather tough?',
	options: [{
		text: 'Yes',
		slug: 'polypore-possitive-id'
	},{
		text: 'No',
		slug: 'polypore-cap'
	}]
},

'polypore-possitive-id': {
	prompt: 'That could be a Polypore.',
	options: [{
		text: 'View Polypores',
		link: 'http://en.wikipedia.org/wiki/Polypore'
	}]
},

//Hydnoid Track (teeth mushrooms)//
'hydnoid-tooth-like': {
	prompt: 'Does the mushroom have downward-pointing spines or teeth? There is a chance it may not have a well defined cap and stalk.',
	options: [{
		text: 'Yes',
		slug: 'hydnoid-possitive-id'
	},{
		text: 'No',
		slug: 'morel-cap'
	}]
},

'hydnoid-possitive-id': {
	prompt: 'You are looking at some sort of teeth fungis.',
	options: [{
		text: 'View Hydnoid Fungi',
		link: 'http://en.wikipedia.org/wiki/Hydnoid_fungi'
	}]
},

//Morels or False Morel Track//
'morel-cap': {
	prompt: 'Is the cap brain-like, saddle-shaped, thimble-like, or honeycombed with pits and ridges?',
	options: [{
		text: 'Yes',
		slug: 'morel-veil'
	},{
		text: 'No',
		slug: 'club-coral-shape'
	}]
},

'morel-veil': {
	prompt: 'Is there a sack at the base of the stalk?',
	options: [{
		text: 'Yes',
		slug: 'morel-possitive-id'
	},{
		text: 'No',
		slug: 'club-coral-shape'
	}]
},

'morel-possitive-id': {
	prompt: 'You are looking at some sort of Morel or False Morel.',
	options: [{
		text: 'View Morels and False Morels',
		link: 'http://en.wikipedia.org/wiki/Morchella'
	}]
},

//Club and Coral Fungi Track//
'club-coral-shape': {
	prompt: 'Is the mushroom a weird shape? Maybe it looks like coral?',
	options: [{
		text: 'Yes',
		slug: 'club-coral-upright'
	},{
		text: 'No',
		slug: 'puffball-spore-case'
	}]
},

'club-coral-upright': {
	prompt: 'Is the mushroom standing upright or branching out like coral does?',
	options: [{
		text: 'Yes',
		slug: 'club-coral-surface'
	},{
		text: 'No',
		slug: 'puffball-spore-case'
	}]
},

'club-coral-surface': {
	prompt: 'Does it have a smooth to slightly wrinkled surface? And no cap on top?',
	options: [{
		text: 'Yes',
		slug: 'club-coral-possitive-id'
	},{
		text: 'No',
		slug: 'puffball-spore-case'
	}]
},
'club-coral-possitive-id': {
	prompt: 'That could be a Coral or Club Fungi.',
	options: [{
		text: 'View Clavarioid Fungi',
		link: 'http://en.wikipedia.org/wiki/Clavarioid_fungi'
	}]
},

//Puffballs and Earthstars
'puffball-spore-case': {
	prompt: 'Does the mushroom have a spore case? *It might even have a stalk or rays.',
	options: [{
		text: 'Yes',
		slug: 'puffball-habitat'
	},{
		text: 'No',
		slug: 'chanterelle-habitat2'
	}]
},

'puffball-habitat': {
	prompt: 'Is it growing on wood or the ground?',
	options: [{
		text: 'Yes',
		slug: 'puffball-possitive-id'
	},{
		text: 'No',
		slug: 'chanterelle-habitat2'
	}]
},
'puffball-possitive-id': {
	prompt: 'You have described a puffball or an earthstar.',
	options: [{
		text: 'View Puffballs',
		link: 'http://en.wikipedia.org/wiki/Puffball'
	},{
		text: 'View Earthstars',
		link: 'http://en.wikipedia.org/wiki/Geastrum'
	}]
},

//Unknown Mushroom//
'other-possitive-id': {
	prompt: "You've got me! I don't know what that mushroom is.",
	options: [{
		text: 'Start Over',
		slug: 'initial'
	},{
		text: 'Learn More About Identifying Mushrooms',
		link: 'http://en.wikipedia.org/wiki/Mushroom#Identification'
	}]
},

}


