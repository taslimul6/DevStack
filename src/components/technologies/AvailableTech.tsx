import { use } from "react";
import TechCard from "./TechCard";


const AvailableTech = ({techPromise}) => {

    const techData = use(techPromise);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {techData.map(tech=>{
             return (
                <TechCard tech={tech} />

             ) 
            })}
        </div>
    );
};

export default AvailableTech;