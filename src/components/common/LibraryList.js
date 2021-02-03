import React,{Component} from 'react'
import { Text } from 'react-native'
import {connect} from 'react-redux'

class LibraryList extends Component{
    render(){
        console.log(this.props)
        return <Text>LibraryList</Text>
    }
}

const mapsStateProps = state =>{
    return {libraries:state.libraries}
}

export default connect(mapsStateProps)(LibraryList)