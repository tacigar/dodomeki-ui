import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { storiesOf } from '@storybook/react';

import { Layout } from '.';
import { Header } from '../Header';
import { Sider } from '../Sider';
import { SiderMenu } from '../SiderMenu';
import { SiderMenuItem } from '../SiderMenuItem';
import { SiderTitle } from '../SiderTitle';

storiesOf('Sider', module).add('Sider', () => (
  <Layout>
    <Header>Header</Header>
    <Sider>
      <SiderTitle>DODOMEKI UI</SiderTitle>
      <SiderMenu>
        <SiderMenuItem text="Home" icon={<FontAwesomeIcon icon={faHome} />} />
        <SiderMenuItem
          text="Explore"
          icon={<FontAwesomeIcon icon={faSearch} />}
          isSelected
        />
        <SiderMenuItem text="Item3" />
        <SiderMenuItem text="Item4" />
      </SiderMenu>
    </Sider>
    <div>main</div>
  </Layout>
));
