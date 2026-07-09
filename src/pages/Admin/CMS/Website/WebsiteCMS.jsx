import { MdOutlineLanguage, MdDynamicFeed } from "react-icons/md";
import { useState } from "react";
import HeroSectionCMS from "../HeroSection/HeroSectionCMS";
import RoundSectionCMS from "../HeroSection/RoundSectionCMS";
import TestimonialCMS from "../HeroSection/TestimonialCMS";
import AgentCornerCMS from "../HeroSection/AgentCornerCMS";
import AgentNetworkCMS from "../HeroSection/AgentNetworkCMS";
import NetworkDensityCMS from "../HeroSection/NetworkDensityCMS";
import PlanSectionCMS from "../HeroSection/PlanSectionCMS";
import AboutStatsCMS from "../HeroSection/AboutStatsCMS";
import AboutGenesisCMS from "../HeroSection/AboutGenesisCMS";
import AboutMissionVisionCMS from "../HeroSection/AboutMissionVisionCMS";
import AboutVisionaryCMS from "../HeroSection/AboutVisionaryCMS";
import PlatformFeaturesCMS from "../HeroSection/PlatformFeaturesCMS"; // <-- Dynamic Component Import Kiya

const DARK="#0d2d2a";

export default function WebsiteCMS(){

    const [active,setActive]=useState("Hero");

    return(

        <div className="grid lg:grid-cols-4 gap-6">

            {/* Left */}

            <div
  className="
    bg-white
    rounded-3xl
    shadow-sm
    p-5
    sticky
    top-20  
    h-fit
    max-h-[calc(100vh-3rem)]
    overflow-y-auto
  "
>

                <div className="flex items-center gap-3 mb-6">

                    <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center">

                        <MdOutlineLanguage className="text-teal-700" size={24}/>

                    </div>

                    <div>

                        <h3 className="font-bold text-[#0d2d2a] ">
                            Website
                        </h3>

                        <p className="text-xs text-gray-400">
                            Home Page Sections
                        </p>

                    </div>

                </div>

                <div className="mt-4 mb-3">
  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
    Home Page
  </p>
</div>

                <button

                onClick={()=>setActive("Hero")}

                className={`w-full text-left rounded-xl px-4 py-3 transition

                ${active==="Hero"

                ?"bg-teal-600 text-white"

                :"hover:bg-gray-100"

                }`}

                >

                    Hero Section

                </button>

              

                <button
  onClick={() => setActive("Round")}
  className={`w-full text-left rounded-xl px-4 py-3 mt-2 transition
  ${
    active === "Round"
      ? "bg-teal-600 text-white"
      : "hover:bg-gray-100"
  }`}
>
  Round Images Section
</button>

<button
  onClick={() => setActive("Testimonial")}
  className={`w-full text-left rounded-xl px-4 py-3 mt-2 transition
  ${
    active === "Testimonial"
      ? "bg-teal-600 text-white"
      : "hover:bg-gray-100"
  }`}
>
  Testimonials
</button>

<div className="mt-7 mb-3 border-t pt-5">
  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
    Agent Corner
  </p>
</div>

<button
  onClick={() => setActive("AgentCorner")}
  className={`w-full text-left rounded-xl px-4 py-3 mt-2 transition
  ${
    active === "AgentCorner"
      ? "bg-teal-600 text-white"
      : "hover:bg-gray-100"
  }`}
>
  Agent Corner
</button>

<button
  onClick={() => setActive("AgentNetwork")}
  className={`w-full text-left rounded-xl px-4 py-3 mt-2 transition
  ${
    active === "AgentNetwork"
      ? "bg-teal-600 text-white"
      : "hover:bg-gray-100"
  }`}
>
  Agent Network
</button>

<button
  onClick={() => setActive("NetworkDensity")}
  className={`w-full text-left rounded-xl px-4 py-3 mt-2 transition
  ${
    active === "NetworkDensity"
      ? "bg-teal-600 text-white"
      : "hover:bg-gray-100"
  }`}
>
  Network Density
</button>

<button
  onClick={() => setActive("PlanSection")}
  className={`w-full text-left rounded-xl px-4 py-3 mt-2 transition
  ${
    active === "PlanSection"
      ? "bg-teal-600 text-white"
      : "hover:bg-gray-100"
  }`}
>
  Partnership Plans
</button>

<div className="mt-7 mb-3 border-t pt-5">
  <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
    About Page
  </p>
</div>

<button
  onClick={() => setActive("AboutStats")}
  className={`w-full text-left rounded-xl px-4 py-3 mt-2 transition
  ${
    active === "AboutStats"
      ? "bg-teal-600 text-white"
      : "hover:bg-gray-100"
  }`}
>
  About Statistics
</button>


  <button
                  onClick={() => setActive("PlatformFeatures")}
                  className={`w-full text-left rounded-xl px-4 py-3 mt-2 transition
                  ${
                    active === "PlatformFeatures"
                      ? "bg-teal-600 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  Platform Features
                </button>

<button
  onClick={() => setActive("AboutGenesis")}
  className={`w-full text-left rounded-xl px-4 py-3 mt-2 transition
  ${
    active === "AboutGenesis"
      ? "bg-teal-600 text-white"
      : "hover:bg-gray-100"
  }`}
>
  About Genesis
</button>

<button
  onClick={() => setActive("MissionVision")}
  className={`w-full text-left rounded-xl px-4 py-3 mt-2 transition ${
    active === "MissionVision"
      ? "bg-teal-600 text-white"
      : "hover:bg-gray-100"
  }`}
>
  Mission & Vision
</button>

<button
          onClick={() => setActive("Visionaries")}
          className={`w-full text-left rounded-xl px-4 py-3 mt-2 transition ${
            active === "Visionaries"
              ? "bg-teal-600 text-white"
              : "hover:bg-gray-100"
          }`}
        >
          Visionaries
        </button>


            </div>

            {/* Right */}

            <div className="lg:col-span-3">

                {active==="Hero" &&

                <HeroSectionCMS/>
                 }

{/* Platform Features CMS Section View Router Condition Add Ho Gayi */}
{active === "PlatformFeatures" && (
  <PlatformFeaturesCMS />
)}

{active === "Round" && (
  <RoundSectionCMS />
)}

{active === "Testimonial" && (
  <TestimonialCMS />
)}

{active === "AgentCorner" && (
  <AgentCornerCMS />
)}

{active === "AgentNetwork" && (
  <AgentNetworkCMS />
)}

{active === "NetworkDensity" && (
  <NetworkDensityCMS />
)}

{active === "PlanSection" && (
  <PlanSectionCMS />
)}

{active === "AboutStats" && (
  <AboutStatsCMS />
)}

{active === "AboutGenesis" && (
  <AboutGenesisCMS />
)}

{active === "MissionVision" && (
  <AboutMissionVisionCMS />
)}

{active === "Visionaries" && <AboutVisionaryCMS />}
            </div>

        </div>

    )

}