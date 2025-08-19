export const BRAND_NAME = "HouseIL"
export const COLORS = {
  PRIMARY: "#FF007F", // Pink color
  SECONDARY: "#000000", // Black color
}
export const CONFIG = {
  THEME: {
    BACKGROUND: COLORS.SECONDARY,
    TEXT: COLORS.PRIMARY,
    HEADER: {
      HEIGHT: "80px",
      TEXT_COLOR: COLORS.PRIMARY,
    },
    FOOTER: {
      BACKGROUND_COLOR: COLORS.SECONDARY,
      TEXT_COLOR: COLORS.PRIMARY,
    },
  },
  SEO: {
    TITLE: ${BRAND_NAME} - Luxury Dark Technology Airbnb,
    DESCRIPTION: Discover the elegance and sophistication of the HouseIL's luxury Airbnb experiences, merging technology and comfort for the discerning traveler.,
    KEYWORDS: "HouseIL, luxury Airbnb, technology, elegant stays, dark design",
  },
}
/
 * Interface representing the structure of a property in HouseIL.
 * @interface Property
 * @property {string} id - Unique identifier for the property.
 * @property {string} name - Name of the property.
 * @property {string} description - Description of the property, showcasing its luxury and amenities.
 * @property {number} price - Price per night for the property.
 * @property {string[]} images - List of image URLs showcasing the property.
 * @property {boolean} isAvailable - Availability status of the property.
 */
export interface Property {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  isAvailable: boolean
}

/
 * Fetches properties available for booking through the HouseIL platform.
 * @returns {Promise<Property[]>} - A promise that resolves to an array of properties.
 */
export async function fetchProperties(): Promise<Property[]> {
  // Here you would implement the actual API logic to fetch properties from your backend
  return [
    {
      id: "1",
      name: "Luxury Suite",
      description: "An elegant suite with modern amenities and breathtaking views.",
      price: 250,
      images: ["image1.jpg", "image2.jpg"],
      isAvailable: true,
    },
    {
      id: "2",
      name: "Executive Apartment",
      description: "A sophisticated apartment equipped with state-of-the-art technology.",
      price: 300,
      images: ["image3.jpg", "image4.jpg"],
      isAvailable: false,
    },
  ]
}

/
 * Exports the constants and types for external usage.
 */
export default {
  BRAND_NAME,
  COLORS,
  CONFIG,
  Property,
  fetchProperties,
};