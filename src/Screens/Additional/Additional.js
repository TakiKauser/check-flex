import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function Additional(props) {
    return (

        <View style={styles.additionalContainer}>
            
            <Text style={styles.link}>Embedded weblink {"\n"} www.zayco.com</Text>
            
            {/* <StatusBar style="auto" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    additionalContainer: {
        backgroundColor: '#E5E5E5',
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        // justifyContent: 'space-around',
    },
    link:{
        color: 'gray',
        fontWeight: 'bold',
    }
});
