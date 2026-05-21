import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../packages/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: { autodocs: 'tag' },
  typescript: {
    reactDocgen: false,
  },
  async viteFinal(config) {
    const { mergeConfig } = await import('vite');
    const react = (await import('@vitejs/plugin-react')).default;
    return mergeConfig(config, {
      plugins: [
        react({
          jsxImportSource: '@emotion/react',
        }),
      ],
    });
  },
};

export default config;
