import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Button,
  BagButtonText,
  Content,
  Header,
  UserName,
} from './styles';

const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigateToListItems = useCallback(() => {
    navigate('ListItems');
  }, [navigate]);

  const handleNavigateToCreateItem = useCallback(() => {
    navigate('CreateItem');
  }, [navigate]);

  return (
    <Container>
      <Header>
        <UserName>Filipe Nadai</UserName>
      </Header>
      <Content>
        <Button>
          <BagButtonText>Open Bag</BagButtonText>
        </Button>
        <Button onPress={handleNavigateToCreateItem}>
          <BagButtonText>Create item</BagButtonText>
        </Button>
        <Button>
          <BagButtonText>Place item</BagButtonText>
        </Button>
        <Button onPress={handleNavigateToListItems}>
          <BagButtonText>List items</BagButtonText>
        </Button>
      </Content>
    </Container>
  );
};

export default Home;
