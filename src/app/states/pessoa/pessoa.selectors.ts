import { createSelector } from '@ngrx/store';
import { PessoasState } from './pessoa.reducer';

export const selectPessoas = (state: PessoasState) => state.pessoas;

export const selectPessoaById = (id: number) => createSelector(selectPessoas, pessoas => pessoas.find(pessoa => pessoa.id === id));