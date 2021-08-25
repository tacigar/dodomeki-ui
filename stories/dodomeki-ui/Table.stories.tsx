import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from '../../packages/dodomeki-ui/src/Table';
import { TableHead } from '../../packages/dodomeki-ui/src/TableHead';
import { TableRow } from '../../packages/dodomeki-ui/src/TableRow';
import { TableCell } from '../../packages/dodomeki-ui/src/TableCell';
import { TableBody } from '../../packages/dodomeki-ui/src/TableBody';

storiesOf('Table', module).add('Table', () => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell onClick={() => {}}>Name</TableCell>
        <TableCell>Age</TableCell>
        <TableCell>Country</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell>38</TableCell>
        <TableCell>USA</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>山田</TableCell>
        <TableCell>42</TableCell>
        <TableCell>Japan</TableCell>
      </TableRow>
    </TableBody>
  </Table>
));
