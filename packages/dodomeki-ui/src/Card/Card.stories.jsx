import { storiesOf } from '@storybook/react';
import React from 'react';

import { Box } from '../Box';
import { Button } from '../Button';
import { Card } from './Card';
import { CardBody } from '../CardBody';
import { CardImage } from '../CardImage';
import { CardText } from '../CardText';
import { CardTitle } from '../CardTitle';
import ExampleImage from '../../../../static/example-image.jpeg';

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
