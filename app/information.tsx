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
      <Text style={styles.base.subTitle}>Welcome to [App Name]!</Text>

      <Text style={styles.base.bold}>At [App Name], we're committed to delivering an intuitive, 
        streamlined experience designed to make your life easier. Whether you’re a first-time user 
        or a seasoned pro, our app has everything you need to achieve your goals efficiently. 
        With a sleek interface and powerful features, getting started is simple and enjoyable. 
        Explore the various sections of the app and discover the tools you need, all in the palm of your hand.
      </Text>

      <Text style={styles.base.header}>Features Overview</Text>

      <Text style={styles.base.bold}>[App Name] brings together a wide range of features to ensure you have 
        the best experience possible. From easy-to-use navigation to customizable settings, we’ve thought of 
        everything. You can access everything you need with just a few taps, making it quicker than ever to get 
        things done. With automatic syncing, your data is always up-to-date across all devices. 
        And with notifications, you’ll never miss important updates.
      </Text>


      <Text style={styles.base.header}>Seamless Integration</Text>

      <Text style={styles.base.bold}>Integrating seamlessly with your other apps and tools, [App Name] 
        ensures that you spend less time switching between apps and more time accomplishing what matters most. 
        Whether it's connecting to your calendar, syncing with cloud storage, or updating your preferences, 
        everything is in one place and easily accessible. Our integration capabilities make your experience 
        even more smooth and connected.</Text>

      <Text style={styles.base.header}>Stay Ahead of the Curve</Text>

      <Text style={styles.base.bold}>Stay ahead with our innovative features that are designed to save you 
        time and effort. With regular updates, new tools, and added functionalities, [App Name] evolves with you. 
        We listen to user feedback and strive to continuously improve the app, ensuring that it adapts to your 
        changing needs.
      </Text>
      </ScrollView>
    </SafeAreaView>
    <View style={styles.base.navContainer}>
        <TouchableOpacity
          style={[styles.base.navItem, segments[0] === undefined && styles.base.activeNavItem]}
          onPress={() => router.push("/")}
        >
          <Ionicons
            name="desktop"
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
            name="heart-outline"
            size={24}
            color={segments[0] === "information" ? styles.colors.Cyan : styles.colors.Grey2}
        />
        <Text
            style={[styles.base.navText, segments[0] === "information" && styles.base.activeNavText]}
        >
            Information
        </Text>
    </TouchableOpacity>
    </View>
    </SafeAreaProvider>
  );
}
