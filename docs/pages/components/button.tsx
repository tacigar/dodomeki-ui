/*
 * Copyright 2022 Tacigar
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

import { Button, Heading } from '@dodomeki-ui/core';
import { css } from '@emotion/react';

const ButtonPage: React.FC = () => {
  return (
    <div>
      <Heading variant="h1">Button</Heading>
      <div
        css={(theme) => css`
          & > :not(:last-child) {
            margin-bottom: ${theme.spacing(1)};
          }
        `}
      >
        <div
          css={(theme) => css`
            & > :not(:last-child) {
              margin-right: ${theme.spacing(1)};
            }
          `}
        >
          <Button color="primary" onClick={() => {}}>
            Primary
          </Button>
          <Button color="secondary" onClick={() => {}}>
            Secondary
          </Button>
          <Button color="danger" onClick={() => {}}>
            Danger
          </Button>
          <Button color="warning" onClick={() => {}}>
            Warning
          </Button>
          <Button color="success" onClick={() => {}}>
            Success
          </Button>
        </div>
        <div
          css={(theme) => css`
            & > :not(:last-child) {
              margin-right: ${theme.spacing(1)};
            }
          `}
        >
          <Button color="primary" variant="empty" onClick={() => {}}>
            Primary
          </Button>
          <Button color="secondary" variant="empty" onClick={() => {}}>
            Secondary
          </Button>
          <Button color="danger" variant="empty" onClick={() => {}}>
            Danger
          </Button>
          <Button color="warning" variant="empty" onClick={() => {}}>
            Warning
          </Button>
          <Button color="success" variant="empty" onClick={() => {}}>
            Success
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
