import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

import { CustomButton } from "@/components/CustomButton";
import { CustomInput } from "@/components/CustomInput";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { View } from "react-native";

export default function ModalScreen() {
   const router = useRouter();

   return (
      <ThemedView style={styles.container}>
         <ThemedText type="title">Registrar Treino</ThemedText>

         <CustomInput label="Nome do Exercício" placeholder="Ex: Supino" />
         <CustomInput label="Séries e Repetições" placeholder="Ex: 3x12" />
         <CustomInput
            label="Carga (kg)"
            placeholder="Ex: 20"
            keyboardType="numeric"
         />

         <View style={styles.buttonGroup}>
            <CustomButton title="Salvar Treino" onPress={() => router.back()} />
            <CustomButton
               title="Cancelar"
               variant="secondary"
               onPress={() => router.back()}
            />
         </View>
      </ThemedView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 20,
      justifyContent: "flex-start",
      gap: 10,
   },
   buttonGroup: {
      marginTop: 20,
   },
});

