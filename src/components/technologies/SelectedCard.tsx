import EmptyCard from "./EmptyCard";
import TechListCard from "./TeahListCard";


const SelectedCard = ({selectedTech, setSelectedTech}) => {
     return (
    <div className="w-[282px] rounded-[14px] border border-gray-200 bg-white p-5 shadow-sm mt-10 ml-7">
      <h2 className="text-[16px] font-semibold leading-5 text-[#0F172A]">
        Your Stack
      </h2>

      <p className="mt-1 text-[13px] leading-5 text-[#94A3B8]">
       {selectedTech.length===0 ? `No technologies selected yet.` : `${selectedTech.length} Technology Selected`}
      </p>

    
       {selectedTech.length === 0 ? (
        <EmptyCard />
      ) : selectedTech.map(tech=> (<TechListCard key={tech.id} tech={tech} selectedTech={selectedTech} setSelectedTech={setSelectedTech} />))}

      {selectedTech.length>0 ? ( <button className="btn btn-outline btn-error btn-wide mt-5"> Remove All</button>) : ""}

     


    </div>
    
    



  );
};

export default SelectedCard;