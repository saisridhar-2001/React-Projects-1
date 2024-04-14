import React from "react";
//import {Button} from "@mui/material";
import Capsule from "./Capsule";
const Mainpage=()=>{
    /*const [grades , setGrades] = useState(
        [{ subject : "Maths",
            fa1 : 5,
            fa1Date : '2023-03-4',
            fa2 : 5,
            fa2Date : '2023-03-7',
            sa1 : 10,
            sa1Date : '2023-03-12',
            fa3 : 5,
            fa3Date : '2023-03-16',
            fa4 : 5,
            fa4Date : '2023-03-20',
            sa2 : 10,
            sa2Date : '2023-03-25',
            finalGrade : 'A'
        }])*/

    return(
        <div>
            <Capsule text="reactjs"/>
            <Capsule text="JavaScript"/>
            <Capsule text="Python"/>
        </div>
    )
}

export default Mainpage;
