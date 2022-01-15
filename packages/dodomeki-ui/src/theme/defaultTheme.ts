/*
 * Copyright 2021-2022 Tacigar
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

import { defaultSpacing } from './defaultSpacing';
import { Theme } from './Theme';

export const defaultTheme: Theme = {
  palette: {
    primary: {
      ...[
        '#e8eaf6',
        '#c5cae9',
        '#9fa8da',
        '#7986cb',
        '#5c6bc0',
        '#3f51b5',
        '#3949ab',
        '#303f9f',
        '#283593',
        '#1a237e',
      ],
      light: '#7986cb',
      main: '#3f51b5',
      dark: '#1a237e',
    },
    secondary: {
      ...[
        '#fce4ec',
        '#f8bbd0',
        '#f48fb1',
        '#f06292',
        '#ec407a',
        '#e91e63',
        '#d81b60',
        '#c2185b',
        '#ad1457',
        '#880e4f',
      ],
      light: '#f06292',
      main: '#e91e63',
      dark: '#880e4f',
    },
    success: {
      ...[
        '#e0f2f1',
        '#b2dfdb',
        '#80cbc4',
        '#4db6ac',
        '#26a69a',
        '#009688',
        '#00897b',
        '#00796b',
        '#00695c',
        '#004d40',
      ],
      light: '#4db6ac',
      main: '#009688',
      dark: '#004d40',
    },
    warning: {
      ...[
        '#fff8e1',
        '#ffecb3',
        '#ffe082',
        '#ffd54f',
        '#ffca28',
        '#ffc107',
        '#ffb300',
        '#ffa000',
        '#ff8f00',
        '#ff6f00',
      ],
      light: '#ffd54f',
      main: '#ffc107',
      dark: '#ff6f00',
    },
    danger: {
      ...[
        '#ffebee',
        '#ffcdd2',
        '#ef9a9a',
        '#e57373',
        '#ef5350',
        '#f44336',
        '#e53935',
        '#d32f2f',
        '#c62828',
        '#b71c1c',
      ],
      light: '#e57373',
      main: '#f44336',
      dark: '#b71c1c',
    },
    divider: 'rgba(0, 0, 0, 0.125)',
    background: {
      default: '#fff',
    },
    text: {
      default: '#343741',
      subdued: '#69707d',
      primary: '#3f51b5',
      inverseDefault: '#fff',
    },
  },
  zIndex: {
    header: 1100,
  },
  spacing: defaultSpacing,
  text: {
    fontSize: {
      sm: '12px',
      md: '14px',
      lg: '16px',
    },
    h1: {
      fontWeight: 600,
      fontSize: '36px',
      lineHeight: 1.25,
    },
    h2: {
      fontWeight: 600,
      fontSize: '32px',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '28px',
      lineHeight: 1.35,
    },
    h4: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '20px',
      lineHeight: 1.45,
    },
    h6: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: 1.5,
    },
  },
};
