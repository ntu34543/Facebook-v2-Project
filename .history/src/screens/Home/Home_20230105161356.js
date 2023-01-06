import { ScrollView } from "react-native";
import { FeedsContainer } from "./FeedsContainer";

function Home() {

  return (
    <ScrollView>
      <FeedsContainer />
    </ScrollView>
  );
}

export { Home };