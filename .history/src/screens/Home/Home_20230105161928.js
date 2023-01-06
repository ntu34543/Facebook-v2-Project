import { ScrollView } from "react-native";
import { HomeContainer } from "./HomeContainer";

function HomePage({navigation}) {

  return (
    <ScrollView>
      <HomeContainer />
    </ScrollView>
  );
}

export default HomePage;