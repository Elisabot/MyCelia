function randoInt (min, max) {
  // Pick random interger between min & max, excluding the max
  return Math.floor(Math.random() * (max - min)) + min
}

if (Meteor.isClient) {
  var mushroomImgs = [
    '/images/mushroom-photos/littleyellowmushrooms.jpg',
    '/images/mushroom-photos/woodchipmushrooms.jpg',
    '/images/mushroom-photos/littleyellowcapsmoss.jpg',
    '/images/mushroom-photos/logwhiteoyster.jpg',
    '/images/mushroom-photos/littleyellowcaps.jpg'
  ]

  // Pick random background image
  Template.home.helpers({
    anyMushroomImg: function () {
      return mushroomImgs[randoInt(0, mushroomImgs.length)]
    }
  })

  Template.home.events({
  })
}
