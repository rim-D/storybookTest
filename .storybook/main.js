module.exports = {
  "stories": [
    "../src/component/**/*.stories.mdx",
    "../src/component/**/*.stories.@(js|jsx|ts|tsx)",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/theming",
    "@storybook/addon-sketch",
    "@storybook/zeplin",
  ],
  "framework": "@storybook/html",
}