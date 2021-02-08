import React from 'react'
import {connect} from "react-redux"
import  {anotherName, anotherWish } from './component/Action/MyAction'



function App(props) {

  const mydata = props.myWish.map(item => {
    return (
      <div>
        <h2>{item}</h2>
      </div>
     
      
    )
   })
 
   console.log("name is " + props.myName)
 console.log(props)
  return (
    <div>
      <h1>This is app component</h1>
      <h2>My name is {props.myName}</h2>
      {mydata}
      <button onClick={() => props.changeName()}>Change it</button>
      <button onClick={()=>props.changeWish()}>Add Wish</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    myName: state.name,
    myWish:state.wish
  }
}

const mapActionToProps = ( dispatch) => {
  return {
    changeName: () => { dispatch(anotherName()) },
     changeWish:()=>{dispatch(anotherWish())} 
    }
  }

  
export default connect(mapStateToProps,mapActionToProps)(App)