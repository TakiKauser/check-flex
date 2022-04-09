import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Screens/Login/Login';
import SrDashboard from '../Screens/SrDashboard/SrDashboard';
import CustomerRegistration from '../Screens/Registration/CustomerRegistration';
import Additional from '../Screens/Additional/Additional';
import OrderPreview from '../Screens/OrderPreview/OrderPreview';
import ProductSearch from '../Screens/ProductSearch/ProductSearch';
import ActiveOrders from '../Screens/ActiveOrders/ActiveOrders';
import CustomerList from '../Screens/CustomerList/CustomerList';
import TakeNewOrder from '../Screens/TakeNewOrder/TakeNewOrder';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                    height: 65,
                    justifyContent: "center",
                    paddingVertical: 15,
                    backgroundColor: 'black',
                    elevation: 2
                }
            }}
        >
            {/* <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarLabel: "Login",
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.goBack()}
                            title="Info"
                            color="#000"
                        />
                    )
                }}
            /> */}
            <Tab.Screen
                name="CustomerRegistration"
                component={CustomerRegistration}
                options={{
                    tabBarLabel: "Customer Registration",
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.goBack()}
                            title="Info"
                            color="#000"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Additional"
                component={Additional}
                options={{
                    tabBarLabel: "Additional",
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.goBack()}
                            title="Info"
                            color="#000"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="OrderPreview"
                component={OrderPreview}
                options={{
                    tabBarLabel: "OrderPreview",
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.goBack()}
                            title="Info"
                            color="#000"
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Product Search"
                component={ProductSearch}
                options={{
                    tabBarLabel: "Product Search",
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.goBack()}
                            title="Info"
                            color="#000"
                        />
                    ),
                    // tabBarIcon: ({ color, size }) => (
                    //     <Image
                    //         source={require("../images/10.png")}
                    //         style={{ height: 20, width: 20 }}
                    //     />
                    // )
                }}
            />
            <Tab.Screen
                name="Active Orders"
                component={ActiveOrders}
                options={{
                    tabBarLabel: "Active Orders",
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#000"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Customer List"
                component={CustomerList}
                options={{
                    tabBarLabel: "Customer List",
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#000"
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Take New Order"
                component={TakeNewOrder}
                options={{
                    tabBarLabel: "Take New Order",
                    headerLeft: () => (
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color="#000"
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown: false
}

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={screenOptionStyle}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SrDashboard" component={SrDashboard} />
            <Stack.Screen name="CustomerRegistration" component={CustomerRegistration} />
            <Stack.Screen name="Additional" component={Additional} />
            <Stack.Screen name="OrderPreview" component={OrderPreview} />
            <Stack.Screen name="Product Search" component={ProductSearch} />
            <Stack.Screen name="Active Orders" component={ActiveOrders} />
        </Stack.Navigator>
    );
};

export default RootNavigator;