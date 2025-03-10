import * as styles from "./styles";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter, useSegments } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Information() {
    const router = useRouter();
    const segments = useSegments();

  return (
    <SafeAreaProvider style={styles.base.container}>
    <SafeAreaView style={styles.base.scrollContainer}>
    <ScrollView style={styles.base.scrollContainer}>
    <Text style={styles.base.title}>Information</Text>

    <Text style={styles.base.normal}>
    Thank you for choosing [App Name]! This page will provide you with all the essential details you need 
    to maximize your experience with the app. Whether you're looking to customize settings, learn about 
    new updates, or explore features in-depth, you've come to the right place.
    </Text>

    <Text style={styles.base.subTitle}>Getting Started</Text>

    <Text style={styles.base.normal}>
    To get started, simply sign up or log in to your account. Once you're in, you'll have access to the main 
    dashboard where you can navigate through various sections. If you're new, we recommend taking a quick 
    tour to familiarize yourself with the interface and features. You can always revisit this page for 
    guidance along the way.
    </Text>

    <Text style={styles.base.subTitle}>Personalizing Your Experience</Text>

    <Text style={styles.base.normal}>
    [App Name] allows you to tailor the app to suit your preferences. From theme settings to notification 
    preferences, the customization options are available in the settings menu. Make it your own by adjusting 
    the layout and functionality to match your needs. 
    </Text>

    <Text style={styles.base.subTitle}>Security & Privacy</Text>

    <Text style={styles.base.normal}>
    Your security and privacy are our top priority. All your data is encrypted and stored securely. You can 
    manage your privacy settings, such as data sharing and permissions, in the settings section. Additionally, 
    we regularly update our security measures to keep your information safe.
    </Text>

    <Text style={styles.base.subTitle}>Support</Text>

    <Text style={styles.base.normal}>
    If you encounter any issues or need assistance, our support team is here to help. You can find FAQs, 
    troubleshooting guides, and contact information in the Help & Support section. We are committed to providing 
    you with timely and helpful solutions.
    </Text>

    <Text style={styles.base.subTitle}>Updates and New Features</Text>

    <Text style={styles.base.normal}>
    We're constantly working on improving [App Name]. Stay tuned for exciting updates, new features, and bug fixes. 
    Make sure to enable automatic updates to get the latest version and never miss out on new capabilities.
    </Text>

    <Text style={styles.base.normal}>
    Thank you for being part of the [App Name] community! We’re excited to continue supporting you as you explore the app.
    </Text>
      </ScrollView>
    </SafeAreaView>
    <View style={styles.base.navContainer}>
    <TouchableOpacity
        style={[styles.base.navItem, segments[0] === undefined && styles.base.activeNavItem]}
        onPress={() => router.push("/")}
    >
        <Ionicons
        name="home"
        size={24}
        color={segments[0] === undefined ? styles.colors.Cyan : styles.colors.Grey2}
        />
        <Text
        style={[styles.base.navText, segments[0] === undefined && styles.base.activeNavText]}
        >
        Home
        </Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={[styles.base.navItem, segments[0] === "information" && styles.base.activeNavItem]}
        onPress={() => router.push("/information")}
    >
        <Ionicons
        name="information"
        size={24}
        color={segments[0] === "information" ? styles.colors.Cyan : styles.colors.Grey2}
        />
        <Text
        style={[styles.base.navText, segments[0] === "information" && styles.base.activeNavText]}
        >
        Information
        </Text>
    </TouchableOpacity>
    <TouchableOpacity
        style={[styles.base.navItem, segments[0] === "contactUs" && styles.base.activeNavItem]}
        onPress={() => router.push("/contactUs")}
    >
        <Ionicons
        name="people"
        size={24}
        color={segments[0] === "contactUs" ? styles.colors.Cyan : styles.colors.Grey2}
        />
        <Text
        style={[styles.base.navText, segments[0] === "contactUs" && styles.base.activeNavText]}
        >
        Contact Us
        </Text>
    </TouchableOpacity>
    </View>
    </SafeAreaProvider>
  );
}
