'test-user-direction': {
	prompt: 'Click the button to go somewhere',
	scoot: [{
		text:'Somewhere',
		link: 'http://website.com'
	}]
}

//what do i need to do in order to make a external link work?

//this is the standard layout:
flowchartRoutes = { //this is what the router connects with
	'initial': { //this is the name used to refer to the page
		prompt: 'What is this?', //this is the question that the user views on the page
		options: [{ //this is a function or array for the user's selection
			text: 'Gills', //This is the title on the button
			slug: 'amanita-gills' //This is how we create the browser's slug
		}]	}
}

//we need to send the user to a pre-existing link without creating a slug

