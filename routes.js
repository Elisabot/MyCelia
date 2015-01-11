Router.route('/quest/:slug', function () {
  var item = this.params.slug;
  this.render('ShowItem', {data: item});
});