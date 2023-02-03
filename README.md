# Storybook + Tailwind

This project demonstrate how to auto-generate design system documentation using tailwind and storybook.
The extended colors of `tailwind.config.js` are displayed inside of a story.

![Demo](/src/assets/img/demo.png)

## How to use ?

* First setup the project using `npm ci`
* Build the storybook css using `npx tailwindcss -i ./src/styles.scss -o ./src/assets/tailwind.css`
* Run Storybook with `ng run storybook-tailwind:storybook`
