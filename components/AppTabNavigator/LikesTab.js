import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container, Header, Content, Tab, Tabs, Icon } from 'native-base';

import LikesTabOne from '../LikesTabOne';
import LikesTabTwo from '../LikesTabTwo';

class LikesTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-heart' style={{ color: tintColor }}/>
    )
  }

  render() {
    return (
      <Container style={{ marginTop: 10 }}>
        <Tabs tabBarUnderlineStyle={{backgroundColor: 'black', }}>
          <Tab heading="Following" textStyle={{ color: 'grey', fontWeight: 'normal' }} activeTextStyle={{ color: 'black' }}>
            <LikesTabOne/>
          </Tab>
          <Tab heading="You" textStyle={{ color: 'grey', fontWeight: 'normal' }} activeTextStyle={{ color: 'black' }}>
            <LikesTabTwo />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default LikesTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});