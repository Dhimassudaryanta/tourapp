import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";


class HeaderComponent extends React.Component {



    render() {

        console.log(this.props.title)
        return (
            <View style={{
                // borderWidth: 1,
                // borderColor: 'blue',
                height: '100%',
                backgroundColor: '#234db0',
                flexDirection: 'row',
                alignItems: 'center',
            }}>

                <TouchableOpacity
                    disabled={this.props.title === "Payment Details" ? true : false}
                    onPress={() => this.props.onClick()}
                    style={{
                        // borderWidth: 1,
                        // borderColor: 'black',
                        width: Dimensions.get('window').width * 1 / 10,
                        height: Dimensions.get('window').height * 0.5 / 10,
                        paddingLeft: Dimensions.get('window').width * 0.25 / 10,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                    <Image
                        source={require('../../asstes/arrowback.png')}
                        style={{
                            width: '50%',
                            height: '50%'
                        }}
                    ></Image>
                </TouchableOpacity>
                <View style={{
                    // borderWidth: 1,
                    // borderColor: 'black',
                    width: '75%',
                    paddingLeft: Dimensions.get('window').width * 1 / 10,

                }}>
                    <Text style={{
                        fontSize: Dimensions.get('window').height / 45,
                        color: 'white',

                    }}>{this.props.title}</Text>
                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({

})

export default HeaderComponent;