import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Button } from 'react-native';
import { more, less } from './store/actions';

export default function Counter() {
    const data = useSelector((state) => state);
    const { counter, name } = data;
    const dispatch = useDispatch();

    return (
        <View style={Styles.container}>
            <Button title="More" onPress={() => dispatch(more())} />
            <Text>{counter}</Text>
            <Text>{name}</Text>
            <Button title="Less" onPress={() => dispatch(less())} />
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
