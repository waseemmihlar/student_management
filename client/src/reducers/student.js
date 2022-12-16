
export default (student=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...student,action.payload]
        case 'DELETE':
            return (student.filter(stud=>!(stud._id==action.payload)))
        default:
            return student
    }

};



