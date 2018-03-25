import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

import { Container, Content, Icon, Header, Left, Right, Body, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
var { height, width } = Dimensions.get('window');

import FeedComponent from '../FeedComponent';

var images = [
  require('../../assets/profile_images/image1.jpg'),
  require('../../assets/profile_images/image2.jpg'),
  require('../../assets/profile_images/image3.jpg'),
  require('../../assets/profile_images/image4.jpg'),
  require('../../assets/profile_images/image5.jpg'),
  require('../../assets/profile_images/image6.jpg'),
  require('../../assets/profile_images/image7.jpg'),
  require('../../assets/profile_images/image8.jpg'),
  require('../../assets/profile_images/image9.jpg')
]

class ProfileTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-person' style={{ color: tintColor }}/>
    )
  }

  constructor(props){
    super(props)
    this.state = {
      activeIndex: 0
    }
  }

  segmentClicked = (index) => {
    this.setState({ activeIndex: index })
  }

  renderSectionOne = () => {
    return images.map((image, index) => {
      return(
        <View key={index} style={
          [ 
            {width: (width)/3}, {height: (width)/3}, 
            {marginBottom: 2}, 
            index % 3 !== 0 ? { paddingLeft: 2 } : { paddingRight: 0 } 
          ]
        }>
          <Image 
            style={{ flex: 1, width: undefined, height: undefined }}
            source={image}
          />
        </View>
      )
    })
  }

  renderSection = () => {
    if(this.state.activeIndex == 0) {
      return(
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          {this.renderSectionOne()}
        </View>
      )
    }else if(this.state.activeIndex == 1){
      return(
        <View>
          <FeedComponent imageSource="1" likes="101" />
          <FeedComponent imageSource="2" likes="101" />
          <FeedComponent imageSource="3" likes="101" />
        </View>
      )
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name='md-person-add' style={{ paddingLeft: 10 }}/>
          </Left>
          <Body><Text>Profile</Text></Body>
          <Right>
            <EntypoIcon name='back-in-time' style={{ paddingRight: 10, fontSize: 32 }}/>
          </Right>
        </Header>
        <Content>

          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image source={require('../../assets/users/user1.jpg')} style={{ width: 75, height: 75, borderRadius: 37.5 }}/>
              </View>
              <View style={{ flex: 3 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View style={{ alignItems: 'center' }}>
                    <Text>9</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>posts</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text></Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>followers</Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <Text></Text>
                    <Text style={{ fontSize: 10, color: 'grey' }}>following</Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', paddingTop: 10 }}>
                  <Button bordered dark
                    style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30 }}>
                    <Text>Edit Profile</Text>
                  </Button>
                  <Button bordered dark
                    style={{ flex: 1, marginLeft: 10, justifyContent: 'center', height: 30 }}>
                    <Icon name='settings'/>
                  </Button>
                </View>
              </View>
            </View>
            <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Z</Text>
              <Text>Tech | Movies | Coffee</Text>
              <Text>www.norbb.com</Text>
            </View>
          </View>

          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, 
            borderTopColor: '#eae5e5' }}>
              <Button 
                transparent 
                onPress={() => this.segmentClicked(0)}
                active={this.state.activeIndex === 0}
              >
                <Icon name='ios-apps-outline' 
                  style={[ this.state.activeIndex === 0 ? {} : { color: 'grey' } ]}
                />
              </Button>
              <Button 
                transparent 
                onPress={() => this.segmentClicked(1)}
                active={this.state.activeIndex === 1}
              >
                <Icon name='ios-list-outline' 
                  style={[ this.state.activeIndex === 1 ? {} : { color: 'grey' } ]}
                />
              </Button>
              <Button 
                transparent 
                onPress={() => this.segmentClicked(2)}
                active={this.state.activeIndex === 2}
              >
                <Icon name='ios-people-outline' 
                  style={[ this.state.activeIndex === 2 ? {} : { color: 'grey' } ]}
                />
              </Button>
              <Button 
                transparent 
                onPress={() => this.segmentClicked(3)}
                active={this.state.activeIndex === 3}
              >
                <Icon name='ios-bookmark-outline' 
                  style={[ this.state.activeIndex === 3 ? {} : { color: 'grey' } ]}
                />
              </Button>
            </View>
          </View>

          {this.renderSection()}
        </Content>
      </Container>
    );
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});