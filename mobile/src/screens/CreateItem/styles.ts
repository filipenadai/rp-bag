import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #3d3d3d;
`;

export const Header = styled.View`
  height: 10%;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px;

  flex-direction: row;
`;

export const HeaderButton = styled(RectButton)`
  background: #fdfdfd;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
`;
