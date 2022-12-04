import { FilterActions, ListFilter, Types } from "./types";
export const filterReducer = (state: ListFilter[], action: FilterActions) => {
  switch (action.type) {
    case Types.Add:
      const {fieldName,operator} = action.payload;
      const existingFilter = state.find((f)=>f.fieldName === fieldName && operator === f.operator)
      return existingFilter ? state.map((f)=>f.fieldName === fieldName && operator === f.operator ? action.payload : f)
      :
      [
        ...state,
        action.payload
      ]
    case Types.Remove:
      return [
        ...state.filter(f => f.fieldName !== action.payload.fieldName && f.operator === action.payload.operator),
      ]
    default:
      return state;
  }
}