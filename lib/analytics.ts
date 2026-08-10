/**
 * Armand Store -- Analytics Tracking Utility
 * Wraps Vercel Analytics track() with typed, consistent event names.
 * No personal data is collected.
 */
import { track } from '@vercel/analytics';

// -- Product Events
export function trackProductOrderClick(productName: string) {
  track('product_order_click', { product_name: productName });
}

// -- Social Events
export function trackSocialClick(platform: string) {
  track('social_click', { platform });
}

// -- Payment Events
export function trackPaymentClick(paymentMethod: string) {
  track('payment_click', { payment_method: paymentMethod });
}

// -- Share Events
export function trackShareStore(method: 'native' | 'copy_link') {
  track('share_store', { share_method: method });
}
