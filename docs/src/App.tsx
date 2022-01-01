/** @jsxImportSource @emotion/react */

import {
  ThemeProvider,
  defaultTheme,
  Header,
  HeaderTitle,
  DodomekiUiIcon,
  Tag,
  List,
  ListItem,
  ListSubheader,
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
      <div
        css={css`
          margin-top: 48px;
          display: flex;
        `}
      >
        <nav
          css={(theme) => css`
            width: 240px;
            height: calc(100vh - 48px);
            background-color: #fafafa;
            box-shadow: 0 0 8px gray;
            & > :not(:last-child) {
              margin-bottom: ${theme.spacing(1.5)};
            }
          `}
        >
          <List subheader={<ListSubheader title="Data Display" />}>
            <ListItem>List</ListItem>
            <ListItem>Table</ListItem>
            <ListItem>Tag</ListItem>
            <ListItem>Tooltip</ListItem>
          </List>
          <List subheader={<ListSubheader title="Feedback" />}>
            <ListItem>Alert</ListItem>
            <ListItem>Dialog</ListItem>
            <ListItem>Snackbar</ListItem>
          </List>
        </nav>
      </div>
    </ThemeProvider>
  );
}

export default App;
