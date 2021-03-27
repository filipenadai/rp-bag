import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Header,
  Content,
  ListItems,
  ItemContainer,
  ItemImage,
  InfoContainer,
  ItemName,
  ItemDescription,
  HeaderButton,
} from './styles';

export interface IProfile {
  id: string;
  name: string;
  rpg: string;
  image: string;
}

const ListItem: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const [items, setItems] = useState<IProfile[]>([
    {
      id: '1',
      name: 'Sanemi',
      rpg: 'D&D',
      image:
        'https://i.pinimg.com/564x/a7/f6/5d/a7f65d55ffcddc692bab845bb432ed84.jpg',
    },
    {
      id: '2',
      name: 'Julião',
      rpg: 'Meme',
      image:
        'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/01/Renato-Aragao-1.jpg',
    },
  ]);

  const handleNavigateToCreate = useCallback(() => {
    navigate('CreateProfile');
  }, [navigate]);

  return (
    <Container edges={['top']}>
      <Header>
        <HeaderButton onPress={handleNavigateToCreate}>
          <Icon name="plus" size={24} color="#3c3c3c" />
        </HeaderButton>
      </Header>
      <Content>
        <ListItems
          data={items}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ItemContainer>
              <ItemImage source={{ uri: item.image }} resizeMode="cover" />
              <InfoContainer>
                <ItemName>{item.name}</ItemName>
                <ItemDescription>{item.rpg}</ItemDescription>
              </InfoContainer>
            </ItemContainer>
          )}
        />
      </Content>
    </Container>
  );
};

export default ListItem;
