import { ApplicationConfig, importProvidersFrom, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { provideState, provideStore } from '@ngrx/store';
import { getAuthReducer } from './states/authentication/authentication.reducer';
import { pessoaReducer } from './states/pessoa/pessoa.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom([BrowserAnimationsModule, BrowserModule]),
    { provide: LOCALE_ID, useValue: 'pt' },
    provideStore(),
    provideState({name: 'authentication', reducer: getAuthReducer}),
    provideState({name: 'pessoas', reducer: pessoaReducer})
]
};
