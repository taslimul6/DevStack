

import EmptyCard from "./EmptyCard";
import TechListCard from "./TeahListCard";
import type { ITech } from "../../type";
import type { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";


const SelectedCard = ({selectedTech, setSelectedTech}: {
    selectedTech: ITech[];
    setSelectedTech: Dispatch<SetStateAction<ITech[]>>;
}) => {


    const notifydanger = (tech: ITech) =>
    toast.error(`${tech.name} Removed from Stack List Successfully`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });


          const notifydanger1 = () =>
    toast.error(`All Stacks Removed Successfully`, {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });

          const handleAllremove =()=>{

            notifydanger1();
            setSelectedTech([]);

          }

    
     return (
    <div className="w-full sm:w-[282px] rounded-[14px] border border-gray-200 bg-white p-5 shadow-sm mt-10 ml-0 sm:ml-7">
      <h2 className="text-[16px] font-semibold leading-5 text-[#0F172A]">
        Your Stack
      </h2>

      <p className="mt-1 text-[13px] leading-5 text-[#94A3B8]">
       {selectedTech.length===0 ? `No technologies selected yet.` : `${selectedTech.length} Technology Selected`}
      </p>

    
       {selectedTech.length === 0 ? (
        <EmptyCard />
      ) : selectedTech.map(tech=> (<TechListCard key={tech.id} notifydanger={notifydanger} tech={tech} selectedTech={selectedTech} setSelectedTech={setSelectedTech} />))}

      {selectedTech.length>0 ? ( <button onClick={handleAllremove} className="btn btn-outline btn-error btn-wide mt-5"> Remove All</button>) : ""}

     


    </div>
    
    



  );
};

export default SelectedCard;

