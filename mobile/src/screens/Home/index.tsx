import React from 'react';

import {
  Container,
  BagButton,
  BagButtonText,
  Content,
  Header,
  UserName,
} from './styles';

const Home: React.FC = () => (
  <Container>
    <Header>
      <UserName>Filipe Nadai</UserName>
    </Header>
    <Content>
      <BagButton>
        <BagButtonText>Open Bag</BagButtonText>
      </BagButton>
    </Content>
  </Container>
);

export default Home;
