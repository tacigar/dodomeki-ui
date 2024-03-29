module.exports = {
  stories: [
    '../packages/**/*.stories.mdx',
    '../packages/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],

  // This configuration is for using emotion.
  // https://github.com/storybookjs/storybook/issues/7540#issuecomment-797495306
  webpackFinal: async (config) => {
    config.module.rules[0].use[0].options.presets = [
      require.resolve('@babel/preset-env'),
      require.resolve('@babel/preset-typescript'),
      [
        require.resolve('@babel/preset-react'),
        {
          runtime: 'automatic',
          importSource: '@emotion/react',
        },
      ],
    ];
    config.module.rules[0].use[0].options.plugins = [
      ...config.module.rules[0].use[0].options.plugins,
      '@emotion/babel-plugin',
    ];
    return config;
  },
};
