import {Layout, Text} from '@ui-kitten/components';
import {Platform} from 'react-native';
import styled from 'styled-components';

export const AudioLayout = styled(Layout)`
  display: flex;
  flex-direction: row;
  margin: 10px 0;
  font-family: OpenSans-Bold;
`;

export const ImageLayout = styled(Layout)`
  background-color: pink;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const ProfileLayout = styled(Layout)`
  flex: 1;
  margin-left: 5px;
  padding: 3px 5px;
  display: flex;
`;

export const TopView = styled(Layout)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NameText = styled(Text)`
  font-weight: ${Platform.OS == 'android' ? 'bold' : '600'};
  font-size: 16px;
  font-family: OpenSans-Bold;
`;

export const UsernameText = styled(Text)`
  font-size: 12px;
  margin-top: 3px;
  font-family: OpenSans-Regular;
`;

export const BottomView = styled(Layout)`
  margin-top: ${props => (props.id == 3 ? '0' : '10px')}
  padding: 0 0 10px;
`;

export const PlayView = styled.View`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${props => (props.id == 3 ? '0' : '8px')};
`;

export const PlayText = styled(Text)`
  font-size: 11px;
`;

export const ActionView = styled.View`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
`;
export const Action = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 ${Platform.OS == 'android' ? '10px' : '7px'};
`;

export const ActionText = styled(Text)`
  margin-left: 4px;
  font-size: 13px;
  font-weight: 500;
  color: ${props => (props.isLiked ? 'orange' : '#000')};
  font-family: OpenSans-Medium;
`;
