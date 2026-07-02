import { MdOutlineLanguage } from "react-icons/md";
import WebsiteCMS from "./Website/WebsiteCMS";

export default function CMSDashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-[#0d2d2a]">
          Website CMS
        </h1>

        <p className="text-gray-500 mt-2">
          Manage website content, homepage sections and media.
        </p>
      </div>

      <WebsiteCMS />

    </div>
  );
}