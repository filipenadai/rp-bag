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

export interface IItem {
  id: string;
  name: string;
  info: string;
  image: string;
}

const ListItem: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const [items, setItems] = useState<IItem[]>([
    {
      id: '1',
      name: 'Espada',
      info: 'Essa espada é lendaria porem tem dano d4, entao toma cuidado',
      image:
        'https://image.freepik.com/vetores-gratis/espada-de-guerreiro-de-fantasia_225004-1263.jpg',
    },
    {
      id: '2',
      name: 'COLETÃO',
      info: 'passa nem vendo fi',
      image:
        'https://http2.mlstatic.com/D_NQ_NP_21934-MLB20220348317_012015-O.jpg',
    },
    {
      id: '3',
      name: 'KATANA',
      info: 'CORTA TUDO MANO',
      image:
        'https://ae01.alicdn.com/kf/HTB1Yw7mM7zoK1RjSZFlq6yi4VXa8/Brandon-espadas-batalha-pronto-samurai-katana-artesanal-afiada-japon-s-espada-completa-tang-damasco-tameshigiri-katana.jpg',
    },
    {
      id: '4',
      name: 'CAAAAVALO',
      info: 'CAAAVAAAALOO',
      image: 'https://i.ytimg.com/vi/WMnHU1OmSao/sddefault.jpg',
    },
    {
      id: '5',
      name: 'CAJAAADO',
      info: 'Vou abrir o mar',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/b/ba/Shepherd%27s_hook_-_01.jpg',
    },
    {
      id: '6',
      name: 'Crystal',
      info: 'Crystal mano',
      image: 'https://cdn-images-1.medium.com/max/2600/0*AmwIyi21fDd9Guwz.jpg',
    },
  ]);

  const handleNavigateToCreate = useCallback(() => {
    navigate('CreateItem');
  }, [navigate]);

  return (
    <Container edges={['top']}>
      <Header>
        <HeaderButton onPress={goBack}>
          <Icon name="arrow-left" size={24} color="#3c3c3c" />
        </HeaderButton>
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
                <ItemDescription>{item.info}</ItemDescription>
              </InfoContainer>
            </ItemContainer>
          )}
        />
      </Content>
    </Container>
  );
};

export default ListItem;
