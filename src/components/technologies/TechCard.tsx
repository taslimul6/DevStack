import { FaReact, FaStar } from "react-icons/fa";
import type { ITech } from "../../type";
import { useState, type Dispatch, type SetStateAction } from "react";

export default function TechCard({
  tech,
  setSelectedTech,
  selectedTech,
}: {
  tech: ITech;
  selectedTech: ITech[];
    setSelectedTech: Dispatch<SetStateAction<ITech[]>>
}) {

    const [added , setAdded] = useState(false);

    const handleBtn = (tech) =>{


        if(!added){
            setAdded(!added);
            setSelectedTech([...selectedTech , tech ])
        }
        else{
            setAdded(!added);
           setSelectedTech(
            selectedTech.filter((t) => t.id !== tech.id)
                 )
        }
        

    
    }
    

  return (

    <div className="">

        <div className="card bg-base-100 border border-base-200 rounded-xl shadow-sm p-4">
      
        <div className="flex justify-between items-start">
            <img src={tech.icon} alt="" width="50" />
            <span className="badge badge-info badge-soft text-xs">{tech.badge}</span>
        </div>

        <h3 className="text-lg font-semibold mt-4">{tech.name}</h3>

        <p className="text-xs text-gray-500 leading-5 mt-1">
            {tech.description}
        </p>

        <div className="flex items-center gap-2 mt-3 text-[10px]">
            <span className="badge badge-ghost badge-sm">{tech.category}</span>
            <span className="text-gray-500">{tech.difficulty}</span>
            <span className="flex items-center gap-1 ml-auto">
            <FaStar className="text-yellow-400" />
            {tech.rating}
            </span>
        </div>

        <button onClick={()=>handleBtn(tech)} className={  `btn btn-sm ${added ?"btn-error" : "btn-neutral"} w-full mt-3`}>
            { added ? "Already Added" : "Add to Stack"}
        </button>
        </div>
    </div>
  );
}