import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


interface BotaoProps {
  titulo: string;
  corFundo?: string;
  corTexto?: string;
  onPress: () => void; 
}

export default function Botao({ titulo, corFundo, corTexto, onPress }: BotaoProps) {
  return (
    <TouchableOpacity
      style={[
        styles.botao,
        { backgroundColor: corFundo || '#333333' }
      ]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[
        styles.textoBotao,
        { color: corTexto || '#ffffff' }
      ]}>
        {titulo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 32,
    fontWeight: '400',
  },
});