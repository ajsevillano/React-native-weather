/**
 * It takes a component as an argument and returns the theme for that component
 * @param component - the component you want to style
 */
const getTheme = (component, theme) =>
  theme === 'light'
    ? [screenTheme.light[component]]
    : [screenTheme.dark[component]];

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
