// Single source of truth for verified business content.
// Every value here was confirmed against the live site during the audit —
// nothing invented (no fake prices beyond what's published, no ratings, no amenities
// that weren't already stated).

export const business = {
  name: 'Kingsukh Guest House',
  tagline: 'A quiet stay in the hills of Baranti',
  phoneDisplay: '+91 90070 62180',
  phoneHref: 'tel:+919007062180',
  email: 'kkghosh0099@gmail.com',
  emailHref: 'mailto:kkghosh0099@gmail.com',
  whatsappHref: 'https://wa.link/at5ion',
  addressLines: ['Beside Barshal Water Tank', 'Manpur, Barhanti', 'West Bengal 723156'],
  mapHref: 'https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA',
  instagramHref: 'https://www.instagram.com/kingsukhguesthouse/',
}

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  paragraphs: [
    'Kingsukh Guest House sits in Manpur, Barhanti, in the hill country of Purulia — a quiet base for exploring the landscape around Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam and Panchat Dam.',
    'Rooms are simple and comfortable, meals are home-style, and the garden is a good place to sit once the day’s travel is done. It’s a guest house built for people who came for the hills, not the hotel.',
  ],
}

export const rooms = [
  {
    id: 'cozy-haven',
    name: 'Cozy Haven Room',
    description:
      'A snug double room suited to travellers who want a simple, comfortable base to return to after a day in the hills.',
    priceLabel: 'Starting from',
    price: '₹1,000',
    priceUnit: '/ night',
    image: 'room-cozy',
  },
  {
    id: 'spacious-serenity',
    name: 'Spacious Serenity Suite',
    description:
      'A roomier suite with more space to settle in — a good choice for families or a longer stay.',
    priceLabel: 'Starting from',
    price: '₹1,500',
    priceUnit: '/ night',
    image: 'room-suite',
  },
]

// Only the services actually listed on the live site — nothing added.
export const amenities = [
  {
    title: 'High-Class Security',
    description: 'The property is watched over around the clock.',
  },
  {
    title: '24-Hour Room Service',
    description: 'Something needed at an odd hour is still just a call away.',
  },
  {
    title: 'Restaurant',
    description: 'Home-style meals served on site.',
  },
  {
    title: 'Tourist Guide Support',
    description: 'Help finding your way to the hills, dams and viewpoints nearby.',
  },
]

// Nearby places the property's own content names. No distances are stated on the
// source site, so none are invented here.
export const nearby = [
  { name: 'Baranti Hill & Lake', image: 'nearby-baranti' },
  { name: 'Ayodhya Hills', image: 'nearby-ayodhya-hills' },
  { name: 'Maithon Dam', image: 'nearby-maithon-dam' },
  { name: 'Palash Forest', image: 'nearby-palash' },
]

export const gallery = [
  { image: 'property-exterior', alt: 'Kingsukh Guest House building and entrance gate, Manpur, Barhanti' },
  { image: 'room-interior', alt: 'Guest room interior with double bed and seating area' },
  { image: 'reception', alt: 'Reception and entrance area of Kingsukh Guest House' },
  { image: 'garden-flower', alt: 'Flowering plant in the guest house garden' },
  { image: 'nearby-baranti', alt: 'Baranti Hill and Lake near the guest house' },
  { image: 'nearby-ayodhya-hills', alt: 'View of the Ayodhya Hills range' },
  { image: 'nearby-palash', alt: 'Palash forest in bloom near Purulia' },
  { image: 'nearby-maithon-dam', alt: 'Maithon Dam reservoir view' },
]

export const whyStay = [
  {
    title: 'Hill country on your doorstep',
    body: 'Biharinath, Baranti, Susunia and Joychandi hills, plus Baranti, Maithon and Panchat dams, are all within reach for day trips.',
  },
  {
    title: 'A garden to come back to',
    body: 'After a day outdoors, the guest house’s garden is a quiet place to sit before dinner.',
  },
  {
    title: 'Home-style food, on site',
    body: 'The restaurant serves home-style meals, so there’s no need to go looking for dinner after a long day of travel.',
  },
  {
    title: 'Local knowledge on hand',
    body: 'Tourist guide support is available to help plan routes to the hills and dams nearby.',
  },
]
