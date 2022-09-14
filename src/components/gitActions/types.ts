export type Action = {
  message: string;
  created_at: string;
}

export type GitData = {
  actions: Action[];
  userName: string;
  src: string;
}