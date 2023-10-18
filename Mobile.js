import React from 'react'
import buyMobile from '../Redux/MobileAction'
import {connect} from 'react-redux'

const Mobile = (props) => {
    return (
        <div className='alert alert-warning'>
         <h1>Quantity - {props.quantity}</h1>
         <hr/>
         <button className="btn btn-primary" onClick={props.buyMobile}>Buy Mobile</button>   
        </div>
    )
}

const mapStateToProps = (state) => ({
  
        quantity: state.quantity
  
})

const mapDispatchToProps =(dispatch)=> {
return{

    buyMobile:()=>dispatch(buyMobile())
}

    
}

export default connect(mapStateToProps, mapDispatchToProps)(Mobile)
