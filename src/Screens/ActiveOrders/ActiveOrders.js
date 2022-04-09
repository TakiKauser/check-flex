import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';
import logo from './../../../assets/images/rcl-logo.png';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default function ActiveOrders(props) {
    // constructor(props) {
    // super(props);
    // this.state = {
    //     tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
    //     tableData: [
    //         ['1', '2', '3', '4'],
    //         ['a', 'b', 'c', 'd'],
    //         ['1', '2', '3', '456\n789'],
    //         ['a', 'b', 'c', 'd']
    //     ]
    // }
    
    // }
    // const state = this.state;
    return (

        <View style={styles.headerContainer}>
            <View style={styles.bodyContainer}>
                <View style={styles.productCard}>
                    <View>
                        <Image
                            style={styles.productImage}
                            source={{
                                uri: 'https://reactnative.dev/img/tiny_logo.png',
                            }}
                        // source={require('@expo/snack-static/react-native-logo.png')}
                        />
                        <View style={{
                            marginTop: 20,
                            marginHorizontal: 15,
                        }}>
                            <Button
                                style={styles.minus}
                                title="View"
                                color="yellow"
                            // onPress={() => handleOnsubmit()}
                            />
                        </View>
                    </View>
                    <View style={styles.prodouctContent}>
                        <View style={{
                            // fontSize: 18,
                        }}>Contact Person: <br /> Md. Asaduzzaman Nur <br /></View>

                        <View style={{
                            // fontWeight: 'bold',
                        }}>Telephone/Mobile Number: <br /> +880 1980 889 669</View>

                        <View style={{
                            // fontWeight: 'bold',
                        }}>Area Location: <br />House #02 west Metro, Dhanmondi, Dhaka-1214 </View>
                    </View>
                    <View style={styles.textStart}>
                        <Text>On Delivery</Text>
                    </View>
                </View>
            </View>
            {/* <View style={styles.container}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                    <Rows data={state.tableData} textStyle={styles.text} />
                </Table>
            </View> */}
            
        </View >
    );
}

const styles = StyleSheet.create({
    // container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    // head: { height: 40, backgroundColor: '#f1f8ff' },
    // wrapper: { flexDirection: 'row' },
    // title: { flex: 1, backgroundColor: '#f6f8fa' },
    // row: { height: 28 },
    
    
    headerContainer: {
        backgroundColor: '#fff',
        width: '100%',
        // height: '100%',
    },
    bodyContainer: {
        backgroundColor: '#E5E5E5',
        height: '100%',
    },
    input: {
        width: '90%',
        marginTop: 20,
        marginBottom: 20,
        // marginLeft: 20,
        padding: 3,
        border: '2px solid #E5E5E5',
        backgroundColor: '#fff',
        borderRadius: 3,
        marginHorizontal: 'auto',
    },
    productText: {
        // flexDirection: 'row',
        backgroundColor: '#C4C4C4',
        padding: 4,
        paddingLeft: '5%',
    },
    productCard: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '90%',
        backgroundColor: '#fff',
        marginHorizontal: 'auto',
        marginVertical: 20,
        borderRadius: 7,
    },
    productImage: {
        height: 60,
        width: 60,
        // marginRight: 20,
        // padding: 20,
        marginHorizontal: 20,
    },
    prodouctContent: {
        lineHeight: '1.4rem',
        padding: 20,
        borderLeftColor: '#E5E5E5',
        borderLeftWidth: 2,
    },
    textStart: {
        position: 'absolute',
        top: 20,
        right: 20,
        border: '2px solid #E5E5E5',
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 10,

    },
});
