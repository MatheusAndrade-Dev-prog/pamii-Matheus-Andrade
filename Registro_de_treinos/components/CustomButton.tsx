import React from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableOpacityProps,
} from "react-native";

interface CustomButtonProps extends TouchableOpacityProps {
   title: string;
   variant?: "primary" | "secondary";
}
/* estrutura do componente button  */
export function CustomButton({
   title,
   variant = "primary",
   style,
   ...rest
}: CustomButtonProps) {
   return (
      <TouchableOpacity
         style={[
            styles.button,
            variant === "secondary" ? styles.secondary : styles.primary,
            style,
         ]}
         {...rest}
      >
         <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   button: {
      padding: 15,
      borderRadius: 8,
      alignItems: "center",
      marginVertical: 5,
   },
   primary: {
      backgroundColor: "#007AFF",
   },
   secondary: {
      backgroundColor: "#5856D6",
   },
   text: {
      color: "#FFF",
      fontWeight: "bold",
      fontSize: 16,
   },
});
