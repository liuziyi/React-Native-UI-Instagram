import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Container, Header, Content, Input } from 'native-base';

class SearchComponent extends React.Component {

  render() {
    return (
      <Container>
        <Header searchBar rounded>
        </Header>
      </Container>
    );
  }
}

export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});