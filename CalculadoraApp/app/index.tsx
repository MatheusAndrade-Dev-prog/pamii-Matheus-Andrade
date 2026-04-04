import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Botao from '@/src/components/Botao';

export default function Index() {
  const [expressao, setExpressao] = useState<string>('');
  const [resultado, setResultado] = useState<string>('0');

  const operadores = ['+', '-', 'x', '/'];

  const linhasDeBotoes = [
    ['C', 'DEL', '/', 'x'],
    ['7', '8', '9', '-'],
    ['4', '5', '6', '+'],
    ['1', '2', '3', '='],
    ['0', '.']
  ];

  const obterCorFundo = (botao: string): string => {
    if (botao === 'C') return '#ff3b30';
    if (botao === '=') return '#34c759';
    if (botao === 'DEL') return '#555555';
    if (botao === '1' ||botao === '3'|| botao === '5' ||botao === '7'||botao === '9') return 'yellow';
    if (botao === '2' ||botao === '4'|| botao === '6' ||botao === '8') return '#A872BE';
    if (botao === '0') return 'gray';
    if (['/', 'x', '-', '+'].includes(botao)) return '#ff9500';
    if (['DEL', '.'].includes(botao)) return '#555555';
    return '#333333';
  };

  const lidarComToque = (valor: string): void => {
    if (valor === 'C') {
      setExpressao('');
      setResultado('');
    } else if (valor === 'DEL') {
      const novaExpressao = expressao.slice(0, -1);
      setExpressao(novaExpressao);
      setResultado(novaExpressao.length > 0 ? novaExpressao : '0');
    } else if (valor === '=') {
      try {
        const expressaoFormatada = expressao.replace(/x/g, '*').replace(/\//g, '/');
        const resultadoCalculado = eval(expressaoFormatada);
        setResultado(String(resultadoCalculado));
        setExpressao(String(resultadoCalculado));
      } catch (e) {
        setResultado('Erro');
      }
    } else {
      if (operadores.includes(valor)) {
        if (expressao === '' && valor !== '-') return;
        const ultimoCaractere = expressao.slice(-1);
        if (operadores.includes(ultimoCaractere)) {
          const novaExpressao = expressao.slice(0, -1) + valor;
          setExpressao(novaExpressao);
          setResultado(novaExpressao);
          return;
        }
      }
      const novaExpressao = expressao + valor;
      setExpressao(novaExpressao);
      setResultado(novaExpressao);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.textoDisplay} numberOfLines={1} adjustsFontSizeToFit>
          {resultado || '0'}
        </Text>
      </View>
      <View style={styles.tecladoContainer}>
        {linhasDeBotoes.map((linha, indexLinha) => (
          <View key={indexLinha} style={styles.linha}>
            {linha.map((botao) => (
              <Botao
                key={botao}
                titulo={botao}
                corFundo={obterCorFundo(botao)}
                onPress={() => lidarComToque(botao)}
              />
            ))}
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d3a3a',
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  textoDisplay: {
    fontSize: 78,
    color: '#ffffff',
    fontWeight: '300',
  },
  tecladoContainer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  linha: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
});