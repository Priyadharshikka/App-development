import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from './EmployeeService';
import './AddorUpdate.css'
const AddOrUpdate=()=> {
  const nav=useNavigate();
  const[type,settype]=useState('');
  const[bname,setbname]=useState('');
  const[size,setsize]=useState('');
  const[price,setprice]=useState('');
  const {id} = useParams();
    const saveOrUpdateEmployee = (e) => {
      e.preventDefault();
      if(type.length==0||bname.length==0||size.length==0||price.length==0){
        alert("Enter All fields")
      }
      
      else{
      if (window.confirm("Confirm Details!") == true) {
        e.preventDefault();
          const employee = {id, type, bname,size,price}
          if(id){
              EmployeeService.updateEmployee(id, employee).then((response) => {
                  nav('/home')
              }).catch(error => {
                  console.log(error)
              })
  
          }else{
              EmployeeService.createEmployee(employee).then((response) =>{
                  console.log(response.data)
                  nav('/home');
              }).catch(error => {
                  console.log(error)
              })
          }
        }
      }
    } 
  
      useEffect(() => {
          EmployeeService.getEmployeeById(id).then((response) =>{
              settype(response.data.type)
              setbname(response.data.bname)
              setsize(response.data.size)
              setprice(response.data.price)
              
          }).catch(error => {
              console.log(error)
          })
      }, [])
      const title = () => {

        if(id){
            return <h1>Update Costume</h1>
        }else{
            return <h1>Add Costume</h1>
        }
    }
  return (
    
    <div id="body">
    <div className="signup-form">
    <div className="container">
      <div className="header">
        {title()}
        <p>Enter Costume Details</p>
      </div>
      <form>
       
        
        <div className="input">
          <select id="select" name="type" placeholder="Costume Type" value={type} onChange={(e)=>settype(e.target.value)}>
          <option value="" disabled selected hidden>Select your option</option>
          <option value="Kurtis">Kurtis</option>
          <option value="Salwar">Salwar</option>
          <option value="Saree">Saree</option>
          <option value="Frocks">Frocks</option>
          <option value="Anarkali">Anarkali</option>
        </select>
        </div>

        <div className="input">
          <input type="text" placeholder="Brand" value={bname} onChange={(e)=>setbname(e.target.value)} />
        </div>
        <div className="input">
          <input type="text" placeholder="Costume Size" value={size} pattern="[0-9]+" onChange={(e)=>setsize(e.target.value)}/>
        </div>
        <div className="input">
          <input type="text" placeholder="Costume Price" value={price}  onChange={(e)=>setprice(e.target.value)} />
        </div>
        
        </form>
        <input onClick={saveOrUpdateEmployee} className="e-signup-btn" type="submit" value="Submit" />
        <Link to="/home">  <button className="e-cancel-btn" >Cancel </button></Link>
    </div>
  </div>
    </div>
  )
}

export default AddOrUpdate