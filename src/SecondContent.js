import AddressInput from "./AddressInput";
import Password from "./Password";
import Fbutton from "./Fbutton";
import Gbutton  from "./Gbutton";
import './App'

const  SecondContent=()=>{
let box={
    margin:'0 auto',
    width:'94%',
    height:'60vh',
    maxHeight:'1000px',
    borderRadius:'10px',
    backgroundColor:'var(--white)',
    boxShadow:'0px 3px 5px 1px #d3d3d3',
    display:'grid',
    padding:'10px'
}

let paragraph={
    margin:'auto',
color:'#1b74e4',
fontSize:'1em',
textAlign:'center',
fontWeight:'600',
cursor:'pointer',

}



    return(
        <div  className="wrapper">
        <div style={box}>
  <AddressInput/>
  <Password/>

  <Fbutton/>

  <p style={paragraph} className="para">Forgotten password?</p>

<div className="pLine">
  <div className="line"></div>

  <p>or</p>


  <div className="line"></div>
  
  </div>

   <Gbutton/>

        </div>

      <div className="pxs">
<p className="px1">Create a page </p>
<p className="px"> for a celebrity, brand or bussiness</p>

</div>
        </div>
    )
}

export default SecondContent;

