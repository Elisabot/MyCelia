
// Router.configure({
// 	// the default layout
// 	layoutTemplate: 'layout'
// });

Router.route('/', function () {
  this.render('home');
});

//Q: Does your mushroom have
Router.route('/quest/initial', function () {
	this.layout('questLayout');
	this.render('questionInitial');
});

// Amanita Track//
//Q: Do mature specimens have white, pinkish, or yellow gills?
Router.route('/quest/amanita/gills', function () {
	this.layout('questLayout');
	this.render('amanitaGills');
});

//Q: Do young examples of your mushroom have a veil that forms a volva or caly rings around the base?
Router.route('/quest/amanita/veil', function () {
	this.layout('questLayout');
	this.render('amanitaVeil');
});

//Q: Does it have patches or flakes on top?
Router.route('/quest/amanita/texture', function () {
	this.layout('questLayout');
	this.render('amanitaTexture');
});

//A: You may have an Amanita there.
Router.route('/quest/amanita/possitive-id', function () {
	this.layout('questLayout');
	this.render('amanitaPosID');
});


// Milk Cap or Russula Track//
//Q: Is there a veil covering the young gills?
Router.route('/quest/milkcap-russula/gills', function () {
	this.layout('questLayout');
	this.render('mcrGills');
});

//Q: Is there a thin veil that dissapears and does not form a ring on the stalk?
Router.route('/quest/milkcap-russula/veil', function () {
	this.layout('questLayout');
	this.render('mcrVeil');
});

//Q: Does the stalk break like chalk? Maybe it looks juicy or milky when cut?
Router.route('/quest/milkcap-russula/brittle', function () {
	this.layout('questLayout');
	this.render('mcrBrittle');
});

//A: Sounds like a Milk Cap or Russula.
Router.route('/quest/milkcap-russula/possitive-id', function () {
	this.layout('questLayout');
	this.render('mcrPosID');
});


// Miscellaneous Dark Spored Mushroom Track//
//Q: Are the young gills covered by a veil that usually forms a ring on the stalk?
Router.route('/quest/darkspore/ring', function () {
	this.layout('questLayout');
	this.render('mdsRing');
});

//Q: Are the gills attached to the stalk of the mushroom?
Router.route('/quest/darkspore/gills', function () {
	this.layout('questLayout');
	this.render('mdsGills');
});

//Q: Are the spores and mature gills different colors from each other?
Router.route('/quest/darkspore/spores', function () {
	this.layout('questLayout');
	this.render('mdsSpores');
});

//Q: Are the spores rusty-orange, brown, or black colored?
Router.route('/quest/darkspore/spore-color', function () {
	this.layout('questLayout');
	this.render('mdsSporeColor');
});

//Q: Are the mature gills white, yellow, or greenish?
Router.route('/quest/darkspore/gill-color', function () {
	this.layout('questLayout');
	this.render('mdsGillColor');
});

//A: It seems you have found a dark spored mushroom.
Router.route('/quest/darkspore/possitive-id', function () {
	this.layout('questLayout');
	this.render('mdsPosID');
});


//Track for light spored gilled mushrooms with a ring//
//Q: Are the spores white or perhaps greenish?
Router.route('/quest/lightspore/spore-color', function () {
	this.layout('questLayout');
	this.render('mlsSporeColor');
});

//A: Your journey is far from over, it would seem you have found a miscellaneous light-spored gilled mushroom with a ring.
Router.route('/quest/lightspore/possitive-id', function () {
	this.layout('questLayout');
	this.render('mlsPosID');
});


//Chantrelle and fake chantrelle track//
//Q: Does the stem look fibrous when broken? It may also become juicy or milky when cut.
Router.route('/quest/chantrelle/fibrous', function () {
	this.layout('questLayout');
	this.render('chanFibrous');
});

//Q: Are the spores white, pinkish, yellow or lilac tinged?
Router.route('/quest/chantrelle/spore-color', function () {
	this.layout('questLayout');
	this.render('chanSporeColor');
});

//Q: Are the mature gills pale or brightly colored?
Router.route('/quest/chantrelle/gill-color', function () {
	this.layout('questLayout');
	this.render('chanGillColor');
});

//Q: Are the gills fairly thick, blunt, and usually forked or connected by cross veins?
Router.route('/quest/chantrelle/gills', function () {
	this.layout('questLayout');
	this.render('chanGills');
});

//A: You have stumbled on a chantrelle or false chantrelle.
Router.route('/quest/chantrelle/possitive-id', function () {
	this.layout('questLayout');
	this.render('chanPosID');
});

//Teeth fungi track//
//Q: Does the mushroom have downward-pointing spines or teeth? There is a chance it may not have a well defined cap and stalk.
Router.route('/quest/hydnoid/tooth-like', function () {
	this.layout('questLayout');
	this.render('hydGillColor');
});

//A: You are looking at some sort of teeth fungis.
Router.route('/quest/hydnoid/possitive-id', function () {
	this.layout('questLayout');
	this.render('hydPosID');
});

//Morel and false morel track//
//Q: Is the cap brainlike, saddle-shaped, thimble-like, or heneycombed with pits and ridges?
Router.route('/quest/morel/cap', function () {
	this.layout('questLayout');
	this.render('hydGillColor');
});

//Q: Is there a sack at the base of the stalk?
Router.route('/quest/morel/cap', function () {
	this.layout('questLayout');
	this.render('hydGillColor');
});

//A: You are looking at some sort of teeth fungis.
Router.route('/quest/morel/possitive-id', function () {
	this.layout('questLayout');
	this.render('hydPosID');
});




















//A: Oh goodness, I'm stumped.
Router.route('/quest/mystery/possitive-id', function () {
	this.layout('questLayout');
	this.render('mysteryPosID');
});











