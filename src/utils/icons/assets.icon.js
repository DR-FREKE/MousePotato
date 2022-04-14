import React from 'react';
import {View} from 'react-native';
import Home from '../../assets/images/icons/bold/home.svg';
import Explore from '../../assets/images/icons/bold/explore.svg';
import Notify from '../../assets/images/icons/bold/explore-1.svg';
import Profile from '../../assets/images/icons/bold/explore-2.svg';
import Logo from '../../assets/images/Logo.svg';
import Play from '../../assets/images/icons/bold/play.svg';
import Mic from '../../assets/images/mic.svg';

const IconProvider = source => ({
  toReactElement: ({animation, ...props}) => <View>{source}</View>,
});

export const AssetIconsPack = {
  name: 'assets',
  icons: {
    home: IconProvider(<Home />),
    globe: IconProvider(<Explore />),
    notify: IconProvider(<Notify />),
    profile: IconProvider(<Profile />),
    logo: IconProvider(<Logo />),
    play: IconProvider(<Play />),
    mic: IconProvider(<Mic />),
    // ...
  },
};
