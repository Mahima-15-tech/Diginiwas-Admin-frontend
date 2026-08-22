import React, { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronDown,
  MoreVertical,
  FileText,
  User,
  AlertCircle,
  CheckCircle2,
  Clock3,
  Eye,
} from "lucide-react";

const summaryCards = [
  {
    id: 1,
    title: "TOTAL QUEUE",
    value: 248,
    dot: "bg-[#667085]",
    valueColor: "text-[#17324D]",
  },
  {
    id: 2,
    title: "PENDING",
    value: 86,
    dot: "bg-[#F79009]",
    valueColor: "text-[#D97706]",
  },
  {
    id: 3,
    title: "IN REVIEW",
    value: 42,
    dot: "bg-[#3B82F6]",
    valueColor: "text-[#2563EB]",
  },
  {
    id: 4,
    title: "VERIFIED",
    value: 112,
    dot: "bg-[#12B76A]",
    valueColor: "text-[#079455]",
  },
  {
    id: 5,
    title: "ACTION REQ.",
    value: 15,
    dot: "bg-[#F04438]",
    valueColor: "text-[#D92D20]",
  },
];

const tabs = [
  "All",
  "Pending",
  "In Review",
  "Verified",
  "Action Required",
  "Rejected",
  "Overdue",
];

const properties = [
  {
    id: 1,
    propertyId: "PROP-1001",
    propertyName: "Luxury 3BHK Apartment",
    location: "BKC Tower",
    entityName: "Seller: R. Sharma",
    entityType: "Private Seller",
    documentCount: 5,
    documents: [
      { id: 1, status: "verified" },
      { id: 2, status: "verified" },
      { id: 3, status: "pending" },
      { id: 4, status: "warning" },
    ],
    verificationProgress: 85,
    criticalIssues: ["Missing Ownership Doc"],
    reviewer: {
      name: "A. Mehta",
      initials: "AM",
    },
    status: "In Review",
  },
  {
    id: 2,
    propertyId: "PROP-1002",
    propertyName: "Skyline Heights",
    location: "Sea View",
    entityName: "Seller: M. Patel",
    entityType: "Private Seller",
    documentCount: 6,
    documents: [
      { id: 1, status: "verified" },
      { id: 2, status: "verified" },
      { id: 3, status: "warning" },
      { id: 4, status: "pending" },
    ],
    verificationProgress: 60,
    criticalIssues: [
      "Identity Pending",
      "Address Mismatch",
    ],
    reviewer: null,
    status: "Pending",
  },
  {
    id: 3,
    propertyId: "PROP-1003",
    propertyName: "Green Valley Villa",
    location: "Whitefield",
    entityName: "Seller: N. Kapoor",
    entityType: "Individual",
    documentCount: 8,
    documents: [
      { id: 1, status: "verified" },
      { id: 2, status: "verified" },
      { id: 3, status: "verified" },
      { id: 4, status: "verified" },
    ],
    verificationProgress: 100,
    criticalIssues: [],
    reviewer: {
      name: "R. Kumar",
      initials: "RK",
    },
    status: "Verified",
  },
  {
    id: 4,
    propertyId: "PROP-1004",
    propertyName: "Prestige Residency",
    location: "Electronic City",
    entityName: "Developer: Prestige Group",
    entityType: "Developer",
    documentCount: 7,
    documents: [
      { id: 1, status: "verified" },
      { id: 2, status: "warning" },
      { id: 3, status: "pending" },
      { id: 4, status: "pending" },
    ],
    verificationProgress: 45,
    criticalIssues: ["RERA Document Missing"],
    reviewer: {
      name: "S. Verma",
      initials: "SV",
    },
    status: "Action Required",
  },
];

export default function PropertyVerificationCenter() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [reviewerFilter, setReviewerFilter] = useState("All Reviewers");

  const filteredProperties = useMemo(() => {
    return properties.filter((item) => {
      const keyword = search.trim().toLowerCase();

      const matchesSearch =
        !keyword ||
        item.propertyName.toLowerCase().includes(keyword) ||
        item.propertyId.toLowerCase().includes(keyword) ||
        item.location.toLowerCase().includes(keyword) ||
        item.entityName.toLowerCase().includes(keyword);

      const matchesTab =
        activeTab === "All" || item.status === activeTab;

      const matchesStatus =
        statusFilter === "All Status" ||
        item.status === statusFilter;

      const matchesReviewer =
        reviewerFilter === "All Reviewers" ||
        item.reviewer?.name === reviewerFilter;

      return (
        matchesSearch &&
        matchesTab &&
        matchesStatus &&
        matchesReviewer
      );
    });
  }, [
    search,
    activeTab,
    statusFilter,
    reviewerFilter,
  ]);

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const toggleAll = () => {
    if (
      filteredProperties.length &&
      filteredProperties.every((item) =>
        selectedRows.includes(item.id)
      )
    ) {
      setSelectedRows([]);
    } else {
      setSelectedRows(
        filteredProperties.map((item) => item.id)
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAF9] text-[#1D2939]">
      <div className="mx-auto w-full max-w-[1700px] p-3 sm:p-4 lg:p-5">

        {/* HEADER */}

        <div className="mb-4">
          <h1 className="text-[20px] font-semibold tracking-[-0.4px] text-[#101828] sm:text-[24px]">
            Property Verification Center
          </h1>

          <p className="mt-1 text-[10px] text-[#8993A0] sm:text-[11px]">
            Monitor property verification progress, document
            status, and verification exceptions.
          </p>
        </div>

        {/* SUMMARY CARDS */}

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
          {summaryCards.map((card) => (
            <div
              key={card.id}
              className="
                rounded-[7px]
                border border-[#DDE5E4]
                bg-white
                px-3 py-3
                shadow-[0_1px_3px_rgba(16,24,40,0.04)]
                sm:px-4 sm:py-4
              "
            >
              <div className="flex items-center gap-1.5">
                <span
                  className={`h-[5px] w-[5px] rounded-full ${card.dot}`}
                />

                <p className="text-[8px] font-semibold uppercase tracking-[0.04em] text-[#667085] sm:text-[9px]">
                  {card.title}
                </p>
              </div>

              <h2
                className={`mt-2 text-[22px] font-semibold leading-none sm:text-[26px] ${card.valueColor}`}
              >
                {card.value}
              </h2>
            </div>
          ))}
        </div>

        {/* MAIN PANEL */}

        <div className="mt-4 overflow-hidden rounded-[7px] border border-[#DCE5E3] bg-white shadow-[0_1px_3px_rgba(16,24,40,0.04)]">

          {/* TABS */}

          <div className="overflow-x-auto border-b border-[#E8EEEC]">
            <div className="flex min-w-max items-center px-2 sm:px-3">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    relative h-10 px-3
                    text-[9px] font-medium
                    transition sm:px-4
                    ${
                      activeTab === tab
                        ? "text-[#047568]"
                        : "text-[#6F7D89] hover:text-[#344054]"
                    }
                  `}
                >
                  {tab}

                  {activeTab === tab && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-[#00897B]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* FILTER BAR */}

          <div className="flex flex-col gap-2 border-b border-[#E8EEEC] px-3 py-2.5 lg:flex-row lg:items-center lg:justify-between">

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">

              <div className="relative w-full sm:w-[260px]">
                <Search
                  size={13}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#98A2B3]"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  placeholder="Search property..."
                  className="
                    h-8 w-full
                    rounded-[5px]
                    border border-[#D8DFE3]
                    pl-8 pr-3
                    text-[9px]
                    outline-none
                    placeholder:text-[#A8B0BA]
                    focus:border-[#76AAA4]
                  "
                />
              </div>

              <button className="flex h-8 items-center justify-center gap-1.5 rounded-[5px] border border-[#D8DFE3] bg-white px-3 text-[9px] text-[#526271]">
                <SlidersHorizontal size={12} />
                Filters
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              <FilterSelect
                value={statusFilter}
                onChange={setStatusFilter}
                options={[
                  "All Status",
                  "Pending",
                  "In Review",
                  "Verified",
                  "Action Required",
                  "Rejected",
                  "Overdue",
                ]}
              />

              <FilterSelect
                value={reviewerFilter}
                onChange={setReviewerFilter}
                options={[
                  "All Reviewers",
                  "A. Mehta",
                  "R. Kumar",
                  "S. Verma",
                ]}
              />
            </div>
          </div>

          {/* DESKTOP TABLE */}

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-[950px] border-collapse">
              <thead>
                <tr className="bg-[#063446] text-white">
                  <th className="w-[45px] px-3 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={
                        filteredProperties.length > 0 &&
                        filteredProperties.every((item) =>
                          selectedRows.includes(item.id)
                        )
                      }
                      onChange={toggleAll}
                      className="h-3 w-3 accent-[#009688]"
                    />
                  </th>

                  <TableHeading>Property</TableHeading>
                  <TableHeading>Entities</TableHeading>
                  <TableHeading>Documents</TableHeading>
                  <TableHeading>
                    Verification Progress
                  </TableHeading>
                  <TableHeading>
                    Critical Issues
                  </TableHeading>
                  <TableHeading>Reviewer</TableHeading>

                  <th className="w-[70px] px-3 py-3 text-center text-[8px] font-semibold uppercase">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredProperties.map((property) => (
                  <tr
                    key={property.id}
                    className="
                      border-b border-[#EDF1F0]
                      bg-white
                      transition
                      last:border-b-0
                      hover:bg-[#FAFCFB]
                    "
                  >
                    <td className="px-3 py-4 align-top">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(
                          property.id
                        )}
                        onChange={() =>
                          toggleRow(property.id)
                        }
                        className="h-3 w-3 accent-[#00897B]"
                      />
                    </td>

                    {/* PROPERTY */}

                    <td className="px-3 py-4 align-top">
                      <div className="flex min-w-[160px] gap-2.5">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[4px] bg-[#E9F3F7] text-[#45829B]">
                          <FileText size={15} />
                        </div>

                        <div>
                          <p className="max-w-[150px] text-[9px] font-semibold leading-[13px] text-[#23384D]">
                            {property.propertyName}
                          </p>

                          <p className="mt-0.5 text-[8px] text-[#82909E]">
                            {property.location}
                          </p>

                          <p className="mt-0.5 text-[7px] text-[#98A2AD]">
                            {property.propertyId}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* ENTITY */}

                    <td className="px-3 py-4 align-top">
                      <div className="min-w-[130px]">
                        <p className="text-[8px] font-medium text-[#405365]">
                          {property.entityName}
                        </p>

                        <p className="mt-1 text-[8px] text-[#8B98A4]">
                          {property.entityType}
                        </p>
                      </div>
                    </td>

                    {/* DOCUMENTS */}

                    <td className="px-3 py-4 align-top">
                      <div className="flex min-w-[115px] items-center gap-1">
                        {property.documents.map((doc) => (
                          <DocumentStatus
                            key={doc.id}
                            status={doc.status}
                          />
                        ))}

                        <span className="ml-1 text-[8px] text-[#778695]">
                          {property.documentCount}
                        </span>
                      </div>
                    </td>

                    {/* PROGRESS */}

                    <td className="px-3 py-4 align-top">
                      <div className="w-[160px]">
                        <div className="mb-1 flex items-center justify-between">
                          <span className="text-[8px] font-medium text-[#536576]">
                            {property.verificationProgress}%
                            complete
                          </span>
                        </div>

                        <div className="h-[4px] overflow-hidden rounded-full bg-[#E8EFED]">
                          <div
                            style={{
                              width: `${property.verificationProgress}%`,
                            }}
                            className={`
                              h-full rounded-full
                              ${
                                property.verificationProgress ===
                                100
                                  ? "bg-[#12B76A]"
                                  : "bg-[#009688]"
                              }
                            `}
                          />
                        </div>
                      </div>
                    </td>

                    {/* ISSUES */}

                    <td className="px-3 py-4 align-top">
                      <div className="flex max-w-[190px] flex-wrap gap-1">
                        {property.criticalIssues.length >
                        0 ? (
                          property.criticalIssues.map(
                            (issue, index) => (
                              <span
                                key={index}
                                className="
                                  inline-flex
                                  rounded-full
                                  border border-[#F7D6CF]
                                  bg-[#FFF2EE]
                                  px-2 py-[3px]
                                  text-[7px]
                                  font-medium
                                  text-[#C65A42]
                                "
                              >
                                {issue}
                              </span>
                            )
                          )
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[8px] font-medium text-[#079455]">
                            <CheckCircle2 size={11} />
                            No Issues
                          </span>
                        )}
                      </div>
                    </td>

                    {/* REVIEWER */}

                    <td className="px-3 py-4 align-top">
                      {property.reviewer ? (
                        <div className="flex items-center gap-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#E4EEF3] text-[7px] font-semibold text-[#315A70]">
                            {property.reviewer.initials}
                          </div>

                          <span className="text-[8px] font-medium text-[#506172]">
                            {property.reviewer.name}
                          </span>
                        </div>
                      ) : (
                        <span className="text-[8px] italic text-[#98A2B3]">
                          Unassigned
                        </span>
                      )}
                    </td>

                    {/* ACTION */}

                    <td className="px-3 py-4 align-top">
                      <div className="flex justify-center gap-1">
                        <button className="flex h-7 w-7 items-center justify-center rounded-md text-[#52717B] hover:bg-[#EEF7F5]">
                          <Eye size={13} />
                        </button>

                        <button className="flex h-7 w-7 items-center justify-center rounded-md text-[#74828F] hover:bg-gray-100">
                          <MoreVertical size={13} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* MOBILE CARDS */}

          <div className="md:hidden">
            {filteredProperties.length === 0 ? (
              <EmptyState />
            ) : (
              filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="border-b border-[#EDF1F0] p-3 last:border-b-0"
                >
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(
                        property.id
                      )}
                      onChange={() =>
                        toggleRow(property.id)
                      }
                      className="mt-1 h-4 w-4 accent-[#00897B]"
                    />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex min-w-0 gap-2">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-[#E9F3F7]">
                            <FileText
                              size={15}
                              className="text-[#45829B]"
                            />
                          </div>

                          <div className="min-w-0">
                            <h3 className="truncate text-[12px] font-semibold text-[#24384C]">
                              {property.propertyName}
                            </h3>

                            <p className="mt-0.5 text-[9px] text-[#81909D]">
                              {property.location}
                            </p>
                          </div>
                        </div>

                        <button>
                          <MoreVertical
                            size={16}
                            className="text-[#788691]"
                          />
                        </button>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-3 rounded-md bg-[#F8FAFA] p-3">
                        <MobileInfo
                          label="Entity"
                          value={property.entityName}
                        />

                        <MobileInfo
                          label="Reviewer"
                          value={
                            property.reviewer?.name ||
                            "Unassigned"
                          }
                        />
                      </div>

                      <div className="mt-3">
                        <div className="mb-1.5 flex items-center justify-between">
                          <p className="text-[9px] font-medium text-[#596B7A]">
                            Verification Progress
                          </p>

                          <span className="text-[9px] font-semibold text-[#047568]">
                            {
                              property.verificationProgress
                            }
                            %
                          </span>
                        </div>

                        <div className="h-1.5 overflow-hidden rounded-full bg-[#E4ECEA]">
                          <div
                            style={{
                              width: `${property.verificationProgress}%`,
                            }}
                            className="h-full rounded-full bg-[#009688]"
                          />
                        </div>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-1">
                        {property.criticalIssues.length ? (
                          property.criticalIssues.map(
                            (issue) => (
                              <span
                                key={issue}
                                className="rounded-full border border-red-100 bg-red-50 px-2 py-1 text-[8px] text-red-600"
                              >
                                {issue}
                              </span>
                            )
                          )
                        ) : (
                          <span className="flex items-center gap-1 text-[9px] text-emerald-600">
                            <CheckCircle2 size={12} />
                            No critical issues
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* FOOTER */}

          <div className="flex items-center justify-between border-t border-[#E9EEED] px-3 py-3">
            <p className="text-[8px] text-[#8794A0] sm:text-[9px]">
              Showing 1 to {filteredProperties.length} of{" "}
              {properties.length} items
            </p>

            <div className="flex items-center gap-1">
              <button className="flex h-7 min-w-7 items-center justify-center rounded border border-[#DCE3E2] bg-white text-[9px] text-[#697887]">
                1
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= HELPERS ================= */

function TableHeading({ children }) {
  return (
    <th className="px-3 py-3 text-left text-[8px] font-semibold uppercase tracking-[0.02em]">
      {children}
    </th>
  );
}

function DocumentStatus({ status }) {
  if (status === "verified") {
    return (
      <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full border border-[#12B76A] bg-[#ECFDF3]">
        <CheckCircle2
          size={9}
          className="text-[#12B76A]"
        />
      </span>
    );
  }

  if (status === "warning") {
    return (
      <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full border border-[#F79009] bg-[#FFFAEB]">
        <AlertCircle
          size={9}
          className="text-[#F79009]"
        />
      </span>
    );
  }

  return (
    <span className="flex h-[14px] w-[14px] items-center justify-center rounded-full border border-[#98A2B3] bg-[#F2F4F7]">
      <Clock3
        size={8}
        className="text-[#98A2B3]"
      />
    </span>
  );
}

function FilterSelect({
  value,
  onChange,
  options,
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
          h-8 appearance-none
          rounded-[5px]
          border border-[#D8DFE3]
          bg-white
          pl-3 pr-7
          text-[8px]
          text-[#566575]
          outline-none
        "
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

      <ChevronDown
        size={11}
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#8794A0]"
      />
    </div>
  );
}

function MobileInfo({ label, value }) {
  return (
    <div>
      <p className="text-[8px] uppercase tracking-wide text-[#98A2AD]">
        {label}
      </p>

      <p className="mt-1 truncate text-[9px] font-medium text-[#475B6D]">
        {value}
      </p>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <FileText
        size={35}
        className="text-gray-300"
      />

      <p className="mt-3 text-xs font-medium text-gray-500">
        No properties found
      </p>

      <p className="mt-1 text-[9px] text-gray-400">
        Try changing your filters.
      </p>
    </div>
  );
}