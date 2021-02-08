// const anotherName = (name) => {
//     return {
//         type: "CHANGE_NAME",
//         payload: name
//     }
// }
// export default anotherName;

import axios from "axios";


export const anotherName = () => {
    return async(dispatch) => {
        
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
                console.log(res)
                dispatch({type: "CHANGE_NAME", payload:res.data[1].name})
        }
       
}
    


// export const anotherWish = (item) => {
    
//     return {
//         type: "Add_Wish",
//         payload: item
//     }   
// }



export const anotherWish = () => {
    
    return async(dispatch) => {
        
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users`)
                console.log(res.data)
                dispatch({type: "Add_Wish", payload:res.data[2].email})
        }
}

    