# Romantic Storybook Page

## What I’ll build
- A responsive, single-page romantic scrapbook with a compact header, centered story card, and small footer message.
- Six warm, conversational placeholder chapters covering the first meeting through hopes for the future.
- Clickable progress dots, previous/next controls, restart behavior, keyboard navigation, and clear active/focus states.
- Local image paths for easy replacement, with a polished decorative fallback whenever an image is missing.
- Gentle chapter fades/slides, floating imagery, soft background shapes, and restrained hearts/sparkles.

## Visual direction
- Pastel cream, blush, rose, and warm yellow palette with semantic design tokens.
- Playfair Display for expressive headings and Quicksand for friendly body copy.
- One large rounded white story card with soft pink shadows and uncluttered spacing.
- Mobile layout optimized below 600px, with controls and text sized for touch and readability.

## Technical details
- Keep chapter content in one JavaScript/TypeScript data array and render the active chapter from state without reloading.
- Use accessible buttons for controls and dots, descriptive image alt text, live chapter announcements, and Left/Right arrow support.
- Implement the page within the project’s required TanStack structure while keeping all story presentation and behavior self-contained.
- Add unique home-page title, description, Open Graph, and Twitter metadata.
- Validate the rendered page on desktop and mobile, exercise all navigation paths, confirm fallbacks, and check browser errors.
