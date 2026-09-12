import { use } from "react";
import TechCard from "./TechCard";


const AvailableTech = ({techPromise , setSelectedTech, selectedTech }) => {

    const techData = use(techPromise);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {techData.map(tech=>{
             return (
                <TechCard key={tech.id} tech={tech} selectedTech= {selectedTech} setSelectedTech={setSelectedTech} />

             ) 
            })}
        </div>
    );
};

export default AvailableTech;