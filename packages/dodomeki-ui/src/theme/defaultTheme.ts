/*
 * Copyright 2021 Tacigar
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
      light: '#9fa8da',
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
      light: '#f48fb1',
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
      light: '#80cbc4',
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
      light: '#ffe082',
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
      light: '#ef9a9a',
      main: '#f44336',
      dark: '#b71c1c',
    },
    background: {
      default: '#fff',
    },
    text: {
      default: '#343741',
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
    },
  },
};
