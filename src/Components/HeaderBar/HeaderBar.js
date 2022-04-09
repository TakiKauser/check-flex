import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View } from 'react-native';

const HeaderBar = ({ name, navigation }) => {
    return (
        <View>
            <View style={styles.headerBar}>
                <Text style={{ flex: 3, color: "#fff", fontSize: 20, }}><Icon
                    name="arrow-left"
                    size={20}
                    color="#fff"
                    onPress={() => navigation.goBack()}
                /></Text>
                <Text style={{ flex: 12, color: "#fff", fontSize: 20, }}>{name}</Text>
            </View>
        </View>
    );
};

export default HeaderBar;

const styles = StyleSheet.create({
    SrDashboardContainer: {
        flex: 1,
        backgroundColor: "#E5E5E5",
    },
    headerBar: {
        padding: 20,
        paddingHorizontal: 10,
        backgroundColor: "#2D3192",
        flexDirection: "row",
    },
    headerBarText: {
        color: "#fff",
        fontSize: 24,
    }

})