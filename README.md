# Our Storybook

Create a beautiful, romantic, interactive single-page website that tells a personal love story through multiple chapters.

Overall concept

The website should feel like a warm, dreamy, intimate digital scrapbook dedicated to someone special. Use a soft pastel aesthetic with pink, cream, blush, and warm yellow tones. The design should feel elegant rather than overly flashy.

Visual style

Soft pastel pink/cream background

Romantic, warm color palette

Elegant serif font for headings, such as Playfair Display

Clean rounded sans-serif font for body text, such as Quicksand

Large rounded white story card in the center

Soft pink shadows

Subtle animated background blobs

Small heart, sun, flower, and sparkle decorations

Smooth transitions and gentle animations

Fully responsive on desktop and mobile

Avoid excessive visual clutter

Page structure

Create:

A small header with a romantic logo/title on the left and a short playful tagline on the right.

A central story card containing:

Chapter indicator dots

Chapter number/tag

Circular image or GIF

Chapter title

Romantic story paragraph

Previous and Next buttons

A footer with a small romantic message.

Story interaction

Store all chapters in a JavaScript array rather than hardcoding each chapter into the HTML.

Each chapter should contain:

{
    tag: "Chapter 01",
    image: "image-url",
    title: "Chapter title",
    text: "Chapter story"
}


Implement JavaScript navigation so that:

Next moves to the next chapter.

Back moves to the previous chapter.

Chapter indicator dots are clickable.

The active dot is visually highlighted.

The Back button disappears on the first chapter.

On the final chapter, the Next button changes to "Restart".

Restart returns to Chapter 1.

Changing chapters triggers a smooth fade/slide animation.

Do not reload the page during navigation.

Personalization

Use placeholder content so I can easily replace it with my own story.

Create 6 chapters with placeholder examples such as:

First meeting

Getting to know each other

First adventure/date

Funny or memorable moments

Growing closer

Looking toward the future

Make the writing warm, natural, personal, and conversational. Avoid overly generic AI-sounding phrases.

Images

Use image placeholders that can easily be replaced with local files.

For example:

images/chapter1.jpg
images/chapter2.jpg
images/chapter3.jpg
images/chapter4.jpg
images/chapter5.jpg
images/chapter6.jpg


If an image fails to load, display a visually appropriate fallback.

Technical requirements

Use only HTML, CSS, and vanilla JavaScript.

Put everything in one HTML file.

Do not use React, Vue, Angular, or other frameworks.

Use CSS variables for the color palette.

Keep the JavaScript clean and modular.

Use semantic HTML where appropriate.

Make the layout responsive below 600px.

Avoid unnecessary libraries.

Add comments explaining important sections, but don't over-comment obvious code.

Ensure there are no console errors.

Ensure buttons and chapter dots work with mouse/touch.

Add keyboard accessibility where practical.

Use proper alt text for images.

Avoid inline JavaScript event handlers such as onclick; use addEventListener() instead.

Extra polish

Add subtle effects such as:

Floating background blobs

Gentle card entrance animation

Image floating/bobbing animation

Button hover effects

Smooth chapter transitions

Small decorative hearts/sparkles

A subtle progress indicator

The final result should look like a professionally designed romantic digital story rather than a generic HTML demo.

Before producing the final code, check the entire HTML/CSS/JavaScript for broken references, missing elements, invalid JavaScript, accessibility issues, and responsive-layout problems.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://lebangayaaise.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/78d746f0-f18d-4ba9-b8b1-f704bb44fa8a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
