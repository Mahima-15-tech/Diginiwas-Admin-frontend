
import React, {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  Search,
  Rocket,
  Building2,
  Users,
  Clock3,
  Coins,
  Eye,
  CalendarDays,
  CheckCircle2,
  AlertTriangle,
  TimerReset,
  RefreshCw,
  TrendingUp,
  Wallet,
  ArrowUpRight,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  getBoostOperationsDashboardApi,
  approveBoostRequestApi,
  rejectBoostRequestApi,
} from "../../../Services/boostOperationsService";

const formatDate = (value) => {
  if (!value) return "—";

  return new Date(value).toLocaleString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );
};

const formatShortDate = (value) => {
  if (!value) return "—";

  return new Date(value).toLocaleDateString(
    "en-IN",
    {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }
  );
};

const typeLabel = (value) => {
  const map = {
    PROPERTY_BOOST: "Property Boost",
    FEATURED_7_DAYS: "Featured 7 Days",
    LOCALITY_TOP_30_DAYS:
      "Locality Top 30 Days",
  };

  return map[value] || value || "—";
};

const getRemainingText = (expiresAt) => {
  if (!expiresAt) {
    return "No expiry";
  }

  const diff =
    new Date(expiresAt).getTime() -
    Date.now();

  if (diff <= 0) {
    return "Expired";
  }

  const days =
    Math.floor(
      diff / (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      (
        diff %
        (1000 * 60 * 60 * 24)
      ) /
        (1000 * 60 * 60)
    );

  if (days > 0) {
    return `${days}d ${hours}h left`;
  }

  return `${hours}h left`;
};

export default function BoostPropertyPartnerDashboard() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] =
    useState("Boosted Properties");

  const [search, setSearch] =
    useState("");

  const [status, setStatus] =
    useState("All");

  const [loading, setLoading] =
    useState(true);

  const [data, setData] =
    useState({
      summary: {},
      boosts: [],
      partnerPerformance: [],
    });

  const loadDashboard = async () => {
    try {
      setLoading(true);

      const response =
        await getBoostOperationsDashboardApi({
          search:
            search.trim() ||
            undefined,
          status:
            activeTab ===
            "Boosted Properties"
              ? (
                  status === "All"
                    ? undefined
                    : status
                )
              : undefined,
        });

      if (response?.success) {
        setData(
          response.data || {}
        );
      }
    } catch (error) {
      console.error(
        "Boost dashboard error:",
        error
      );

      setData({
        summary: {},
        boosts: [],
        partnerPerformance: [],
      });
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (request) => {
    try {
      await approveBoostRequestApi(request._id, {
        remarks: "Approved from Boost Management",
        actor: { name: "Admin", role: "Admin" },
      });
      await loadDashboard();
    } catch (error) {
      alert(error?.response?.data?.message || "Unable to approve request");
    }
  };

  const handleReject = async (request) => {
    try {
      await rejectBoostRequestApi(request._id, {
        remarks: "Rejected from Boost Management",
        actor: { name: "Admin", role: "Admin" },
      });
      await loadDashboard();
    } catch (error) {
      alert(error?.response?.data?.message || "Unable to reject request");
    }
  };

  useEffect(() => {
    const timer = setTimeout(
      loadDashboard,
      250
    );

    return () =>
      clearTimeout(timer);
  }, [
    search,
    status,
    activeTab,
  ]);

  const summary =
    data?.summary || {};

  const cards = [
    {
      title: "ACTIVE BOOSTS",
      value:
        summary.activeBoosts || 0,
      icon: Rocket,
      caption:
        "Currently promoted properties",
      tone:
        "bg-[#E8F8F4] text-[#11846E]",
    },
    {
      title: "TOTAL APPROVED",
      value:
        summary.approvedTotal || 0,
      icon: CheckCircle2,
      caption:
        "Approved promotion requests",
      tone:
        "bg-[#EEF3FA] text-[#4D6B8B]",
    },
    {
      title: "PENDING REQUESTS",
      value:
        summary.pendingBoosts || 0,
      icon: Clock3,
      caption:
        "Waiting for approval",
      tone:
        "bg-[#FFF7E7] text-[#C87917]",
    },
    {
      title: "CREDITS SPENT",
      value:
        Number(
          summary.creditsSpent || 0
        ).toLocaleString(
          "en-IN"
        ),
      icon: Coins,
      caption:
        "Promotion credits consumed",
      tone:
        "bg-[#F6F0FF] text-[#7A52A1]",
    },
  ];

  const visibleBoosts =
    useMemo(
      () =>
        data?.boosts || [],
      [data]
    );

  const partnerRows =
    useMemo(
      () =>
        data?.partnerPerformance ||
        [],
      [data]
    );

  return (
    <div className="min-h-screen bg-[#F5F7FA] p-4 text-[#10243A]">
      {/* HEADER */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-[24px] font-black tracking-[-0.5px] text-[#0B1D35]">
            Boost Property & Partner Operations
          </h1>

          <p className="mt-1 text-[12px] text-[#62738B]">
            Track boosted properties, expiry dates, credits and partner promotion activity
          </p>
        </div>

        <button
          type="button"
          onClick={loadDashboard}
          className="flex h-9 w-fit items-center gap-2 rounded-xl border border-[#DCE4EE] bg-white px-4 text-[11px] font-bold text-[#52657D] shadow-sm"
        >
          <RefreshCw size={13} />
          Refresh
        </button>
      </div>

      {/* SUMMARY CARDS */}
      <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {cards.map(
          ({
            title,
            value,
            icon: Icon,
            caption,
            tone,
          }) => (
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

                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${tone}`}>
                  <Icon size={18} />
                </div>
              </div>

              <p className="mt-2 text-[10px] text-[#8A97AA]">
                {caption}
              </p>
            </div>
          )
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="mt-5 rounded-2xl border border-[#E0E6EF] bg-white shadow-[0_2px_5px_rgba(15,23,42,0.04)]">
        {/* TABS */}
        <div className="flex overflow-x-auto border-b border-[#E8EDF3] px-4">
          {[
            "Boosted Properties",
            "Partner Performance",
          ].map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() =>
                setActiveTab(tab)
              }
              className={`relative min-w-max px-4 py-4 text-[11px] font-bold ${
                activeTab === tab
                  ? "text-[#137B70]"
                  : "text-[#7E8CA2]"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#17867A]" />
              )}
            </button>
          ))}
        </div>

        {/* FILTER */}
        <div className="flex flex-col gap-3 border-b border-[#E8EDF3] p-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-[390px]">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9AA6B8]"
            />

            <input
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder={
                activeTab ===
                "Boosted Properties"
                  ? "Search property, partner, request ID..."
                  : "Search partner..."
              }
              className="h-10 w-full rounded-xl border border-[#DDE5EE] bg-[#FAFBFC] pl-9 pr-3 text-[11px] outline-none focus:border-[#62A99F]"
            />
          </div>

          {activeTab ===
            "Boosted Properties" && (
            <select
              value={status}
              onChange={(e) =>
                setStatus(
                  e.target.value
                )
              }
              className="h-10 rounded-xl border border-[#DDE5EE] bg-white px-3 text-[11px] font-semibold text-[#607089] outline-none"
            >
              <option value="All">
                All Status
              </option>
              <option value="Approved">
                Approved
              </option>
              <option value="Pending">
                Pending
              </option>
              <option value="Expired">
                Expired
              </option>
              <option value="Rejected">
                Rejected
              </option>
              <option value="Cancelled">
                Cancelled
              </option>
            </select>
          )}
        </div>

        {activeTab ===
        "Boosted Properties" ? (
          <BoostTable
            rows={visibleBoosts}
            loading={loading}
            navigate={navigate}
            onApprove={handleApprove}
            onReject={handleReject}
          />
        ) : (
          <PartnerTable
            rows={partnerRows}
            loading={loading}
            navigate={navigate}
          />
        )}
      </div>
    </div>
  );
}

function BoostTable({
  rows,
  loading,
  navigate,
  onApprove,
  onReject,
}) {
  if (loading) {
    return (
      <LoadingState />
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[1180px]">
        <thead>
          <tr className="bg-[#073A58] text-white">
            <Th>Property</Th>
            <Th>Partner</Th>
            <Th>Boost Type</Th>
            <Th>Credits</Th>
            <Th>Boosted On</Th>
            <Th>Expiry</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </tr>
        </thead>

        <tbody>
          {rows.length ? (
            rows.map((item) => {
              const property =
                item.propertyMongoId;
              const partner =
                item.partnerMongoId;

              return (
                <tr
                  key={item._id}
                  className="border-b border-[#EDF1F5] last:border-0 hover:bg-[#FAFCFD]"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-14 overflow-hidden rounded-lg bg-[#EDF3F5]">
                        {property
                          ?.images?.[0]
                          ?.url ? (
                          <img
                            src={
                              property
                                .images[0]
                                .url
                            }
                            alt={
                              item.propertyTitle
                            }
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-[#8FA0AC]">
                            <Building2
                              size={17}
                            />
                          </div>
                        )}
                      </div>

                      <div>
                        <p className="max-w-[180px] text-[11px] font-bold text-[#243C54]">
                          {item.propertyTitle ||
                            property?.title ||
                            "Property"}
                        </p>

                        <p className="mt-1 text-[9px] font-bold text-[#188374]">
                          {item.propertyCode ||
                            property?.propertyId}
                        </p>

                        <p className="mt-1 text-[8px] text-[#8B98A9]">
                          {[
                            item.locality,
                            item.city,
                          ]
                            .filter(
                              Boolean
                            )
                            .join(", ")}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <p className="text-[11px] font-bold text-[#3A4E64]">
                      {item.partnerName ||
                        partner?.name ||
                        "—"}
                    </p>

                    <p className="mt-1 text-[9px] text-[#168173]">
                      {item.partnerCode ||
                        partner?.partnerId ||
                        "—"}
                    </p>
                  </td>

                  <td className="px-4 py-4">
                    <span className="rounded-full bg-[#EEF6F5] px-2.5 py-1 text-[9px] font-bold text-[#197A70]">
                      {typeLabel(
                        item.promotionType
                      )}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <p className="flex items-center gap-1 text-[11px] font-black text-[#3A4D63]">
                      <Coins size={12} />
                      {Number(
                        item.creditsCharged ||
                          0
                      ).toLocaleString(
                        "en-IN"
                      )}
                    </p>
                  </td>

                  <td className="px-4 py-4">
                    <p className="text-[10px] font-semibold text-[#4D6177]">
                      {formatDate(
                        item.approvedAt ||
                          item.requestedAt
                      )}
                    </p>
                  </td>

                  <td className="px-4 py-4">
                    <p className="text-[10px] font-semibold text-[#4D6177]">
                      {formatDate(
                        item.expiresAt
                      )}
                    </p>

                    <p
                      className={`mt-1 text-[8px] font-bold ${
                        getRemainingText(
                          item.expiresAt
                        ) ===
                        "Expired"
                          ? "text-red-500"
                          : "text-[#168173]"
                      }`}
                    >
                      {getRemainingText(
                        item.expiresAt
                      )}
                    </p>
                  </td>

                  <td className="px-4 py-4">
                    <StatusPill
                      status={
                        item.effectiveStatus ||
                        item.status
                      }
                    />
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          property?._id &&
                          navigate(
                            `/property-management/${property._id}`
                          )
                        }
                        className="flex h-8 items-center gap-1.5 rounded-lg border border-[#D8E3E8] bg-white px-2.5 text-[9px] font-bold text-[#416172] hover:bg-[#F4F8F8]"
                      >
                        <Eye size={11} />
                        Property
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          partner?._id &&
                          navigate(
                            `/partnerdashboard?tab=dashboard&partnerId=${partner._id}`
                          )
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
            <EmptyRow
              colSpan={8}
              text="No boost records found"
            />
          )}
        </tbody>
      </table>
    </div>
  );
}

function PartnerTable({
  rows,
  loading,
  navigate,
}) {
  if (loading) {
    return (
      <LoadingState />
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[950px]">
        <thead>
          <tr className="bg-[#073A58] text-white">
            <Th>Partner</Th>
            <Th>Wallet</Th>
            <Th>Active Boosts</Th>
            <Th>Approved</Th>
            <Th>Expired</Th>
            <Th>Credits Spent</Th>
            <Th>Last Boost</Th>
            <Th>Action</Th>
          </tr>
        </thead>

        <tbody>
          {rows.length ? (
            rows.map((row) => {
              const partner =
                row.partner;

              return (
                <tr
                  key={
                    row.partnerMongoId
                  }
                  className="border-b border-[#EDF1F5] last:border-0 hover:bg-[#FAFCFD]"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E8F7F3] text-[11px] font-black text-[#168173]">
                        {(row.partnerName ||
                          partner?.name ||
                          "P")
                          .split(" ")
                          .map(
                            (x) =>
                              x[0]
                          )
                          .join("")
                          .slice(0, 2)}
                      </div>

                      <div>
                        <p className="text-[11px] font-bold text-[#33495F]">
                          {row.partnerName ||
                            partner?.name}
                        </p>

                        <p className="mt-1 text-[9px] text-[#188374]">
                          {row.partnerCode ||
                            partner?.partnerId}
                        </p>

                        <p className="mt-1 text-[8px] text-[#8B98A9]">
                          {partner
                            ?.location
                            ?.city ||
                            "—"}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <p className="flex items-center gap-1 text-[11px] font-black text-[#3B5065]">
                      <Wallet size={12} />
                      {Number(
                        partner
                          ?.creditWallet
                          ?.balance ||
                          0
                      ).toLocaleString(
                        "en-IN"
                      )}
                    </p>
                  </td>

                  <td className="px-4 py-4">
                    <MetricValue
                      value={
                        row.activeBoosts
                      }
                      tone="text-[#10816F]"
                    />
                  </td>

                  <td className="px-4 py-4">
                    <MetricValue
                      value={
                        row.approvedBoosts
                      }
                    />
                  </td>

                  <td className="px-4 py-4">
                    <MetricValue
                      value={
                        row.expiredBoosts
                      }
                      tone="text-[#D76B5E]"
                    />
                  </td>

                  <td className="px-4 py-4">
                    <MetricValue
                      value={Number(
                        row.creditsSpent ||
                          0
                      ).toLocaleString(
                        "en-IN"
                      )}
                      icon={Coins}
                    />
                  </td>

                  <td className="px-4 py-4 text-[10px] font-semibold text-[#596E82]">
                    {formatDate(
                      row.lastBoostAt
                    )}
                  </td>

                  <td className="px-4 py-4">
                    <button
                      type="button"
                      onClick={() =>
                        partner?._id &&
                        navigate(
                          `/partnerdashboard?tab=dashboard&partnerId=${partner._id}`
                        )
                      }
                      className="flex h-8 items-center gap-1.5 rounded-lg bg-[#0B796D] px-3 text-[9px] font-bold text-white shadow-sm hover:bg-[#086A60]"
                    >
                      View Partner
                      <ArrowUpRight
                        size={11}
                      />
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <EmptyRow
              colSpan={8}
              text="No partner promotion activity found"
            />
          )}
        </tbody>
      </table>
    </div>
  );
}

function StatusPill({
  status,
}) {
  const map = {
    Approved:
      "border-emerald-200 bg-emerald-50 text-emerald-600",
    Pending:
      "border-amber-200 bg-amber-50 text-amber-600",
    Expired:
      "border-slate-200 bg-slate-100 text-slate-500",
    Rejected:
      "border-red-200 bg-red-50 text-red-500",
    Cancelled:
      "border-orange-200 bg-orange-50 text-orange-500",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-[9px] font-bold ${
        map[status] ||
        "border-slate-200 bg-slate-50 text-slate-500"
      }`}
    >
      {status}
    </span>
  );
}

function MetricValue({
  value,
  tone = "text-[#3A5065]",
  icon: Icon,
}) {
  return (
    <p className={`flex items-center gap-1 text-[12px] font-black ${tone}`}>
      {Icon && (
        <Icon size={12} />
      )}
      {value ?? 0}
    </p>
  );
}

function Th({
  children,
}) {
  return (
    <th className="px-4 py-3 text-left text-[9px] font-bold uppercase tracking-wide">
      {children}
    </th>
  );
}

function LoadingState() {
  return (
    <div className="flex min-h-[280px] items-center justify-center">
      <div className="text-center">
        <RefreshCw
          size={21}
          className="mx-auto animate-spin text-[#188374]"
        />
        <p className="mt-2 text-[10px] font-semibold text-[#8A98AA]">
          Loading boost data...
        </p>
      </div>
    </div>
  );
}

function EmptyRow({
  colSpan,
  text,
}) {
  return (
    <tr>
      <td
        colSpan={colSpan}
        className="py-14 text-center text-[11px] font-semibold text-[#8A98AA]"
      >
        {text}
      </td>
    </tr>
  );
}
