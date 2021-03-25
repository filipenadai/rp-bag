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
      <Content />
    </Container>
  );
};

export default Home;
