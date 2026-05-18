import { yupResolver } from "@hookform/resolvers/yup";
import {collection, addDoc  } from "firebase/firestore";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { db } from "../services/firebaseConfig";
import { Produto, produtoSchema } from "../types/produto";

export default function FormularioProduto() {
   const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<Produto>({
      resolver: yupResolver(produtoSchema),
   });

   const onSubmit = async (data: Produto) => {
      try {
         // Salvando no Firebase na coleção "produtos"
         await addDoc(collection(db, "produtos"), {
            nome: data.nome,
            valor: Number(data.valor),
            validade: data.validade,
            quantidade: Number(data.quantidade),
            dataCadastro: new Date().toISOString(),
         });

         Alert.alert("Sucesso", "Produto cadastrado com sucesso!");
         reset(); // Limpa o formulário
      } catch (error) {
         console.error("Erro ao salvar produto:", error);
         Alert.alert("Erro", "Não foi possível cadastrar o produto.");
      }
   };

   return (
      <ScrollView style={styles.container}>
         <Text style={styles.header}>Cadastro de Produto - Padaria</Text>

         <View style={styles.card}>
            {/* Campo Nome */}
            <Text style={styles.label}>Nome do Produto</Text>
            <Controller
               control={control}
               name="nome"
               render={({ field: { onChange, value } }) => (
                  <TextInput
                     style={[styles.input, errors.nome && styles.inputError]}
                     placeholder="Ex: Pão de Queijo"
                     onChangeText={onChange}
                     value={value}
                  />
               )}
            />
            {errors.nome && (
               <Text style={styles.errorText}>{errors.nome.message}</Text>
            )}

            {/* Campo Valor */}
            <Text style={styles.label}>Preço (R$)</Text>
            <Controller
               control={control}
               name="valor"
               render={({ field: { onChange, value } }) => (
                  <TextInput
                     style={[styles.input, errors.valor && styles.inputError]}
                     placeholder="0.00"
                     keyboardType="numeric"
                     onChangeText={onChange}
                     value={value ? String(value) : ""}
                  />
               )}
            />
            {errors.valor && (
               <Text style={styles.errorText}>{errors.valor.message}</Text>
            )}

            {/* Campo Validade */}
            <Text style={styles.label}>Data de Validade</Text>
            <Controller
               control={control}
               name="validade"
               render={({ field: { onChange, value } }) => (
                  <TextInput
                     style={[
                        styles.input,
                        errors.validade && styles.inputError,
                     ]}
                     placeholder="DD/MM/AAAA"
                     onChangeText={onChange}
                     value={value}
                  />
               )}
            />
            {errors.validade && (
               <Text style={styles.errorText}>{errors.validade.message}</Text>
            )}

            {/* Campo Quantidade */}
            <Text style={styles.label}>Quantidade</Text>
            <Controller
               control={control}
               name="quantidade"
               render={({ field: { onChange, value } }) => (
                  <TextInput
                     style={[
                        styles.input,
                        errors.quantidade && styles.inputError,
                     ]}
                     placeholder="Quantidade em estoque"
                     keyboardType="numeric"
                     onChangeText={onChange}
                     value={value ? String(value) : ""}
                  />
               )}
            />
            {errors.quantidade && (
               <Text style={styles.errorText}>{errors.quantidade.message}</Text>
            )}

            <TouchableOpacity
               style={styles.button}
               onPress={handleSubmit(onSubmit)}
            >
               <Text style={styles.buttonText}>SALVAR PRODUTO</Text>
            </TouchableOpacity>
         </View>
      </ScrollView>
   );
}

const styles = StyleSheet.create({
   container: { flex: 1, padding: 20, backgroundColor: "#F5F5F5" },
   header: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      marginVertical: 20,
      color: "#4A3728",
   },
   card: {
      backgroundColor: "#FFF",
      padding: 20,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOpacity: 0.1,
      elevation: 3,
   },
   label: { fontWeight: "bold", marginBottom: 5, color: "#555" },
   input: {
      borderBottomWidth: 1,
      borderColor: "#DDD",
      marginBottom: 15,
      paddingVertical: 8,
      fontSize: 16,
   },
   inputError: { borderColor: "red" },
   errorText: { color: "red", fontSize: 12, marginBottom: 10 },
   button: {
      backgroundColor: "#8B4513",
      padding: 15,
      borderRadius: 8,
      alignItems: "center",
      marginTop: 10,
   },
   buttonText: { color: "#FFF", fontWeight: "bold", fontSize: 16 },
});
