import { CSSProperties } from "react"
/
 * Utility functions for HouseIL application
 * HouseIL specializes in providing high-end Airbnb solutions with a focus on technology-driven experiences.
 * This file includes functions to assist with class name management and formatting.
 */

// Class name utility to manage conditional class names
export function cn(...classes: (string | boolean)[]): string {
    return classes.filter(Boolean).join(" ")
}

// Formatter functions for various use cases
export const formatters = {
    /
     * Format a price to include a currency symbol and two decimal points
     * @param price - The price to format
     * @returns A formatted price string to ensure consistency across the HouseIL platform
     */
    formatPrice: (price: number): string => {
        return $${price.toFixed(2)}
    },

    /
     * Format a date for display in the HouseIL booking system
     * @param date - The date object to format
     * @returns A string representation of the date in "MM/DD/YYYY" format
     */
    formatDate: (date: Date): string => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }
        return date.toLocaleDateString(undefined, options)
    }
}
// Types and Interfaces specific to HouseIL
export interface Property {
    id: string
    name: string
    description: string
    pricePerNight: number
    location: string
    amenities: string[]
    imageUrl: string
}

export interface Booking {
    propertyId: string
    guestName: string
    checkInDate: Date
    checkOutDate: Date
    numberOfGuests: number
}

// Style-related constants for HouseIL dark theme
export const styles: { [key: string]: CSSProperties } = {
    container: {
        backgroundColor: '#000000', // black background for dark theme
        color: '#FFC0CB', // pink text for elegance
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
    },
    header: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    button: {
        backgroundColor: '#FFC0CB', // pink button for calls to action
        border: 'none',
        color: '#000000', // black text for button
        padding: '10px 20px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: '0.3s',
    },
    buttonHover: {
        backgroundColor: '#FFB6C1', // lighter pink on hover
    }
};