import React, { useState } from 'react'
import './Employee.css'

export default function Employee() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [designation, setDesignation] = useState('');
    const [gender,setGender]=useState('')
    const [checkedOption,setCheckedOption]=useState({
        MCA:false,
        BCA:false,
        BSC:false,
    })
    const [image,setImage]=useState('')


    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [numberError, setNumberError] = useState(false);
    const [designationError, setDesignationError] = useState(false);
    const[genderError,setGenderError]=useState(false)
    const[chackboxError,setCheckboxError]=useState(false)
    const[imageError,setImageError]=useState(false)

    const handleName = (e) => {
        let name = e.target.value;
        setName(name);
        if (name.trim().length < 3) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    };

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleEmail = (e) => {
        let email = e.target.value;
        setEmail(email);
        if (!emailRegex.test(email)) {
            setEmailError(true);
        } else {
            setEmailError(false);
        }
    };

    const handleNumber = (e) => {
        let number = e.target.value;
        setNumber(number);
        if (number.length !== 10) {
            setNumberError(true);
        } else {
            setNumberError(false);
        }
    };

    const handleDesignation = (e) => {
        let designation = e.target.value;
        setDesignation(designation);
        if (designation === '') {
            setDesignationError(true);
        } else {
            setDesignationError(false);
        }
    };
    const handleGenderChange=(e)=>{
        let gender=e.target.value;
        setGender(gender)
        if (!gender){
            setGenderError(true)
        }
        else{
            setGenderError(false)
        }
    }
    const handleCheckboxChange = (e) => {
        let { name, checked } = e.target;
        setCheckedOption((prev) => ({
            ...prev,
            [name]: checked,
        }));
        setCheckboxError(false);
    };
    const handleImageChange = (e) => {
        let file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImage(reader.result); 
          };
          reader.readAsDataURL(file); 
          setImageError(false);
        } else {
          setImageError(true);
        }
      };
      
    // validation
    const handleSubmit = (e) => {
        e.preventDefault();

        const employeeData={
            name:name,
            email:email,
            number:number,
            designation:designation,
            gender:gender,
            checkedOption:checkedOption,
            image:image,
        }
        console.log('Employee data:',employeeData)
        localStorage.setItem('employeedata',JSON.stringify(employeeData))
        console.log("stored in localStorage:",employeeData)


        if (name.trim().length >= 3 && emailRegex.test(email) && number.length === 10 && designation !== '' && gender && (checkedOption.MCA || checkedOption.BCA ||checkedOption.BSC) && image) {
            alert("Employee Form has been submitted.... ");

            // reset form fields
            setName('');
            setEmail('');
            setNumber('');
            setDesignation('')
            setGender('')
            setCheckedOption({
                MCA:false,
                BCA:false,
                BSC:false,
            })
            setImage('')
        } else {
            if (name.trim().length < 3) setNameError(true);
            if (!emailRegex.test(email)) setEmailError(true);
            if (number.length !== 10) setNumberError(true);
            if (designation === '') setDesignationError(true);
            if (!gender)setGenderError(true);
            if(!(checkedOption.MCA || checkedOption.BCA ||checkedOption.BSC))setCheckboxError(true);
            if (!image)setImageError(true)
            alert('Please fill the form correctly.');
        }
    };

  return (
    <>
    <div className='main'>        
    <div className='Employe_box'>
            <h1 className='heading'>Employee List</h1>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <br/>
                <input id='input_field' type='text' name='name' value={name} onChange={handleName} placeholder='Enter your name'/>
                <br/>
                {nameError? <span style={{color:'red'}}>Name length must be greater than 2 chrachters</span> :''}
                <br/>
                <label>Email Id</label>
                <br/>
                <input id='input_field' type='text' name='email' value={email} onChange={handleEmail} placeholder='Example@gmail.com'/>
                <br/>
                {emailError? <span style={{color:'red'}}>Please enter valid email id</span>:''}
                <br/>
                <label>Mobile No.</label>
                <br/>
                <input id="input_field" type="number"  name="number" value={number}  onChange={handleNumber} placeholder="Enter your phone number" />
                <br/>
                {numberError?<span style={{color:'red'}}>Mobile number must be 10 digits.</span>:''}
                <br/>
               <label>Designation  </label>
                <select name='designation' value={designation} onChange={handleDesignation}>
                    <option value=''>--Select Designation--</option>
                    <option value='hr'>HR</option>
                    <option value='manager'>Manager</option>
                    <option value='sales'>Sales</option>
                </select>
                <br/>
                {designationError?<span style={{color:'red'}}>Please select a designation</span>:''}
                <br/>
                <label>Choose the Gender</label> <br/>
                <input type='radio' id='male' name='gender' value='Male' checked={gender==='Male'} onChange={handleGenderChange}/>
                <label htmlFor='male'>Male</label> <br/>
                <input type='radio' id='female' name='gender' value='Female' checked={gender==='Female'} onChange={handleGenderChange}/>
                <label htmlFor='female'>Female</label> <br/>
                <input type='radio' id='other' name='gender' value='Other'checked={gender==='Other'} onChange={handleGenderChange}/>
                <label  htmlFor='other'>Other</label>
                <br/>
                {genderError?<span style={{color:'red'}}>Please select your gender</span>:''}
                <br/>
                <label>Choose the Course</label>
                <br/>
                <label><input type='checkbox' name='MCA' checked={checkedOption.MCA} onChange={handleCheckboxChange}/>MCA</label>
                <br/>
                <label><input type='checkbox' name='BCA' checked={checkedOption.BCA} onChange={handleCheckboxChange}/>BCA</label>
                <br/>
                <label><input type='checkbox' name='BSC' checked={checkedOption.BSC} onChange={handleCheckboxChange}/>BSC</label>
                <br/>
                {chackboxError?<span style={{color:'red'}}>Please select option</span>:''}
                <br/>
                <label>Img Upload</label> <br/>
                <input type='file' accept='image/*' onChange={handleImageChange}/>
                <br/>
                {imageError?<span style={{color:'red'}}>Please Upload Image</span>:''}
                <br/>
                <button className='btn' type='submit'>Submit</button>
            </form>

        </div>
        </div>

    </>
  )
}
