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

type ColorsType = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  light: string;
  main: string;
  dark: string;
};

export interface Theme {
  palette: {
    primary: ColorsType;
    secondary: ColorsType;
    success: ColorsType;
    warning: ColorsType;
    danger: ColorsType;
    background: {
      default: string;
    };
    text: {
      default: string;
      subdued: string;
      primary: string;
      inverseDefault: string;
    };
  };
  zIndex: {
    header: number;
  };
  spacing: (...args: number[]) => string;
  text: {
    fontSize: {
      sm: string;
      md: string;
    };
  };
}
