import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    marginTop: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24
  },

  incident: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 8
  },

  incidentProperty: {
    fontSize: 14,
    color: "#41414d",
    fontWeight: "bold",
    marginTop: 12
  },

  incidentValue: {
    marginTop: 4,
    fontSize: 15,
    color: "#737380"
  },

  contactBox: {
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginBottom: 8
  },

  heroTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#13131a",
    lineHeight: 30
  },

  heroDescription: {
    fontSize: 15,
    color: "#13131a",
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  action: {
    backgroundColor: "#e02041",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center"
  },

  actionText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  }
});
