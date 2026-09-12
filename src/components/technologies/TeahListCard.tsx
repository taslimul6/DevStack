import { RxCross2 } from "react-icons/rx";



const TeahListCard = ({tech, selectedTech, setSelectedTech}) => {

    const handleSeletedCard= (tech)=>{
        
        setSelectedTech(selectedTech.filter(f=>f != tech));
    }

    
    return (
       <div className="flex items-center gap-3 mt-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
  <img
    className="h-10 w-10 rounded-lg object-cover"
    src={tech.icon}
    alt={tech.name}
  />

  <div className="min-w-0">
    <h2 className="truncate text-sm font-bold text-gray-800">
      {tech.name}
    </h2>

    <p className="mt-0.5 text-xs font-medium text-gray-500">
      {tech.category}
    </p>
  </div>

  <button
    onClick={()=> handleSeletedCard(tech)}
    className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
    
  >
    <RxCross2 className="text-xl" />
  </button>
</div>
    );
};

export default TeahListCard;