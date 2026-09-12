import { use } from "react";
import TechCard from "./Available/TechCard";
import {  toast } from 'react-toastify';


const AvailableTech = ({techPromise , setSelectedTech, selectedTech }) => {

    const notify = (tech) => toast(`${tech.name} Added to Stack List Successfully`);
    const techData = use(techPromise);
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {techData.map(tech=>{
             return (
                <TechCard notify={notify} key={tech.id} tech={tech} selectedTech= {selectedTech} setSelectedTech={setSelectedTech} />

             ) 
            })}
        </div>
    );
};

export default AvailableTech;