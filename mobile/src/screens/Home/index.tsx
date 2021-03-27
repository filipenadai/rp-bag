import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Button,
  BagButtonText,
  Content,
  Header,
  UserName,
  UserImage,
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
        <UserImage
          source={{
            uri: 'https://avatars.githubusercontent.com/u/48576140?v=4',
          }}
        />
        <UserName>Filipe Nadai</UserName>
      </Header>
      <Content />
    </Container>
  );
};

export default Home;
