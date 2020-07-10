Router.route('/', function () {
  this.render('home')
})

Router.route('/quest/:slug', function () {
	debugger;
	// flowchartRoutes is not defined
  let options = flowchartRoutes[this.params.slug]
  this.render('flowchartRoute', {data: options})
})

//nothing fancy just a test
Router.route('/my-template', function () {
	this.render('myTemplate')
})

//now we're testing a dynamicly constructed one
Router.route('/:slug', function() {
	let text = myDynamicRoute[this.params.slug]
	this.render('myDynamicTemplate', {data: text})
})