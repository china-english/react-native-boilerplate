/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {Actions} from 'react-native-router-flux';
import {
  addToCounter,
  minusToCounter,
} from "../../actions";
import {Container, Footer, FooterTab, Header, Button, Body, Content} from 'native-base';

class Home extends Component {
  render() {
    return (
      <Container>
        <Header
          style={{
            backgroundColor: "#F5FCFF",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>home</Text>
        </Header>
        <Content
          contentContainerStyle ={{
            flex:1,
            justifyContent: "center",
            alignItems: "center",
          }}
          style={{
            backgroundColor: "#F5FCFF",
          }}
        >
          <View style={styles.container}>
          <Text>
            Welcome to React  Native!
          </Text>
          <Text>
            To get started, edit index.ios.js
          </Text>
          <Text>
            Press Cmd+R to reload,{'\n'}
            Cmd+D or shake for dev menu
          </Text>
          <View>
            <Button
              onPress={()=> {
                Actions.push('login');
              }}
            >
              <Text>
                Go to Login!
              </Text>
            </Button>
            <Button
              onPress={()=> {
                this.props.addToCounter();
              }}
            >
              <Text>
                Add counter
              </Text>
            </Button>
            <Button
              onPress={()=> {
                this.props.minusToCounter();
              }}
            >
              <Text>
                Minus counter
              </Text>
            </Button>
          </View>
          <Text>{this.props.counter}</Text>
        </View>
        </Content>
        <Footer>
          <FooterTab
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>
              home footer
            </Text>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.reducer.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCounter: bindActionCreators(addToCounter, dispatch),
    minusToCounter: bindActionCreators(minusToCounter, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

var styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF",
    },
    welcome: {
      fontSize: 20,
      textAlign: "center",
      margin: 10,
    },
    instructions: {
      textAlign: "center",
      color: "#333333",
      marginBottom: 5,
    },
});
