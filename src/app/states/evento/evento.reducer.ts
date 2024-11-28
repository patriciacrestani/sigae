import { EVENTOS } from "../../mocks/evento-mock";
import { IEvento } from "../../models/evento";
import { addEvento, deleteEvento, updateEvento } from "./evento.actions";

export interface EventoState {
  eventos: IEvento[];
}
  
export const initialState: EventoState = {
  eventos: EVENTOS
};
  
export function eventoReducer(state = initialState, action): EventoState {
  switch (action.type) {
    case addEvento.type:
      return { ...state, eventos: [...state.eventos, action.evento] };
    case updateEvento.type:
      return { ...state, eventos: state.eventos.map(evento => (evento.id === action.evento.id ? action.evento : evento))};
    case deleteEvento.type:
      return { ...state, eventos: state.eventos.filter(evento => evento.id !== action.id) };
    default:
      return state;
  }
}