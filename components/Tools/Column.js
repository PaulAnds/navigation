import React from 'react';
import {View} from 'react-native';
import styles from '../bStyles';
import PropTypes from 'prop-types';

function Column({children}) {
    return (
        <View style={styles.column}>
            {children}
        </View>
    );
}

Column.PropTypes = {
    children: PropTypes.node.isRequired,
}

export default Column;