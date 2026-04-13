import { Link } from "expo-router";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

import { CustomButton } from "@/components/CustomButton";
import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { WorkoutTable } from "@/components/WorkoutTable";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
   // Exemplo de dados (em um app real, viria de um Context ou DB)
   const [workouts] = useState([
      { id: "1", name: "Supino Reto", reps: "3x12" },
      { id: "2", name: "Agachamento", reps: "4x10" },
      { id: "3", name: "Rosca Direta", reps: "3x15" },
   ]);
/** Estrutura principal da tela inicial,
 *  .
*/   
return (
      <ParallaxScrollView
         headerBackgroundColor={{ light: "#D1E8FF", dark: "#1D3D47" }}
         headerImage={
            <Ionicons
               name="fitness"
               size={200}
               color="#007AFF"
               style={styles.headerIcon}
            />
         }
      >
         <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">Meus Treinos</ThemedText>
         </ThemedView>

         <ThemedView style={styles.container}>
            <Link href="/modal" asChild>
               <CustomButton title="Adicionar Novo Treino" icon="add" />
            </Link>

            <WorkoutTable data={workouts} />
         </ThemedView>
      </ParallaxScrollView>
   );
}
/** Estrutura de estilo da tela inicial  */
const styles = StyleSheet.create({
   titleContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 8,
   },
   container: {
      padding: 16,
      gap: 16,
   },
   headerIcon: {
      bottom: -50,
      left: 20,
      position: "absolute",
   },
});
