export interface TreeNodeType {
  key: string;
  label: string;
  show?: boolean;
  children?: TreeNodeType[] | undefined;
}
export interface ProductType {
  id: number;
  type: string;
  items: [];
}
