Router.route('/quest/:slug', function () {
  console.log('something')
  var item = flowchartRoutes[this.params.slug]
  this.render('flowchartRoute', {data: item})
})

Router.route('/', function () {
  this.render('home')
})
