import React from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { ThemedText } from "./themed-text";

interface CustomInputProps extends TextInputProps {
   label: string;
}
/* estrutura do componente input  */
export function CustomInput({ label, ...rest }: CustomInputProps) {
   return (
      <View style={styles.container}>
         <ThemedText type="defaultSemiBold">{label}</ThemedText>
         <TextInput
            style={styles.input}
            placeholderTextColor="#fff"
            {...rest}
         />
      </View>
   );
}
/* estrutura de estilo do componente input  */
const styles = StyleSheet.create({
   container: {
      width: "100%",
      marginVertical: 10,
   },
   input: {
      borderWidth: 1,
      borderColor: "#CCC",
      borderRadius: 8,
      padding: 12,
      marginTop: 5,
      color: "#fff",
   },
});
