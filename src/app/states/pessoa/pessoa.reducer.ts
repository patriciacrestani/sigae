import { PESSOAS } from "../../mocks/pessoas-mock";
import { IPessoa } from "../../models/pessoa";
import { addPessoa, deletePessoa, updatePessoa } from "./pessoa.actions";

export interface PessoasState {
  pessoas: IPessoa[];
}
  
export const initialState: PessoasState = {
  pessoas: PESSOAS
};
  
export function pessoaReducer(state = initialState, action): PessoasState {
  switch (action.type) {
    case addPessoa.type:
      return { ...state, pessoas: [...state.pessoas, action.pessoa] };
    case updatePessoa.type:
      return { ...state, pessoas: state.pessoas.map(pessoa => (pessoa.id === action.pessoa.id ? action.pessoa : pessoa))};
    case deletePessoa.type:
      return { ...state, pessoas: state.pessoas.filter(pessoa => pessoa.id !== action.id) };
    default:
      return state;
  }
}