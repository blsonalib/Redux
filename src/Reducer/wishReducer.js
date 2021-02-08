
const wishReducer = (state=[], action) => {
    console.log(action)
    
    if (action.type === "Add_Wish") {
       
        return [...state ,action.payload]   
    } 
    
    return state;
}
export default wishReducer;