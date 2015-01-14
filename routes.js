Router.route('/quest/:slug', function () {
	console.log('wtf')
  var item = flowchartRoutes[this.params.slug];
  this.render('flowchartRoute', {data: item});
});