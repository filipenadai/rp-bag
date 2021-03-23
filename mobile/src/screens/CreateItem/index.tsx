import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, Header, HeaderButton } from './styles';

const CreateItem: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <Header>
        <HeaderButton onPress={goBack}>
          <Icon name="arrow-left" size={24} color="#3c3c3c" />
        </HeaderButton>
      </Header>
      <View style={{ flex: 1, backgroundColor: '#fff' }} />
    </Container>
  );
};
export default CreateItem;
