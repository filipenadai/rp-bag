import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

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

export const Content = styled.View`
  flex: 1;
  width: 100%;

  margin-top: 16px;
  padding: 0 30px;

  justify-content: flex-start;
  align-items: center;
`;

export const ImageInput = styled(RectButton)`
  height: ${Dimensions.get('screen').height / 5}px;
  width: 100%;
  border-radius: 20px;

  justify-content: center;
  align-items: center;

  background: #4d4d4d;

  margin: 24px 0;
`;
