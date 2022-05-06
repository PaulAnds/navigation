import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from'../bStyles';

const Box = ({children}) => {

    return (
        <View style={styles.box}>
            <Text style={styles.boxText}>{children}</Text>
        </View>
    );
}

Box.propTypes = {
    children: PropTypes.node.isRequired
};

export default Box;