import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container, Content, List, ListItem, Left, Right, Body, Thumbnail, Button } from 'native-base';

class LikesTabTwo extends React.Component {

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
                  started following you. 
                  <Text style={{ color: 'grey' }}> 6h</Text>
                </Text>
              </Body>
            </Left>
            <Right>
              <Button info style={{ height: 30, width: 60, justifyContent: 'center' }}>
                <Text style={{ color: 'white' }}> Follow </Text>
              </Button>
            </Right>
          </ListItem>
        </List>
      </Container>
    );
  }
}

export default LikesTabTwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});