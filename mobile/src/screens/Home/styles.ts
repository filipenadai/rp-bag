import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(SafeAreaView)`
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
  height: 10%;
`;

export const BagButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: #9d2053;

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
`;
