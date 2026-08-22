import React, { useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  X,
  MoreVertical,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  Building2,
  MapPin,
  FileCheck2,
  ShieldCheck,
  Store,
  BadgeCheck,
  Eye,
  CalendarDays,
  UserRound,
  BriefcaseBusiness,
} from "lucide-react";

/* =========================================================
   DYNAMIC DATA
========================================================= */

const initialApplications = [
  {
    id: "APP-2026-1882",
    companyName: "Global Estates",
    initials: "GE",
    businessType: "Real Estate",
    submittedDate: "17 Aug 2026",
    location: "Gurgaon, Haryana",
    status: "Under Review",
    verificationProgress: 67,
    registrationNumber: "HRERA-GGM-125-2021",
    expiryDate: "12 Oct 2028",
    phone: "+91 98123 45678",
    email: "contact@globalestates.in",
    registeredAddress: "DLF Phase 3, Gurgaon, Haryana",
    applicationOwner: "Rohit Sharma",

    regulatoryStatus: {
      title: "Regulatory Status",
      status: "Verified",
      description:
        "Verified against active RERA database automatically.",
    },

    checks: [
      {
        id: 1,
        title: "Identity Verification",
        subtitle: "Aadhaar & PAN matched",
        status: "verified",
      },
      {
        id: 2,
        title: "Business Registration",
        subtitle: "GSTIN Active",
        status: "verified",
      },
      {
        id: 3,
        title: "Office Address",
        subtitle: "Utility bill illegible",
        status: "review",
      },
    ],

    reviewerNotes: "",
  },

  {
    id: "APP-2026-1025",
    companyName: "Skyline Realty",
    initials: "SR",
    businessType: "Business",
    submittedDate: "16 Aug 2026",
    location: "Noida, UP",
    status: "Under Review",
    verificationProgress: 34,
    registrationNumber: "UPRERA-PRJ-08421",
    expiryDate: "28 Dec 2027",
    phone: "+91 98765 11220",
    email: "info@skylinerealty.in",
    registeredAddress: "Sector 62, Noida, Uttar Pradesh",
    applicationOwner: "Ankit Mehra",

    regulatoryStatus: {
      title: "Regulatory Status",
      status: "Pending",
      description:
        "Registration details are currently being validated.",
    },

    checks: [
      {
        id: 1,
        title: "Identity Verification",
        subtitle: "PAN verification completed",
        status: "verified",
      },
      {
        id: 2,
        title: "Business Registration",
        subtitle: "GSTIN validation pending",
        status: "review",
      },
      {
        id: 3,
        title: "Office Address",
        subtitle: "Address verification pending",
        status: "review",
      },
    ],

    reviewerNotes: "",
  },

  {
    id: "APP-2026-1641",
    companyName: "Urban Nest",
    initials: "UN",
    businessType: "Broker",
    submittedDate: "15 Aug 2026",
    location: "Delhi",
    status: "Action Required",
    verificationProgress: 48,
    registrationNumber: "DL-RERA-66322",
    expiryDate: "04 May 2027",
    phone: "+91 99910 44228",
    email: "admin@urbannest.in",
    registeredAddress: "Saket, New Delhi",
    applicationOwner: "Priya Kapoor",

    regulatoryStatus: {
      title: "Regulatory Status",
      status: "Attention Required",
      description:
        "Some regulatory information requires manual verification.",
    },

    checks: [
      {
        id: 1,
        title: "Identity Verification",
        subtitle: "Identity successfully verified",
        status: "verified",
      },
      {
        id: 2,
        title: "Business Registration",
        subtitle: "Registration certificate unclear",
        status: "review",
      },
      {
        id: 3,
        title: "Office Address",
        subtitle: "Address proof missing",
        status: "review",
      },
    ],

    reviewerNotes: "",
  },

  {
    id: "APP-2026-1799",
    companyName: "Property Avenue",
    initials: "PA",
    businessType: "Real Estate",
    submittedDate: "14 Aug 2026",
    location: "Jaipur, Rajasthan",
    status: "New",
    verificationProgress: 12,
    registrationNumber: "RAJ-RERA-88721",
    expiryDate: "11 Feb 2029",
    phone: "+91 88771 22339",
    email: "hello@propertyavenue.in",
    registeredAddress: "C-Scheme, Jaipur, Rajasthan",
    applicationOwner: "Kunal Jain",

    regulatoryStatus: {
      title: "Regulatory Status",
      status: "Pending",
      description: "Application is waiting for verification.",
    },

    checks: [
      {
        id: 1,
        title: "Identity Verification",
        subtitle: "Waiting for verification",
        status: "review",
      },
      {
        id: 2,
        title: "Business Registration",
        subtitle: "Waiting for verification",
        status: "review",
      },
      {
        id: 3,
        title: "Office Address",
        subtitle: "Waiting for verification",
        status: "review",
      },
    ],

    reviewerNotes: "",
  },
];

/* =========================================================
   HELPER COMPONENTS
========================================================= */

const StatCard = ({
  title,
  value,
  active,
  warning,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative w-full rounded-[10px] border bg-white
        px-4 py-3 text-left transition-all duration-200
        hover:-translate-y-[1px] hover:shadow-md

        ${
          active
            ? "border-[#0b806d] shadow-[0_3px_12px_rgba(5,105,88,0.10)]"
            : "border-[#dfe8e6]"
        }
      `}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-medium text-[#697c80]">
            {title}
          </p>

          <p
            className={`mt-2 text-[20px] font-semibold ${
              warning ? "text-[#bc7a20]" : "text-[#183843]"
            }`}
          >
            {value}
          </p>
        </div>

        {Icon && (
          <Icon
            size={15}
            className={
              warning ? "text-[#d5952d]" : "text-[#147c70]"
            }
          />
        )}
      </div>
    </button>
  );
};

const StatusBadge = ({ status }) => {
  const styles = {
    New: "bg-[#edf5ff] text-[#4c76a5] border-[#dceafa]",

    "Under Review":
      "bg-[#e9f8f4] text-[#177f6f] border-[#c9ece3]",

    "Action Required":
      "bg-[#fff4df] text-[#bd7c22] border-[#f4deaf]",

    Approved:
      "bg-[#e7f7ef] text-[#16845d] border-[#c8e9d9]",

    Rejected:
      "bg-[#fff0f0] text-[#ca5b5b] border-[#f2d2d2]",
  };

  return (
    <span
      className={`
        inline-flex items-center rounded-full border
        px-2 py-[3px] text-[8px] font-medium
        ${styles[status] || styles.New}
      `}
    >
      {status}
    </span>
  );
};

/* =========================================================
   APPLICATION CARD
========================================================= */

const ApplicationCard = ({
  application,
  selected,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick(application)}
      className={`
        relative w-full overflow-hidden rounded-[9px]
        border bg-white text-left transition-all duration-200

        ${
          selected
            ? "border-[#00836f] shadow-[0_5px_16px_rgba(0,115,96,0.12)]"
            : "border-[#dfe8e6] hover:border-[#a9ccc5] hover:shadow-sm"
        }
      `}
    >
      {selected && (
        <div className="absolute bottom-0 left-0 top-0 w-[4px] bg-[#078b75]" />
      )}

      <div className="p-3">
        <div className="flex items-start gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[5px] border border-[#cbded9] bg-[#f7fbfa] text-[9px] font-semibold text-[#24544d]">
            {application.initials}
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] font-semibold text-[#253c42]">
              {application.companyName}
            </p>

            <p className="mt-[2px] text-[8px] text-[#849397]">
              {application.id}
            </p>
          </div>

          <MoreVertical
            size={13}
            className="shrink-0 text-[#809195]"
          />
        </div>

        <div className="mt-3 flex items-center gap-1 text-[8px] text-[#687c81]">
          <MapPin size={9} />

          <span className="truncate">
            {application.location}
          </span>

          <span className="mx-[2px] text-[#bec8ca]">•</span>

          <CalendarDays size={9} />

          <span>{application.submittedDate}</span>
        </div>

        <div className="mt-3">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[8px] text-[#74878b]">
              Verification Progress
            </span>

            <span className="text-[8px] font-semibold text-[#254a47]">
              {application.verificationProgress}%
            </span>
          </div>

          <div className="h-[4px] overflow-hidden rounded-full bg-[#edf2f1]">
            <div
              style={{
                width: `${application.verificationProgress}%`,
              }}
              className="h-full rounded-full bg-[#078974]"
            />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <StatusBadge status={application.status} />

          <span className="text-[8px] text-[#9aa6a9]">
            {application.businessType}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClick(application);
          }}
          className={`
            mt-3 flex h-[30px] w-full items-center justify-center
            rounded-[5px] text-[9px] font-semibold transition

            ${
              selected
                ? "bg-[#007b69] text-white hover:bg-[#006d5e]"
                : "border border-[#d9e5e2] bg-white text-[#42615e] hover:bg-[#f4faf8]"
            }
          `}
        >
          {selected ? "Continue Review" : "Start Review"}
        </button>
      </div>
    </button>
  );
};

/* =========================================================
   REVIEW PANEL
========================================================= */

const ReviewPanel = ({
  application,
  onClose,
  onStatusChange,
}) => {
  const [notes, setNotes] = useState(
    application?.reviewerNotes || ""
  );

  if (!application) return null;

  const handleApprove = () => {
    onStatusChange(application.id, "Approved");
  };

  const handleReject = () => {
    onStatusChange(application.id, "Rejected");
  };

  const handleRequestChanges = () => {
    onStatusChange(application.id, "Action Required");
  };

  return (
    /*
       IMPORTANT:
       Existing navbar = 64px assumed.

       top-[64px]
       h-[calc(100vh-64px)]

       Agar navbar 72px hai:
       top-[72px]
       h-[calc(100vh-72px)]
    */
    <aside
      className="
        sticky top-[64px]
        h-[calc(100vh-64px)]
        w-full
        overflow-hidden
        border-l border-[#d5e2df]
        bg-white
        shadow-[-6px_0_18px_rgba(20,50,50,0.06)]
      "
    >
      {/* PANEL HEADER */}

      <div className="flex h-[58px] items-center justify-between border-b border-[#dae5e2] px-4">
        <div>
          <h2 className="text-[12px] font-semibold text-[#153b43]">
            Application Review
          </h2>

          <p className="mt-[2px] text-[8px] text-[#71868b]">
            {application.id}
          </p>
        </div>

        <button
          onClick={onClose}
          className="
            flex h-7 w-7 items-center justify-center
            rounded-md text-[#50666a]
            transition hover:bg-[#f0f5f4]
          "
        >
          <X size={15} />
        </button>
      </div>

      {/* =================================================
          INDEPENDENT SCROLL

          scrollbar hidden
      ================================================== */}

      <div
        className="
          h-[calc(100%-58px)]
          overflow-y-auto
          px-4 pb-8 pt-4

          [scrollbar-width:none]
          [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
        "
      >
        {/* PARTNER BASIC INFO */}

        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[7px] border border-[#cddbd8] bg-[#f4f9f8] text-[10px] font-semibold text-[#395c58]">
            {application.initials}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-[11px] font-semibold text-[#233f45]">
              {application.companyName}
            </h3>

            <p className="mt-[2px] text-[8px] text-[#7d9094]">
              {application.businessType} Agency •{" "}
              {application.location}
            </p>

            <span className="mt-2 inline-flex rounded-[4px] bg-[#e3f8f1] px-2 py-1 text-[8px] font-medium text-[#128169]">
              Compliance Review Stage
            </span>
          </div>
        </div>

        {/* REGULATORY STATUS */}

        <div className="mt-4 rounded-[7px] border border-[#c8ded9] bg-[#fbfefd]">
          <div className="flex items-center gap-2 border-b border-[#e1ebe9] px-3 py-2.5">
            <ShieldCheck
              size={13}
              className="text-[#406b67]"
            />

            <p className="text-[9px] font-semibold text-[#34545a]">
              Regulatory Status
            </p>
          </div>

          <div className="px-3 py-3">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-[7px] text-[#879699]">
                  Registration No.
                </p>

                <p className="mt-[2px] text-[8px] font-medium text-[#36535a]">
                  {application.registrationNumber}
                </p>
              </div>

              <div>
                <p className="text-[7px] text-[#879699]">
                  Expiry Date
                </p>

                <p className="mt-[2px] text-[8px] font-medium text-[#36535a]">
                  {application.expiryDate}
                </p>
              </div>
            </div>

            <div className="mt-3 rounded-[5px] border border-[#bfe7dc] bg-[#e7f8f3] p-2.5">
              <div className="flex gap-2">
                <CheckCircle2
                  size={12}
                  className="mt-[1px] shrink-0 text-[#0f9278]"
                />

                <p className="text-[8px] leading-[1.5] text-[#30736a]">
                  {application.regulatoryStatus.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* VERIFICATION CHECKLIST */}

        <div className="mt-5">
          <h4 className="text-[9px] font-semibold text-[#304a50]">
            Verification Checklist
          </h4>

          <div className="mt-2 space-y-2">
            {application.checks.map((check) => {
              const verified = check.status === "verified";

              return (
                <div
                  key={check.id}
                  className="
                    flex items-center gap-2 rounded-[6px]
                    border border-[#dce6e4]
                    bg-white px-3 py-3
                  "
                >
                  <div
                    className={`
                      flex h-6 w-6 shrink-0 items-center justify-center rounded-full

                      ${
                        verified
                          ? "bg-[#e5f6f1] text-[#13856f]"
                          : "bg-[#fff5df] text-[#d29027]"
                      }
                    `}
                  >
                    {verified ? (
                      <CheckCircle2 size={13} />
                    ) : (
                      <AlertTriangle size={12} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[8px] font-semibold text-[#395158]">
                      {check.title}
                    </p>

                    <p
                      className={`mt-[2px] text-[7px] ${
                        verified
                          ? "text-[#829195]"
                          : "text-[#c18a31]"
                      }`}
                    >
                      {check.subtitle}
                    </p>
                  </div>

                  <button
                    className={`
                      text-[7px] font-medium

                      ${
                        verified
                          ? "text-[#14836d]"
                          : "text-[#bd7f26]"
                      }
                    `}
                  >
                    {verified ? "View" : "Review"}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* APPLICANT DETAILS */}

        <div className="mt-5">
          <h4 className="text-[9px] font-semibold text-[#304a50]">
            Applicant Information
          </h4>

          <div className="mt-2 rounded-[7px] border border-[#dce6e4]">
            <InfoRow
              icon={UserRound}
              title="Application Owner"
              value={application.applicationOwner}
            />

            <InfoRow
              icon={BriefcaseBusiness}
              title="Business Type"
              value={application.businessType}
            />

            <InfoRow
              icon={MapPin}
              title="Registered Address"
              value={application.registeredAddress}
            />

            <InfoRow
              icon={Building2}
              title="Contact"
              value={application.phone}
              last
            />
          </div>
        </div>

        {/* REVIEWER NOTES */}

        <div className="mt-5">
          <label className="text-[9px] font-semibold text-[#304a50]">
            Reviewer Notes
          </label>

          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add private notes regarding this application..."
            rows={4}
            className="
              mt-2 w-full resize-none rounded-[6px]
              border border-[#d8e3e0]
              bg-[#fcfdfd]
              px-3 py-2.5
              text-[8px] text-[#42585e]
              outline-none
              placeholder:text-[#a2adaf]
              focus:border-[#6eb5a7]
              focus:ring-2 focus:ring-[#6eb5a7]/10
            "
          />
        </div>

        {/* ACTION BUTTONS */}

        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            onClick={handleReject}
            className="
              h-8 rounded-[5px]
              border border-[#d7e1df]
              bg-white text-[8px] font-medium
              text-[#42575c]
              transition hover:bg-[#f7f9f9]
            "
          >
            Reject
          </button>

          <button
            onClick={handleRequestChanges}
            className="
              h-8 rounded-[5px]
              border border-[#e6cb96]
              bg-[#fff7e8]
              text-[8px] font-medium
              text-[#b97919]
              transition hover:bg-[#fff1d2]
            "
          >
            Request Changes
          </button>
        </div>

        <button
          onClick={handleApprove}
          className="
            mt-2 h-8 w-full rounded-[5px]
            bg-[#087c6b]
            text-[8px] font-semibold text-white
            transition hover:bg-[#066f61]
          "
        >
          Approve Application
        </button>

        <p className="mt-2 text-center text-[7px] leading-4 text-[#7f9296]">
          Cannot approve until all Action Required items are
          resolved.
        </p>
      </div>
    </aside>
  );
};

const InfoRow = ({
  icon: Icon,
  title,
  value,
  last = false,
}) => {
  return (
    <div
      className={`
        flex items-center gap-3 px-3 py-2.5

        ${!last ? "border-b border-[#edf2f1]" : ""}
      `}
    >
      <Icon size={12} className="shrink-0 text-[#6c8582]" />

      <div className="min-w-0">
        <p className="text-[7px] text-[#8b999c]">
          {title}
        </p>

        <p className="mt-[2px] truncate text-[8px] font-medium text-[#41565c]">
          {value}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   MAIN PAGE
========================================================= */

export default function PartnerApplications() {
  const [applications, setApplications] =
    useState(initialApplications);

  const [selectedApplication, setSelectedApplication] =
    useState(initialApplications[0]);

  const [activeTab, setActiveTab] = useState("Under Review");

  const [search, setSearch] = useState("");

  const [businessType, setBusinessType] = useState("All");

  /* ======================================================
     DYNAMIC COUNTS
  ====================================================== */

  const counts = useMemo(() => {
    return {
      new: applications.filter((item) => item.status === "New")
        .length,

      review: applications.filter(
        (item) => item.status === "Under Review"
      ).length,

      action: applications.filter(
        (item) => item.status === "Action Required"
      ).length,
    };
  }, [applications]);

  /* ======================================================
     FILTERING
  ====================================================== */

  const filteredApplications = useMemo(() => {
    return applications.filter((application) => {
      const value = search.trim().toLowerCase();

      const matchesSearch =
        application.companyName
          .toLowerCase()
          .includes(value) ||
        application.id.toLowerCase().includes(value) ||
        application.location.toLowerCase().includes(value);

      const matchesBusinessType =
        businessType === "All" ||
        application.businessType === businessType;

      const matchesTab =
        activeTab === "All" ||
        application.status === activeTab;

      return (
        matchesSearch &&
        matchesBusinessType &&
        matchesTab
      );
    });
  }, [
    applications,
    search,
    businessType,
    activeTab,
  ]);

  /* ======================================================
     UPDATE STATUS
  ====================================================== */

  const updateApplicationStatus = (id, newStatus) => {
    setApplications((previous) =>
      previous.map((application) =>
        application.id === id
          ? {
              ...application,
              status: newStatus,
            }
          : application
      )
    );

    setSelectedApplication((previous) =>
      previous?.id === id
        ? {
            ...previous,
            status: newStatus,
          }
        : previous
    );
  };

  return (
    /*
      NAVBAR intentionally NOT included.

      Is component ko apne existing dashboard layout ke
      navbar/sidebar ke andar render karo.
    */
    <div className="min-h-full bg-[#f5faf8]">
      <div
        className={`
          grid w-full

          ${
            selectedApplication
              ? "xl:grid-cols-[minmax(0,1fr)_360px]"
              : "grid-cols-1"
          }
        `}
      >
        {/* =================================================
            LEFT CONTENT
        ================================================== */}

        <main className="min-w-0 px-4 py-4 sm:px-5 lg:px-6">
          {/* BREADCRUMB */}

          <div className="flex items-center gap-1.5 text-[8px] text-[#7c8c90]">
            <span>Users</span>
            <span>›</span>
            <span>Partners</span>
            <span>›</span>

            <span className="font-medium text-[#375159]">
              Applications
            </span>
          </div>

          {/* TITLE */}

          <div className="mt-3">
            <h1 className="text-[19px] font-semibold tracking-[-0.3px] text-[#153840]">
              Partner Applications
            </h1>

            <p className="mt-1 max-w-[620px] text-[9px] leading-[1.55] text-[#7f9094]">
              Review partner onboarding, verification,
              compliance, approval, rejection, and suspension
              workflows.
            </p>
          </div>

          {/* =================================================
              STATS
          ================================================== */}

          <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-3">
            <StatCard
              title="New Apps"
              value={counts.new}
              icon={FileCheck2}
              active={activeTab === "New"}
              onClick={() => setActiveTab("New")}
            />

            <StatCard
              title="Under Review"
              value={counts.review}
              icon={ShieldCheck}
              active={activeTab === "Under Review"}
              onClick={() =>
                setActiveTab("Under Review")
              }
            />

            <StatCard
              title="Action Required"
              value={counts.action}
              icon={AlertTriangle}
              warning
              active={activeTab === "Action Required"}
              onClick={() =>
                setActiveTab("Action Required")
              }
            />
          </div>

          {/* =================================================
              TAB BAR
          ================================================== */}

          <div className="mt-4 overflow-x-auto border-b border-[#dbe5e3] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max items-center gap-5">
              {[
                {
                  label: "New Applications",
                  status: "New",
                  count: counts.new,
                },
                {
                  label: "Under Review",
                  status: "Under Review",
                  count: counts.review,
                },
                {
                  label: "Action Required",
                  status: "Action Required",
                  count: counts.action,
                },
                {
                  label: "All",
                  status: "All",
                  count: applications.length,
                },
              ].map((tab) => (
                <button
                  key={tab.status}
                  onClick={() =>
                    setActiveTab(tab.status)
                  }
                  className={`
                    relative pb-2.5 text-[8px] font-medium

                    ${
                      activeTab === tab.status
                        ? "text-[#126f62]"
                        : "text-[#849397]"
                    }
                  `}
                >
                  {tab.label} ({tab.count})

                  {activeTab === tab.status && (
                    <span className="absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-[#087e6c]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* =================================================
              SEARCH/FILTERS
          ================================================== */}

          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <div className="relative flex-1">
              <Search
                size={12}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#829296]"
              />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search partner name, ID or RERA"
                className="
                  h-8 w-full rounded-[5px]
                  border border-[#d9e4e1]
                  bg-white
                  pl-8 pr-3
                  text-[8px] text-[#465d62]
                  outline-none
                  placeholder:text-[#9eaaac]
                  focus:border-[#78b5a8]
                "
              />
            </div>

            <div className="relative min-w-[130px]">
              <select
                value={businessType}
                onChange={(e) =>
                  setBusinessType(e.target.value)
                }
                className="
                  h-8 w-full appearance-none
                  rounded-[5px]
                  border border-[#d9e4e1]
                  bg-white
                  px-3 pr-8
                  text-[8px] text-[#5c7075]
                  outline-none
                "
              >
                <option value="All">
                  Business Type
                </option>

                <option value="Real Estate">
                  Real Estate
                </option>

                <option value="Business">
                  Business
                </option>

                <option value="Broker">
                  Broker
                </option>
              </select>

              <ChevronDown
                size={11}
                className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-[#75878b]"
              />
            </div>
          </div>

          {/* =================================================
              APPLICATION CARDS
          ================================================== */}

          <div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-2 2xl:grid-cols-3">
            {filteredApplications.length > 0 ? (
              filteredApplications.map(
                (application) => (
                  <ApplicationCard
                    key={application.id}
                    application={application}
                    selected={
                      selectedApplication?.id ===
                      application.id
                    }
                    onClick={
                      setSelectedApplication
                    }
                  />
                )
              )
            ) : (
              <div className="col-span-full rounded-[8px] border border-dashed border-[#cbdad7] bg-white px-5 py-14 text-center">
                <Search
                  size={22}
                  className="mx-auto text-[#9aabaa]"
                />

                <p className="mt-3 text-[10px] font-medium text-[#496168]">
                  No applications found
                </p>

                <p className="mt-1 text-[8px] text-[#91a0a3]">
                  Try changing your search or filters.
                </p>
              </div>
            )}
          </div>
        </main>

        {/* =================================================
            RIGHT SIDE PANEL
        ================================================== */}

        {selectedApplication && (
          <div className="hidden xl:block">
            <ReviewPanel
              key={selectedApplication.id}
              application={selectedApplication}
              onClose={() =>
                setSelectedApplication(null)
              }
              onStatusChange={
                updateApplicationStatus
              }
            />
          </div>
        )}

        {/* =================================================
            MOBILE/TABLET REVIEW DRAWER
        ================================================== */}

        {selectedApplication && (
          <div className="fixed inset-0 z-50 xl:hidden">
            <button
              aria-label="Close review"
              onClick={() =>
                setSelectedApplication(null)
              }
              className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"
            />

            <div
              className="
                absolute bottom-0 right-0 top-[64px]
                w-[92%] max-w-[390px]
              "
            >
              <ReviewPanel
                key={`mobile-${selectedApplication.id}`}
                application={selectedApplication}
                onClose={() =>
                  setSelectedApplication(null)
                }
                onStatusChange={
                  updateApplicationStatus
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}