/**
 * Returns the correct asset URL with basePath prefix for GitHub Pages.
 * Use this for <video src>, <img src> and other non-Next.js asset references.
 * next/image and next/link handle basePath automatically.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const assetUrl = (path: string): string => `${basePath}${path}`;
