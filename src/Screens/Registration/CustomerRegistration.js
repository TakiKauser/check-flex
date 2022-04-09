import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import HeaderBar from '../../Components/HeaderBar/HeaderBar';

export default function CustomerRegistration({ navigation }) {

    const handleInputChange = (text) => {
        // alert(text);
    }
    const handleOnsubmit = () => {
        alert("Log In");
    }
    return (

        <View style={styles.registrationContainer}>
            <HeaderBar navigation={navigation} name={"Rangpur Chemical Limited"}></HeaderBar>
            {/* <View style={styles.pageTitleArea}>
                <Text style={styles.pageTitle}>Customer Registration</Text>
            </View> */}
            <View style={{
                backgroundColor: '#E5E5E5',
                flex: 1,
                flexDirection: "column",
                alignItems: 'center',
                justifyContent: 'start',
            }}>
                <View style={styles.regitrationForm}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text => handleInputChange(text)}
                        placeholder="Shop Name"
                        width="80%"
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => handleInputChange(text)}
                        placeholder="Contact Person"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => handleInputChange(text)}
                        placeholder="Telephone/Mobile"
                        secureTextEntry={true}
                    />
                    <TextInput
                        style={styles.input}
                        onChangeText={text => handleInputChange(text)}
                        placeholder="Address"
                        secureTextEntry={true}
                    />
                    <View style={styles.registerButtons}>
                        <Button
                            style={styles.btnSubmit}
                            title="Submit"
                            color="red"
                            onPress={() => navigation.push('SrDashboard')}
                        // onPress={() => handleOnsubmit()}
                        />
                        <View style={styles.space} />
                        <Button
                            style={styles.btnReset}
                            title="Reset"
                            color="#ffd700"
                        // onPress={() => handleOnsubmit()}
                        />
                    </View>
                </View>
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    registrationContainer: {
        backgroundColor: '#E5E5E5',
        flex: 1,
        // justifyContent: 'space-around',
    },
    pageTitleArea: {
        backgroundColor: '#2D3192',
        display: 'block'
    },
    pageTitle: {
        color: '#fff',
        fontSize: 20,

    },
    regitrationForm: {
        width: '90%',
        backgroundColor: '#fff',
        padding: '15px',
        marginTop: '20px',
        borderRadius: '7px'
    },
    input: {
        width: '100%',
        height: 40,
        marginBottom: 20,
        // borderWidth: 3,
        padding: 10,
        borderWidth: 2,
        borderColor: 'grey',
        backgroundColor: '#fff',
        borderRadius: 7,
    },
    registerButtons: {
        // flex: 2,
        flexDirection: 'row',
        // gutter: 2
    },
    btnSubmit: {
        // flex: 1,
        // marginRight: 10,
    },
    btnReset: {
        // flex: 3,
        // marginLeft: 10,
    },
    space: {
        width: 20, // or whatever size you need
        height: 20,
    },
});
