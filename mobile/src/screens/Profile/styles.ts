import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RectButton } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';

import { IProfile } from '.';

export const Container = styled(SafeAreaView)`
  flex: 1;
  width: 100%;
  background: #3c3c3c;
`;
export const Header = styled.View`
  height: 10%;
  width: 100%;
  justify-content: flex-end;
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
  justify-content: center;
  align-items: center;
  background: #4d4d4d;
  padding: 0 16px;
`;

export const ListItems = styled(FlatList as new () => FlatList<IProfile>)`
  width: 100%;
`;

export const ItemContainer = styled.View`
  width: 100%;
  background: #3c3c3c;
  height: 100px;
  border-radius: 10px;
  margin: 8px 0;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ItemImage = styled.Image`
  height: 100%;
  width: 40%;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

export const InfoContainer = styled.View`
  padding: 0 8px;
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

export const ItemName = styled.Text`
  font-size: 16px;
  color: #fdfdfd;
  font-weight: bold;
`;

export const ItemDescription = styled.Text`
  font-size: 14px;
  color: #fdfdfd;
`;
