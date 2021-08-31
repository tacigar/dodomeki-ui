import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { storiesOf } from '@storybook/react';

import { Sider } from '.';
import { SiderContent } from '../SiderContent';
import { SiderMenu } from '../SiderMenu';
import { SiderMenuItem } from '../SiderMenuItem';
import { SiderTitle } from '../SiderTitle';

storiesOf('Sider', module).add('Sider', () => (
  <Sider>
    <SiderContent>
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
    </SiderContent>
    <div>main</div>
  </Sider>
));
