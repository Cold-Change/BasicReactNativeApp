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
    <Text style={styles.base.title}>Contact Us</Text>

    <Text style={styles.base.normal}>
    We're here to help! If you have any questions, feedback, or need assistance, feel free to reach out to us. 
    Our team is dedicated to providing you with prompt support and ensuring your experience with [App Name] is 
    seamless and enjoyable. Below are the different ways you can contact us:
    </Text>

    <Text style={styles.base.subTitle}>Customer Support</Text>

    <Text style={styles.base.normal}>
    For general inquiries, troubleshooting, or technical support, you can reach our customer support team through 
    the following methods:
    </Text>

    <Text style={styles.base.normal}>Email: support@[appname].com</Text>
    <Text style={styles.base.normal}>Phone: +1 (800) 123-4567</Text>

    <Text style={styles.base.subTitle}>Mailing Address</Text>

    <Text style={styles.base.normal}>
    If you need to send us physical mail or have any documents you'd like to send, please use the address below:
    </Text>

    <Text style={styles.base.normal}>
    [App Name] Support Team<br />
    1234 Tech Lane, Suite 100<br />
    San Francisco, CA 94105<br />
    USA
    </Text>

    <Text style={styles.base.subTitle}>Business Inquiries</Text>

    <Text style={styles.base.normal}>
    For partnership opportunities, press inquiries, or business-related questions, please reach out to our business 
    team directly:
    </Text>

    <Text style={styles.base.normal}>Email: business@[appname].com</Text>

    <Text style={styles.base.subTitle}>Social Media</Text>

    <Text style={styles.base.normal}>
    Stay connected with us on social media for the latest updates, announcements, and more:
    </Text>

    <Text style={styles.base.normal}>
    Twitter: @appname<br />
    Facebook: facebook.com/[appname]<br />
    Instagram: @appname<br />
    LinkedIn: linkedin.com/company/[appname]
    </Text>

    <Text style={styles.base.normal}>
    We look forward to hearing from you and are always happy to assist. Your feedback is important to us as we 
    continue to improve [App Name].
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
