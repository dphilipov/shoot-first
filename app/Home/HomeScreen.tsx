import { StyleSheet } from "react-native";
import { Layout, Divider } from "@ui-kitten/components";
import PlayerArea from "../PlayerArea/PlayerArea";

const HomeScreen = () => {
  return (
    <Layout style={[styles.mainView]}>
      <PlayerArea player={1} maxHp={30} />
      <Divider style={styles.divider} />
      <PlayerArea player={2} maxHp={25} />
    </Layout>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainView: { height: "100%", backgroundColor: "#ffffff" },
  divider: { alignSelf: "stretch", backgroundColor: "#000000" },
});
