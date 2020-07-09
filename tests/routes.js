
// Router.configure({
// 	// the default layout
// 	layoutTemplate: 'layout'
// });

Router.route('/', function () {
  this.render('home')
})

// A: Oh goodness, I'm stumped.
Router.route('/quest/mystery/possitive-id', function () {
  this.layout('questLayout')
  this.render('mysteryPosID')
})

// Q: Does your mushroom have
Router.route('/quest/initial', function () {
  this.layout('questLayout')
  this.render('questionInitial')
})

// Amanita Track//
// Q: Do mature specimens have white, pinkish, or yellow gills?
Router.route('/quest/amanita/gills', function () {
  this.layout('questLayout')
  this.render('amanitaGills')
})

// Q: Do young examples of your mushroom have a veil that forms a volva or caly rings around the base?
Router.route('/quest/amanita/veil', function () {
  this.layout('questLayout')
  this.render('amanitaVeil')
})

// Q: Does it have patches or flakes on top?
Router.route('/quest/amanita/texture', function () {
  this.layout('questLayout')
  this.render('amanitaTexture')
})

// A: You may have an Amanita there.
Router.route('/quest/amanita/possitive-id', function () {
  this.layout('questLayout')
  this.render('amanitaPosID')
})

// Milk Cap or Russula Track//
// Q: Is there a veil covering the young gills?
Router.route('/quest/russula/gills', function () {
  this.layout('questLayout')
  this.render('mcrGills')
})

// Q: Is there a thin veil that dissapears and does not form a ring on the stalk?
Router.route('/quest/russula/veil', function () {
  this.layout('questLayout')
  this.render('mcrVeil')
})

// Q: Does the stalk break like chalk? Maybe it looks juicy or milky when cut?
Router.route('/quest/russula/brittle', function () {
  this.layout('questLayout')
  this.render('mcrBrittle')
})

// A: Sounds like a Milk Cap or Russula.
Router.route('/quest/russula/possitive-id', function () {
  this.layout('questLayout')
  this.render('mcrPosID')
})

// Miscellaneous Dark Spored Mushroom Track//
// Q: Are the young gills covered by a veil that usually forms a ring on the stalk?
Router.route('/quest/darkspore/ring', function () {
  this.layout('questLayout')
  this.render('mdsRing')
})

// Q: Are the gills attached to the stalk of the mushroom?
Router.route('/quest/darkspore/gills', function () {
  this.layout('questLayout')
  this.render('mdsGills')
})

// Q: Are the spores and mature gills different colors from each other?
Router.route('/quest/darkspore/spores', function () {
  this.layout('questLayout')
  this.render('mdsSpores')
})

// Q: Are the spores rusty-orange, brown, or black colored?
Router.route('/quest/darkspore/spore-color', function () {
  this.layout('questLayout')
  this.render('mdsSporeColor')
})

// Q: Are the mature gills white, yellow, or greenish?
Router.route('/quest/darkspore/gill-color', function () {
  this.layout('questLayout')
  this.render('mdsGillColor')
})

// A: It seems you have found a dark spored mushroom.
Router.route('/quest/darkspore/possitive-id', function () {
  this.layout('questLayout')
  this.render('mdsPosID')
})

// Track for light spored gilled mushrooms with a ring//
// Q: Are the spores white or perhaps greenish?
Router.route('/quest/lightspore/spore-color', function () {
  this.layout('questLayout')
  this.render('mlsSporeColor')
})

// A: Your journey is far from over, it would seem you have found a miscellaneous light-spored gilled mushroom with a ring.
Router.route('/quest/lightspore/possitive-id', function () {
  this.layout('questLayout')
  this.render('mlsPosID')
})

// chanterelle and fake chanterelle track//
// Q: Does the stem look fibrous when broken? It may also become juicy or milky when cut.
Router.route('/quest/chanterelle/fibrous', function () {
  this.layout('questLayout')
  this.render('chanFibrous')
})

// Q: Are the spores white, pinkish, yellow or lilac tinged?
Router.route('/quest/chanterelle/spore-color', function () {
  this.layout('questLayout')
  this.render('chanSporeColor')
})

// Q: Are the mature gills pale or brightly colored?
Router.route('/quest/chanterelle/gill-color', function () {
  this.layout('questLayout')
  this.render('chanGillColor')
})

// Q: Are the gills fairly thick, blunt, and usually forked or connected by cross veins?
Router.route('/quest/chanterelle/gills', function () {
  this.layout('questLayout')
  this.render('chanGills')
})

// A: You have stumbled on a chanterelle or false chanterelle.
Router.route('/quest/chanterelle/possitive-id', function () {
  this.layout('questLayout')
  this.render('chanPosID')
})

// Agaricus track//
// Q: Are the spores brown?
Router.route('/quest/agaricus/spore-color', function () {
  this.layout('questLayout')
  this.render('agarSporeColor')
})

// Q: Are the gills deep brown but white or pink when young?
Router.route('/quest/agaricus/gill-color', function () {
  this.layout('questLayout')
  this.render('agarGillColor')
})

// Q: Are the gills free from the stem?
Router.route('/quest/agaricus/free-gill', function () {
  this.layout('questLayout')
  this.render('agarFreeGill')
})

// A: You may have found an Agaricus.
Router.route('/quest/agaricus/possitive-id', function () {
  this.layout('questLayout')
  this.render('agarPosID')
})

// Boletes Track//
// Q: Is the mushroom's cap fleshy?
Router.route('/quest/boletes/cap', function () {
  this.layout('questLayout')
  this.render('boletesCap')
})

// Q: Does the mushroom have a mostly central stalk?
Router.route('/quest/boletes/stalk', function () {
  this.layout('questLayout')
  this.render('boletesStalk')
})

// Q: Are the tubes soft and spongy?
Router.route('/quest/boletes/texture', function () {
  this.layout('questLayout')
  this.render('boletesTexture')
})

// A: You are looking at some sort of Bolete.
Router.route('/quest/boletes/possitive-id', function () {
  this.layout('questLayout')
  this.render('bolPosID')
})

// Polypores Track//
// Q: Is the mushroom tough or woody?
Router.route('/quest/polypores/cap', function () {
  this.layout('questLayout')
  this.render('polCap')
})

// Q: Is the mushroom growing on wood in a shelflike or bracketlike formation?
Router.route('/quest/polypores/form', function () {
  this.layout('questLayout')
  this.render('polyporesForm')
})

// Q: Does the stalk grow off center and are the tubes rather tough?
Router.route('/quest/polypores/tubes', function () {
  this.layout('questLayout')
  this.render('polTubes')
})

// A: That could be a Polypore.
Router.route('/quest/polypores/possitive-id', function () {
  this.layout('questLayout')
  this.render('polPosID')
})

// Hynoid teeth fungi track//
// Q: Does the mushroom have downward-pointing spines or teeth? There is a chance it may not have a well defined cap and stalk.
Router.route('/quest/hydnoid/tooth-like', function () {
  this.layout('questLayout')
  this.render('hydTeeth')
})

// A: You are looking at some sort of teeth fungis.
Router.route('/quest/hydnoid/possitive-id', function () {
  this.layout('questLayout')
  this.render('hydPosID')
})

// Morel and false morel track//
// Q: Is the cap brainlike, saddle-shaped, thimble-like, or heneycombed with pits and ridges?
Router.route('/quest/morel/cap', function () {
  this.layout('questLayout')
  this.render('morCap')
})

// Q: Is there a sack at the base of the stalk?
Router.route('/quest/morel/veil', function () {
  this.layout('questLayout')
  this.render('morVeil')
})

// A: You are looking at some sort of Morel or false Morel.
Router.route('/quest/morel/possitive-id', function () {
  this.layout('questLayout')
  this.render('morPosID')
})

// Coral and Club Fungi track//
// Q: Is the mushroom differently shaped?
Router.route('/quest/club-coral/shape', function () {
  this.layout('questLayout')
  this.render('club-coralShape')
})

// Q: Does it have a stalk?
Router.route('/quest/club-coral/stalk', function () {
  this.layout('questLayout')
  this.render('club-coralStalk')
})

// Q: Is there a sack at the base?
Router.route('/quest/club-coral/sack', function () {
  this.layout('questLayout')
  this.render('club-coralSack')
})

// Q: Is the mushroom standing upright and clublike?
Router.route('/quest/club-coral/upright', function () {
  this.layout('questLayout')
  this.render('club-coralUpright')
})

// Q: Is it coral-like(branched) with either a smooth to slightly wrinkled surface?
Router.route('/quest/club-coral/surface', function () {
  this.layout('questLayout')
  this.render('club-coralSurface')
})

// A: That could be a Coral or Club Fungi.
Router.route('/quest/club-coral/possitive-id', function () {
  this.layout('questLayout')
  this.render('club-coralPosID')
})

// Puffball and Earthstar Track//
// Q: Does the mushroom have a spore case? *It may or may not have a stalk or rays.
Router.route('/quest/puffball/spore-case', function () {
  this.layout('questLayout')
  this.render('puffSporeCase')
})

// Q: Is it growing on either the ground or wood?
Router.route('/quest/puffball/habitat', function () {
  this.layout('questLayout')
  this.render('puffHabitat')
})

// A: You may have a puffball or earthstar.
Router.route('/quest/puffball/possitive-id', function () {
  this.layout('questLayout')
  this.render('puffPosID')
})

// Chantrerelle Track//
// Q: Is the cap and stalk jellylike?
Router.route('/quest/chanterelle/texture', function () {
  this.layout('questLayout')
  this.render('chanTexture')
})

// Q: Is it growing on the ground?
Router.route('/quest/chanterelle/habitat', function () {
  this.layout('questLayout')
  this.render('chanHabitat')
})

// Q: Is the underside wrinkled or veined? *In one case the cap is trumpetlike with a smooth underside.
Router.route('/quest/chanterelle/surface', function () {
  this.layout('questLayout')
  this.render('chanSurface')
})

// A: That could be a chanterelle.
// Router.route('/quest/chanterelle/possitive-id', function () {
// 	this.layout('questLayout');
// 	this.render('chanPosID');
// });

// Other Mushrooms//
// A: That might be some other kind of mushroom.
Router.route('/quest/other/possitive-id', function () {
  this.layout('questLayout')
  this.render('otherPosID')
})
