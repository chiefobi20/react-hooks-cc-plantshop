import {useState} from "react";

function Plant({plant}){

    const [displayPlantType, setDisplayPlantType] = useState("")

    function handleClick(){
        setDisplayPlantType(!displayPlantType)
    }

    return(
        <li className="plant">

        </li>
    )
}



export default Plant;