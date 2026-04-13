import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ThemedText } from "./themed-text";

interface Workout {
   id: string;
   name: string;
   reps: string;
}
/* estrutura do componente WorkoutTable  que é uma tabela para exibir os exercícios */
export function WorkoutTable({ data }: { data: Workout[] }) {
   return (
      <View style={styles.container}>
         <View style={[styles.row, styles.header]}>
            <ThemedText type="defaultSemiBold" style={styles.cell}>
               Exercício
            </ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.cell}>
               Séries/Reps
            </ThemedText>
         </View>
       
         <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
               <View style={styles.row}>
                  <ThemedText style={styles.cell}>{item.name}</ThemedText>
                  <ThemedText style={styles.cell}>{item.reps}</ThemedText>
               </View>
            )}
            scrollEnabled={false} // Deixamos o Scroll para o container pai
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginTop: 20,
      borderWidth: 1,
      borderColor: "#EEE",
      borderRadius: 8,
   },
   header: {
      backgroundColor: "#f9f9f9",
   },
   row: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#EEE",
      padding: 12,
   },
   cell: {
      flex: 1,
   },
});
