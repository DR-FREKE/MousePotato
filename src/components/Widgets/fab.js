import React from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

export const FAB = ({icon}) => (
  <TouchableOpacity
    style={{
      backgroundColor: 'transparent',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
      marginHorizontal: '3%',
      width: 80,
      height: 80,
      position: 'absolute',
      marginTop: height - 200,
    }}>
    {icon}
  </TouchableOpacity>
);
