/**
 * Image Example Component
 * 
 * This file demonstrates proper usage of Next.js Image optimization
 * for the Fealess application. Use these examples as reference when
 * adding images to the application.
 * 
 * NOTE: This is a reference component and is not currently used in the application.
 * Remove or integrate when actual images are added.
 */

import Image from 'next/image';
import {
  IMAGE_SIZES,
  IMAGE_QUALITY,
  IMAGE_DIMENSIONS,
  IMAGE_PATHS,
  getProfileAltText,
  getIconAltText,
} from '@/lib/imageConfig';

/**
 * Example 1: Hero Background Image
 * - Uses priority={true} for above-the-fold loading
 * - High quality for visual impact
 * - Descriptive alt text for accessibility
 */
export function HeroImageExample() {
  return (
    <div className="relative h-screen">
      <Image
        src={`${IMAGE_PATHS.HERO}/background.jpg`}
        alt="Sustainable livestock grazing on green pastures under blue sky"
        fill
        priority={true}
        quality={IMAGE_QUALITY.HIGH}
        className="object-cover"
      />
    </div>
  );
}

/**
 * Example 2: Leadership Profile Image
 * - Fixed dimensions for consistent layout
 * - Responsive sizes for different viewports
 * - Accessible alt text with name and title
 */
export function ProfileImageExample() {
  const leader = {
    name: 'Bill Clinton',
    title: 'CEO of Fealess Company',
    image: 'bill-clinton.jpg',
  };

  return (
    <div className="flex flex-col items-center">
      <Image
        src={`${IMAGE_PATHS.LEADERS}/${leader.image}`}
        alt={getProfileAltText(leader.name, leader.title)}
        width={IMAGE_DIMENSIONS.PROFILE.width}
        height={IMAGE_DIMENSIONS.PROFILE.height}
        sizes={IMAGE_SIZES.PROFILE_LARGE}
        className="rounded-full"
      />
      <h3 className="mt-4 text-xl font-semibold">{leader.name}</h3>
      <p className="text-gray-600">{leader.title}</p>
    </div>
  );
}

/**
 * Example 3: Service Icon (Decorative)
 * - Small icon adjacent to text
 * - Empty alt text since icon is decorative
 * - Fixed dimensions for consistency
 */
export function DecorativeIconExample() {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={`${IMAGE_PATHS.SERVICES}/consultation-icon.svg`}
        alt={getIconAltText(true)}
        width={IMAGE_DIMENSIONS.ICON.width}
        height={IMAGE_DIMENSIONS.ICON.height}
      />
      <span className="text-lg">Sustainable Livestock Consultation</span>
    </div>
  );
}

/**
 * Example 4: Service Icon (Informative)
 * - Icon without adjacent text
 * - Descriptive alt text required
 * - Larger size for standalone display
 */
export function InformativeIconExample() {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={`${IMAGE_PATHS.SERVICES}/training-icon.svg`}
        alt={getIconAltText(false, 'Animal welfare training and capacity building')}
        width={96}
        height={96}
      />
    </div>
  );
}

/**
 * Example 5: Responsive Content Image
 * - Adapts to different viewport sizes
 * - Standard quality for content images
 * - Lazy loaded (no priority prop)
 */
export function ResponsiveContentImageExample() {
  return (
    <div className="w-full">
      <Image
        src="/images/content/sustainable-farming.jpg"
        alt="Farmers implementing sustainable livestock management practices"
        width={1200}
        height={800}
        sizes={IMAGE_SIZES.RESPONSIVE_HALF}
        quality={IMAGE_QUALITY.STANDARD}
        className="w-full h-auto rounded-lg"
      />
    </div>
  );
}

/**
 * Example 6: Multiple Images in Grid
 * - Consistent sizing across grid items
 * - Responsive layout with Tailwind
 * - Proper alt text for each image
 */
export function ImageGridExample() {
  const images = [
    { src: 'livestock-1.jpg', alt: 'Cattle grazing in sustainable pasture system' },
    { src: 'livestock-2.jpg', alt: 'Chickens in free-range farming environment' },
    { src: 'livestock-3.jpg', alt: 'Sheep herd managed with rotational grazing' },
    { src: 'livestock-4.jpg', alt: 'Pigs in humane housing with outdoor access' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square">
          <Image
            src={`/images/gallery/${image.src}`}
            alt={image.alt}
            fill
            sizes={IMAGE_SIZES.RESPONSIVE_THIRDS}
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Example 7: Background Image with Overlay
 * - Full-screen background with content overlay
 * - Uses fill prop for responsive sizing
 * - Descriptive alt text even for backgrounds
 */
export function BackgroundImageExample() {
  return (
    <section className="relative min-h-screen">
      <Image
        src="/images/backgrounds/farm-landscape.jpg"
        alt="Panoramic view of sustainable farm with diverse livestock"
        fill
        quality={IMAGE_QUALITY.HIGH}
        className="object-cover"
      />
      <div className="relative z-10 flex items-center justify-center min-h-screen bg-black/40">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Sustainable Agriculture</h1>
          <p className="mt-4 text-xl">Leading the future of livestock farming</p>
        </div>
      </div>
    </section>
  );
}

/**
 * Example 8: Placeholder/Blur Effect
 * - Shows blur placeholder while loading
 * - Improves perceived performance
 * - Requires blurDataURL for external images
 */
export function BlurPlaceholderExample() {
  return (
    <Image
      src="/images/hero/background.jpg"
      alt="Sustainable livestock farming landscape"
      width={1920}
      height={1080}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..." // Generated by Next.js for local images
      className="w-full h-auto"
    />
  );
}

/**
 * Usage Notes:
 * 
 * 1. Always import Image from 'next/image', never use <img> tag
 * 2. Always provide descriptive alt text (Requirement 11.5)
 * 3. Use priority={true} only for above-the-fold images
 * 4. Use appropriate quality settings based on image importance
 * 5. Use responsive sizes for better performance
 * 6. Organize images in public/images/ with logical subdirectories
 * 7. Test images on multiple devices and screen sizes
 * 8. Verify accessibility with keyboard navigation and screen readers
 */
