import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./authentication.reducer";

export const selectAuthState = createFeatureSelector<AuthState>('authentication');
export const getAuthSelector = createSelector(selectAuthState, (state) => state);