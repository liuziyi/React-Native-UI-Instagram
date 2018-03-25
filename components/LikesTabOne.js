import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container, Content, List, ListItem, Left, Right, Body, Thumbnail } from 'native-base';

class LikesTabOne extends React.Component {

  render() {
    return (
      <Container>
        <List>
          <ListItem>
            <Left>
              <Thumbnail source={require('../assets/users/user2.jpg')}/>
              <Body>
                <Text>
                  <Text style={{ fontWeight: '900' }}>XYZ </Text> 
                  liked
                  <Text style={{ fontWeight: '900' }}> Zen's </Text>
                  photo. 
                  <Text style={{ color: 'grey' }}> 6h</Text>
                </Text>
              </Body>
            </Left>
            <Right>
              <Thumbnail square source={require('../assets/feed_images/image1.jpg')}/>
            </Right>
          </ListItem>
        </List>
      </Container>
    );
  }
}

export default LikesTabOne;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});