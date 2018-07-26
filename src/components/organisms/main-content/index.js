import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import DygraphDemo1 from '../../molecules/dygraph-demo-1';
import DygraphDemo2 from '../../molecules/dygraph-demo-2';
import DygraphDemo3 from '../../molecules/dygraph-demo-3';
import DygraphDemo4 from '../../molecules/dygraph-demo-4';

const Container = styled.div`
  padding: 3rem;
`;

const MainContent = () => (
  <Container>
    <Route exact path="/demo/1" component={DygraphDemo1} />
    <Route exact path="/demo/2" component={DygraphDemo2} />
    <Route exact path="/demo/3" component={DygraphDemo3} />
    <Route exact path="/demo/4" component={DygraphDemo4} />
  </Container>
);

export default MainContent;
