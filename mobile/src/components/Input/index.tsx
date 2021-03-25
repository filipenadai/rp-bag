import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

const Input: React.FC<TextInputProps> = ({ ...rest }) => (
  <Container>
    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#f3f4f3"
      {...rest}
    />
  </Container>
);

export default Input;
