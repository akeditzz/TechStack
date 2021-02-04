import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    LayoutAnimation,
    TouchableWithoutFeedback,
    UIManager
} from 'react-native'
import { connect } from 'react-redux'
import { CardSection } from './common'
import * as actions from '../actions'
class ListItem extends Component {
    componentDidMount(){
        UIManager.setLayoutAnimationEnabledExperimental(true)
    }

    componentDidUpdate(){
        LayoutAnimation.spring()
    }

    renderDescription() {
        const { library, expanded } = this.props
        if (expanded) {
            return <CardSection>
                <Text style={styles.descriptionStyle}>
                    {library.item.description}
                </Text>
            </CardSection>
        }
    }

    render() {
        const { titleStyle } = styles
        const { id, title } = this.props.library.item
        return <TouchableWithoutFeedback
            onPress={() => this.props.selectLibrary(id)}
        >
            <View>
                <CardSection>
                    <Text style={titleStyle}>
                        {title}
                    </Text>
                </CardSection>
                {this.renderDescription()}
            </View>
        </TouchableWithoutFeedback>
    }
}

const styles = StyleSheet.create({
    titleStyle: {
        color: '#000',
        fontSize: 16,
        paddingLeft: 8
    },
    descriptionStyle: {
        color: '#000',
        fontSize: 14,
        padding: 8,
        flex: 1
    }
})

const mapsStateProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.item.id
    return { expanded }
}

export default connect(mapsStateProps, actions)(ListItem)