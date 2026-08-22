import {
  FiSearch,
  FiBell,
  FiClock,
  FiMenu,
} from "react-icons/fi";

import {
  MdOutlineFlashOn,
} from "react-icons/md";

const DARK =
  "#0d2d2a";

export default function AdminNavbar({
  onMenuClick,
}) {
  return (
    <header
      className="
        sticky
        top-0
        z-40
        flex
        items-center
        gap-3
        border-b
        border-gray-100
        bg-white
        px-4
        py-3
        sm:px-6
      "
    >
      {/* MOBILE MENU */}

      <button
        type="button"
        onClick={onMenuClick}
        className="
          lg:hidden
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-lg
          text-gray-600
          hover:bg-gray-100
        "
      >
        <FiMenu size={20} />
      </button>

      {/* SEARCH */}

      <div className="flex-1 max-w-md">

        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            bg-gray-100
            px-4
            py-2
          "
        >
          <FiSearch
            size={15}
            className="shrink-0 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search ecosystem data..."
            className="
              min-w-0
              flex-1
              bg-transparent
              text-sm
              text-gray-700
              placeholder:text-gray-400
              focus:outline-none
            "
          />

        </div>

      </div>

      {/* RIGHT ACTIONS */}

      <div className="ml-auto flex items-center gap-2 sm:gap-3">

        <button
          type="button"
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            text-gray-500
            hover:bg-gray-100
          "
        >
          <FiBell size={18} />
        </button>

        <button
          type="button"
          className="
            hidden
            sm:flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            text-gray-500
            hover:bg-gray-100
          "
        >
          <FiClock size={18} />
        </button>

        <button
          type="button"
          className="
            hidden
            md:flex
            items-center
            gap-2
            whitespace-nowrap
            rounded-full
            px-4
            py-2
            text-sm
            font-bold
            text-white
          "
          style={{
            backgroundColor:
              DARK,
          }}
        >
          <MdOutlineFlashOn
            size={16}
          />

          Deploy AI Agent
        </button>

      </div>

    </header>
  );
}