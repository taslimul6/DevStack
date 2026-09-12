import { use } from "react";
import type { Dispatch, SetStateAction } from "react";
import TechCard from "./Available/TechCard";
import type { ITech } from "../../type";
import { toast } from "react-toastify";

interface AvailableTechProps {
  techPromise: Promise<ITech[]>;
  selectedTech: ITech[];
  setSelectedTech: Dispatch<SetStateAction<ITech[]>>;
}

const AvailableTech = ({
  techPromise,
  setSelectedTech,
  selectedTech,
}: AvailableTechProps) => {

  const notify = (tech: ITech) =>
    toast(`${tech.name} Added to Stack List Successfully`);

  const techData = use(techPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      {techData.map((tech) => (
        <TechCard
          notify={notify}
          key={tech.id}
          tech={tech}
          selectedTech={selectedTech}
          setSelectedTech={setSelectedTech}
        />
      ))}
    </div>
  );
};

export default AvailableTech;