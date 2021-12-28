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

import { createContext, useContext } from 'react';

export const createCtx = <T>() => {
  const context = createContext<T | null>(null);
  const useCtx = () => {
    const ctx = useContext(context);
    if (ctx == null)
      throw new Error('useCtx must be inside a Provider with a value');
    return ctx;
  };
  return [useCtx, context, context.Provider] as const;
};
