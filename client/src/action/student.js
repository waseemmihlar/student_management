import * as api from "../api/studentapi";


export const fetchStudent=()=>async(dispatch)=>{
    try {
        const {data}=await api.fetchstudent()
        dispatch({type:'FETCH_ALL',payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createStudent=(stud_data)=>async(dispatch)=>{
    try {
        const {data}=await api.createstudent(stud_data);
        dispatch({type:'CREATE',payload:data})
        
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteStudent=(id)=>async(dispatch)=>{
    try {
        await api.deletestudent(id);
        dispatch({type:'DELETE',payload:id})
        
    } catch (error) {
        console.log(error.message)
    }
}








