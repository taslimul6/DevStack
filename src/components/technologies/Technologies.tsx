import { Suspense } from "react";
import AvailableTech from "./AvailableTech";
import SelectedCard from "./SelectedCard";


export default function Technologies() {

    const techPromise = async()=>{
        const res = await fetch("data.json");
        const data = res.json();
        return data;
    }

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <h2 className= "text-5xl font-bold"> Explore The<span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className="mt-5 text-gray-500">Pick one technology per category to build your ideal stack.</p>
            
            <div className="grid grid-cols-4">

                <div className="col-span-3">
                    <Suspense fallback="Loading......">
                        <AvailableTech techPromise={techPromise()} />   
                    
                    </Suspense>
                </div>
                
                <div className="col-span-1">
                    <SelectedCard />

                </div>
                

            </div>


            
        </div>
    );
};

