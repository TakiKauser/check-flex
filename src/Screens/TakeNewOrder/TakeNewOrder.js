import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';
import logo from './../../../assets/images/rcl-logo.png';

export default function TakeNewOrder(props) {
    return (

        <View style={styles.container}>

            <Text style={styles.inputTitle}>Select Customers: </Text>
            <View style={styles.buttonContainer}>
                <TextInput
                    style={styles.input}
                // onChangeText={text => handleInputChange(text)}

                />
                <View style={styles.space} />
                <Button
                    style={styles.minus}
                    title="-"
                    color="#2D3192"
                // onPress={() => handleOnsubmit()}
                />
                <View style={styles.space} />
                <Button
                    style={styles.minus}
                    title="+"
                    color="#2D3192"
                // onPress={() => handleOnsubmit()}
                />
            </View>
            <View style={styles.productText}>
                <Text>Order Qty: 04 item selected</Text>
                <View style={styles.space} />
                <Text>Product Selected</Text>
            </View>
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
                    </View>
                    <View style={styles.prodouctContent}>
                        <View style={{
                            fontSize: 18,
                        }}>British OZI Body Lotion</View>

                        <View style={{
                            color: 'grey',
                            fontSize: 14,
                        }}>MRP 150/pc</View>

                        <View style={{
                            fontWeight: 'bold',
                        }}>PRICE: 450.00</View>

                        <View style={{
                            color: 'grey',
                            fontSize: 14,
                        }}>Discount: 10%</View>
                    </View>
                </View>
            </View>

            {/* <StatusBar style="auto" /> */}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    bodyContainer:{
        backgroundColor: '#E5E5E5',
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
    },
    inputTitle: {
        marginLeft: 20,
        marginTop: 10,
    },
    input: {
        width: '80%',
        // height: 40,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        // borderWidth: 3,
        padding: 4,
        border: '2px solid #E5E5E5',
        borderColor: 'gray',
        backgroundColor: '#fff',
        borderRadius: 3,
    },
    minus: {
        // padding: 10,
        height: '5px',
        // width: 5,
        marginHorizontal: 2,
    },
    plus: {
        // padding: 10,
        height: '5px',
        // width: 5,
        marginVertical: 5,
    },
    space: {
        width: 20, // or whatever size you need
        // height: 20,
    },
    productText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C4C4C4',
        padding: 4,
        paddingHorizontal: '5%',
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
    }
});
