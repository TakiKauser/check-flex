import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-web';
import logo from './../../../assets/images/rcl-logo.png';

export default function OrderPreview(props) {
    const data = [
        ["Sn.", "Product", "MRP", "Unit", "Dic", "Price"],
        [1, 10, 9, 8, 0, 5],
        [1, 10, 9, 8, 0, 5],
        [1, 10, 9, 8, 0, 5],
    ];
    function Row({ column }) {
        return (
            <View style={styles.rowStyle}>
                {column.map((data) => (
                    <Cell data={data} />
                ))}
            </View>
        );
    }
    function Cell({ data }) {
        return (
            <View style={styles.cellStyle}>
                <Text>{data}</Text>
            </View>
        );
    }
    return (

        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <TextInput
                    style={styles.input}
                // onChangeText={text => handleInputChange(text)}

                />

                <View style={styles.space} />
                <Button
                    style={styles.minus}
                    title="+"
                    color="#2D3192"
                // onPress={() => handleOnsubmit()}
                />
            </View>
            <View style={styles.detailsArea}>
                <Text style={{ fontWeight: 'bold' }}>Location:</Text>
                <Text>House #2, west Metro Road Dhanmondi, Dhaka-1214</Text>
                <Text style={{ fontWeight: 'bold', marginTop: 15 }}>Telephone/Mobile: <Text style={{ fontWeight: 'normal' }}>+880199 056901</Text></Text>
            </View>
            <View style={styles.gridContainer}>
                {data.map((column) => (
                    <Row column={column} />
                ))}
            </View>

            {/* <StatusBar style="auto" /> */}
        </View >
    );
}

const styles = StyleSheet.create({
    gridContainer: {
        // width: 220,
        marginHorizontal: '5%',
    },
    rowStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        border: "1px solid #E5E5E5",
    },
    cellStyle: {
        flex: 1,
        margin: 10,
    },
    text: { textAlign: 'center' },

    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '96%',
        alignItems: 'center',
    },
    input: {
        width: '100%',
        // height: 40,
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        // borderWidth: 3,
        padding: 4,
        border: '2px solid #E5E5E5',
        // borderBottomWidth: 3,
        borderColor: '#fff',
        backgroundColor: '#fff',
        borderRadius: 3,
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
    detailsArea: {
        backgroundColor: '#E5E5E5',
        margin: 20,
        padding: 10,
        borderRadius: 7,

        // height: '100%',
    },
});
