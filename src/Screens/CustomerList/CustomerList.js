import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import logo from './../../../assets/images/rcl-logo.png';

export default function CustomerList(props) {
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
                        <View style={styles.joiningDetails}>
                            <Text>Joining</Text>
                            <Text>2012.12.12</Text>
                            <Text>Joining</Text>
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
                        }}>Area Location: <br />House #02 west Metro, Dhanmondi, Dhaka-1214</View>
                    </View>
                    <View style={styles.textStart}>
                        <Text>Best Shop (#45001)</Text>
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
    joiningDetails: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    prodouctContent: {
        lineHeight: '1.4rem',
        padding: 20,
        borderLeftColor: '#E5E5E5',
        borderLeftWidth: 2,
    },
    textStart: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});
