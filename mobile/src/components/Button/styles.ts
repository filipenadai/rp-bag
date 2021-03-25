import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 60px;
  width: 100%;
  background: #fdfdfd;
  border-radius: 10px;
  margin-top: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #3c3c3c;
  font-size: 18px;
  font-weight: bold;

  text-transform: uppercase;
`;
