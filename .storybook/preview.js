import React from 'react';
import { addDecorator, addParameters, } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import {withInfo} from '@storybook/addon-info';
import 'story.css';

/// 配置theme
addDecorator(storyFn => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
));
addDecorator(withInfo);

addParameters({
  options: {
    showRoots: true,
  },
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

