import React from 'react';
import {View} from 'react-native';
import styles from '../bStyles';
import PropTypes from 'prop-types';

function Row({children}) {
    return (
        <View style={styles.row}>
            {children}
        </View>
    );
}

Row.PropTypes = {
    children: PropTypes.node.isRequired,
}

export default Row;