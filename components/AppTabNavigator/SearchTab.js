import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import { Container, Header, Content, Input, Icon, Item, Button } from 'native-base';

var { height, width } = Dimensions.get('window');

var images = [
  require('../../assets/search_images/image1.jpg'),
  require('../../assets/search_images/image2.jpg'),
  require('../../assets/search_images/image3.jpg'),
  require('../../assets/search_images/image4.jpg'),
  require('../../assets/search_images/image5.jpg'),
  require('../../assets/search_images/image6.jpg'),
  require('../../assets/search_images/image7.jpg'),
  require('../../assets/search_images/image8.jpg'),
  require('../../assets/search_images/image9.jpg')
]

class SearchTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-search' style={{ color: tintColor }}/>
    )
  }
  
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search"/>
          </Item>
        </Header>
        <Content>
        </Content>
      </Container>
    );
  }
}

export default SearchTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});