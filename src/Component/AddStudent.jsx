import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { store } from './Details'

const AddStudent = () => {
    const [studentData, setStudentData] = useState({
        Name : "",
        Age : "",
        Course : "",
        Batch : "",
        id : ""
    })

    const {Name,Age,Course,Batch,id} = studentData

    const [student, setStudent] = useContext(store)

    const ChangeHandler=(e)=>{
        console.log(e)
        
        setStudentData({...studentData,[e.target.name]:e.target.value})
    }
    const sunbmitHandler = () =>{
        setStudent([...student,{Name:Name, Age:Age, Course:Course,Batch:Batch, id:new Date().getTime().toString()}])
    }
    return (
        <div>
         { console.log(studentData)}
    <div className='student__data'>
            <section className=" data Name">
        <label >Name</label>
        <input type="text" id={id} name="Name" value={Name}  onChange ={ChangeHandler} />
        </section>
        <section className='data Age'>
        <label >Age</label>
        <input type="text" id={id} name="Age" value={Age} onChange ={ChangeHandler} />
        </section>
        <section className="data Course">
        <label >Course</label>
        <input type="text" id={id} name="Course" value={Course} onChange ={ChangeHandler} />
        </section>
        <section className="data Batch">
        <label >Batch</label>
        <input type="text" id={id} name="Batch" value={Batch} onChange ={ChangeHandler} />
        </section>

    </div>
    <div className='container__submit'>
    <Link to="/student" > <section className='cancle section st'>Cancle</section>
    </Link>
    <Link to="/student" onClick={sunbmitHandler} >
    <section className='submit section '> Submit</section>
   </Link>
    </div>

    </div>
   
  )
}

export default AddStudent