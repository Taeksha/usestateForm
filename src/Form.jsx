import { useState } from "react"
import './style.css';


function  Form()
{

    const [name , setname]=useState("")
    const [email,setemail]  =  useState ("")
    const [password ,setpassword ] = useState ("")
    const [gender,setgender] = useState ("")
    const [set,setmarried] = useState ("")
    const [city , setcity] = useState("")

  

    const handclick = (e) => {
        e.preventDefault();
        let student = {
            name: name,
            email: email,
            password: password,
            gender :gender,
            city : city,
            marritalstatus : set,
            
        }
        localStorage.setItem('employee',JSON.stringify(student))
        console.log(student);
        setname('');
      
      };
    return(

<>
        <h1>FORM</h1>

       <form action="" onSubmit={handclick} >
        


         name : <input type="text" placeholder="name" style={{marginTop:"50px"}} onChange={(e)=>setname(e.target.value)}  value={name}/>
        <br></br>
       
       Email : <input  type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)}  value={email}/>
        <br/>
       Password: <input  type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)} value={password}/>
       <br></br>
       
      Gender : male <input type="radio" value={"male"} name="gender"   onChange={(e)=>{setgender(e.target.value)}}/>
       female <input type="radio" value={"female"} name="gender"  onChange={(e)=>{setgender(e.target.value)}} /> <br />
 
     <br/>

        <select name=""   onChange={(e)=>setcity(e.target.value)}>
        <option value="">city</option>
        <option value="delhi">delhi</option>
        <option value="surat">surat</option>
        <option value="mumbai">mumbai</option>
      </select><br/>
        <br/>
        Married : <input type="radio"   name="married" onChange={(e)=>setmarried(e.target.value)}  value={"married"}/>
        Unmarried : <input type="radio"  name="married" onChange={(e)=>setmarried(e.target.value)} value={"unmarried"} />    
             <br/>
        <button type="submit"   onClick={handclick}>Submit</button>
       </form>

       </>
   
    )
}
export default Form
