import { time } from "console";
import React from "react";
import { FieldNames, Operators } from "../context/types";
import { useList } from "./hook";

export const List:React.FC = () => {
    const [idFilter,setIdFilter] = React.useState<number>(0)
    const {
        listValues,loading,styles,addFilter,removeFilter,
    } = useList();
    
    
    return <div style={styles.list_container}>
        <div style={styles.list_toolbar}>
            <>
                <input type="text" value={idFilter} onChange={(e:any)=>setIdFilter(e.target.value)}/>
                <input type="button" value={"ADD"} onClick={(e:any)=>addFilter(FieldNames.id,idFilter ?? 0)}/>
                <input type="button" value={"REMOVE"} onClick={(e:any)=>removeFilter(FieldNames.id,Operators.equals)}/>
            </>
        </div>
        {loading && <p>Loading...</p>}
        {listValues.map((x)=><div key={x.id} style={styles.list_item}><p>{x.id}-{x.value}</p></div>)}
    </div>
}