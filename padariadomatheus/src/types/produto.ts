import * as Yup from "yup";

export interface Produto {
   nome: string;
   valor: number;
   validade: string;
   quantidade: number;
}

export const produtoSchema = Yup.object().shape({
   nome: Yup.string().required("Nome do produto é obrigatório"),
   valor: Yup.number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required("Preço é obrigatório"),
   validade: Yup.string().required("Data de validade é obrigatória"),
   quantidade: Yup.number()
      .transform((value) => (isNaN(value) ? undefined : value))
      .required("Quantidade é obrigatória"),
});
