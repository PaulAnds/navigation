import React from 'react';
import { Button, View, Text} from 'react-native';
import styles from './styles.js';

function DetailScreen({route, navigation}){

  const{id, description} = route.params;
    return(
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center',           backgroundColor:'#8e24aa'}}>
        <View style={styles.containerView}> 
            <Text style = {styles.containerText}>Task #{id}</Text>
            <Text style = {styles.containerText}> : {description}</Text>
        </View>
        <View style={styles.footer}>
        <Button
                color= "#ffeb3b"
                title= "Back"
                onPress={() => navigation.goBack()}
              />
        <Button
                color= "#ffeb3b"
                title= "Home"
                onPress={() => navigation.navigate("Home")}
              />
        </View>
        </View>
    );
}

export default DetailScreen;