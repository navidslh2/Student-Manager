import { useEffect, useState } from "react"

const useStudents = (dispatch)=>{
    const [loading, setLoading] = useState(true)
    const [arrayHolder, setArrayHolder] = useState([])
    useEffect(()=>{
        const fetchStudent = async ()=>{
            try{
                const res = await fetch('http://localhost/student/showstudent.php')
                const data = await res.json()
                dispatch({type:'fetch', payload:data})
                setArrayHolder(data)
                setLoading(false)
            }catch (error){
                alert(error.massege)
                setLoading(false)
            }
        }
        fetchStudent()
    },[dispatch])
    return{ loading, arrayHolder, setArrayHolder}
}

export default useStudents