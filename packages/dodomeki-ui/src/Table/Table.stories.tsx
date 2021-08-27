import React from 'react';
import { storiesOf } from '@storybook/react';
import { Table } from './Table';
import { TableHead } from '../TableHead';
import { TableRow } from '../TableRow';
import { TableCell } from '../TableCell';
import { TableBody } from '../TableBody';

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
