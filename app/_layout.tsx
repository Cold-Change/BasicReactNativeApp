import { Stack } from "expo-router";
import * as styles from "./styles";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter, useSegments } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
    return <Stack screenOptions={{
      headerShown: false, // Disable headers globally
    }}/>;
}
