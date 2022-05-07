import React from 'react';
import {View,Button} from 'react-native';
import styles from './components/bStyles';
import Box from './components/Box/Box';
import Row from './components/Tools/Row';
import Column from './components/Tools/Column';
import styless from './styles.js';

function MenuScreen({route, navigation}) {
        
    return (
        <View style={styles.container}>
            <Column>
              <Row>
              <Box>
              <Button
                color= "#ffeb3b"
                title= "Task 1"
                onPress={() => navigation.navigate('Details', {
                  id: 1,
                  description: "Go shopping",
                })}
              />
              </Box>
              <Box>
              <Button
                color= "#ffeb3b"
                title= "Task 2"
                onPress={() => navigation.navigate('Details', {
                  id: 2,
                  description: "Finish Homework",
                })}
              />
              </Box>
              </Row>
              <Row>
              <Box>
              <Button
                color= "#ffeb3b"
                title= "Task 3"
                onPress={() => navigation.navigate('Details', {
                  id: 3,
                  description: "Go to school",
                })}
              />
              </Box>
              <Box>
              <Button
                color= "#ffeb3b"
                title= "Task 4"
                onPress={() => navigation.navigate('Details', {
                  id: 4,
                  description: "Be a good student",
                })}
              />
              </Box>
              </Row>
              <Row>
              <Box>
              <Button
                color= "#ffeb3b"
                title= "Task 5"
                onPress={() => navigation.navigate('Details', {
                  id: 5,
                  description: "Study for Web",
                })}
              />
              </Box>
              <Box>
              <Button
                color= "#ffeb3b"
                title= "Task 6"
                onPress={() => navigation.navigate('Details', {
                  id: 6,
                  description: "Commit unalive",
                })}
              />
              </Box>
              </Row>
            </Column>
            <View style={styless.footer}>
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

export default MenuScreen;