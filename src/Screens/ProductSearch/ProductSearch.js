import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';
import logo from './../../../assets/images/rcl-logo.png';

export default function ProductSearch(props) {
    return (

        <View style={styles.headerContainer}>

            {/* <Text style={styles.inputTitle}>Select Customers: </Text> */}

            <TextInput
                style={styles.input}
            />
            <View style={styles.productText}>
                <Text>Order Qty: 04 item selected</Text>
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
        </View >
    );
}

const styles = StyleSheet.create({
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
    }
});
