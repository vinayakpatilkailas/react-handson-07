import React, { createContext, useState } from 'react'

export const store = createContext()
const Details = (props) => {
    const [students, setStudents] = useState([
        {
            "Name":"vinayak",
            "Age" : "23",
            "Course" : "FullStack",
            "Batch" : 'may',
            "id" : "1"
        },
        {
            "Name":"Bhashker",
            "Age" : "23",
            "Course" : "FullStack",
            "Batch" : 'may',
            "id" : "2"
        },
        {
            "Name":"Rajan",
            "Age" : "23",
            "Course" : "FullStack",
            "Batch" : 'may',
            "id" : "3"
        },
        {
            "Name":"priyanshi",
            "Age" : "23",
            "Course" : "FullStack",
            "Batch" : 'may',
            "id" : "4"
        },
        {
            "Name":"Akash",
            "Age" : "24",
            "Course" : "FullStack",
            "Batch" : 'may',
            "id" : "5"
        },
    ])
  return (
    <div>
        <store.Provider value={[students,setStudents]} >
             {props.children}
        </store.Provider>
    </div>
  )
}

export default Details