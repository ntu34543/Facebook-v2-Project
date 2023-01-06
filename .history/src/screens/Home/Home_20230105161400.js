import { ScrollView } from "react-native";
import { HomeContainer } from "./FeedsContainer";

function Home() {

  return (
    <ScrollView>
      <FeedsContainer />
    </ScrollView>
  );
}

export { Home };