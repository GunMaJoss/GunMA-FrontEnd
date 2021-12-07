import React, {useState} from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import styled from 'styled-components'
import FilterPaid from '../pages/Feature/ListMagang/FilterPaid'
import FilterWFH from '../pages/Feature/ListMagang/FilterWFH'
import { Link } from 'react-router-dom'

const ButtonFi = styled.button`
border: 2.5px solid #E7EDF1; 
background: transparent;       
    color: black;  
    padding: 4px 23px;
position: absolute;
  left: 43%;
  border-radius: 20px;

`

const ButtonFi2 = styled.button`
border: 2.5px solid #E7EDF1; 
background: transparent;          
    color: black;  
    padding: 4px 23px;
position: absolute;
  left: 49%;
  border-radius: 20px;
`


function clickMe(){
  <Link to='/FilterPaid' >
  </Link>
      

}

// const ButtonToggle = styled.button`
//   opacity : 0.7;
//   ${({active}) => active && 
//   `
//   opacity: 1;
//   `}
// `;

//   const types = ['WFH' , 'Paid'];
 
//   function ToggleGroup(){
//    const [active,setActive] = useState(types[0]);
//    return (
//    <div>
//     {types.map(type => (
//       <ButtonToggle> {type} </ButtonToggle>
//       ))} 
//     </div>
//     );
//    }

export default function ButtonFilter (){
  return(
    <div>

     {/* <Link to='/FilterPaid'  onClick={clickMe}>
      Paid
      </Link> */}
      

      <ButtonFi to='/FilterPaid'  onClick={clickMe}>
      Paid
      </ButtonFi>

      <ButtonFi2 to='/FilterPaid'  onClick={clickMe}>
      WFH
      </ButtonFi2>


      {/* <div className="Login">
            <ButtonFi type = "submit"
            className = "btn btn-dark btn-lg btn-block"
            onClick={clickMe}> Login </ButtonF>
            </div> */}
      
      {/* <Link to='/FilterWFH'  onClick={clickMe}>
      WFH
      </Link>
       */}
      
      </div>
  )
}