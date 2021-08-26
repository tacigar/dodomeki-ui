import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUpload } from '@fortawesome/free-solid-svg-icons';
import { Button, FormInput, FormSlider } from '../packages/dodomeki-ui/src';
import { Table } from '../packages/dodomeki-ui/src/Table';
import { TableHead } from '../packages/dodomeki-ui/src/TableHead';
import { TableRow } from '../packages/dodomeki-ui/src/TableRow';
import { TableCell } from '../packages/dodomeki-ui/src/TableCell';
import { TableBody } from '../packages/dodomeki-ui/src/TableBody';
import { Tabs } from '../packages/dodomeki-ui/src/Tabs';
import { Tab } from '../packages/dodomeki-ui/src/Tab';

storiesOf('Example', module).add('Example', () => {
  const [sliderValue, setSliderValue] = useState(30);
  const [tab, setTab] = useState('tab1');

  return (
    <Root>
      <Header>
        <div>Explore</div>
        <HeaderInputs>
          <SliderWrapper>
            <FormSlider
              step={10}
              onChange={setSliderValue}
              value={sliderValue}
            />
          </SliderWrapper>
          <FormInput
            placeholder="Search"
            startIcon={<FontAwesomeIcon icon={faSearch} size="sm" />}
          />
          <Button icon={<FontAwesomeIcon icon={faUpload} />}>Upload</Button>
        </HeaderInputs>
      </Header>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => {}}>Name</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Private</TableCell>
              <TableCell>Percentage</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell align="right">Start Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {[
              {
                service: 'ec-site',
                pri: 'false',
                percent: 80,
                duration: 40,
                country: 'Japan',
                time: 'Today, 13:34:28',
              },
              {
                service: 'ec-elastic-search',
                pri: 'false',
                percent: 32,
                duration: 70,
                country: 'Japan',
                time: 'Today, 18:33:12',
              },
              {
                service: 'ec-mongo',
                pri: 'true',
                percent: 20,
                duration: 90,
                country: 'Japan',
                time: 'Today, 09:01:23',
              },
              {
                service: 'load-balancer',
                pri: 'false',
                percent: 78,
                duration: 23,
                country: 'Japan',
                time: 'Today, 10:04:08',
              },
            ].map(({ service, pri, percent, duration, country, time }) => (
              <TableRow>
                <TableCell>{service}</TableCell>
                <TableCell>{country}</TableCell>
                <TableCell>{pri}</TableCell>
                <MyTableCell>
                  <PercentBarWrapper>
                    <PercentBar style={{ width: `${percent}%` }} />
                    <PercentBarText>{percent}%</PercentBarText>
                  </PercentBarWrapper>
                </MyTableCell>
                <MyTableCell>
                  <DurationBarWrapper>
                    <DurationBar style={{ width: `${duration}%` }} />
                    <DurationBarText>{duration * 4}ms</DurationBarText>
                  </DurationBarWrapper>
                </MyTableCell>
                <TableCell align="right">{time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
      <MyTabs value={tab} onChange={setTab}>
        <Tab value="tab1">Chart</Tab>
        <Tab value="tab2">Topology</Tab>
        <Tab value="tab3">Dependency</Tab>
      </MyTabs>
    </Root>
  );
});

const Root = styled.div`
  width: 1400px;
  height: 800px;
  border: 1px solid #999;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};
`;

const HeaderInputs = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 12px;
  }
`;

const SliderWrapper = styled.div`
  width: 200px;
`;

const TableWrapper = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.palette.border};
`;

const MyTabs = styled(Tabs)`
  margin-top: 8px;
`;

const MyTableCell = styled(TableCell)`
  position: relative;
`;

const PercentBarWrapper = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  bottom: 4px;
  left: 4px;
  background-color: ${({ theme }) => theme.palette.grey.light[2]};
  border-radius: 3px;
  overflow: hidden;
`;

const PercentBar = styled.div`
  position: absolute;
  height: 100%;
  background-color: #3388fc;
  opacity: 0.2;
`;

const PercentBarText = styled.span`
  position: absolute;
  margin-left: 8px;
`;

const DurationBarWrapper = styled.div`
  position: absolute;
  top: 4px;
  right: 4px;
  bottom: 4px;
  left: 4px;
  border-radius: 3px;
  overflow: hidden;
`;

const DurationBar = styled.div`
  position: absolute;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.grey.light[4]};
`;

const DurationBarText = styled.span`
  position: absolute;
  margin-left: 8px;
`;
