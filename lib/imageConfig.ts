/**
 * Image Configuration Utilities
 * 
 * This file provides reusable configurations and utilities for Next.js Image optimization.
 * Use these constants to ensure consistent image handling across the application.
 */

/**
 * Common image sizes for responsive images
 * Use with the `sizes` prop on next/image
 */
export const IMAGE_SIZES = {
  // Full width on mobile, half width on tablet, third width on desktop
  RESPONSIVE_THIRDS: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  
  // Full width on mobile, half width on larger screens
  RESPONSIVE_HALF: '(max-width: 768px) 100vw, 50vw',
  
  // Full width at all breakpoints
  FULL_WIDTH: '100vw',
  
  // Fixed sizes for profile images
  PROFILE_SMALL: '(max-width: 768px) 150px, 200px',
  PROFILE_MEDIUM: '(max-width: 768px) 200px, 300px',
  PROFILE_LARGE: '(max-width: 768px) 250px, 400px',
  
  // Icon sizes
  ICON_SMALL: '48px',
  ICON_MEDIUM: '64px',
  ICON_LARGE: '96px',
} as const;

/**
 * Image quality settings
 * Use with the `quality` prop on next/image
 */
export const IMAGE_QUALITY = {
  HIGH: 90,      // For hero images and important visuals
  STANDARD: 75,  // Default quality (Next.js default)
  LOW: 60,       // For thumbnails or less important images
} as const;

/**
 * Common image dimensions
 * Use with width/height props on next/image
 */
export const IMAGE_DIMENSIONS = {
  HERO: {
    width: 1920,
    height: 1080,
  },
  PROFILE: {
    width: 400,
    height: 400,
  },
  ICON: {
    width: 64,
    height: 64,
  },
  THUMBNAIL: {
    width: 256,
    height: 256,
  },
} as const;

/**
 * Image paths for organization
 * Prefix all image sources with these paths
 */
export const IMAGE_PATHS = {
  HERO: '/images/hero',
  LEADERS: '/images/leaders',
  SERVICES: '/images/services',
  VALUES: '/images/values',
  ICONS: '/images/icons',
} as const;

/**
 * Helper function to generate alt text for profile images
 * Ensures consistent and accessible alt text format
 */
export function getProfileAltText(name: string, title: string): string {
  return `${name}, ${title}`;
}

/**
 * Helper function to generate alt text for service/value icons
 * Returns empty string if icon is decorative (adjacent to text)
 */
export function getIconAltText(isDecorative: boolean, description?: string): string {
  return isDecorative ? '' : (description || '');
}

/**
 * Type definitions for image props
 */
export type ImageSize = typeof IMAGE_SIZES[keyof typeof IMAGE_SIZES];
export type ImageQuality = typeof IMAGE_QUALITY[keyof typeof IMAGE_QUALITY];
export type ImagePath = typeof IMAGE_PATHS[keyof typeof IMAGE_PATHS];
