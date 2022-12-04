import React, { createContext, useReducer } from 'react';
import { filterReducer } from './reducers';
import { FilterActions, ListFilter } from './types';



type InitialStateType = {
  filters: ListFilter[];
}

const initialState = {
    filters: [],
}

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null
});


const mainReducer = ({ filters } :InitialStateType, action:FilterActions) => ({
    filters:filterReducer(filters,action)
});

type Props = {
    children?:React.ReactElement
}

const AppProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };