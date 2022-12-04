export enum FieldNames {
    id="ID",
    name="NAME"
}

export enum Operators {
    g=">",
    l="<",
    ge=">=",
    le="<=",
    equals="==="
}

type Values = number | string

export type ListFilter = {
  fieldName:FieldNames,
  operator:Operators,
  value:Values
}
export type RemoveListFilter = {
  fieldName:FieldNames,
  operator:Operators
}
type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  Add = 'ADD_FILTER',
  Remove = 'REMOVE_FILTER',
}

type FilterPayload = {
  [Types.Add] : ListFilter
  [Types.Remove]: RemoveListFilter
}

  export type FilterActions = ActionMap<FilterPayload>[keyof ActionMap<FilterPayload>];
