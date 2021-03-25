import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Header, HeaderButton, Content, ImageInput } from './styles';

const CreateItem: React.FC = () => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <Header>
        <HeaderButton onPress={goBack}>
          <Icon name="arrow-left" size={24} color="#3c3c3c" />
        </HeaderButton>
      </Header>
      <Content>
        <ImageInput>
          <Icon name="plus" size={56} color="#3c3c3c" />
        </ImageInput>
        <Input placeholder="Name" />
        <Input placeholder="Description" />
        <Button>Confirm</Button>
      </Content>
    </Container>
  );
};
export default CreateItem;
