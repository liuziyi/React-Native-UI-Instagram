import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import { Container, Content, Icon, Thumbnail, Header, Left, Right, Body } from 'native-base';

import FeedComponent from '../FeedComponent';

class HomeTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-home' style={{ color: tintColor }}/>
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Icon name='ios-camera-outline' style={{ paddingLeft: 10 }}/>
          </Left>
          <Body><Text>Instagram</Text></Body>
          <Right>
            <Icon name='ios-send-outline' style={{ paddingRight: 10 }}/>
          </Right>
        </Header>
        <Content>
          <View style={{ height: 100 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', 
            alignItems: 'center', paddingHorizontal: 7 }}>
              <Text style={{ fontWeight: 'bold' }}>Stories</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='md-play' style={{ fontSize: 14 }}/>
                <Text style={{ fontWeight: 'bold' }}>Watch All</Text>
              </View>
            </View>
            <View style={{ flex: 3 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  alignItems: 'center',
                  paddingStart: 5,
                  paddingEnd: 5
                }}
              >
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} 
                  source={(require('../../assets/users/user2.jpg'))}/>
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} 
                  source={(require('../../assets/users/user3.jpg'))}/>
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} 
                  source={(require('../../assets/users/user4.jpg'))}/>
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} 
                  source={(require('../../assets/users/user5.jpg'))}/>
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} 
                  source={(require('../../assets/users/user6.jpg'))}/>
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} 
                  source={(require('../../assets/users/user7.jpg'))}/>
                <Thumbnail 
                  style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth: 2 }} 
                  source={(require('../../assets/users/user8.jpg'))}/>
              </ScrollView>
            </View>
          </View>
          <FeedComponent imageSource='1' likes='101'/>
          <FeedComponent imageSource='2' likes='101'/>
          <FeedComponent imageSource='3' likes='101'/>
        </Content>
      </Container>
    );
  }
}

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});
