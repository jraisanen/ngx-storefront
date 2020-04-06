export interface Menu {
  path: string;
  title: string;
  children?: Menu[];
  column?: number;
}
