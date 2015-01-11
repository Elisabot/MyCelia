Router.route('/quest/:slug', function () {
  var item = flowchartRoutes[this.params.slug];
  this.render('flowchartRoute', {data: item});
});