import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #3d3d3d;
`;

export const Content = styled.View`
  padding: 0 30px;
  width: 100%;
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const Button = styled(RectButton)`
  justify-content: center;
  margin: 8px 0;
  align-items: center;
  background-color: #4d4d4d;

  width: 100%;
  height: 56px;
  border-radius: 10px;
`;

export const BagButtonText = styled.Text`
  font-size: 24px;
  color: #fff;
`;

export const UserName = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'Rubik-Bold';
`;

export const UserImage = styled.Image`
  width: 150px;
  height: 150px;
  border-radius: 75px;
  margin: 8px 0;
`;
