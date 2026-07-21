import { useState } from "react";
import axios from "../../Services/axios";
import { FiX, FiMenu, FiChevronDown } from "react-icons/fi";
import {
  MdOutlineImage,
  MdOutlineLink,
  MdOutlineDescription,
  MdOutlineVerified,
  MdOutlineLabel,
  MdAdd,
  MdCheckCircle,
  MdAddCircleOutline,
  MdEdit,
  MdDelete,
  MdInfoOutline,
  MdOutlinePool,
  MdOutlineFitnessCenter,
  MdOutlinePark,
  MdOutlineSecurity,
  MdOutlineSportsTennis,
  MdOutlineMap,
  MdOutlineCurrencyRupee,
  MdOutlineArchitecture,
  MdOutlineCloudUpload,
  MdOutlineShield
} from "react-icons/md";

import MapPicker from "../../components/MapPicker";

import Swal from "sweetalert2";
 
const DARK = "#0d2d2a";

 // TAGS/MOCK_IMAGES ke just niche ya PropertyIntakeForm ke bahar add karo
const INITIAL_FORM_DATA = {
  title: "",
  transactionType: "Sale",
  category: "",
  status: "Draft",

  projectName: "",
  developerName: "",
  description: "",

  city: "",
  locality: "",
  pinCode: "",
  address: "",

  latitude: "",
  longitude: "",

  price: "",
  pricePerSqft: "",
  maintenance: "",
  bookingAmount: "",

  superBuiltupArea: "",
  carpetArea: "",

  bedrooms: "",
  bathrooms: "",
  balconies: "",
  parking: "",

  floorNo: "",
  totalFloors: "",
  facing: "",
  furnishing: "",

  videoLink: "",

  amenities: [],
  tags: [],
  documents: [],

  negotiable: false,

  featured: false,
  verified: false,
};


const TAGS = [
  { label: "Ready to Move", activeColor: "teal" },
  { label: "Lake Facing", activeColor: "gray" },
  { label: "Vastu Compliant", activeColor: "gray" },
  { label: "Luxury Property", activeColor: "yellow" },
  { label: "Smart Home Enabled", activeColor: "gray" },
  { label: "Prime Location", activeColor: "gray" },
  { label: "Sea Facing", activeColor: "gray" },
];
 
const MOCK_IMAGES = [
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=300&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=300&q=80",
];
 

const navItems = [
  { label: "Properties" },
  { label: "Submissions", active: true },
  { label: "Guidelines" },
  { label: "Support" },
];

const sidebarItems = [
  { icon: <MdInfoOutline size={18} />, label: "Basic Details" },
//   { icon: <MdOutlineListAlt size={18} />, label: "Property Specs" },
//   { icon: <MdOutlineCloudUpload size={18} />, label: "Media & Docs" },
//   { icon: <MdOutlinePersonOutline size={18} />, label: "Owner Info" },
//   { icon: <MdOutlineMap size={18} />, label: "Connectivity" },
//   { icon: <MdOutlineSettings size={18} />, label: "SEO & Settings" },
];

const amenities = [
  { icon: <MdOutlinePool size={28} />, label: "Swimming Pool" },
  { icon: <MdOutlineFitnessCenter size={28} />, label: "Modern Gym", active: true },
  { icon: <MdOutlinePark size={28} />, label: "Private Garden" },
  { icon: <MdOutlineSecurity size={28} />, label: "24/7 Security" },
  { icon: <MdOutlineSportsTennis size={28} />, label: "Tennis Court" },
];

function SectionHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: "#0d2d2a" }}>
        {icon}
      </div>
      <h2 className="text-2xl  font-bold" style={{ color: "#0d2d2a", fontFamily: "Georgia, serif" }}>{title}</h2>
    </div>
  );
}

function FieldLabel({ children }) {
  return <p className="text-sm font-semibold text-gray-600 mb-2">{children}</p>;
}

function Input({
  placeholder,
  value,
  name,
  onChange,
  disabled,
  type = "text",
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      disabled={disabled}
      placeholder={placeholder}
      className={`w-full border-0 border-b text-base pb-2 focus:outline-none bg-transparent ${
        disabled
          ? "bg-gray-100 text-gray-400 px-3 py-2 rounded-lg border border-gray-200"
          : "border-gray-300 text-gray-800 placeholder-gray-400 focus:border-teal-600"
      }`}
    />
  );
}

function Select({
  name,
  value,
  onChange,
  options = [],
}) {
  return (
    <div className="relative">
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border-0 border-b border-gray-300 text-base pb-2 focus:outline-none bg-transparent text-gray-800 appearance-none pr-6 focus:border-teal-600"
      >
        <option value="">Select</option>

        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <FiChevronDown
        size={16}
        className="absolute right-0 bottom-3 text-gray-400 pointer-events-none"
      />
    </div>
  );
}

function PriceInput({
  label,
  placeholder,
  name,
  value,
  onChange,
}) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <div className="flex items-center border-b border-gray-300 pb-2 gap-1">
        <MdOutlineCurrencyRupee size={18} className="text-gray-500 flex-shrink-0" />
        <input
  className="flex-1 border-0 text-2xl font-bold text-gray-900 focus:outline-none bg-transparent placeholder-gray-300"
  placeholder={placeholder}
  name={name}
  value={value}
  onChange={onChange}
/>
      </div>
    </div>
  );
}

function Toggle({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={() => onChange && onChange(!checked)}
      className={`flex items-center w-11 h-6 rounded-full p-0.5 transition-colors duration-200 ${
        checked ? "bg-teal-500 justify-end" : "bg-gray-300 justify-start"
      }`}
    >
      <span className="w-5 h-5 bg-white rounded-full shadow" />
    </button>
  );
}



function BottomBar({ handleSubmit }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200 px-4 sm:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <MdOutlineShield size={18} className="text-teal-600" />
        <span className="text-sm text-gray-600">Listing health: <span className="font-bold text-teal-600">High (92%)</span></span>
      </div>
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <button className="flex-1 sm:flex-none border border-gray-300 text-sm font-semibold text-gray-700 rounded-full px-6 py-2.5 hover:bg-gray-50 transition-colors whitespace-nowrap">
          Save Draft
        </button>
        <button className="flex-1 sm:flex-none border-2 border-teal-600 text-sm font-semibold text-teal-600 rounded-full px-6 py-2.5 hover:bg-teal-50 transition-colors whitespace-nowrap">
          Preview Property
        </button>
        <button
  onClick={handleSubmit}
  className="flex-1 sm:flex-none bg-teal-500 hover:bg-teal-600 text-white text-sm font-bold uppercase tracking-wide rounded-full px-6 py-2.5 transition-colors whitespace-nowrap"
>
  Publish Property
</button>
      </div>
    </div>
  );
}


 
function MediaAndTagsSections({
  images,
  setImages,
  handleImageChange,

  formData,
  setFormData,



  video,
  setVideo,

  floorPlan,
  setFloorPlan,

  reraCertificate,
  setReraCertificate,
}) {
 

  const [dragOver, setDragOver] = useState(false);

  const toggleTag = (label) => {
    const updated = formData.tags.includes(label)
      ? formData.tags.filter((t) => t !== label)
      : [...formData.tags, label];
  
    setFormData((prev) => ({
      ...prev,
      tags: updated,
    }));
  };
  const getTagStyle = (tag) => {
    const active = formData.tags.includes(tag.label);
    if (!active) {
      return "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50";
    }
    if (tag.activeColor === "teal") {
      return "border-2 border-teal-600 text-teal-700 bg-white";
    }
    if (tag.activeColor === "yellow") {
      return "border-2 border-yellow-400 text-yellow-600 bg-white";
    }
    // ✅ gray tags ke liye bhi ab alag active style
    return "border-2 border-gray-800 text-gray-900 bg-gray-100";
  };
  
  const getTagIcon = (tag) => {
    const active = formData.tags.includes(tag.label);
    if (!active) return null;
    if (tag.activeColor === "teal") {
      return <MdCheckCircle size={16} className="text-teal-600 flex-shrink-0" />;
    }
    if (tag.activeColor === "yellow") {
      return <MdAddCircleOutline size={16} className="text-yellow-500 flex-shrink-0" />;
    }
    // ✅ gray tags pe bhi ab checkmark dikhega
    return <MdCheckCircle size={16} className="text-gray-800 flex-shrink-0" />;
  };
 
 

  const deleteImage=(index)=>{

    setImages(prev=>prev.filter((_,i)=>i!==index));
    
    };
    
    const replaceImage=(index,file)=>{
    
    if(!file) return;
    
    const arr=[...images];
    
    arr[index]=file;
    
    setImages(arr);
    
    };
 
  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-8 mb-5">
        <SectionHeader
          icon={<MdOutlineImage size={20} />}
          title="Visual Asset Portfolio"
        />
 
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); }}
          className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 flex flex-col items-center justify-center gap-4 transition-colors mb-6 ${dragOver ? "border-teal-400 bg-teal-50" : "border-gray-300 bg-white"}`}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: DARK }}
          >
            <MdOutlineCloudUpload size={30} className="text-white" />
          </div>
          <div className="text-center">
            <p className="text-base text-gray-600 mb-1">
              Drag and drop high-res property images
            </p>
            <p className="text-sm text-gray-400">
            JPG, JPEG, PNG, WEBP only. Maximum 25 images.
            </p>
            <p className="text-sm text-gray-400">
            Minimum 1920×1080px for premium listings.
            </p>
          </div>
          <label
htmlFor="propertyImages"
className="mt-2 px-8 py-3 rounded-full text-sm font-semibold text-white cursor-pointer"
style={{ backgroundColor: DARK }}
>

Browse Local Files

</label>

<input
type="file"
multiple
accept="image/*"
onChange={handleImageChange}
className="hidden"
id="propertyImages"
/>


        </div>
 
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {images.map((image, index) => (

<div
key={index}
className="relative aspect-square rounded-2xl overflow-hidden group"
>

<img
src={URL.createObjectURL(image)}
className="w-full h-full object-cover"
/>

{/* Overlay */}

<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-3">

{/* Replace */}

<label
htmlFor={`replace-${index}`}
className="bg-white rounded-full p-2 cursor-pointer hover:scale-105"
>

<MdEdit size={18} />

</label>

<input
id={`replace-${index}`}
type="file"
accept="image/*"
hidden
onChange={(e)=>replaceImage(index,e.target.files[0])}
/>

{/* Delete */}

<button
type="button"
onClick={()=>deleteImage(index)}
className="bg-red-500 text-white rounded-full p-2"
>

<MdDelete size={18}/>

</button>

</div>

</div>

))}
          {[0, 1].map((i) => (
            <div
              key={`empty-${i}`}
              className="aspect-square rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center cursor-pointer hover:border-gray-300 transition-colors"
            >
              <MdAdd size={28} className="text-gray-300" />
            </div>
          ))}
        </div>
 
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-600 mb-2">
              Video / 360° Walkthrough Link
            </p>
            <div className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-3">
              <MdOutlineLink size={18} className="text-gray-400 flex-shrink-0" />
              <input
                className="flex-1 text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                placeholder="Paste YouTube, Matterport or Vimeo link"
                value={formData.videoLink}

onChange={(e)=>

setFormData({
...formData,
videoLink:e.target.value
})

}


              />

<div className="mt-4">

<input

type="file"

accept="video/*"

onChange={(e)=>setVideo(e.target.files[0])}

/>

<p className="text-xs text-gray-400 mt-1">
    Allowed format: MP4, MOV, WEBM (max size as per server limit)
  </p>

</div>
            </div>
          </div>
          <div className="flex-1">
  <p className="text-sm font-semibold text-gray-600 mb-2">
    Documentation (PDF)
  </p>
  <div className="flex flex-wrap gap-3">
    <label htmlFor="floorPlan" className="flex items-center gap-2 border rounded-full px-4 py-3 cursor-pointer">
      <MdOutlineDescription />
      Floor Plan
    </label>
    <input hidden id="floorPlan" type="file" accept=".pdf" onChange={(e) => setFloorPlan(e.target.files[0])} />

    <label htmlFor="rera" className="flex items-center gap-2 border rounded-full px-4 py-3 cursor-pointer">
      <MdOutlineVerified />
      RERA Certificate
    </label>
    <input hidden id="rera" type="file" accept=".pdf" onChange={(e) => setReraCertificate(e.target.files[0])} />
  </div>

  {/* ✅ ye line add karo */}
  <p className="text-xs text-gray-400 mt-2">
    Only PDF format allowed for Floor Plan and RERA Certificate.
  </p>
</div>
        </div>
      </div>
 
      <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-8 mb-5">
        <SectionHeader
          icon={<MdOutlineLabel size={20} />}
          title="Intelligence Tags"
        />
        <div className="flex flex-wrap gap-3">
          {TAGS.map((tag) => (
            <button
              key={tag.label}
              onClick={() => toggleTag(tag.label)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors ${getTagStyle(tag)}`}
            >
              {tag.label}
              {getTagIcon(tag)}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}




export default function PropertyIntakeForm() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [transactionType, setTransactionType] = useState("sale");
  // const [negotiable, setNegotiable] = useState(false);
  // const [selectedAmenities, setSelectedAmenities] = useState(["Modern Gym"]);



// const [selectedTags,setSelectedTags]=useState([]);

const [video,setVideo]=useState(null);

const [videoLink,setVideoLink]=useState("");

const [floorPlan,setFloorPlan]=useState(null);

const [reraCertificate,setReraCertificate]=useState(null);


const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files));
  };


const handleSubmit = async () => {
  try {
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      if (Array.isArray(value)) {
        value.forEach((v) => data.append(key, v));
      } else {
        data.append(key, value);
      }
    });

    images.forEach((img) => data.append("images", img));

    if (floorPlan) data.append("floorPlan", floorPlan);
    if (reraCertificate) data.append("reraCertificate", reraCertificate);
    if (video) data.append("video", video);

    // ⏳ Uploading Loader SweetAlert
    Swal.fire({
      title: "Publishing Property...",
      text: "Please wait while we upload your property details.",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/properties`,
      data,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    // 🎉 SUCCESS SWEETALERT (DIGINIWAS Theme)
    Swal.fire({
      icon: "success",
      title: "Property Added Successfully!",
      text: "Your property listing is now published.",
      confirmButtonColor: "#0d2d2a", // App theme color
      confirmButtonText: "Great!",
    });

    console.log(res.data);

    // ✅ Form Reset
    setFormData(INITIAL_FORM_DATA);
    setImages([]);
    setVideo(null);
    setVideoLink("");
    setFloorPlan(null);
    setReraCertificate(null);

  }  catch (err) {
  console.error(err.response?.data || err.message);

  // 1. Backend Error Response Text Extract Karo
  let errorMessage = "Failed to add property. Please check your inputs.";

  if (err.response?.data?.message) {
    let rawMsg = err.response.data.message;

    // Agar Mongoose validation error message aati hai:
    // "Property validation failed: title: Path `title` is required., category: Path `category` is required."
    if (rawMsg.includes("Property validation failed:")) {
      // Clean formatting: sirf required fields ka naam clean dikhao
      errorMessage = rawMsg
        .replace("Property validation failed:", "")
        .replace(/Path `(\w+)` is required\./g, "• $1 is required")
        .replaceAll(",", "\n");
    } else {
      errorMessage = rawMsg;
    }
  }

  // 2. SweetAlert Pop-up Show Karo
  Swal.fire({
    icon: "error",
    title: "Validation Error",
    text: errorMessage,
    confirmButtonColor: "#e11d48", // Theme Red
    confirmButtonText: "Fix Errors",
    customClass: {
      popup: 'rounded-2xl border border-rose-200 shadow-xl',
    }
  });
}
};
  // const handleSubmit = async () => {
  //   try {
  //     const data = new FormData();
  
  //     Object.keys(formData).forEach((key) => {
  //       const value = formData[key];
  //       if (Array.isArray(value)) {
  //         value.forEach((v) => data.append(key, v));
  //       } else {
  //         data.append(key, value);
  //       }
  //     });
  
  //     images.forEach((img) => data.append("images", img));
  
  //     if (floorPlan) data.append("floorPlan", floorPlan);
  //     if (reraCertificate) data.append("reraCertificate", reraCertificate);
  //     if (video) data.append("video", video);
  
  //     const res = await axios.post(
  //       `${import.meta.env.VITE_API_BASE_URL}/properties`,
  //       data,
  //       { headers: { "Content-Type": "multipart/form-data" } }
  //     );
  
  //     alert("Property Added Successfully");
  //     console.log(res.data);
  
  //     // ✅ Form ko poori tarah reset karo publish hone ke baad
  //     setFormData(INITIAL_FORM_DATA);
  //     setImages([]);
  //     setVideo(null);
  //     setVideoLink("");
  //     setFloorPlan(null);
  //     setReraCertificate(null);
  //   } catch (err) {
  //     console.log(err.response?.data || err.message);
  //   }
  // };

  const toggleAmenity = (label) => {

    let updated=[];

    if(formData.amenities.includes(label)){
        updated=formData.amenities.filter(item=>item!==label);
    }else{
        updated=[...formData.amenities,label];
    }

    setFormData({
        ...formData,
        amenities:updated
    });

}

  return (
    <div className="min-h-screen bg-gray-100 font-sans">

      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <span className="text-2xl font-black tracking-tight" style={{ color: "#0d2d2a", fontFamily: "Georgia, serif" }}>DIGINIWAS</span>
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(item => (
              <button key={item.label} className={`text-sm font-medium pb-0.5 ${item.active ? "border-b-2 border-gray-900 text-gray-900 font-semibold" : "text-gray-500 hover:text-gray-800"}`}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex border border-gray-300 text-sm font-medium text-gray-700 rounded-full px-5 py-2 hover:bg-gray-50">Cancel</button>
            <button className="text-sm font-bold text-white rounded-full px-5 py-2" style={{ backgroundColor: "#0d2d2a" }}>Save Draft</button>
            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
              <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">A</div>
            </div>
            <button className="md:hidden p-1.5 rounded text-gray-600 hover:bg-gray-100" onClick={() => setSidebarOpen(true)}>
              <FiMenu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <div className="relative w-64 bg-white h-full shadow-xl p-5 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-base font-bold text-gray-900">New Listing</p>
                <p className="text-xs text-gray-400">ID: #DW-8821</p>
              </div>
              <button onClick={() => setSidebarOpen(false)} className="p-1.5 hover:bg-gray-100 rounded-lg">
                <FiX size={18} className="text-gray-500" />
              </button>
            </div>
            <nav className="space-y-1 flex-1">
              {sidebarItems.map((item, i) => (
                <button key={i} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
                  <span className="text-gray-400">{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </nav>
            <div className="pt-4 border-t border-gray-100">
              <button className="w-full bg-teal-500 text-white text-sm font-bold uppercase tracking-wide rounded-xl py-3 hover:bg-teal-600 transition-colors">
                Submit for Review
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto flex">

        <aside className="hidden lg:flex flex-col w-60 flex-shrink-0 sticky top-14 self-start h-[calc(100vh-3.5rem)] bg-white border-r border-gray-200 p-5">
          <div className="mb-6">
            <p className="text-base font-bold text-gray-900">New Listing</p>
            <p className="text-xs text-gray-400">ID: #DW-8821</p>
          </div>
          <nav className="space-y-1 flex-1">
            {sidebarItems.map((item, i) => (
              <button key={i} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors text-left">
                <span className="text-gray-400">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-4 border-t border-gray-100">
            <button className="w-full bg-teal-500 text-white text-sm font-bold uppercase tracking-wide rounded-xl py-3 hover:bg-teal-600 transition-colors">
              Submit for Review
            </button>
          </div>
        </aside>

        <main className="flex-1 min-w-0 px-3 sm:px-6 lg:px-8 py-6 pb-32">
          <p className="text-xs text-gray-400 mb-1">Properties &gt; <span className="font-semibold text-gray-600">New Listing</span></p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: "#0d2d2a", fontFamily: "Georgia, serif" }}>Property Intelligence Intake</h1>
          <p className="text-sm text-gray-500 mb-6">Enter the architectural and commercial DNA of the new asset.</p>

          <div className="flex items-center gap-0 mb-8">
            {[1, 2, 3, 4].map((step, i) => (
              <div key={step} className="flex items-center flex-1 last:flex-none">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${step === 1 ? "text-white" : "bg-gray-200 text-gray-500"}`} style={step === 1 ? { backgroundColor: "#0d2d2a" } : {}}>
                  {step}
                </div>
                {i < 3 && <div className="flex-1 h-px bg-gray-300 mx-1" />}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-8 mb-5">
            <SectionHeader icon={<MdInfoOutline size={20} />} title="Basic Information" />
            <div className="mb-6">
              <FieldLabel>Property Title</FieldLabel>
              <Input
  name="title"
  value={formData.title}
  onChange={handleChange}
  placeholder="e.g. Skyline Sky-Villa at Marine Drive"
/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <FieldLabel>Auto ID</FieldLabel>
                <Input placeholder="#DW-8821" disabled value="#DW-8821" />
              </div>
              <div>
                <FieldLabel>Transaction Type</FieldLabel>
                <div className="flex gap-2 mt-1">
               

<button
  onClick={() => setFormData({ ...formData, transactionType: "Sale" })}
  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-2 transition-colors ${
    formData.transactionType === "Sale" ? "text-white border-transparent" : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
  }`}
  style={formData.transactionType === "Sale" ? { backgroundColor: "#0d2d2a", borderColor: "#0d2d2a" } : {}}
>
  FOR SALE
</button>

<button
  onClick={() => setFormData({ ...formData, transactionType: "Rent" })}
  className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-2 transition-colors ${
    formData.transactionType === "Rent" ? "text-white border-transparent" : "border-gray-300 text-gray-700 bg-white hover:bg-gray-50"
  }`}
  style={formData.transactionType === "Rent" ? { backgroundColor: "#0d2d2a", borderColor: "#0d2d2a" } : {}}
>
  FOR RENT
</button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <FieldLabel>Category</FieldLabel>
                <Select
   name="category"
   value={formData.category}
   onChange={handleChange}
   options={[
      "Apartment",
      "Villa",
      "Plot",
      "Commercial",
      "Office",
      "Shop"
   ]}
/>
              </div>
              <div>
                <FieldLabel>Listing Status</FieldLabel>
                <Select
   name="status"
   value={formData.status}
   onChange={handleChange}
   options={[
      "Draft",
      "Active",
      "Inactive",
      "Sold"
   ]}
/>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <FieldLabel>Project Name</FieldLabel>
                <Input
  name="projectName"
  value={formData.projectName}
  onChange={handleChange}
  placeholder="Enter Project Name"
/>
              </div>
              <div>
                <FieldLabel>Developer Name</FieldLabel>
                <Input
  name="developerName"
  value={formData.developerName}
  onChange={handleChange}
  placeholder="Enter Developer Name"
/>
              </div>
            </div>
            <div>
              <FieldLabel>Property Description</FieldLabel>
              <textarea
  name="description"
  value={formData.description}
  onChange={handleChange}
  className="w-full border border-gray-200 rounded-xl p-4 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-teal-500 resize-y"
  rows={6}
  placeholder="Describe the architectural highlights, amenities, and lifestyle offered..."
/>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-8 mb-5">
            <SectionHeader icon={<MdOutlineMap size={20} />} title="Geospatial Data" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">

              <div>
                <FieldLabel>City</FieldLabel>
                <Input
  name="city"
  value={formData.city}
  onChange={handleChange}
  placeholder="City"
/>
              </div>
              <div>
                <FieldLabel>Locality</FieldLabel>
                <Input
  name="locality"
  value={formData.locality}
  onChange={handleChange}
  placeholder="Locality"
/>
              </div>
              <div>
                <FieldLabel>PIN Code</FieldLabel>
                <Input
  name="pinCode"
  value={formData.pinCode}
  onChange={handleChange}
  placeholder="000000"
/>
              </div>
            </div>
            <div className="mb-6">
              <FieldLabel>Full Address</FieldLabel>
              <Input
  name="address"
  value={formData.address}
  onChange={handleChange}
  placeholder="Apartment No, Floor, Street, Landmark"
/>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">

    <Input
        name="latitude"
        value={formData.latitude}
        onChange={handleChange}
        placeholder="Latitude"
    />

    <Input
        name="longitude"
        value={formData.longitude}
        onChange={handleChange}
        placeholder="Longitude"
    />

</div>


            </div>
            <MapPicker
    formData={formData}
    setFormData={setFormData}
/>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-8 mb-5">
            <SectionHeader icon={<MdOutlineCurrencyRupee size={20} />} title="Commercial Valuation" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
            <PriceInput
  label="Total Property Price"
  placeholder="5,00,00,000"
  name="price"
  value={formData.price}
  onChange={handleChange}
/>
<PriceInput
  label="Price Per Sq.Ft"
  placeholder="24,500"
  name="pricePerSqft"
  value={formData.pricePerSqft}
  onChange={handleChange}
/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
              <div>
                <FieldLabel>Maintenance (Monthly)</FieldLabel>
                <div className="flex items-center border-b border-gray-300 pb-2 gap-1">
                  <span className="text-gray-500 text-sm">₹</span>
                  <input
  name="maintenance"
  value={formData.maintenance}
  onChange={handleChange}
  className="flex-1 border-0 text-base text-gray-700 focus:outline-none bg-transparent placeholder-gray-400"
  placeholder="15,000"
/>
                </div>
              </div>
              <div>
                <FieldLabel>Booking Amount</FieldLabel>
                <div className="flex items-center border-b border-gray-300 pb-2 gap-1">
                  <span className="text-gray-500 text-sm">₹</span>
                  <input
  name="bookingAmount"
  value={formData.bookingAmount}
  onChange={handleChange}
  className="flex-1 border-0 text-base text-gray-700 focus:outline-none bg-transparent placeholder-gray-400"
  placeholder="10,00,000"
/>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl px-5 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <MdOutlineCurrencyRupee size={20} className="text-teal-600 flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-900">Price Negotiable</p>
                  <p className="text-xs text-gray-500">Flag this for potential buyers</p>
                </div>
              </div>
              <Toggle
  checked={formData.negotiable}
  onChange={(value)=>{
      setFormData({
          ...formData,
          negotiable:value
      })
  }}
/>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-8 mb-5">
            <SectionHeader icon={<MdOutlineArchitecture size={20} />} title="Technical Specifications" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <FieldLabel>Super Built-up Area (Sq.Ft)</FieldLabel>
                <Input
name="superBuiltupArea"
value={formData.superBuiltupArea}
onChange={handleChange}
placeholder="2500"
/>
              </div>
              <div>
                <FieldLabel>Carpet Area (Sq.Ft)</FieldLabel>
                <Input
name="carpetArea"
value={formData.carpetArea}
onChange={handleChange}
placeholder="1950"
/>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div>
                <FieldLabel>Bedrooms</FieldLabel>
                <Select
name="bedrooms"
value={formData.bedrooms}
onChange={handleChange}
options={["1","2","3","4","5","6"]}
/>
              </div>
              <div>
                <FieldLabel>Bathrooms</FieldLabel>
                <Select
name="bathrooms"
value={formData.bathrooms}
onChange={handleChange}
options={["1","2","3","4","5","6"]}
/>
              </div>
              <div>
                <FieldLabel>Balconies</FieldLabel>
                <Select
name="balconies"
value={formData.balconies}
onChange={handleChange}
options={["0","1","2","3","4"]}
/>
              </div>
              <div>
                <FieldLabel>Parking</FieldLabel>
                <Select
name="parking"
value={formData.parking}
onChange={handleChange}
options={[
"Covered",
"Open",
"None"
]}
/>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              <div>
                <FieldLabel>Floor No.</FieldLabel>
                <Input
name="floorNo"
value={formData.floorNo}
onChange={handleChange}
placeholder="12"
/>
              </div>
              <div>
                <FieldLabel>Total Floors</FieldLabel>
                <Input
name="totalFloors"
value={formData.totalFloors}
onChange={handleChange}
placeholder="25"
/>
              </div>
              <div>
                <FieldLabel>Facing</FieldLabel>
                <Select
name="facing"
value={formData.facing}
onChange={handleChange}
options={[
"North",
"South",
"East",
"West",
"North-East",
"North-West",
"South-East",
"South-West"
]}
/>
              </div>
              <div>
                <FieldLabel>Furnishing</FieldLabel>
                <Select
name="furnishing"
value={formData.furnishing}
onChange={handleChange}
options={[
"Furnished",
"Semi Furnished",
"Unfurnished"
]}
/>
              </div>
            </div>
            <div>
              <FieldLabel>Luxury Amenities</FieldLabel>
              <div className="flex flex-wrap gap-3 mt-2">
                {amenities.map((a) => {
                 const active = formData.amenities.includes(a.label);
                  return (
                    <button
                      key={a.label}
                      onClick={() => toggleAmenity(a.label)}
                      className={`flex flex-col items-center gap-2 w-24 sm:w-28 py-4 rounded-2xl border-2 transition-colors ${active ? "border-teal-400 bg-teal-400" : "border-gray-200 bg-white hover:bg-gray-50"}`}
                    >
                      <span className={active ? "text-white" : "text-gray-700"}>{a.icon}</span>
                      <span className={`text-xs font-semibold text-center leading-tight ${active ? "text-white" : "text-gray-700"}`}>{a.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>


          <MediaAndTagsSections
    images={images}
    setImages={setImages}
    handleImageChange={handleImageChange}

    formData={formData}
    setFormData={setFormData}

    video={video}
    setVideo={setVideo}

    floorPlan={floorPlan}
    setFloorPlan={setFloorPlan}

    reraCertificate={reraCertificate}
    setReraCertificate={setReraCertificate}
/>

        </main>
      </div>

      
     


      <BottomBar handleSubmit={handleSubmit} />
    </div>
  );
}