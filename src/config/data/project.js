var rollingLogo = require( '../../assets/images/logo/rolling2.jpeg' )
var centralLogo = require( '../../assets/images/logo/umg-central.jpeg' )
var sonnyLogo = require( '../../assets/images/logo/sonny.jpeg' )
var diceLogo = require( '../../assets/images/logo/dice-logo.svg' )
var guardianLogo = require( '../../assets/images/logo/guardian.jpeg' )
var umaLogo = require( '../../assets/images/logo/uma.png' )
var umcLogo = require( '../../assets/images/logo/umc.png' )
var umlLogo = require( '../../assets/images/logo/uml.png' )
var shipPlamLogo = require( '../../assets/images/logo/shippalm.jpeg' )
var synergyLogo = require('../../assets/images/logo/synergy.png')

// Carnaby Images 
var carnaby1 = require( '../../assets/images/carnaby/homeepage.png' )
var carnaby2 = require( '../../assets/images/carnaby/inside-carnaby-street-page.png' )
var carnaby3 = require('../../assets/images/carnaby/lookbook-page.png')
var carnaby4 = require( '../../assets/images/carnaby/lookbook-detail-page.png' )
var carnaby5 = require( '../../assets/images/carnaby/pdp-page.png' )
var carnaby6 = require( '../../assets/images/carnaby/mobileView.png' )

//Central
var central1 = require( '../../assets/images/central/home.png' )
var central2 = require( '../../assets/images/central/office-detail.png' )
var central3 = require('../../assets/images/central/news.png')
var central4 = require( '../../assets/images/central/detailpage.png' )
var central5 = require( '../../assets/images/central/big-menu.png' )
var central6 = require( '../../assets/images/central/mobile-viewer.png' )

//Sonny
var sonny = require( '../../assets/images/sonny/homepage.png' )

//Dice
var dice = require( '../../assets/images/sonny/dice.png' )

//Dice
var gardian = require( '../../assets/images/sonny/gardian.png' )

//UMA
var uma1 = require( '../../assets/images/uma/home.png' )
var uma2 = require( '../../assets/images/uma/audience.png' )
var uma3 = require('../../assets/images/uma/music.png')

//UML
var uml1 = require( '../../assets/images/uml/home.png' )
var uml2 = require( '../../assets/images/uml/home1.png' )
var uml3 = require('../../assets/images/uml/detail.png')

//Shippalm
var Shippalm = require( '../../assets/images/shippalm/login.png' )

//Synergy
var synergy = require( '../../assets/images/shippalm/synergy.png' )


const Projects = [
  {
    id: 1,
    name: 'Rolling Stones',
    imgLogo: rollingLogo,
    images: [
      { image: carnaby1},
      { image: carnaby2 },
      { image: carnaby3 },
      { image: carnaby4},
      { image: carnaby5 },
      { image: carnaby6 }
    ]
  },
  {
    id: 2,
    name: 'UMG Central',
    // color: 'White and black',
    href: '#',
    imgLogo: centralLogo,
     images: [
      { image: central1},
      { image: central2 },
      { image: central3 },
      { image: central4},
      { image: central5 },
      { image: central6 }
    ]
    // imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    // price: '$140',
  },
  {
    id: 3,
    name: "Sonny's AutoBody Shop",
    // color: 'White and black',
    href: '#',
    imgLogo: sonnyLogo,
    images: [
      { image: sonny}
    ]
    // imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    // price: '$140',
  },
  {
    id: 4,
    name: 'Dice',
    // color: 'White and black',
    href: '#',
    imgLogo: diceLogo,
    images: [
      { image: dice}
    ]
    // imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    // price: '$140',
  },
  {
    id: 5,
    name: 'Guardian',
    // color: 'White and black',
    href: '#',
    imgLogo: guardianLogo,
    images: [
      { image: gardian}
    ]
    // imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    // price: '$140',
  },
  {
    id: 6,
    name: 'UMA-(Universal Music Artists)',
    // color: 'White and black',
    href: '#',
    imgLogo: umaLogo,
    images: [
       { image: uma1 },
       { image: uma2 },
       { image: uma3}
    ]
    // imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    // price: '$140',
  },
  {
    id: 7,
    name: 'UMC-(Universal Music Consumptions)',
    // color: 'White and black',
    href: '#',
    imgLogo: umcLogo,
    images: [
       { image: uma1 },
       { image: uma2 },
       { image: uma3}
    ]
    // imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    // price: '$140',
  },
  {
    id: 8,
    name: 'UML-(Universal Music Label)',
    // color: 'White and black',
    href: '#',
    imgLogo: umlLogo,
    images: [
       { image: uml1 },
       { image: uml2 },
       { image: uml3}
    ]
    // imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    // price: '$140',
  },
  {
    id: 9,
    name: 'ShipPalm',
    // color: 'White and black',
    href: '#',
    imgLogo: shipPlamLogo,
    images: [
      {image: Shippalm}
    ]
    // imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    // price: '$140',
  },
  {
    id: 10,
    name: 'Synergy Maritime',
    // color: 'White and black',
    href: '#',
    imgLogo: synergyLogo,
    images: [
      {image: synergy}
    ]
    // imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
    // price: '$140',
  }   
]


export default Projects