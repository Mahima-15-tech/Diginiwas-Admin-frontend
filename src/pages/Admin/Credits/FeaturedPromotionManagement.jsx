import React, { useEffect, useMemo, useState } from "react";
import {
  Search,
  Star,
  CheckCircle2,
  Clock3,
  Coins,
  Eye,
  Users,
  RefreshCw,
  Building2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getBoostOperationsDashboardApi } from "../../../Services/boostOperationsService";

const formatDate = (value) => {
  if (!value) return "—";

  return new Date(value).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const getRemainingText = (expiresAt) => {
  if (!expiresAt) return "No expiry";

  const diff = new Date(expiresAt).getTime() - Date.now();
  if (diff <= 0) return "Expired";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  if (days > 0) return `${days}d ${hours}h left`;
  return `${hours}h left`;
};

const statusStyle = (status) => {
  const map = {
    Approved: "border-emerald-200 bg-emerald-50 text-emerald-600",
    Pending: "border-amber-200 bg-amber-50 text-amber-600",
    Expired: "border-slate-200 bg-slate-100 text-slate-500",
    Rejected: "border-red-200 bg-red-50 text-red-500",
    Cancelled: "border-orange-200 bg-orange-50 text-orange-500",
  };

  return map[status] || "border-slate-200 bg-slate-50 text-slate-500";
};

export default function FeaturedPromotionManagement() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({ summary: {}, boosts: [] });

  const loadData = async () => {
    try {
      setLoading(true);

      const response = await getBoostOperationsDashboardApi({
        promotionType: "FEATURED_7_DAYS",
        search: search.trim() || undefined,
        status: status === "All" ? undefined : status,
      });

      if (response?.success) {
        setData(response.data || {});
      }
    } catch (error) {
      console.error("Featured promotion dashboard error:", error);
      setData({ summary: {}, boosts: [] });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(loadData, 250);
    return () => clearTimeout(timer);
  }, [search, status]);

  const rows = useMemo(
    () =>
      (data?.boosts || []).filter(
        (item) => item.promotionType === "FEATURED_7_DAYS"
      ),
    [data]
  );

  const activeCount = rows.filter((item) => item.isActive).length;
  const approvedCount = rows.filter(
    (item) => item.effectiveStatus === "Approved"
  ).length;
  const pendingCount = rows.filter((item) => item.status === "Pending").length;
  const creditsSpent = rows.reduce(
    (sum, item) => sum + Number(item.creditsCharged || 0),
    0
  );

  const cards = [
    {
      title: "ACTIVE FEATURED",
      value: activeCount,
      icon: Star,
      subtitle: "Currently featured properties",
      tone: "bg-[#E7F8F3] text-[#11846E]",
    },
    {
      title: "TOTAL APPROVED",
      value: approvedCount,
      icon: CheckCircle2,
      subtitle: "Approved featured requests",
      tone: "bg-[#EDF3FA] text-[#4C6C8E]",
    },
    {
      title: "PENDING REQUESTS",
      value: pendingCount,
      icon: Clock3,
      subtitle: "Waiting for approval",
      tone: "bg-[#FFF7E7] text-[#C87917]",
    },
    {
      title: "CREDITS SPENT",
      value: creditsSpent.toLocaleString("en-IN"),
      icon: Coins,
      subtitle: "Featured credits consumed",
      tone: "bg-[#F6F0FF] text-[#7951A3]",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F7FA] p-4 text-[#10243A]">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-[24px] font-black tracking-[-0.5px] text-[#0B1D35]">
            Featured Property Operations
          </h1>
          <p className="mt-1 text-[12px] text-[#62738B]">
            Track featured properties, approval status, expiry dates and partner promotion activity
          </p>
        </div>

        <button
          type="button"
          onClick={loadData}
          className="flex h-9 w-fit items-center gap-2 rounded-xl border border-[#DCE4EE] bg-white px-4 text-[11px] font-bold text-[#52657D] shadow-sm"
        >
          <RefreshCw size={13} />
          Refresh
        </button>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(({ title, value, icon: Icon, subtitle, tone }) => (
          <div
            key={title}
            className="rounded-2xl border border-[#E0E6EF] bg-white p-5 shadow-[0_2px_5px_rgba(15,23,42,0.04)]"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-bold tracking-wide text-[#8390A6]">
                  {title}
                </p>
                <p className="mt-3 text-[28px] font-black text-[#0B1D35]">
                  {value}
                </p>
              </div>

              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${tone}`}
              >
                <Icon size={18} />
              </div>
            </div>

            <p className="mt-2 text-[10px] text-[#8A97AA]">{subtitle}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-[#E0E6EF] bg-white shadow-[0_2px_5px_rgba(15,23,42,0.04)]">
        <div className="border-b border-[#E8EDF3] px-4 py-4">
          <div className="inline-flex border-b-2 border-[#17867A] px-4 pb-3 text-[11px] font-bold text-[#137B70]">
            Featured Properties
          </div>
        </div>

        <div className="flex flex-col gap-3 border-b border-[#E8EDF3] p-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-[390px]">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9AA6B8]"
            />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search property, partner, request ID..."
              className="h-10 w-full rounded-xl border border-[#DDE5EE] bg-[#FAFBFC] pl-9 pr-3 text-[11px] outline-none focus:border-[#62A99F]"
            />
          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="h-10 rounded-xl border border-[#DDE5EE] bg-white px-3 text-[11px] font-semibold text-[#607089] outline-none"
          >
            <option value="All">All Status</option>
            <option value="Approved">Approved</option>
            <option value="Pending">Pending</option>
            <option value="Expired">Expired</option>
            <option value="Rejected">Rejected</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1180px]">
            <thead>
              <tr className="bg-[#073A58] text-white">
                <Th>Property</Th>
                <Th>Partner</Th>
                <Th>Promotion</Th>
                <Th>Credits</Th>
                <Th>Featured On</Th>
                <Th>Expiry</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={8} className="py-14 text-center text-[11px] text-[#8A98AA]">
                    Loading featured properties...
                  </td>
                </tr>
              ) : rows.length ? (
                rows.map((item) => {
                  const property = item.propertyMongoId;
                  const partner = item.partnerMongoId;
                  const displayStatus = item.effectiveStatus || item.status;

                  return (
                    <tr
                      key={item._id}
                      className="border-b border-[#EDF1F5] last:border-0 hover:bg-[#FAFCFD]"
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-12 w-14 overflow-hidden rounded-lg bg-[#EDF3F5]">
                            {property?.images?.[0]?.url ? (
                              <img
                                src={property.images[0].url}
                                alt={item.propertyTitle}
                                className="h-full w-full object-cover"
                              />
                            ) : (
                              <div className="flex h-full items-center justify-center text-[#8FA0AC]">
                                <Building2 size={17} />
                              </div>
                            )}
                          </div>

                          <div>
                            <p className="max-w-[180px] text-[11px] font-bold text-[#243C54]">
                              {item.propertyTitle || property?.title || "Property"}
                            </p>
                            <p className="mt-1 text-[9px] font-bold text-[#188374]">
                              {item.propertyCode || property?.propertyId}
                            </p>
                            <p className="mt-1 text-[8px] text-[#8B98A9]">
                              {[item.locality, item.city].filter(Boolean).join(", ")}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4">
                        <p className="text-[11px] font-bold text-[#3A4E64]">
                          {item.partnerName || partner?.name || "—"}
                        </p>
                        <p className="mt-1 text-[9px] text-[#168173]">
                          {item.partnerCode || partner?.partnerId || "—"}
                        </p>
                      </td>

                      <td className="px-4 py-4">
                        <span className="rounded-full bg-[#EEF6F5] px-2.5 py-1 text-[9px] font-bold text-[#197A70]">
                          Featured 7 Days
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <p className="flex items-center gap-1 text-[11px] font-black text-[#3A4D63]">
                          <Coins size={12} />
                          {Number(item.creditsCharged || 0).toLocaleString("en-IN")}
                        </p>
                      </td>

                      <td className="px-4 py-4">
                        <p className="text-[10px] font-semibold text-[#4D6177]">
                          {formatDate(item.approvedAt || item.requestedAt)}
                        </p>
                      </td>

                      <td className="px-4 py-4">
                        <p className="text-[10px] font-semibold text-[#4D6177]">
                          {formatDate(item.expiresAt)}
                        </p>
                        <p
                          className={`mt-1 text-[8px] font-bold ${
                            getRemainingText(item.expiresAt) === "Expired"
                              ? "text-red-500"
                              : "text-[#168173]"
                          }`}
                        >
                          {getRemainingText(item.expiresAt)}
                        </p>
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-bold ${statusStyle(
                            displayStatus
                          )}`}
                        >
                          {displayStatus}
                        </span>
                      </td>

                      <td className="px-4 py-4">
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              property?._id &&
                              navigate(`/property-management/${property._id}`)
                            }
                            className="flex h-8 items-center gap-1.5 rounded-lg border border-[#D8E3E8] bg-white px-2.5 text-[9px] font-bold text-[#416172] hover:bg-[#F4F8F8]"
                          >
                            <Eye size={11} />
                            Property
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              partner?._id && navigate(`/partners/${partner._id}`)
                            }
                            className="flex h-8 items-center gap-1.5 rounded-lg border border-[#D8E3E8] bg-white px-2.5 text-[9px] font-bold text-[#416172] hover:bg-[#F4F8F8]"
                          >
                            <Users size={11} />
                            Partner
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={8} className="py-14 text-center text-[11px] font-semibold text-[#8A98AA]">
                    No featured promotion records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Th({ children }) {
  return (
    <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-wide">
      {children}
    </th>
  );
}
