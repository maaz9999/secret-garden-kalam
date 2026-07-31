export interface Cottage {
  id: string;
  number: string;
  // TODO: Owner to replace temporary name with official cottage name
  name: string;
  subtitle: string;
  // TODO: Owner to update detailed cottage description
  description: string;
  // TODO: Owner to specify exact guest capacity (e.g., "2-4 Guests")
  capacity: string;
  // TODO: Owner to specify bed layout (e.g., "1 King Bed + Lounge Seating")
  bedType: string;
  // TODO: Owner to specify nightly rate or price range (e.g., "Inquire for Rates")
  price: string;
  // TODO: Owner to update amenities array with actual verified features
  amenities: string[];
  // Primary image path
  image: string;
  // Additional gallery images
  gallery: string[];
  // TODO: Owner to add custom booking link or WhatsApp direct trigger if applicable
  bookingUrl?: string;
  highlights: string[];
}

export const cottagesData: Cottage[] = [
  {
    id: "cottage-one",
    number: "01",
    name: "Cottage One", // TODO: Replace with official name
    subtitle: "A private mountain stay surrounded by pine forest view",
    description: "Framed by tall pines and built with warm natural materials, Cottage One offers a tranquil escape with quiet veranda views of the Kalam mountains.",
    capacity: "2 – 4 Guests", // TODO: Confirm guest capacity
    bedType: "King Suite", // TODO: Confirm bed configuration
    price: "Inquire for seasonal rates", // TODO: Add price structure
    amenities: [
      "Private Mountain Veranda",
      "Warm Wooden Interiors",
      "Panoramic Pine Views",
      "En-suite Bathroom",
      "Tea & Coffee Setup",
    ], // TODO: Update with confirmed amenities only
    image: "/assets/secret-garden/08-cottage-rainy-day-exterior.jpg",
    gallery: [
      "/assets/secret-garden/08-cottage-rainy-day-exterior.jpg",
      "/assets/secret-garden/04-veranda-sofa-night.jpg",
      "/assets/secret-garden/10-rope-bulbs-closeup.jpg"
    ],
    highlights: ["Rainy Day Forest Vista", "Private Seating Area", "Quiet Seclusion"],
    bookingUrl: "/contact?cottage=cottage-one"
  },
  {
    id: "cottage-two",
    number: "02",
    name: "Cottage Two", // TODO: Replace with official name
    subtitle: "Garden seating and cozy indoor warmth",
    description: "Featuring open outdoor seating facing the lawn and cozy interior spaces designed for slow living, morning tea, and peaceful evenings.",
    capacity: "2 – 4 Guests", // TODO: Confirm guest capacity
    bedType: "King Bed + Lounge", // TODO: Confirm bed configuration
    price: "Inquire for seasonal rates", // TODO: Add price structure
    amenities: [
      "Outdoor Garden Seating Access",
      "Warm Ambient Lighting",
      "Garden Lawn View",
      "Dedicated Lounge Nook",
      "Hot Water Bath",
    ], // TODO: Update with confirmed amenities only
    image: "/assets/secret-garden/22-secret-garden-outdoor-lounge-seating.png",
    gallery: [
      "/assets/secret-garden/22-secret-garden-outdoor-lounge-seating.png",
      "/assets/secret-garden/05-veranda-passage-night.jpg",
      "/assets/secret-garden/09-covered-driveway-view.jpg"
    ],
    highlights: ["Spacious Lounge Deck", "Warm Stone & Wood Finish", "Stargazing View"],
    bookingUrl: "/contact?cottage=cottage-two"
  },
  {
    id: "cottage-three",
    number: "03",
    name: "Cottage Three", // TODO: Replace with official name
    subtitle: "Secluded winter haven & mountain ridge backdrop",
    description: "Positioned at the upper garden edge, offering prime views during snow-covered winters and gentle mountain breezes in summer.",
    capacity: "2 – 4 Guests", // TODO: Confirm guest capacity
    bedType: "Executive Double", // TODO: Confirm bed configuration
    price: "Inquire for seasonal rates", // TODO: Add price structure
    amenities: [
      "Upper Garden Elevation",
      "Snow Season Frontage",
      "Spacious Veranda Entrance",
      "Quiet Night Atmosphere",
      "Private Parking Access",
    ], // TODO: Update with confirmed amenities only
    image: "/assets/secret-garden/25-secret-garden-cottage-winter-exterior.png",
    gallery: [
      "/assets/secret-garden/25-secret-garden-cottage-winter-exterior.png",
      "/assets/secret-garden/23-secret-garden-snowy-garden-seating.png",
      "/assets/secret-garden/03-cottage-night-exterior.jpg"
    ],
    highlights: ["Snowy Cottage Atmosphere", "Night Light Ambiance", "Forest Ridge View"],
    bookingUrl: "/contact?cottage=cottage-three"
  }
];
