import React from 'react';
import {Layout, TopNavigation} from '@ui-kitten/components';
import {LayoutContainer} from './layout.style';
import {SafeAreaView} from 'react-native';

const AppLayout = ({children, ...props}) => (
  <SafeAreaView style={{flex: 1}}>
    <LayoutContainer level="1">
      {props.showTopBar && (
        <TopNavigation
          style={{
            paddingHorizontal: '5%',
            paddingVertical: '5%',
          }}
          title={props.title}
          alignment={props.alignment}
          accessoryLeft={props.accessoryLeft}
          accessoryRight={props.accessoryRight}
        />
      )}
      <Layout style={{flex: 1}}>{children}</Layout>
    </LayoutContainer>
  </SafeAreaView>
);

AppLayout.defaultProps = {
  alignment: 'center',
};

export default AppLayout;
