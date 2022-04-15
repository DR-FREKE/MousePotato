import React from 'react';
import {View} from 'react-native';
import {Divider, Avatar, Text} from '@ui-kitten/components';
import {
  AudioLayout,
  ImageLayout,
  ProfileLayout,
  TopView,
  BottomView,
  PlayView,
  ActionView,
  Action,
  ActionText,
  PlayText,
  NameText,
  UsernameText,
} from './audio.style';
import Image from '../../assets/images/icons/bold/play.svg';
import PlayImage from '../../assets/images/icons/bold/video-circle-1.svg';
import PauseImage from '../../assets/images/icons/bold/video-circle.svg';
import TimerImage from '../../assets/images/icons/bold/timer.svg';
import CommentImage from '../../assets/images/icons/bold/comment.svg';
import LikeImage from '../../assets/images/icons/bold/likes-1.svg';
import LikeImage2 from '../../assets/images/icons/bold/likes-2.svg';
import TaggedImage from '../../assets/images/icons/bold/save.svg';
import TaggedImage2 from '../../assets/images/icons/bold/save-1.svg';
import {LinearProgress} from '@rneui/themed';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';

const AudioRow = props => (
  <>
    <AudioLayout>
      <ImageLayout>
        <Image />
        {/* <Avatar source={props.image != null ? {uri: props.image} : image} size="medium" /> */}
      </ImageLayout>
      <ProfileLayout>
        <TopView>
          <View>
            <NameText>{props.name}</NameText>
            <UsernameText>{props.username}</UsernameText>
          </View>
          <View>
            <Text style={{color: '#aaa', fontSize: 13}}>
              {props.added_time}
            </Text>
          </View>
        </TopView>
        <BottomView {...props}>
          <View style={{marginBottom: !props.isPlaying ? 5 : 0}}>
            <Text style={{fontFamily: 'OpenSans-Regular'}}>{props.title}</Text>
          </View>
          <PlayView {...props}>
            <TouchableWithoutFeedback onPress={() => props.onPlay(props.id)}>
              {(props.isPlaying && props.item_id == props.id) ||
              props.id == 3 ? (
                <PlayImage />
              ) : (
                <PauseImage />
              )}
            </TouchableWithoutFeedback>
            <>
              <LinearProgress
                style={{
                  marginHorizontal: 10,
                  backgroundColor: '#f2f2f2',
                  width: '70%',
                  borderRadius: 50,
                }}
                color="#FB4445"
                value={
                  props.id == props.item_id
                    ? props.progress
                    : props.id == 3
                    ? 0.5
                    : 0
                }
                variant="determinate"
              />
            </>
            <PlayText>{props.time}</PlayText>
          </PlayView>
          <ActionView>
            {props.hasTimer && (
              <Action>
                <TimerImage />
                <ActionText>00:30</ActionText>
              </Action>
            )}
            <Action>
              <CommentImage />
              <ActionText>999k</ActionText>
            </Action>
            <Action>
              {props.isLiked ? <LikeImage2 /> : <LikeImage />}
              <ActionText {...props}>999k</ActionText>
            </Action>
            <Action>
              {props.isTagged ? <TaggedImage /> : <TaggedImage2 />}
            </Action>
          </ActionView>
        </BottomView>
      </ProfileLayout>
    </AudioLayout>
    <Divider />
  </>
);

export default AudioRow;
