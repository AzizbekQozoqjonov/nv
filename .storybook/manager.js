import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://asys.uz/icon.svg',
    brandTitle: 'Qozoqjonov Azizbek',
    brandUrl: 'https://asys.uz',
  },
});
