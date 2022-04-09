import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import logo from './../../../assets/images/rcl-logo.png';

export default function Order(props) {

    const handleInputChange = (text) => {
        // alert(text);
    }
    const handleOnsubmit = () => {
        // alert("Log In");
    }
    return (

        <View style={styles.loginContainer}>
            <Image
                style={styles.tinyLogo}
                source={logo}
            />
            <Text style={styles.brandName}>Rangpur Chemical {"\n"} Limited</Text>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.input}
                    onChangeText={text => handleInputChange(text)}
                    placeholder="Username"
                    width="80%"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={text => handleInputChange(text)}
                    placeholder="Password"
                    secureTextEntry={true}
                />
                <TouchableOpacity onPress={() => props.navigation.navigate('CustomerRegistration')}>
                    <Button
                        style={styles.btnLogin}
                        title="Sign In"
                        color="#ffd700"
                    // onPress={() => handleOnsubmit()}
                    />
                </TouchableOpacity>
            </View>
            {/* <StatusBar style="auto" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    loginContainer: {
        backgroundColor: '#2D3192',
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        // justifyContent: 'space-around',
    },
    tinyLogo: {
        width: 131,
        height: 131,
        marginBottom: 30,
    },
    brandName: {
        color: '#fff',
        fontWeight: 700,
        fontSize: 25,
        marginBottom: 70,
        textAlign: 'center',
    },
    inputView: {
        width: '90%',
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 20,
        // borderWidth: 3,
        padding: 10,
        borderBottomWidth: 3,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 3,
    },
    btnLogin: {
        display: "block",
        // width: '80%',
    }
});
