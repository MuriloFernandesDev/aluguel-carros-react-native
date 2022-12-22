import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { CarDetails } from "../screens/CarDetails";
import { Schedules } from "../screens/Scheduling";
import { ScheduleComplete } from "../screens/SchedulingComplete";
import { ScheduleDetails } from "../screens/SchedulingDetails";

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Schedules"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CarDetails" component={CarDetails} />
      <Stack.Screen name="Schedules" component={Schedules} />
      <Stack.Screen name="ScheduleComplete" component={ScheduleComplete} />
      <Stack.Screen name="ScheduleDetails" component={ScheduleDetails} />
    </Stack.Navigator>
  );
}
