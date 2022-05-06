import React from 'react';
import {Button, View, Text} from 'react-native';
import styles from './styles.js';

function HomeScreen({navigation}) {
    return (
        <View style ={styles.container}>
            <Text style={styles.container}>Home</Text>
            <Button 
                title="Ir a Details"
                onPress={() => navigation.navigate("Details")}
            />
            
        </View>

    );
}

export default HomeScreen;