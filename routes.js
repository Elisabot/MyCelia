
// Router.configure({
// 	// the default layout
// 	layoutTemplate: 'layout'
// });

Router.route('/', function () {
  this.render('home');
});

//Q: Does your mushroom have
Router.route('/initial', function () {
	this.render('questionInitial');
});

// Amanita Track//
//Q: Do mature specimens have white, pinkish, or yellow gills?
Router.route('/amanita/gills', function () {
	this.render('amanitaGills');
});

//Q: Do young examples of your mushroom have a veil that forms a volva or caly rings around the base?
Router.route('/amanita/veil', function () {
	this.render('amanitaVeil');
});

//Q: Does it have patches or flakes on top?
Router.route('/amanita/texture', function () {
	this.render('amanitaTexture');
});

//A: You may have an Amanita there.
Router.route('/amanita/possitive-id', function () {
	this.render('amanitaPosID');
});


// Milk Cap or Russula Track//
//Q: Is there a veil covering the young gills?
Router.route('/milkcap-russula/gills', function () {
	this.render('mcrGills');
});

//Q: Is there a thin veil that dissapears and does not form a ring on the stalk?
Router.route('/milkcap-russula/veil', function () {
	this.render('mcrVeil');
});

//Q: Does the stalk break like chalk? Maybe it looks juicy or milky when cut?
Router.route('/milkcap-russula/brittle', function () {
	this.render('mcrBrittle');
});

//A: Sounds like a Milk Cap or Russula.
Router.route('/milkcap-russula/possitive-id', function () {
	this.render('mcrPosID');
});


// Miscellaneous Dark Spored Mushroom Track//
//Q: Are the young gills covered by a veil that usually forms a ring on the stalk?
Router.route('/darkspore/ring', function () {
	this.render('mdsRing');
});

//Q: Are the gills attached to the stalk of the mushroom?
Router.route('/darkspore/gills', function () {
	this.render('mdsGills');
});

//Q: Are the spores and mature gills different colors from each other?
Router.route('/darkspore/spores', function () {
	this.render('mdsSpores');
});

//Q: Are the spores rusty-orange, brown, or black colored?
Router.route('/darkspore/spore-color', function () {
	this.render('mdsSporeColor');
});

//Q: Are the mature gills white, yellow, or greenish?
Router.route('/darkspore/gill-color', function () {
	this.render('mdsGillColor');
});

//A: It seems you have found a dark spored mushroom.
Router.route('/darkspore/possitive-id', function () {
	this.render('mdsPosID');
});


//Track for light spored gilled mushrooms with a ring//
//Q: Are the spores white or perhaps greenish?
Router.route('/lightspore/spore-color', function () {
	this.render('mlsSporeColor');
});

//A: Your journey is far from over, it would seem you have found a miscellaneous light-spored gilled mushroom with a ring.
Router.route('/lightspore/possitive-id', function () {
	this.render('mlsPosID');
});


//Chantrelle and fake chantrelle track//
//Q: Does the stem look fibrous when broken? It may also become juicy or milky when cut.
Router.route('/chantrelle/fibrous', function () {
	this.render('chanFibrous');
});

//Q: Are the spores white, pinkish, yellow or lilac tinged?
Router.route('/chantrelle/spore-color', function () {
	this.render('chanSporeColor');
});

//Q: Are the mature gills pale or brightly colored?
Router.route('/chantrelle/gill-color', function () {
	this.render('chanGillColor');
});

//Q: Are the gills fairly thick, blunt, and usually forked or connected by cross veins?
Router.route('/chantrelle/gills', function () {
	this.render('chanGills');
});

//A: You have stumbled on a chantrelle or false chantrelle.
Router.route('/chantrelle/possitive-id', function () {
	this.render('chanPosID');
});

//A: Oh goodness, I'm stumped.
Router.route('/mystery/possitive-id', function () {
	this.render('mysteryPosID');
});











