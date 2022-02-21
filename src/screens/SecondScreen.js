import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, FlatList, TouchableOpacity, ScrollView, Image, Touchable } from 'react-native';
import HeaderComponent from '../components/Header.component';
import { SaveTamu, DeleteTamu } from "../actions/action";
import { connect } from "react-redux";


class SecondScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            status: false,
            text: ""

        };
    }

    componentDidMount() {
        console.log(this.props.getData)
        // if (this.props.getData) {
        this.setState({ data: this.props.getData })
    }


    render() {
        // console.log(this.state.data)
        const onDeleteHandler = (id) => {
            console.log(id)
            console.log(this.state.data.filter(item => item.id != id))
            this.setState({ data: this.state.data.filter(item => item.id != id) })
            this.props.DeleteTamu(this.state.data.filter(item => item.id != id));

        }

        const onSimpanHandler = () => {
            this.setState({ data: [...this.state.data, { nama: this.state.text, id: Math.floor(Math.random() * 1000) + 1 }] })
            this.props.SaveTamu([...this.state.data, { nama: this.state.text, id: Math.floor(Math.random() * 1000) + 1 }]);
            this.setState({ text: '' })
        }


        const onClick = () => {
            this.props.navigation.navigate('FirstScreen')
        }
        return (
            <View style={{
            }}>
                <View style={{
                    height: Dimensions.get('window').height * 0.8 / 10
                }}>
                    <HeaderComponent
                        onClick={onClick}
                        title="Tambah Data Tamu">

                    </HeaderComponent>
                </View>
                <View style={{
                    // borderBottomColor: '#ccc',
                    // borderBottomWidth: 1,
                    // borderTopColor: '#ccc',
                    // borderTopWidth: 1,
                    // height: Dimensions.get('window').height * 2.5 / 10,
                    alignItems: 'center',
                    paddingVertical: Dimensions.get('window').height * 0.1 / 10,
                    // borderColor: 'black',
                    // borderWidth: 1,
                    height: Dimensions.get('window').height * 7 / 10
                }}>
                    <View style={{
                        width: '85%'
                    }}>
                        <View style={{
                            // borderWidth: 1,
                            // borderColor: 'black',
                            paddingVertical: Dimensions.get('window').height * 0.05 / 10,
                            justifyContent: 'space-between',
                            flexDirection: 'row'
                        }}>
                            <Text style={{
                                color: 'black',
                                fontSize: Dimensions.get('window').height / 55,
                                fontWeight: 'bold'
                            }}>
                                Data Tamu
                            </Text>
                        </View>
                        <View style={{
                            // borderWidth: 1,
                            // borderColor: 'black',
                            // height: Dimensions.get('window').height * 6 / 10,
                            maxHeight: Dimensions.get('window').height * 6 / 10
                            // height: 30,

                        }}>
                            <FlatList
                                data={this.state.data}
                                keyExtractor={(item) => item.id}

                                renderItem={({ item }) =>
                                    <View style={{
                                        // height: '70%',
                                        // borderWidth: 1,
                                        // borderColor: 'black'
                                    }}>
                                        <View style={{
                                            flexDirection: 'row',
                                            // borderWidth: 1,
                                            // borderColor: 'black',
                                            height: Dimensions.get('window').height * 0.8 / 10,
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}>
                                            <TextInput
                                                // placeholder={item.nama} 
                                                value={item.nama}
                                                style={{
                                                    borderWidth: 1,
                                                    borderColor: 'black',
                                                    height: Dimensions.get('window').height * 0.6 / 10,
                                                    borderRadius: 15,
                                                    borderColor: '#ccc',
                                                    paddingLeft: 10,
                                                    width: '80%'

                                                }}>
                                            </TextInput>
                                            <TouchableOpacity
                                                onPress={() => onDeleteHandler(item.id)}
                                                style={{
                                                    // borderWidth: 1,
                                                    // borderColor: 'black',
                                                    width: '20%',
                                                    height: '100%',
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}>
                                                <Image
                                                    style={{
                                                        width: '50%',
                                                        height: '50%'
                                                    }}
                                                    source={require('../../asstes/trash.png')}
                                                >

                                                </Image>
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                }
                            >

                            </FlatList>
                            {this.state.status === false ?
                                <TouchableOpacity
                                    onPress={() => this.setState({ status: true })}
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                    <Text>+Tambah Data Tamu</Text>
                                </TouchableOpacity>
                                : null
                            }
                            {this.state.status === true ?
                                <TextInput
                                    onChangeText={(text) => this.setState({ text: text })}
                                    value={this.state.text}
                                    style={{
                                        borderWidth: 1,
                                        marginTop: Dimensions.get('window').height * 0.3 / 10,
                                        borderColor: 'black',
                                        height: Dimensions.get('window').height * 0.6 / 10,
                                        borderRadius: 15,
                                        borderColor: '#ccc',
                                        paddingLeft: 10
                                    }}>

                                </TextInput>
                                : null}
                        </View>

                    </View>
                </View >
                <View style={{
                    height: Dimensions.get('window').height * 2 / 10,
                    // borderWidth: 1,
                    // borderColor: 'black',
                    justifyContent: 'flex-end'
                }}>
                    <View style={{
                        // borderBottomColor: '#ccc',
                        // borderBottomWidth: 1,
                        // borderTopColor: '#ccc',
                        // borderTopWidth: 1,
                        // height: Dimensions.get('window').height * 2.5 / 10,
                        alignItems: 'center',
                        paddingVertical: Dimensions.get('window').height * 0.1 / 10
                    }}>
                        <View style={{
                            width: '85%'
                        }}>
                            <TouchableOpacity
                                onPress={() => onSimpanHandler()}
                                style={{
                                    // borderWidth: 1,
                                    // borderColor: 'black',
                                    height: Dimensions.get('window').height * 0.5 / 10,
                                    borderRadius: 10,
                                    backgroundColor: '#FFA500',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                <Text style={{
                                    fontSize: Dimensions.get('window').height / 50,
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    Simpan
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View >
        )
    }
}

const mapStateToProps = (state) => {
    return { getData: state.tamu }
}

export default connect(mapStateToProps, { SaveTamu, DeleteTamu })(SecondScreen);