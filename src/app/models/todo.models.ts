export interface History {
  today: Todo[];
}

export interface Todo {
  id: number;
  text: string;
  notepad: Boolean;
  done: Boolean;
  urls: Url[];
}

export interface Url {
  link: string;
  name: string;
}
