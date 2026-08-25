// import { useEffect, useState } from "react";
// import {
//   Search,
//   RefreshCw,
//   UsersRound,
//   ChevronRight,
//   X,
//   UserRound,
// } from "lucide-react";
// import Swal from "sweetalert2";
// import {
//   getTeamPartnersApi,
//   allocateTeamCreditsApi,
//   getTeamMemberCreditHistoryApi,
// } from "../../../Services/partnerService";
// export default function TeamPartnerManagement() {
//   const [teams, setTeams] = useState([]),
//     [selected, setSelected] = useState(null),
//     [search, setSearch] = useState(""),
//     [history, setHistory] = useState(null);
//   const load = async () => {
//     const r = await getTeamPartnersApi();
//     setTeams(r?.data || []);
//   };
//   useEffect(() => {
//     load();
//   }, []);
//   const filtered = teams.filter(
//     (t) =>
//       !search ||
//       [t.name, t.partnerId, t.email, t.business?.businessName]
//         .filter(Boolean)
//         .some((v) => String(v).toLowerCase().includes(search.toLowerCase())),
//   );
//   const allocate = async (o, m) => {
//     const x = await Swal.fire({
//       title: `Allocate credits to ${m.name}`,
//       input: "number",
//       showCancelButton: true,
//       confirmButtonColor: "#005F56",
//     });
//     if (!x.value) return;
//     await allocateTeamCreditsApi(o._id, m._id, { credits: Number(x.value) });
//     await load();
//     const fresh = (await getTeamPartnersApi()).data?.find(
//       (i) => i._id === o._id,
//     );
//     setSelected(fresh || null);
//   };
//   const showHistory = async (o, m) => {
//     const r = await getTeamMemberCreditHistoryApi(o._id, m._id);
//     setHistory(r?.data || null);
//   };
//   return (
//     <div className="min-h-screen bg-[#F4F7F8] p-2 md:p-1 text-[#173247]">
//       {/* <div className="rounded-[20px] bg-[#1F3C50] px-5 py-5"> */}
//         <div className="flex items-center justify-between">
//           <div>
//             <h1 className="mt-1 text-2xl font-extrabold text-[#1F3C50]">
//               Team Partner Management
//             </h1>
//             <p className="mt-1 text-xs text-[#77838a]">
//               Team owners, sub partners, shared credits, allocations and
//               history.
//             </p>
//           </div>
//           <button
//             onClick={load}
//             className="flex h-10 items-center gap-2 rounded-xl bg-white px-4 text-xs font-bold"
//           >
//             <RefreshCw size={15} />
//             Refresh
//           </button>
//         {/* </div> */}
//       </div>
//       <div className="mt-3 rounded-[18px] border border-[#E0E8EC] bg-white p-3">
//         <div className="relative">
//           <Search
//             size={15}
//             className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8BA0AA]"
//           />
//           <input
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             placeholder="Search team partner..."
//             className="h-10 w-full rounded-xl border border-[#DCE5E9] bg-[#FAFCFD] pl-9 pr-3 text-xs outline-none"
//           />
//         </div>
//       </div>
//       <div className="mt-3 grid gap-3 xl:grid-cols-2">
//         {filtered.map((t) => (
//           <div
//             key={t._id}
//             className="rounded-[18px] border border-[#E0E8EC] bg-white p-4"
//           >
//             <div className="flex items-start justify-between">
//               <div>
//                 <p className="text-[10px] font-bold uppercase text-[#35A98C]">
//                   Team Partner
//                 </p>
//                 <h3 className="mt-1 text-base font-extrabold">
//                   {t.business?.businessName || t.name}
//                 </h3>
//                 <p className="mt-1 text-[10px] text-[#7A8F99]">
//                   {t.partnerId} · {t.email}
//                 </p>
//               </div>
//               <span className="rounded-full bg-[#E8F8F1] px-2.5 py-1 text-[9px] font-bold text-[#16825F]">
//                 Verified
//               </span>
//             </div>
//             <div className="mt-4 grid grid-cols-3 gap-2">
//               <Mini label="Shared" value={t.summary?.sharedBalance || 0} />
//               <Mini
//                 label="Allocated"
//                 value={t.summary?.allocatedToMembers || 0}
//               />
//               <Mini
//                 label="Unallocated"
//                 value={t.summary?.unallocatedCredits || 0}
//               />
//             </div>
//             <div className="mt-4 flex items-center justify-between rounded-xl bg-[#F7F9FA] px-3 py-3">
//               <div className="flex items-center gap-2">
//                 <UsersRound size={16} className="text-[#168B72]" />
//                 <div>
//                   <p className="text-[9px] text-[#81939C]">Team Members</p>
//                   <p className="text-xs font-extrabold">
//                     {t.summary?.members || 0}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => setSelected(t)}
//                 className="flex items-center gap-1 text-[10px] font-bold text-[#08745F]"
//               >
//                 Manage
//                 <ChevronRight size={14} />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       {selected && (
//         <div className="fixed inset-0 z-50 bg-[#0E2736]/50">
//           <div className="ml-auto h-full w-full max-w-[720px] overflow-y-auto bg-[#F4F7F8]">
//             <div className="sticky top-0 flex items-center justify-between border-b border-[#DCE5E9] bg-white p-4">
//               <div>
//                 <p className="text-[10px] font-bold uppercase text-[#35A98C]">
//                   Team Control
//                 </p>
//                 <h2 className="text-lg font-extrabold">
//                   {selected.business?.businessName || selected.name}
//                 </h2>
//               </div>
//               <button onClick={() => setSelected(null)}>
//                 <X size={18} />
//               </button>
//             </div>
//             <div className="p-4">
//               <div className="grid gap-3 sm:grid-cols-3">
//                 <Mini
//                   label="Shared"
//                   value={selected.summary?.sharedBalance || 0}
//                 />
//                 <Mini
//                   label="Allocated"
//                   value={selected.summary?.allocatedToMembers || 0}
//                 />
//                 <Mini
//                   label="Unallocated"
//                   value={selected.summary?.unallocatedCredits || 0}
//                 />
//               </div>
//               <h3 className="mt-5 text-sm font-extrabold">Sub Partners</h3>
//               <div className="mt-3 space-y-2">
//                 {(selected.members || []).map((m) => (
//                   <div
//                     key={m._id}
//                     className="rounded-[15px] border border-[#E0E8EC] bg-white p-4"
//                   >
//                     <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
//                       <div className="flex items-center gap-3">
//                         <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF9F4] text-[#168B72]">
//                           <UserRound size={18} />
//                         </div>
//                         <div>
//                           <p className="text-xs font-extrabold">{m.name}</p>
//                           <p className="mt-1 text-[10px] text-[#7A8F99]">
//                             {m.teamRole} · {m.partnerId}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex gap-2">
//                         <span className="rounded-lg bg-[#F1F5F6] px-3 py-2 text-[10px] font-bold">
//                           Available:{" "}
//                           <b className="text-[#08745F]">
//                             {m.teamCreditAllocation?.availableLimit || 0}
//                           </b>
//                         </span>
//                         <button
//                           onClick={() => allocate(selected, m)}
//                           className="rounded-lg bg-[#35C99A] px-3 py-2 text-[10px] font-extrabold"
//                         >
//                           Allocate
//                         </button>
//                         <button
//                           onClick={() => showHistory(selected, m)}
//                           className="rounded-lg border border-[#DCE5E9] px-3 py-2 text-[10px] font-bold"
//                         >
//                           History
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//       {history && (
//         <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0E2736]/60 p-4">
//           <div className="max-h-[80vh] w-full max-w-[680px] overflow-y-auto rounded-[18px] bg-white">
//             <div className="sticky top-0 flex items-center justify-between border-b border-[#E0E8EC] bg-white p-4">
//               <div>
//                 <p className="text-[10px] font-bold uppercase text-[#35A98C]">
//                   Credit History
//                 </p>
//                 <h3 className="text-base font-extrabold">
//                   {history.member?.name}
//                 </h3>
//               </div>
//               <button onClick={() => setHistory(null)}>
//                 <X size={18} />
//               </button>
//             </div>
//             <div className="p-4">
//               {(history.transactions || []).map((tx) => (
//                 <div
//                   key={tx._id}
//                   className="mb-2 rounded-xl border border-[#E0E8EC] bg-[#FAFCFD] p-3"
//                 >
//                   <div className="flex items-center justify-between">
//                     <p className="text-[11px] font-bold">{tx.type}</p>
//                     <p
//                       className={`text-xs font-extrabold ${tx.direction === "DEBIT" ? "text-[#D24A4A]" : "text-[#16825F]"}`}
//                     >
//                       {tx.direction === "DEBIT"
//                         ? "-"
//                         : tx.direction === "CREDIT"
//                           ? "+"
//                           : ""}
//                       {tx.credits} Credits
//                     </p>
//                   </div>
//                   <p className="mt-1 text-[10px] text-[#7A8F99]">
//                     {tx.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// const Mini = ({ label, value }) => (
//   <div className="rounded-xl border border-[#E0E8EC] bg-[#FAFCFD] p-3">
//     <p className="text-[9px] font-bold uppercase tracking-wider text-[#83959E]">
//       {label}
//     </p>
//     <p className="mt-1 text-lg font-extrabold">{value}</p>
//     <p className="text-[9px] text-[#8EA0A8]">Credits</p>
//   </div>
// );

import { useEffect, useMemo, useState } from "react";
import {
  Search,
  RefreshCw,
  UserPlus,
  X,
  UsersRound,
  UserRound,
  AlertTriangle,
} from "lucide-react";
import Swal from "sweetalert2";
import {
  getTeamPartnersApi,
  addSubAgentApplicationApi,
  allocateTeamCreditsApi,
  getTeamMemberCreditHistoryApi,
} from "../../../Services/partnerService";

const canAllocate = (member) =>
  member?.accountType === "subagent" &&
  member?.isApproved === true &&
  member?.isVerified === true &&
  member?.applicationStatus === "Verified" &&
  !member?.isBlocked;

const statusClass = (status) => {
  const map = {
    Pending_Email_Verification:
      "bg-[#FFF7E8] text-[#A86F1C]",
    Pending_Phone_Verification:
      "bg-[#FFF7E8] text-[#A86F1C]",
    Submitted:
      "bg-[#EAF5FF] text-[#3978A8]",
    Under_Review:
      "bg-[#F3EEFF] text-[#7057A5]",
    Approved_Not_Verified:
      "bg-[#F3EEFF] text-[#7057A5]",
    Verified:
      "bg-[#E8F8F1] text-[#16825F]",
    Action_Required:
      "bg-[#FFF1E9] text-[#B35F38]",
    Rejected:
      "bg-[#FFF0F0] text-[#C94A4A]",
  };

  return map[status] || "bg-[#F1F5F6] text-[#64777F]";
};

export default function TeamPartnerManagement() {
  const [teams, setTeams] = useState([]);
  const [selected, setSelected] = useState(null);
  const [history, setHistory] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      setLoading(true);
      const response = await getTeamPartnersApi();
      setTeams(response?.data || []);

      if (selected?._id) {
        const updated = (response?.data || []).find(
          (x) => x._id === selected._id
        );
        if (updated) setSelected(updated);
      }
    } catch (error) {
      Swal.fire(
        "Error",
        error?.response?.data?.message ||
          "Unable to load teams",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return teams;

    return teams.filter((item) =>
      [
        item.name,
        item.partnerId,
        item.email,
        item.business?.businessName,
      ]
        .filter(Boolean)
        .some((x) =>
          String(x).toLowerCase().includes(q)
        )
    );
  }, [teams, search]);

  const addSubAgent = async (owner) => {
    const result = await Swal.fire({
      title: "Create Sub-Agent Application",
      html: `
        <input id="sa-name" class="swal2-input" placeholder="Full name" />
        <input id="sa-email" class="swal2-input" placeholder="Email" />
        <input id="sa-phone" class="swal2-input" placeholder="Phone" />

        <select id="sa-role" class="swal2-select">
          <option value="AGENT">Agent</option>
          <option value="MANAGER">Manager</option>
        </select>

        <input id="sa-front" class="swal2-input" placeholder="Aadhaar Front URL" />
        <input id="sa-back" class="swal2-input" placeholder="Aadhaar Back URL" />
        <input id="sa-city" class="swal2-input" placeholder="City" />

        <div style="font-size:11px;text-align:left;margin:12px 24px;color:#64777f">
          Sub-Agent will complete Email OTP + Mobile OTP.
          DigiNiwas Admin approval and final verification are compulsory.
        </div>
      `,
      showCancelButton: true,
      confirmButtonText: "Create Application",
      confirmButtonColor: "#005F56",
      preConfirm: () => {
        const name =
          document.getElementById("sa-name")?.value?.trim();
        const email =
          document.getElementById("sa-email")?.value?.trim();
        const phone =
          document.getElementById("sa-phone")?.value?.trim();
        const teamRole =
          document.getElementById("sa-role")?.value;
        const frontUrl =
          document.getElementById("sa-front")?.value?.trim();
        const backUrl =
          document.getElementById("sa-back")?.value?.trim();
        const city =
          document.getElementById("sa-city")?.value?.trim();

        if (!name || !email || !phone || !frontUrl) {
          Swal.showValidationMessage(
            "Name, email, phone and Aadhaar Front URL are required"
          );
          return false;
        }

        return {
          name,
          email,
          phone,
          teamRole,
          identityDocuments: [
            {
              documentType: "AADHAAR",
              frontUrl,
              backUrl: backUrl || "",
              numberMasked: "",
              status: "Pending",
            },
          ],
          business: {
            businessName:
              owner.business?.businessName || "",
            businessType: "Agency Sub Agent",
          },
          location: {
            city,
            state: owner.location?.state || "Haryana",
            country: "India",
          },
          rera: {
            applicable: false,
            state: "Haryana",
          },
          privacyConsent: {
            accepted: true,
            privacyNoticeVersion: "v1",
          },
        };
      },
    });

    if (!result.isConfirmed) return;

    try {
      const response = await addSubAgentApplicationApi(
        owner._id,
        result.value
      );

      await Swal.fire(
        "Created",
        response?.message,
        "success"
      );

      await load();
    } catch (error) {
      Swal.fire(
        "Error",
        error?.response?.data?.error ||
          error?.response?.data?.message ||
          error.message,
        "error"
      );
    }
  };

  const allocate = async (owner, member) => {
    if (!canAllocate(member)) {
      return Swal.fire(
        "Verification Pending",
        "Admin approval and final verification are required before credit allocation.",
        "warning"
      );
    }

    const result = await Swal.fire({
      title: `Allocate credits to ${member.name}`,
      input: "number",
      inputAttributes: { min: 1 },
      showCancelButton: true,
      confirmButtonText: "Allocate",
      confirmButtonColor: "#005F56",
    });

    if (!result.isConfirmed || !result.value) return;

    try {
      await allocateTeamCreditsApi(
        owner._id,
        member._id,
        { credits: Number(result.value) }
      );

      await Swal.fire(
        "Success",
        "Credits allocated successfully",
        "success"
      );

      await load();
    } catch (error) {
      Swal.fire(
        "Error",
        error?.response?.data?.error ||
          "Unable to allocate credits",
        "error"
      );
    }
  };

  const openHistory = async (owner, member) => {
    try {
      const response =
        await getTeamMemberCreditHistoryApi(
          owner._id,
          member._id
        );

      setHistory(response?.data);
    } catch (error) {
      Swal.fire(
        "Error",
        "Unable to load history",
        "error"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F7F8] p-2 text-[#173247]">
      <div className="rounded-[18px] bg-[#1F3C50] p-5">
        <p className="text-[9px] font-bold uppercase tracking-[.18em] text-[#35C99A]">
          DigiNiwas Admin
        </p>

        <h1 className="mt-1 text-2xl font-extrabold text-white">
          Team Partner Management
        </h1>

        <p className="mt-1 text-xs text-[#BED0DA]">
          Agency owners, Sub-Agent applications, shared wallets and credit allocations.
        </p>
      </div>

      <div className="mt-3 flex gap-2 rounded-[16px] border border-[#E0E8EC] bg-white p-3">
        <div className="relative flex-1">
          <Search
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8DA0A9]"
          />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search agency..."
            className="h-10 w-full rounded-xl border border-[#DCE5E9] bg-[#FAFCFD] pl-9 pr-3 text-xs outline-none"
          />
        </div>

        <button
          onClick={load}
          className="flex items-center gap-2 rounded-xl border border-[#DCE5E9] px-4 text-xs font-bold"
        >
          <RefreshCw size={14} />
          Refresh
        </button>
      </div>

      <div className="mt-3 grid gap-3 xl:grid-cols-2">
        {loading ? (
          <div className="col-span-full rounded-[16px] bg-white py-16 text-center text-xs">
            Loading...
          </div>
        ) : (
          filtered.map((team) => (
            <div
              key={team._id}
              className="rounded-[18px] border border-[#E0E8EC] bg-white p-4"
            >
              <div className="flex justify-between gap-3">
                <div>
                  <p className="text-[9px] font-bold uppercase text-[#35A98C]">
                    Agency Owner
                  </p>
                  <h3 className="mt-1 text-base font-extrabold">
                    {team.business?.businessName || team.name}
                  </h3>
                  <p className="mt-1 text-[10px] text-[#7C8E97]">
                    {team.name} · {team.partnerId}
                  </p>
                </div>

                <span className="h-fit rounded-full bg-[#E8F8F1] px-2.5 py-1 text-[9px] font-bold text-[#16825F]">
                  Verified
                </span>
              </div>

              <div className="mt-4 grid grid-cols-4 gap-2">
                <Card label="Shared" value={team.summary?.sharedBalance || 0} />
                <Card label="Allocated" value={team.summary?.allocatedToMembers || 0} />
                <Card label="Verified" value={team.summary?.verifiedMembers || 0} />
                <Card
                  label="Pending"
                  value={
                    Number(team.summary?.pendingMembers || 0) +
                    Number(team.summary?.approvedNotVerified || 0)
                  }
                />
              </div>

              <div className="mt-4 flex items-center justify-between rounded-xl bg-[#F6F9FA] p-3">
                <div className="flex items-center gap-2">
                  <UsersRound size={16} className="text-[#168B72]" />
                  <div>
                    <p className="text-[9px] text-[#82949C]">
                      Sub Agents
                    </p>
                    <p className="text-xs font-extrabold">
                      {team.summary?.totalMembers || 0}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => addSubAgent(team)}
                    className="flex items-center gap-1 rounded-lg bg-[#35C99A] px-3 py-2 text-[10px] font-bold"
                  >
                    <UserPlus size={13} />
                    Add Sub Agent
                  </button>

                  <button
                    onClick={() => setSelected(team)}
                    className="rounded-lg bg-[#005F56] px-3 py-2 text-[10px] font-bold text-white"
                  >
                    Manage
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-[#0B2432]/50">
          <div className="ml-auto h-full w-full max-w-[820px] overflow-y-auto bg-[#F4F7F8]">
            <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white p-4">
              <div>
                <p className="text-[9px] font-bold uppercase text-[#35A98C]">
                  Agency
                </p>
                <h2 className="text-lg font-extrabold">
                  {selected.business?.businessName || selected.name}
                </h2>
              </div>

              <button onClick={() => setSelected(null)}>
                <X size={20} />
              </button>
            </div>

            <div className="p-4">
              <button
                onClick={() => addSubAgent(selected)}
                className="mb-4 flex items-center gap-2 rounded-xl bg-[#005F56] px-4 py-2.5 text-[10px] font-bold text-white"
              >
                <UserPlus size={14} />
                New Sub-Agent Application
              </button>

              <div className="space-y-2">
                {(selected.members || []).map((member) => {
                  const eligible = canAllocate(member);

                  return (
                    <div
                      key={member._id}
                      className="rounded-[16px] border border-[#E0E8EC] bg-white p-4"
                    >
                      <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
                        <div className="flex gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF9F4] text-[#168B72]">
                            <UserRound size={18} />
                          </div>

                          <div>
                            <div className="flex flex-wrap items-center gap-2">
                              <p className="text-xs font-extrabold">
                                {member.name}
                              </p>

                              <span
                                className={`rounded-full px-2 py-1 text-[8px] font-bold ${statusClass(
                                  member.applicationStatus
                                )}`}
                              >
                                {member.applicationStatus?.replaceAll("_", " ")}
                              </span>
                            </div>

                            <p className="mt-1 text-[10px] text-[#7D8F98]">
                              {member.partnerId} · {member.teamRole} · {member.email}
                            </p>

                            <p className="mt-1 text-[9px] text-[#7D8F98]">
                              Email:{" "}
                              {member.emailVerification?.isVerified ? "Verified" : "Pending"}
                              {" · "}
                              Mobile:{" "}
                              {member.phoneVerification?.isVerified ? "Verified" : "Pending"}
                              {" · "}
                              Admin: {member.isApproved ? "Approved" : "Pending"}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <div className="rounded-lg bg-[#F4F7F8] px-3 py-2">
                            <p className="text-[8px] uppercase text-[#84969E]">
                              Available
                            </p>
                            <p className="text-xs font-extrabold text-[#08745F]">
                              {member.teamCreditAllocation?.availableLimit || 0} cr
                            </p>
                          </div>

                          <button
                            disabled={!eligible}
                            onClick={() => allocate(selected, member)}
                            className={`rounded-lg px-3 py-2 text-[10px] font-bold ${
                              eligible
                                ? "bg-[#35C99A] text-[#173247]"
                                : "cursor-not-allowed bg-[#E9EEF0] text-[#91A0A7]"
                            }`}
                          >
                            {eligible ? "Allocate Credits" : "Verification Pending"}
                          </button>

                          <button
                            onClick={() => openHistory(selected, member)}
                            className="rounded-lg border border-[#DCE5E9] px-3 py-2 text-[10px] font-bold"
                          >
                            History
                          </button>
                        </div>
                      </div>

                      {!eligible && (
                        <div className="mt-3 flex gap-2 rounded-xl bg-[#FFF8EA] p-3 text-[10px] text-[#976A26]">
                          <AlertTriangle size={13} />
                          Credits unlock only after Email OTP, Mobile OTP, Admin approval and final verification.
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {history && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#0B2432]/60 p-4">
          <div className="max-h-[80vh] w-full max-w-[680px] overflow-y-auto rounded-[18px] bg-white p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-extrabold">
                {history.member?.name} Credit History
              </h3>
              <button onClick={() => setHistory(null)}>
                <X size={18} />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              {(history.transactions || []).map((t) => (
                <div
                  key={t._id}
                  className="rounded-xl border border-[#E0E8EC] bg-[#FAFCFD] p-3"
                >
                  <div className="flex justify-between">
                    <p className="text-[11px] font-bold">{t.type}</p>
                    <p className="text-xs font-extrabold">
                      {t.direction === "DEBIT" ? "-" : t.direction === "CREDIT" ? "+" : ""}
                      {t.credits} cr
                    </p>
                  </div>
                  <p className="mt-1 text-[10px] text-[#7D8F98]">
                    {t.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Card({ label, value }) {
  return (
    <div className="rounded-xl border border-[#E0E8EC] bg-[#FAFCFD] p-3">
      <p className="text-[8px] font-bold uppercase text-[#84969E]">{label}</p>
      <p className="mt-1 text-lg font-extrabold">{value}</p>
    </div>
  );
}
