import React, { Component } from 'react'
import {View, Image, Text, Button, StyleSheet, TextInput} from 'react-native'
import { connect } from 'react-redux'
import {Fire} from '../../firebase/index'
import {navigation} from 'react-native-navigation'

import { deletePlace } from '../../store/actions/index'

class EmployeeDetailScreen extends Component {
    
    placeDeletedHandler = () => {
        this.props.onDeletePlace(this.props.selectedPlace.key)
        this.props.navigator.pop()
        Fire.database().ref(`employee/${this.props.selectedPlace.key}`).remove()
    }


    render() {
            return(
                <View style={styles.container}>
                    <View>
                        <Image
                            style={styles.placeImage}
                            source={this.props.selectedPlace.image}
                        />
                        <Text style={styles.placeName}>Nama : {this.props.selectedPlace.value}</Text>
                        <Text style={styles.placeName}>Usia : {this.props.selectedPlace.usia}</Text>
                        <Text style={styles.placeName}>Jabatan : {this.props.selectedPlace.jabatan}</Text>
                    </View>
                    <Button title='Delete' color='red' onPress={this.placeDeletedHandler}/>
                </View>
            )       
    }
}

const styles = StyleSheet.create({
    container : {
        padding: 22
    },
    placeImage: {
        width: '100%',
        height: 220
    },
    placeName : {
        fontWeight: 'bold',
        fontSize : 28,
        textAlign :'center'
    },
    button : {
        margin: 10
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace: (key) => dispatch(deletePlace(key)),
        
    }
}

const mapStateToProps = state => {
    return {
        uid: state.auth.user.uid
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetailScreen)