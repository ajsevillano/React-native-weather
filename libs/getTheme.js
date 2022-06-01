/**
 * It takes a component as an argument and returns the theme for that component
 * @param component - the component you want to style
 */
const getTheme = (component, theme) =>
  theme === 'light'
    ? [screenTheme.light[component]]
    : [screenTheme.dark[component]];

/* Creating a variable called screenTheme that is an object with two properties, light and dark. Each
of those properties is an object with two properties, background and text. */
const screenTheme = {
  light: {
    background: 'light_background',
    text: 'light_text',
  },
  dark: {
    background: 'dark_background',
    text: 'dark_text',
  },
};

export default getTheme;
