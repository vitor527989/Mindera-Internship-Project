import React, { Component } from 'react';


import { View, Text, Image, StyleSheet } from 'react-native'

export default class AboutView extends React.Component {

    constructor (props) {
        super(props)
      }

    static navigationOptions = (props) => {
        return {
          title: 'About',
          headerStyle: {
            backgroundColor: '#a8a7a7'
          },
          headerTintColor: '#ffffff',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
        }
    }
        render () {
            return (
                <View style={{alignItems: 'center'}}>
                <View>
                    <Image source={require('../assets/mindera.png')}
                    style={{height: 300,
                        width: 250}} />
                 </View>
                <View>
                  <Text>Mindera Internship Project</Text>
                </View>
                <View style={{marginTop: 10}}>
                  <Text>App created by: Vitor Cardoso</Text>
                </View>
                <View style={{marginTop: 10}}>
                  <Text>ISEP - Instituto Superior de Engenharia do Porto</Text>
                </View>
                <View style={{marginTop: 10}}>
                  <Text>Contact: vitorjscardoso@hotmail.com</Text>
                </View>
              </View>
            )
          }

    
  }