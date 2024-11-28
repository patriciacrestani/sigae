import { IPlano } from "../../models/plano-acao";
import { addPlano, deletePlano, updatePlano } from "./plano-acao.actions";

export interface PlanosState {
  planos: IPlano[];
}
  
export const initialState: PlanosState = {
  planos: []
};
  
export function planoReducer(state = initialState, action): PlanosState {
  switch (action.type) {
    case addPlano.type:
      return { ...state, planos: [...state.planos, action.plano] };
    case updatePlano.type:
      return { ...state, planos: state.planos.map(plano => (plano.id === action.plano.id ? action.plano : plano))};
    case deletePlano.type:
      return { ...state, planos: state.planos.filter(plano => plano.id !== action.id) };
    default:
      return state;
  }
}