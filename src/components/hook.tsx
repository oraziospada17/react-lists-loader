import React from "react";
import { AppContext } from "../context/ctx";
import { FieldNames, ListFilter, Operators, RemoveListFilter, Types } from "../context/types";
export function useList(){
    const {state,dispatch} = React.useContext(AppContext);
    const addFilter = (fieldName:FieldNames,id:number)=>{
        if(!id)return
        const payload:ListFilter = {
            fieldName,
            operator:Operators.equals,
            value:id
        }
        dispatch({type:Types.Add,payload})
    }
    const removeFilter = (fieldName:FieldNames,operator:Operators)=>{
        const payload:RemoveListFilter = {
            fieldName,
            operator
        }        
        dispatch({type:Types.Remove,payload})
    }
    const [loading,setLoading] = React.useState(false);
    const [l,setL] = React.useState<{id:number,value:string}[]>([])
    const LoadList = async () => {
        setLoading(true)
        await new Promise(r => setTimeout(r, 2000));
        return fetch("www.google.it").then((resp)=>{
            setL([
                {
                    id:1,
                    value:"test"
                },
                {
                    id:2,
                    value:"prova"
                }
            ])
        }).finally(()=>setLoading(false))
    }
    React.useEffect(()=>{
        LoadList()
    },[])
    const styles:{[key:string]:React.CSSProperties} = React.useMemo(()=>({
        list_container:{display:'flex',flexDirection:'column'},
        list_item:{display:'flex',flexDirection:'row',width:100,height:50},
        list_toolbar:{display:'flex',flexDirection:'row'}
    }),[])
    return {
        listValues:l,
        loading,
        styles,
        addFilter,
        removeFilter,
    }
}