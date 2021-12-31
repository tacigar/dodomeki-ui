/** @jsxImportSource @emotion/react */

import {
  ThemeProvider,
  defaultTheme,
  Header,
  HeaderTitle,
  DodomekiUiIcon,
  Tag,
} from '@dodomeki-ui/core';
import { css } from '@emotion/react/macro';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header theme="dark">
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <HeaderTitle icon={<DodomekiUiIcon />} title="Dodomeki UI" />
          <Tag
            color="success"
            css={(theme) => css`
              margin-left: ${theme.spacing(1)};
            `}
          >
            v0.0.18
          </Tag>
        </div>
      </Header>
    </ThemeProvider>
  );
}

export default App;
