import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() {}

  setItem(key: string, value: any): void {
    const jsonValue = JSON.stringify(value);
    localStorage.setItem(key, jsonValue);
  }

  updateItem<T>(key: string, value: T | any): void {
    let itemToBeUpdated = this.getItem<T>(key);
    itemToBeUpdated = {...itemToBeUpdated, value};
    this.setItem(key, itemToBeUpdated);
  }

  getItem<T>(key: string): T | null {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}