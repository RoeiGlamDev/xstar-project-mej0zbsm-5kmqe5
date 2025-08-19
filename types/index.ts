import { ReactNode } from 'react'
/
 * Interface representing the property details in the HouseIL application.
 * It includes information about the property, amenities, and pricing.
 */
export interface Property {
  id: string; // Unique identifier for the property
  name: string; // Name of the property
  description: string; // Detailed description of the property
  location: string; // Location of the property
  pricePerNight: number; // Price per night for booking
  amenities: string[]; // List of amenities available at the property
  imageUrl: string; // URL to an image showcasing the property
}

/
 * Interface representing the user details in the HouseIL application.
 * It includes user personal and booking information.
 */
export interface User {
  id: string; // Unique identifier for the user
  name: string; // Name of the user
  email: string; // Email address of the user
  phone?: string; // Optional phone number of the user
  bookedProperties: Booking[]; // Array of properties booked by the user
}

/
 * Interface representing a booking in the HouseIL application.
 * It includes the details of the reservation made by the user.
 */
export interface Booking {
  bookingId: string; // Unique identifier for the booking
  propertyId: string; // Identifier of the booked property
  userId: string; // Identifier of the user who booked the property
  checkInDate: Date; // Check-in date for the booking
  checkOutDate: Date; // Check-out date for the booking
  totalPrice: number; // Total price calculated for the booking
}

/
 * Interface for the filtered search results in the HouseIL application.
 * This will allow users to filter properties based on specific criteria.
 */
export interface SearchFilters {
  location?: string; // Optional location filter
  minPrice?: number; // Optional minimum price filter
  maxPrice?: number; // Optional maximum price filter
  amenities?: string[]; // Optional array of required amenities
}

/
 * Type representing the Response from a property search in the HouseIL application.
 * It may include matched properties and the count of the available properties.
 */
export type PropertySearchResponse = {
  properties: Property[]; // List of properties matching the search criteria
  totalCount: number; // Total number of properties that match the search criteria
}
// Additional definitions if needed can be added below.