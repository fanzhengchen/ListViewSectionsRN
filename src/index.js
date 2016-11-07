/**
 * Created by mark on 16-11-7.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
} from 'react-native';
import MainContainer from './containers/MainContainer';
import {RxStateProvider} from './state/RxState';
export default class ListViewWithSection extends Component {
    render() {
        return (
            <Text>Fuck</Text>
        );
    }
}


AppRegistry.registerComponent('ListViewWithSection', () => {
    return ListViewWithSection
});