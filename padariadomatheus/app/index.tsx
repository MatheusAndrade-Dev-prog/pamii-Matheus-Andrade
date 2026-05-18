import { View } from "react-native";
import FormularioProduto from "../src/screens/FormularioProduto";

export default function Index() {
   return (
      <View
         style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
         }}
      >
         <FormularioProduto />
      </View>
   );
}
