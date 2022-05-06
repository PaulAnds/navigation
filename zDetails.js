import React from 'react';
import {StyleSheet, Button, View, Text} from 'react-native';

function DetailScreen({route, navigation}){

  const{id, description} = route.params;
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#8e24aa'}}>
            <Text style = {{color:"white"}}>Details Screen</Text>
            <Text style = {{color:"white"}}>Screen: {id}</Text>
            <Text style = {{color:"white"}}>Description: {description}</Text>

            <View style={styles.containerButton}>
              <Button
                color= "#ffeb3b"
                title= "Task 1"
                onPress={() => navigation.push('Details', {
                  id: 1,
                  description: "Go shopping",
                })}
             />
             <Button
                color= "#ffeb3b"
                title= "Task 2"
                onPress={() => navigation.push('Details', {
                  id: 2,
                  description: "Playing Time",
                })}
              />
              <Button
                color= "#ffeb3b"
                title= "Task 3"
                onPress={() => navigation.push('Details', {
                  id: 3,
                  description: "Go to class",
                })}
              />
            </View>

            <View style={styles.containerButton}>
              <Button
                color= "#ffeb3b"
                title= "Back"
                onPress={() => navigation.goBack()}
             />
             <Button
                color= "#ffeb3b"
                title= "Home"
                onPress={() => navigation.navigate('Home')}
              />
              <Button
                color= "#ffeb3b"
                title= "Details"
                onPress={() => navigation.push('Details')}
              />
            </View>

            <Button
                color= "#ffeb3b"
                title= "Start"
                onPress={() => navigation.popToTop()}
              />
        </View>
    );
}

const styles = StyleSheet.create({
  containerButton:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#c158dc',

    margin: 20,
    padding: 5,

    width:300,
    height: 100,

  }
})

export default DetailScreen;