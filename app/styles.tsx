import { StyleSheet } from "react-native";

const fontSize = {
  ExtraSmall: 12,
  SubtitleSmall: 14,
  Small: 15,
  Base: 16,
  Subtitle: 18,
  Large: 20,
  Title: 32,
};

const paddingSize = {
  ExtraSmall: 5,
  Small: 10,
  Medium: 15,
  Large: 20,
  ExtraLarge: 75,
};

const borderSize = {
  ExtraSmall: 8,
  Small: 10,
  Medium: 12,
  Large: 15,
  ExtraLarge: 25,
};

export const colors = {
  White: "#FFFFFF",
  Pale: "#F9F9F9",
  Pale2: "#F5F5F5",
  Pale3: "#E0E0E0",
  LightGrey: "#CCCCCC",
  Grey: "#888888",
  Grey2: "#666666",
  DarkGrey: "#555555",
  DarkGrey2: "#333333",
  Black: "#000000",
  TransparentBlack: "rgba(0, 0, 0, 0.5)",
  LightBlue: "#9FB9FF",
  LightBlue2: "#6C63FF",
  Cyan: "#009CFF",
  Blue: "#6200EE",
  Red: "#FF3B30",
  Purple: "#6A1B9A",
};

export const base = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: paddingSize.Large,
        paddingBottom: paddingSize.ExtraLarge,
        backgroundColor: colors.LightBlue,
    },
    innerContainer: {
        width: "100%",
        height: "100%",
        maxWidth: 400,
        alignItems: "center",
        padding: paddingSize.Medium,
        backgroundColor: colors.Pale2,
    },
    scrollContainer: {
        width: "100%",
        height: "100%",
        maxWidth: 400,
        padding: paddingSize.Medium,
        backgroundColor: colors.Pale2,
    },
    normal: {
        fontSize: fontSize.Base,
        fontWeight: 'normal',
        color: colors.DarkGrey2,
    },
    bold: {
        fontSize: fontSize.Base,
        fontWeight: 'bold',
    },
    thin: {
        fontSize: fontSize.Base,
        fontWeight: '100',
    },
    extraBold: {
        fontSize: fontSize.Base,
        fontWeight: '800',
    },
    subTitle: {
        fontSize: fontSize.Subtitle,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 10,
        color: colors.Black,
        textAlign: "center",
    },
    header: {
        fontSize: fontSize.Base,
        fontWeight: "bold",
        marginTop: 10,
        marginBottom: 5,
        color: colors.Black,
        textAlign: "center",
    },
    navContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: colors.White,
        borderTopWidth: 1,
        borderTopColor: colors.LightGrey,
      },
    navItem: {
        alignItems: "center",
        flex: 1,
    },
    activeNavItem: {
        borderBottomWidth: 2,
        borderBottomColor: colors.Cyan,
    },
    navText: {
        fontSize: fontSize.ExtraSmall,
        color: colors.Grey2,
    },
    activeNavText: {
        color: colors.Cyan,
    },
    button: {
        backgroundColor: colors.Blue,
        padding: paddingSize.Medium,
        borderRadius: borderSize.ExtraSmall,
        alignItems: "center",
        width: "100%",
        marginBottom: 20,
    },
        buttonText: {
        color: colors.White,
        fontSize: fontSize.Base,
        fontWeight: "bold",
        textAlign: "center",
    },
});