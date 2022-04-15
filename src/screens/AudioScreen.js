import React, {useState, useEffect} from 'react';
import {Layout, Text} from '@ui-kitten/components';
import AppLayout from '../components/Layouts/app.layout';
import {LogoIcon, PlayIcon} from '../components/Widgets/Icons';
import {FlatList, Platform} from 'react-native';
import {audio_data} from '../utils/data';
import AudioRow from '../components/Row/AudioRow';
import {FAB} from '../components/Widgets/fab';
import {MicIcon} from '../components/Widgets/Icons';

const TopNavTitle = () => (
  <Text
    style={{
      fontFamily: 'OpenSans-Bold',
      fontWeight: Platform.OS == 'android' ? 'bold' : '600',
    }}>
    Dwight's Feed
  </Text>
);

const Home = ({navigation, ...props}) => {
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(0);
  const [id, setId] = useState();

  useEffect(() => {
    let subs = true;
    if (progress < 1 && progress !== 0) {
      setTimeout(() => {
        if (subs) {
          setProgress(progress + 0.1);
        }
      }, 100);
    }
    return () => {
      subs = false;
    };
  }, [progress]);

  const onPlay = id => {
    audio_data.find(content => {
      if (content.id == id) {
        setIsPlaying(!isPlaying);
        setProgress(0.00001);
      }
    });
    setId(id);
  };

  const renderItem = ({item}) => (
    <AudioRow
      {...item}
      progress={progress}
      onPlay={onPlay}
      isPlaying={isPlaying}
      item_id={id}
    />
  );
  return (
    <>
      <AppLayout
        showTopBar
        title={<TopNavTitle />}
        accessoryLeft={LogoIcon}
        accessoryRight={PlayIcon}>
        <Layout style={{paddingHorizontal: '5%'}}>
          <FlatList
            data={audio_data}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        </Layout>
      </AppLayout>
      <FAB icon={<MicIcon />} />
    </>
  );
};

export default Home;
