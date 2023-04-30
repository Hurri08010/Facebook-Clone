import './App'





const AddressInput =()=>{

    let Inp = {
        height:'8vh',
        maxHeight:'50px',
        width:'90%',  
        border:'1px solid #dddfe2',
        borderRadius: '7px',
        caretColor:'#1b74e4', 
        margin:' auto',
    
    }


  
    return(
        <input style={Inp}  className="out" placeholder="Email Address or phone number"></input>
   
    )

}



export default AddressInput;