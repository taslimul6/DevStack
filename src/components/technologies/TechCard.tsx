import { FaReact, FaStar } from "react-icons/fa";

export default function TechCard({tech}) {
  return (

    <div className="">

        <div className="card bg-base-100 border border-base-200 rounded-xl shadow-sm p-4">
      
        <div className="flex justify-between items-start">
            <FaReact className="text-2xl text-cyan-400" />
            <span className="badge badge-info badge-soft text-xs">Popular</span>
        </div>

        <h3 className="text-lg font-semibold mt-4">React</h3>

        <p className="text-xs text-gray-500 leading-5 mt-1">
            A declarative, component-based JavaScript library for building modern
            user interfaces.
        </p>

        <div className="flex items-center gap-2 mt-3 text-[10px]">
            <span className="badge badge-ghost badge-sm">Frontend</span>
            <span className="text-gray-500">Beginner-Friendly</span>
            <span className="flex items-center gap-1 ml-auto">
            <FaStar className="text-yellow-400" />
            4.9
            </span>
        </div>

        <button className="btn btn-sm btn-neutral w-full mt-3">
            Add to Stack
        </button>
        </div>
    </div>
  );
}