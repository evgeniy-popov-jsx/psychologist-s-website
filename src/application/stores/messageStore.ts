import { makeAutoObservable } from 'mobx';

class MessageManagerStore {
  messages: Map<string, boolean> = new Map();

  constructor() {
    makeAutoObservable(this);
  }

  isMessageShown(id: string): boolean {
    return this.messages.get(id) ?? false;
  }

  setIsMessageShown (id: string) {
    this.messages.set(id, true);
  }
}

export const messageManagerStore = new MessageManagerStore();