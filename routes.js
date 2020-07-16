Router.route('/', function () {
  this.render('home')
})

Router.route('/quest/:slug', function () {
  let options = flowchartRoutes[this.params.slug]
  this.render('flowchartRoute', {data: options})
})
