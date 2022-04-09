import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import HeaderBar from '../../Components/HeaderBar/HeaderBar';


const SrDashboard = ({ navigation }) => {
    return (
        <View style={styles.SrDashboardContainer}>
            <HeaderBar navigation={navigation} name={"Rangpur Chemical Limited"}></HeaderBar>
            {/* <View>
                <View style={styles.headerBar}>
                    <Text style={{ flex: 3, color: "#fff", fontSize: 20, }}><Icon
                        name="arrow-left"
                        size={20}
                        color="#fff"
                        onPress={() => navigation.goBack()}
                    /></Text>
                    <Text style={{ flex: 12, color: "#fff", fontSize: 20, }}>Rangpur Chemical Limited</Text>
                </View>
            </View> */}
        </View>
    );
};

export default SrDashboard;

const styles = StyleSheet.create({
    SrDashboardContainer: {
        flex: 1,
        backgroundColor: "#E5E5E5",
    },
    // headerBar: {
    //     padding: 20,
    //     paddingHorizontal: 10,
    //     backgroundColor: "#2D3192",
    //     flexDirection: "row",
    // },
    // headerBarText: {
    //     color: "#fff",
    //     fontSize: 24,
    // }

})