// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import React from 'react';

import { Box } from '../../packages/dodomeki-ui/src/Box';
import { Button } from '../../packages/dodomeki-ui/src/Button';
import { Card } from '../../packages/dodomeki-ui/src/Card';
import { CardBody } from '../../packages/dodomeki-ui/src/CardBody';
import { CardImage } from '../../packages/dodomeki-ui/src/CardImage';
import { CardText } from '../../packages/dodomeki-ui/src/CardText';
import { CardTitle } from '../../packages/dodomeki-ui/src/CardTitle';
import ExampleImage from '../../static/example-image.jpeg';

storiesOf('Card', module).add('Card', () => (
  <Card style={{ maxWidth: 340 }}>
    <CardImage src={ExampleImage} />
    <CardBody>
      <CardTitle>台湾まぜそば</CardTitle>
      <CardText>
        台湾まぜそばはいっぱいマゼマゼすると美味しくなる。
        ホッピーも一緒に注文して、台湾まぜそばマゼマゼ、ホッピーマゼマゼを繰り返せば時間を潰せる。
      </CardText>
      <Box mt="8px" display="flex" justifyContent="flex-end">
        <Button variant="filled">注文する</Button>
      </Box>
    </CardBody>
  </Card>
));
