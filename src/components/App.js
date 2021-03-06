import React from 'react'
import {View} from 'react-native'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from '../reducers'
import {Header} from "./widgets";
import LibraryList from "./LibraryList";

const App = () => {
    return (
        <Provider store={createStore(reducers)}>
            <View style={{ flex:1 }}>
                <Header headerText="Tech List"/>
                <LibraryList/>
            </View>
        </Provider>
    )
}

export default App;