import { useEffect, useState } from "react";
import axios from "../../Services/axios";
import { FiFilter, FiUpload, FiEye, FiEdit2, FiChevronDown, FiChevronUp, FiInfo } from "react-icons/fi";
import { MdOutlineCheckCircle, MdOutlineAutoAwesome, MdTrendingUp } from "react-icons/md";
import { BsRobot } from "react-icons/bs";

import {
  FiX,
  FiMapPin,
  FiHeart,
  FiShare2,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import {
  MdVerified,
  MdOutlinePhotoLibrary,
} from "react-icons/md";


const DARK = "#0d2d2a";



function StatusBadge({ status }) {
  const isVerified = status === "VERIFIED";
  return (
    <span className={`text-[10px] font-bold px-3 py-1.5 rounded-full border ${isVerified ? "text-teal-700 border-teal-400 bg-white" : "text-yellow-600 border-yellow-400 bg-white"}`}>
      {status}
    </span>
  );
}

function AIAssistant({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3" style={{ backgroundColor: "#f0faf8" }}>
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: DARK }}>
            <BsRobot size={16} />
          </div>
          <span className="text-sm font-bold" style={{ color: DARK }}>AI Property Assistant</span>
        </div>
        <div className="flex items-center gap-2">
          <FiChevronDown size={16} className="text-gray-500" />
          <button onClick={onClose} className="p-1 hover:bg-gray-200 rounded-full transition-colors">
            <FiX size={15} className="text-gray-500" />
          </button>
        </div>
      </div>

      <div className="px-4 py-4">
        <p className="text-xs text-gray-500 italic mb-4">Select a property from the table to unlock AI workflows.</p>

        <button className="w-full flex items-center justify-between text-sm font-semibold text-white px-4 py-3 rounded-xl mb-2 hover:opacity-90 transition-opacity" style={{ backgroundColor: "#10b981" }}>
          Generate Description
          <MdOutlineAutoAwesome size={16} className="text-white" />
        </button>

        <button className="w-full flex items-center justify-between text-sm font-semibold px-4 py-3 rounded-xl border-2 mb-4 hover:bg-teal-50 transition-colors" style={{ borderColor: "#10b981", color: "#10b981", backgroundColor: "white" }}>
          Suggest Price
          <MdTrendingUp size={16} />
        </button>

        <div className="bg-gray-50 rounded-xl px-4 py-3 flex items-start gap-2.5">
          <FiInfo size={15} className="text-gray-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-gray-600 leading-relaxed">
            DIGINIWAS AI analyzed <span className="font-bold text-gray-900">market volatility</span>. Recommendation: Increase lead capture requirements for premium estates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PropertyManagement() {
  const [chatOpen, setChatOpen] = useState(false);
  const [properties, setProperties] = useState([]);
const [loading, setLoading] = useState(true);
const [previewOpen, setPreviewOpen] = useState(false);
const [selectedProperty, setSelectedProperty] = useState(null);
const [currentImage, setCurrentImage] = useState(0);

const getProperties = async () => {
  try {
    const res = await axios.get("/properties");

    setProperties(res.data.properties);

  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  getProperties();
}, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6">

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-1">Portfolio / <span className="text-gray-700">Properties</span></p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-1" style={{ color: DARK, fontFamily: "Georgia, serif" }}>Property Management</h1>
            <p className="text-sm text-gray-500">Oversee asset verification, lead distribution, and AI-driven valuation.</p>
          </div>
          <div className="flex items-center gap-3 self-start mt-1">
            <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-xl px-4 py-2.5 bg-white hover:bg-gray-50 transition-colors">
              <FiFilter size={15} /> Filter
            </button>
            <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 border border-gray-300 rounded-xl px-4 py-2.5 bg-white hover:bg-gray-50 transition-colors">
              <FiUpload size={15} /> Export
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-gray-100">
                  {["Property Name", "Location", "Status", "Market Price", "Assigned Agent", "Leads", "Actions"].map((h) => (
                    <th key={h} className="text-left text-[10px] font-bold tracking-widest text-gray-400 uppercase px-5 py-4 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {properties.map((p, i) => (
                  <tr key={p.id} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${i === properties.length - 1 ? "border-0" : ""}`}>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                      <img
  src={
    p.images?.length
      ? p.images[0].url
      : "https://via.placeholder.com/120"
  }
  alt={p.title}
  className="w-12 h-12 rounded-xl object-cover shrink-0"
/>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{p.title}</p>
                          <p className="text-xs text-gray-400 mt-0.5">ID: {p.propertyId}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-gray-600 whitespace-nowrap">{p.city}</td>
                    <td className="px-5 py-4">
                      <StatusBadge status={p.status} />
                    </td>
                    <td className="px-5 py-4 text-sm font-bold text-gray-900 whitespace-nowrap">{p.price}</td>
                    <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
  <div className="w-7 h-7 rounded-full bg-gray-300 flex items-center justify-center text-xs font-bold">
    A
  </div>

  <span className="text-sm text-gray-700">
    Admin
  </span>
</div>
                    </td>
                    <td className="px-5 py-4 text-sm font-bold text-gray-900">{p.leads}  0</td>
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                      <button
  onClick={() => {
    setSelectedProperty(p);
    setPreviewOpen(true);
  }}
  className="p-1 hover:bg-gray-100 rounded-full"
>
  <FiEye size={17} className="text-gray-500" />
</button>
                        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                          <FiEdit2 size={15} className="text-gray-500" />
                        </button>
                        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                          <MdOutlineCheckCircle size={19} className="text-teal-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-4 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-500">Showing 1 to 3 of 152 Assets</p>
          </div>
        </div>

      </div>

      <AIAssistant open={chatOpen} onClose={() => setChatOpen(false)} />

      <PropertyPreview
    open={previewOpen}
    property={selectedProperty}
    onClose={() => setPreviewOpen(false)}
/>

      <button
        onClick={() => setChatOpen(v => !v)}
        className="fixed bottom-4 right-4 sm:right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:opacity-90 transition-opacity"
        style={{ backgroundColor: DARK }}
      >
        {chatOpen ? <FiX size={22} /> : <BsRobot size={22} />}
      </button>

    </div>
  );
}

function PropertyPreview({
  open,
  property,
  onClose,
}) {

  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setSelectedImage(0);
  }, [property]);

  if (!open || !property) return null;

  const images =
    property.images?.length
      ? property.images
      : [
          {
            url: "https://via.placeholder.com/1200x700",
          },
        ];

  return (
    <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm overflow-y-auto">

      <div className="min-h-screen flex justify-center py-10 px-5">

        <div className="bg-white rounded-[32px] w-full max-w-7xl shadow-2xl overflow-hidden">

          {/* HEADER */}

          <div className="sticky top-0 z-20 bg-white border-b px-8 py-5 flex items-center justify-between">

            <div>

              <h2 className="text-3xl font-bold text-gray-900">
                {property.title}
              </h2>

              <div className="flex items-center gap-2 mt-2 text-gray-500">

                <FiMapPin />

                <span>
                  {property.address},{" "}
                  {property.city}
                </span>

              </div>

            </div>

            <div className="flex items-center gap-3">

              <button className="w-11 h-11 rounded-full border hover:bg-gray-100">

                <FiHeart className="mx-auto"/>

              </button>

              <button className="w-11 h-11 rounded-full border hover:bg-gray-100">

                <FiShare2 className="mx-auto"/>

              </button>

              <button
                onClick={onClose}
                className="w-11 h-11 rounded-full bg-black text-white hover:bg-gray-800"
              >

                <FiX className="mx-auto"/>

              </button>

            </div>

          </div>

          {/* HERO */}

          <div className="grid lg:grid-cols-5 gap-8 p-8">

            {/* LEFT */}

            <div className="lg:col-span-3">

              <div className="relative">

                <img
                  src={images[selectedImage].url}
                  className="w-full h-[520px] object-cover rounded-3xl"
                />

                <div className="absolute left-5 top-5">

                  <span className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm flex items-center gap-2">

                    <MdVerified />

                    {property.status}

                  </span>

                </div>

                <button
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev === 0
                        ? images.length - 1
                        : prev - 1
                    )
                  }
                  className="absolute left-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow"
                >

                  <FiChevronLeft className="mx-auto"/>

                </button>

                <button
                  onClick={() =>
                    setSelectedImage((prev) =>
                      prev === images.length - 1
                        ? 0
                        : prev + 1
                    )
                  }
                  className="absolute right-5 top-1/2 -translate-y-1/2 bg-white w-12 h-12 rounded-full shadow"
                >

                  <FiChevronRight className="mx-auto"/>

                </button>

              </div>

              {/* THUMBNAILS */}

              <div className="flex gap-4 mt-5 overflow-x-auto pb-2">

                {images.map((img, index) => (

                  <img
                    key={index}
                    src={img.url}
                    onClick={() =>
                      setSelectedImage(index)
                    }
                    className={`w-28 h-20 rounded-xl cursor-pointer object-cover border-4 transition

                    ${
                      selectedImage === index
                        ? "border-emerald-600"
                        : "border-transparent"
                    }`}
                  />

                ))}

              </div>

            </div>

            {/* RIGHT */}

            <div className="lg:col-span-2">

              <div className="bg-gradient-to-br from-emerald-700 to-teal-900 rounded-3xl p-8 text-white">

                <p className="uppercase tracking-widest text-sm opacity-80">

                  Premium Property

                </p>

                <h1 className="text-5xl font-bold mt-3">

                  ₹ {Number(property.price).toLocaleString()}

                </h1>

                <p className="mt-2 text-white/80">

                  ₹ {property.pricePerSqft} / Sq.Ft

                </p>

                <div className="mt-8 space-y-5">

                  <div className="flex justify-between">

                    <span>Property ID</span>

                    <b>{property.propertyId}</b>

                  </div>

                  <div className="flex justify-between">

                    <span>Category</span>

                    <b>{property.category}</b>

                  </div>

                  <div className="flex justify-between">

                    <span>Transaction</span>

                    <b>{property.transactionType}</b>

                  </div>

                  <div className="flex justify-between">

                    <span>Developer</span>

                    <b>{property.developerName}</b>

                  </div>

                  <div className="flex justify-between">

                    <span>Project</span>

                    <b>{property.projectName}</b>

                  </div>

                </div>

                <button className="mt-10 w-full py-4 rounded-2xl bg-white text-emerald-800 font-bold hover:bg-gray-100">

                  Contact Sales Team

                </button>

              </div>

              <div className="mt-6 bg-gray-50 rounded-3xl p-6">

                <div className="flex items-center gap-3">

                  <MdOutlinePhotoLibrary
                    size={24}
                    className="text-emerald-600"
                  />

                  <div>

                    <p className="font-bold">

                      {images.length} Property Images

                    </p>

                    <p className="text-gray-500 text-sm">

                      High Resolution Gallery

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

       


      {/* ================= PROPERTY OVERVIEW ================= */}

<div className="px-8 pb-10">

<div className="grid xl:grid-cols-3 gap-8">

  {/* LEFT */}

  <div className="xl:col-span-2 space-y-8">

    {/* Quick Stats */}

    <div className="bg-white rounded-3xl border shadow-sm p-7">

      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Property Overview
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

        <InfoCard
          title="Bedrooms"
          value={property.bedrooms || "-"}
          icon="🛏"
        />

        <InfoCard
          title="Bathrooms"
          value={property.bathrooms || "-"}
          icon="🚿"
        />

        <InfoCard
          title="Balconies"
          value={property.balconies || "-"}
          icon="🌇"
        />

        <InfoCard
          title="Parking"
          value={property.parking || "-"}
          icon="🚗"
        />

      </div>

    </div>

    {/* Property Details */}

    <div className="bg-white rounded-3xl border shadow-sm p-7">

      <h2 className="text-2xl font-bold mb-6">
        Property Details
      </h2>

      <div className="grid md:grid-cols-2 gap-y-5 gap-x-10">

        <DetailItem
          label="Property ID"
          value={property.propertyId}
        />

        <DetailItem
          label="Category"
          value={property.category}
        />

        <DetailItem
          label="Transaction"
          value={property.transactionType}
        />

        <DetailItem
          label="Status"
          value={property.status}
        />

        <DetailItem
          label="Project"
          value={property.projectName}
        />

        <DetailItem
          label="Developer"
          value={property.developerName}
        />

        <DetailItem
          label="Facing"
          value={property.facing}
        />

        <DetailItem
          label="Furnishing"
          value={property.furnishing}
        />

        <DetailItem
          label="Floor"
          value={property.floorNo}
        />

        <DetailItem
          label="Total Floors"
          value={property.totalFloors}
        />

      </div>

    </div>

    {/* Description */}

    <div className="bg-white rounded-3xl border shadow-sm p-7">

      <h2 className="text-2xl font-bold mb-5">
        Property Description
      </h2>

      <p className="leading-8 text-gray-600">

        {property.description ||

          "No Description Added"}

      </p>

    </div>

  </div>



  {/* RIGHT */}

  <div className="space-y-7">

    {/* Pricing */}

    <div className="bg-gradient-to-br from-emerald-600 to-teal-900 rounded-3xl p-6 text-white">

      <h2 className="text-2xl font-bold">

        Pricing

      </h2>

      <div className="space-y-5 mt-6">

        <PriceRow
          label="Property Price"
          value={`₹ ${Number(property.price).toLocaleString()}`}
        />

        <PriceRow
          label="Price / Sq.Ft"
          value={`₹ ${property.pricePerSqft}`}
        />

        <PriceRow
          label="Maintenance"
          value={`₹ ${property.maintenance || 0}`}
        />

        <PriceRow
          label="Booking Amount"
          value={`₹ ${property.bookingAmount || 0}`}
        />

        <PriceRow
          label="Negotiable"
          value={property.negotiable ? "Yes" : "No"}
        />

      </div>

    </div>

    {/* Area */}

    <div className="bg-white rounded-3xl border shadow-sm p-6">

      <h2 className="text-xl font-bold mb-5">

        Area Details

      </h2>

      <PriceRow
        label="Super Built-up"
        value={`${property.superBuiltupArea} Sq.Ft`}
      />

      <PriceRow
        label="Carpet Area"
        value={`${property.carpetArea} Sq.Ft`}
      />

    </div>

  </div>

</div>

</div>

{/* ================= LOCATION ================= */}

<div className="px-8 pb-10">

  <div className="bg-white rounded-3xl border shadow-sm p-7">

    <h2 className="text-2xl font-bold mb-6">
      Property Location
    </h2>

    <div className="grid lg:grid-cols-2 gap-8">

      {/* Left */}

      <div className="space-y-5">

        <DetailItem
          label="Address"
          value={property.address}
        />

        <DetailItem
          label="City"
          value={property.city}
        />

        <DetailItem
          label="Locality"
          value={property.locality}
        />

        <DetailItem
          label="Pincode"
          value={property.pinCode}
        />

        <DetailItem
          label="Latitude"
          value={property.latitude}
        />

        <DetailItem
          label="Longitude"
          value={property.longitude}
        />

      </div>

      {/* Map */}

      <div>

        {property.latitude && property.longitude ? (

          <iframe
            title="map"
            width="100%"
            height="350"
            className="rounded-3xl border"
            loading="lazy"
            src={`https://maps.google.com/maps?q=${property.latitude},${property.longitude}&z=15&output=embed`}
          />

        ) : (

          <div className="h-[350px] rounded-3xl bg-gray-100 flex items-center justify-center">

            No Location Available

          </div>

        )}

      </div>

    </div>

  </div>

</div>

{/* ================= Amenities ================= */}

<div className="px-8 pb-10">

<div className="bg-white rounded-3xl border shadow-sm p-7">

<h2 className="text-2xl font-bold mb-6">

Amenities

</h2>

<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">

{property.amenities?.length ?

property.amenities.map((item,index)=>(

<div
key={index}
className="rounded-2xl border p-5 bg-gray-50 hover:shadow-md transition"
>

<div className="text-3xl">

✨

</div>

<p className="mt-3 font-semibold">

{item}

</p>

</div>

))

:

<div>No Amenities Added</div>

}

</div>

</div>

</div>



{/* Documents */}

<div className="px-8 pb-10">

<div className="bg-white rounded-3xl border shadow-sm p-7">

<h2 className="text-2xl font-bold mb-6">

Documents

</h2>

<div className="flex flex-wrap gap-4">

{property.floorPlan && (

<a
href={property.floorPlan}
target="_blank"
className="bg-emerald-600 text-white px-6 py-3 rounded-xl"
>

Floor Plan

</a>

)}

{property.reraCertificate && (

<a
href={property.reraCertificate}
target="_blank"
className="bg-blue-600 text-white px-6 py-3 rounded-xl"
>

RERA Certificate

</a>

)}

</div>

</div>

</div>

{property.videoLink && (

<div className="px-8 pb-10">

<div className="bg-white rounded-3xl border shadow-sm p-7">

<h2 className="text-2xl font-bold mb-6">

Property Walkthrough

</h2>

<video
controls
className="rounded-3xl w-full"
src={property.videoLink}
/>

</div>

</div>

)}


{property.tags?.length > 0 && (

<div className="px-8 pb-10">

<div className="bg-white rounded-3xl border shadow-sm p-7">

<h2 className="text-2xl font-bold mb-6">

Intelligence Tags

</h2>

<div className="flex flex-wrap gap-3">

{property.tags.map((tag,index)=>(

<span
key={index}
className="bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full"
>

#{tag}

</span>

))}

</div>

</div>

</div>

)}

<div className="border-t bg-gray-50 px-8 py-6 flex justify-end gap-4">

<button
onClick={onClose}
className="px-7 py-3 rounded-2xl border"
>

Close

</button>


</div>



    </div>

    </div>
    </div>

    
  );
}
function InfoCard({ title, value, icon }) {
  return (
    <div className="rounded-2xl border bg-gray-50 hover:bg-white hover:shadow-lg transition-all p-5">
      <div className="text-3xl">
        {icon}
      </div>

      <p className="text-sm text-gray-500 mt-3">
        {title}
      </p>

      <h3 className="text-2xl font-bold mt-1">
        {value || "-"}
      </h3>
    </div>
  );
}

function DetailItem({ label, value }) {

  return (

    <div className="flex justify-between border-b pb-3">

      <span className="text-gray-500">

        {label}

      </span>

      <span className="font-semibold text-gray-900">

        {value || "-"}

      </span>

    </div>

  );

}


function PriceRow({ label, value }) {

  return (

    <div className="flex justify-between">

      <span className="text-white/70">

        {label}

      </span>

      <span className="font-bold">

        {value}

      </span>

    </div>

  );

}


