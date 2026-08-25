
import {
  MdOutlineApartment,
  MdOutlineLocationOn,
  MdOutlineTrendingUp,
  MdOutlineVerifiedUser,
  MdOutlinePersonAdd,
  MdOutlineDescription,
} from "react-icons/md";

import {
  FiCheck,
  FiX,
} from "react-icons/fi";

import {
  BsArrowUpShort,
  BsArrowDownShort,
  BsBarChartFill,
} from "react-icons/bs";

import {
  useNavigate,
} from "react-router-dom";

const DARK =
  "#0d2d2a";

const statCards = [
  {
    label:
      "Total Properties",
    value: "12,482",
    change: "+12.5%",
    up: true,
    barColor:
      "#9ca3af",
    bars: [
      3, 4, 5, 5, 6, 7, 8,
    ],
  },

  {
    label:
      "Active Agents",
    value: "2,105",
    change: "+4.2%",
    up: true,
    barColor:
      "#6ee7b7",
    bars: [
      3, 4, 5, 5, 6, 7, 8,
    ],
  },

  {
    label:
      "Registered Users",
    value: "84,930",
    change: "+18.7%",
    up: true,
    barColor:
      "#9ca3af",
    bars: [
      3, 4, 5, 6, 7, 8, 9,
    ],
  },

  {
    label:
      "Monthly Revenue",
    value: "₹4.2 Cr",
    change: "-2.1%",
    up: false,
    barColor:
      "#fde68a",
    bars: [
      6, 6, 7, 7, 6, 7, 7,
    ],
  },
];

const pendingApprovals = [
  {
    initials: "SK",
    color:
      "bg-gray-400",
    name: "Sameer K.",
    sub:
      "Broker License V-45",
  },

  {
    initials: "RM",
    color:
      "bg-teal-500",
    name: "Ritu Mehra",
    sub:
      "Property Listing #992",
  },
];

function MiniBarChart({
  bars,
  barColor,
}) {
  const max =
    Math.max(...bars);

  return (
    <div className="flex h-10 items-end gap-1 mt-3">

      {bars.map(
        (height, index) => (
          <div
            key={index}
            className="flex-1 rounded-sm"
            style={{
              height: `${
                (height /
                  max) *
                100
              }%`,
              backgroundColor:
                barColor,
              opacity: 0.85,
            }}
          />
        )
      )}

    </div>
  );
}

function StatCard({
  label,
  value,
  change,
  up,
  barColor,
  bars,
}) {
  return (
    <div
      className="
        flex
        min-h-[160px]
        flex-col
        justify-between
        rounded-2xl
        bg-white
        p-5
        shadow-sm
      "
    >
      <div className="flex items-start justify-between">

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            bg-gray-100
          "
        >
          <BsBarChartFill
            size={18}
            className="text-gray-500"
          />
        </div>

        <span
          className={`flex items-center text-xs font-bold ${
            up
              ? "text-teal-600"
              : "text-red-500"
          }`}
        >
          {change}

          {up ? (
            <BsArrowUpShort
              size={14}
            />
          ) : (
            <BsArrowDownShort
              size={14}
            />
          )}
        </span>

      </div>

      <div>

        <p className="mt-3 text-sm font-medium text-gray-500">
          {label}
        </p>

        <p
          className="mt-0.5 text-2xl font-bold"
          style={{
            color: DARK,
          }}
        >
          {value}
        </p>

        <MiniBarChart
          bars={bars}
          barColor={
            barColor
          }
        />

      </div>

    </div>
  );
}

export default function Dashboard() {
  const navigate =
    useNavigate();

  return (
    <div>

      {/* HEADER */}

      <div className="mb-6">

        <h1
          className="text-2xl font-bold sm:text-3xl"
          style={{
            color: DARK,
            fontFamily:
              "Georgia, serif",
          }}
        >
          Welcome back,
          Admin 👋
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage India's smartest AI-powered real estate ecosystem with precision and clarity.
        </p>

      </div>

      {/* STATS */}

      <div
        className="
          mb-8
          grid
          grid-cols-1
          gap-4
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {statCards.map(
          (card) => (
            <StatCard
              key={
                card.label
              }
              {...card}
            />
          )
        )}
      </div>

      <div
        className="
          flex
          flex-col
          gap-6
          xl:flex-row
        "
      >

        {/* LEFT */}

        <div className="flex min-w-0 flex-1 flex-col gap-6">

          <div>

            <div className="mb-4 flex items-center gap-3">

              <h2
                className="text-xl font-bold"
                style={{
                  color:
                    DARK,
                  fontFamily:
                    "Georgia, serif",
                }}
              >
                Predictive AI
                Insights
              </h2>

              <span
                className="
                  rounded-full
                  border
                  border-gray-300
                  px-3
                  py-1
                  text-[10px]
                  font-bold
                  text-gray-600
                "
              >
                REAL-TIME
              </span>

            </div>

            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
              "
            >

              <div
                className="
                  rounded-2xl
                  bg-white
                  p-5
                  shadow-sm
                "
              >

                <div className="mb-3 flex items-center gap-1.5">

                  <MdOutlineTrendingUp
                    size={16}
                    className="text-teal-600"
                  />

                  <span
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-widest
                      text-teal-600
                    "
                  >
                    Market
                    Intelligence
                  </span>

                </div>

                <h3
                  className="mb-2 text-xl font-bold"
                  style={{
                    color:
                      DARK,
                  }}
                >
                  Demand
                  Forecast
                </h3>

                <p className="mb-4 text-sm leading-relaxed text-gray-500">
                  Predicted 14% increase in luxury commercial inventory demand in Mumbai North.
                </p>

                <div className="flex items-end justify-between">

                  <div>

                    <p className="text-3xl font-bold text-teal-600">
                      88%
                    </p>

                    <p className="text-xs text-teal-600">
                      Confidence
                      Score
                    </p>

                  </div>

                  <button
                    className="
                      rounded-xl
                      border
                      border-gray-300
                      px-4
                      py-2
                      text-sm
                      font-semibold
                    "
                  >
                    Detailed
                    Report
                  </button>

                </div>

              </div>

              <div
                className="
                  rounded-2xl
                  bg-white
                  p-5
                  shadow-sm
                "
              >

                <div className="mb-3 flex items-center gap-1.5">

                  <MdOutlineVerifiedUser
                    size={16}
                    className="text-gray-500"
                  />

                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    Lead
                    Processing
                  </span>

                </div>

                <h3
                  className="mb-2 text-xl font-bold"
                  style={{
                    color:
                      DARK,
                  }}
                >
                  Lead Quality
                  Score
                </h3>

                <p className="mb-4 text-sm text-gray-500">
                  Current average lead quality index is 9.2/10.
                </p>

                <p
                  className="text-3xl font-bold"
                  style={{
                    color:
                      DARK,
                  }}
                >
                  9.2
                </p>

              </div>

            </div>

          </div>

          {/* SAMPLE PROPERTY */}

          <div className="overflow-hidden rounded-2xl bg-white shadow-sm">

            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80"
              alt="Property"
              className="h-52 w-full object-cover"
            />

            <div className="p-5">

              <h3
                className="text-xl font-bold"
                style={{
                  color:
                    DARK,
                }}
              >
                The Altima
                Signature
              </h3>

              <div className="mt-3 flex items-center justify-between">

                <div className="flex items-center gap-2 text-sm text-gray-500">

                  <MdOutlineLocationOn
                    size={17}
                  />

                  Worli,
                  Mumbai

                </div>

                <strong>
                  ₹125.0 Cr
                </strong>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="w-full shrink-0 space-y-4 xl:w-80">

          <h2
            className="text-xl font-bold"
            style={{
              color: DARK,
            }}
          >
            Executive Actions
          </h2>

          <button
            onClick={() =>
              navigate(
                "/add-property"
              )
            }
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-2xl
              px-5
              py-4
              text-left
              text-sm
              font-bold
              text-white
            "
            style={{
              backgroundColor:
                DARK,
            }}
          >
            <MdOutlineApartment
              size={20}
            />

            Add Property
          </button>

          <button
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-5
              py-4
              text-sm
              font-semibold
              text-teal-700
            "
          >
            <MdOutlinePersonAdd
              size={20}
            />

            Approve Agent
          </button>

          <button
            className="
              flex
              w-full
              items-center
              gap-3
              rounded-2xl
              border
              border-gray-200
              bg-white
              px-5
              py-4
              text-sm
              font-semibold
              text-gray-700
            "
          >
            <MdOutlineDescription
              size={20}
            />

            View Reports
          </button>

          <div className="rounded-2xl bg-white p-5 shadow-sm">

            <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
              Pending Approvals
            </p>

            <div className="space-y-3">

              {pendingApprovals.map(
                (
                  item,
                  index
                ) => (
                  <div
                    key={
                      index
                    }
                    className="flex items-center gap-3"
                  >

                    <div
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        text-xs
                        font-bold
                        text-white
                        ${
                          item.color
                        }
                      `}
                    >
                      {
                        item.initials
                      }
                    </div>

                    <div className="min-w-0 flex-1">

                      <p className="truncate text-sm font-semibold text-gray-900">
                        {
                          item.name
                        }
                      </p>

                      <p className="truncate text-xs text-gray-400">
                        {
                          item.sub
                        }
                      </p>

                    </div>

                    <FiCheck className="text-teal-500" />

                    <FiX className="text-red-400" />

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}