import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import HeaderComponent from '../components/Header.component';
import moment from 'moment';

class FirstScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: "" };
    }

    componentDidMount() {
        this.getSomething();
    }

    async getSomething() {
        const response = await axios.get(`https://parseapi.back4app.com/classes/Review/pGLq0d1eLK`, {
            headers: {
                "X-Parse-Application-Id": "Q8sjscxVKld84xOEgxW7HmsvrP8iujMIoffPtyfW",
                "X-Parse-REST-API-Key": "IeCVx5Ejr4Blm03sY8tmFLbDWsj7qADSwzobwXV6"
            }
        })

        this.setState({ data: response.data.values.data.hotel_booking_detail })

        // console.log(response.data);
        // console.log(response.data.values);
    }



    render() {
        if (this.state.data) {
            console.log(this.state.data.bh_chosen_hotel_obj.bh_chosen_hotel_param)
        }
        return (
            <View>
                <View style={{
                    height: Dimensions.get('window').height * 0.8 / 10
                }}>
                    <HeaderComponent title="Payment Details"></HeaderComponent>
                </View>
                <View style={{
                    // borderWidth: 1,
                    // borderColor: 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: Dimensions.get('window').height * 0.8 / 10,
                    flexDirection: 'row',
                    // borderBottomColor: '#ccc',
                    // borderBottomWidth: 1,
                    paddingLeft: Dimensions.get('window').width * 2.5 / 10
                }}>
                    <View style={{


                        // borderColor: 'black',
                        width: Dimensions.get('window').height / 40,
                        height: Dimensions.get('window').height / 40,
                        borderRadius: Dimensions.get('window').height / 40,
                        backgroundColor: '#234db0',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: Dimensions.get('window').height / 60
                        }}>
                            1
                        </Text>
                    </View>
                    <Text style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height / 55
                    }}> Detail Pesanan</Text>
                    <View style={{
                        borderWidth: 1,
                        borderColor: 'black',
                        width: Dimensions.get('window').width * 0.3 / 10,
                        opacity: 0.5,
                        marginHorizontal: Dimensions.get('window').width * 0.2 / 10
                    }}></View>

                    <View style={{
                        // borderWidth: 1,
                        // borderColor: 'black',
                        width: Dimensions.get('window').height / 40,
                        height: Dimensions.get('window').height / 40,
                        borderRadius: Dimensions.get('window').height / 40,
                        backgroundColor: '#234db0',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0.5
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: Dimensions.get('window').height / 60,

                        }}>
                            2
                        </Text>
                    </View>
                    <Text style={{
                        color: 'black',
                        fontSize: Dimensions.get('window').height / 55,
                        opacity: 0.5
                    }}> Pembayaran
                    </Text>
                </View>
                <View style={{
                    borderBottomColor: '#ccc',
                    borderBottomWidth: 1,
                    borderTopColor: '#ccc',
                    borderTopWidth: 1,
                    height: Dimensions.get('window').height * 2.5 / 10,
                    alignItems: 'center',
                    paddingVertical: Dimensions.get('window').height * 0.1 / 10
                }}>
                    <View style={{
                        width: '85%'
                    }}>
                        <Text style={{
                            color: 'black',
                            fontSize: Dimensions.get('window').height / 55,
                            fontWeight: 'bold'
                        }}>
                            Detail Pesanan
                        </Text>
                        <View style={{
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 10,
                            height: Dimensions.get('window').height * 0.8 / 10,
                            marginTop: Dimensions.get('window').height * 0.1 / 10,
                            padding: Dimensions.get('window').height * 0.05 / 10
                        }}>
                            <View style={{
                                // borderWidth: 1,
                                // borderColor: 'black',
                                alignItems: 'center',
                                // justifyContent: 'center'
                                height: '100%',
                                flexDirection: 'row'

                            }}>
                                <Image style={{
                                    width: Dimensions.get('window').height * 0.5 / 10,
                                    height: Dimensions.get('window').height * 0.5 / 10,
                                    borderWidth: 1,
                                    borderColor: 'black'
                                }}>
                                </Image>
                                <View style={{
                                    width: '60%',
                                    // borderColor: 'blue',
                                    // borderWidth: 1,
                                    marginLeft: Dimensions.get('window').width * 0.5 / 10,
                                    height: Dimensions.get('window').height * 0.5 / 10
                                }}>
                                    {this.state.data ?
                                        <>
                                            <Text style={{
                                                fontSize: Dimensions.get('window').height / 70,
                                                fontWeight: 'bold',
                                                color: '#234db0'
                                            }}>
                                                {this.state.data.bh_chosen_hotel_obj.bh_chosen_hotel_param.hotel_name}
                                            </Text>
                                            <Text style={{
                                                fontSize: Dimensions.get('window').height / 70,
                                                fontWeight: 'bold'
                                            }}>
                                                {this.state.data.bh_chosen_hotel_obj.bh_chosen_hotel_room.room_grade}
                                            </Text>
                                            <Text style={{
                                                fontSize: Dimensions.get('window').height / 70,
                                                fontWeight: 'bold'
                                            }}>
                                                {this.state.data.bh_chosen_hotel_obj.bh_chosen_hotel_param.qty_sgl} Kamar
                                            </Text>
                                        </>
                                        : null}
                                </View>
                            </View>
                        </View>

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
                                Check-In
                            </Text>
                            {this.state.data ?
                                <Text style={{
                                    fontSize: Dimensions.get('window').height / 60
                                }}>
                                    {moment(this.state.data.bh_chosen_hotel_obj.bh_chosen_hotel_param.check_in).format('DD MMMM YYYY')}
                                </Text>
                                : null
                            }
                        </View>
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
                                Check-Out
                            </Text>
                            {this.state.data ?
                                <Text style={{
                                    fontSize: Dimensions.get('window').height / 60
                                }}>
                                    {moment(this.state.data.bh_chosen_hotel_obj.bh_chosen_hotel_param.check_out).format('DD MMMM YYYY')}
                                </Text>
                                : null
                            }
                        </View>
                    </View>
                </View>
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
                                Detail Pemesan
                            </Text>
                        </View>
                        {this.state.data ?
                            <View style={{
                                borderWidth: 1,
                                borderColor: '#ccc',
                                borderRadius: 10,
                                height: Dimensions.get('window').height * 0.8 / 10,
                                marginTop: Dimensions.get('window').height * 0.1 / 10,
                                padding: Dimensions.get('window').height * 0.05 / 10
                            }}>
                                <View style={{
                                    // borderWidth: 1,
                                    // borderColor: 'black',
                                    // alignItems: 'center',
                                    // justifyContent: 'center'
                                    height: '100%',
                                    paddingLeft: Dimensions.get('window').height * 0.05 / 10

                                }}>
                                    <Text style={{
                                        fontSize: Dimensions.get('window').height / 60,
                                        fontWeight: 'bold',
                                        color: 'black'
                                    }}>
                                        Tn. {this.state.data.bh_passenger_obj.bh_contact_user.name}
                                    </Text>
                                    <Text style={{
                                        fontSize: Dimensions.get('window').height / 60,
                                        //  fontWeight: 'bold',
                                        //  color: 'black'
                                    }}>
                                        {this.state.data.bh_passenger_obj.bh_contact_user.email}{'\n'}
                                        {this.state.data.bh_passenger_obj.bh_contact_user.phone}
                                    </Text>
                                </View>
                            </View>
                            : null
                        }
                    </View>
                </View>
                <View style={{
                    // borderBottomColor: '#ccc',
                    // borderBottomWidth: 1,
                    // borderTopColor: '#ccc',
                    // borderTopWidth: 1,
                    height: Dimensions.get('window').height * 2.5 / 10,
                    alignItems: 'center',
                    paddingVertical: Dimensions.get('window').height * 0.1 / 10
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
                        <View>

                        </View>

                        {this.props.getData ?
                            <FlatList
                                data={this.props.getData}
                                renderItem={({ item }) =>
                                    <View style={{
                                        borderWidth: 1,
                                        borderColor: '#ccc',
                                        borderRadius: 10,
                                        height: Dimensions.get('window').height * 0.5 / 10,
                                        marginTop: Dimensions.get('window').height * 0.1 / 10,
                                        padding: Dimensions.get('window').height * 0.05 / 10
                                    }}>
                                        <View style={{
                                            // borderWidth: 1,
                                            // borderColor: 'black',
                                            // alignItems: 'center',
                                            // justifyContent: 'center'
                                            height: '100%',
                                            paddingLeft: Dimensions.get('window').height * 0.05 / 10,
                                            // alignItems: 'center',
                                            justifyContent: 'center'

                                        }}>
                                            <Text style={{
                                                fontSize: Dimensions.get('window').height / 60,
                                                //  fontWeight: 'bold',
                                                //  color: 'black'
                                            }}>
                                                {item.nama}
                                            </Text>
                                        </View>
                                    </View>
                                }
                            >

                            </FlatList>
                            : null
                        }
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SecondScreen')}
                            style={{
                                // borderWidth: 1,
                                // borderColor: 'black',
                            }}>
                            <Text style={{
                                alignSelf: 'flex-end',
                                fontSize: Dimensions.get('window').height / 60,
                                color: 'blue'
                            }}>
                                Ubah Data Tamu
                            </Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </View >
        )
    }
}

const mapStateToProps = state => {
    return { getData: state.tamu }
}

export default connect(mapStateToProps)(FirstScreen);