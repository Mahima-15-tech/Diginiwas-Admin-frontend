import React, { useState, useMemo } from 'react';
import { 
  Search, 
  TrendingUp, 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Edit3, 
  Ban, 
  CheckCircle2,
  Filter,
  Users as UsersIcon,
  UserCheck,
  UserPlus
} from 'lucide-react';

// Mock Users Data
const INITIAL_USERS = [
  {
    id: 'PRT-1029',
    name: 'Rajesh Kumar',
    type: 'Partner',
    status: 'Active',
    email: 'rajesh.k@estate.in',
    phone: '+91 98765 11223',
    location: 'Mumbai, Maharashtra',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    initials: 'RK',
    activity: {
      activeListings: 45,
      totalLeads: 312,
      walletBalance: '₹14,500',
      conversionRate: '8.4%'
    },
    timeline: [
      { text: 'New Listing Approved', time: 'Today, 10:42 AM' },
      { text: 'Wallet Recharge (₹5000)', time: 'Yesterday, 04:15 PM' },
      { text: 'Profile Verification Complete', time: '15 Oct 2023' }
    ]
  },
  {
    id: 'USR-8842',
    name: 'Amit Kumar',
    type: 'Buyer',
    status: 'Active',
    email: 'amit.k@gmail.com',
    phone: '+91 98765 43210',
    location: 'Delhi, India',
    avatar: null,
    initials: 'AK',
    activity: {
      activeListings: 0,
      totalLeads: 12,
      walletBalance: '₹2,000',
      conversionRate: '2.1%'
    },
    timeline: [
      { text: 'Property Inquiry Sent', time: 'Today, 09:15 AM' },
      { text: 'Account Created', time: '12 Oct 2023' }
    ]
  },
  {
    id: 'USR-9921',
    name: 'Sneha Mehta',
    type: 'Seller',
    status: 'Suspended',
    email: 'sneha.m@outlook.com',
    phone: '+91 91234 56789',
    location: 'Bengaluru, Karnataka',
    avatar: null,
    initials: 'SM',
    activity: {
      activeListings: 8,
      totalLeads: 95,
      walletBalance: '₹0',
      conversionRate: '5.2%'
    },
    timeline: [
      { text: 'Account Suspended', time: '3 days ago' },
      { text: 'Listing Flagged', time: '5 days ago' }
    ]
  }
];

export default function UsersManagement() {
  const [users] = useState(INITIAL_USERS);
  const [selectedUser, setSelectedUser] = useState(INITIAL_USERS[0]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState([]);

  // Dynamic Filtering Logic
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesTab = 
        activeTab === 'All' || 
        (activeTab === 'Buyers' && user.type === 'Buyer') ||
        (activeTab === 'Sellers' && user.type === 'Seller') ||
        (activeTab === 'Partners' && user.type === 'Partner');

      const matchesSearch = 
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [users, activeTab, searchQuery]);

  // Click Handler for User Rows
  const handleUserClick = (user) => {
    setSelectedUser(user);
    setIsDrawerOpen(true);
  };

  // Bulk Select Handlers
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(filteredUsers.map(u => u.id));
    } else {
      setSelectedIds([]);
    }
  };

  const handleSelectOne = (id, e) => {
    e.stopPropagation();
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 flex relative overflow-hidden">
      
      {/* Inline Style To Completely Hide Scrollbars */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Main Dashboard Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-1 overflow-y-auto no-scrollbar h-screen space-y-6">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Users</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Manage buyers, sellers, partners, verification status, platform activity, and user access.
            </p>
          </div>
          <span className="text-[11px] font-medium text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200/60 shadow-xs self-start sm:self-auto">
            Last updated: 2 mins ago
          </span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">TOTAL USERS</span>
              <UsersIcon className="w-4 h-4 text-slate-400" />
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-black text-slate-900">12,482</span>
              <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                <TrendingUp className="w-3 h-3" /> +2.6%
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">NEW USERS (30D)</span>
              <UserPlus className="w-4 h-4 text-slate-400" />
            </div>
            <div className="flex items-baseline justify-between mt-2">
              <span className="text-3xl font-black text-slate-900">142</span>
              <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                <TrendingUp className="w-3 h-3" /> +12%
              </span>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/70 shadow-xs hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Buyers</span>
              <UserCheck className="w-4 h-4 text-slate-400" />
            </div>
            <div className="mt-2">
              <span className="text-3xl font-black text-slate-900">8,420</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs & Search Controls */}
        <div className="space-y-4">
          <div className="flex border-b border-slate-200 text-xs font-semibold text-slate-500 gap-6 overflow-x-auto no-scrollbar">
            {[
              { name: 'All', count: '12.4k' },
              { name: 'Buyers', count: '8.4k' },
              { name: 'Sellers', count: '2.1k' },
              { name: 'Partners', count: '1.1k' },
            ].map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`pb-3 flex items-center gap-2 whitespace-nowrap transition-all relative ${
                  activeTab === tab.name 
                    ? 'text-teal-700 font-bold border-b-2 border-teal-600' 
                    : 'hover:text-slate-800'
                }`}
              >
                {tab.name}
                <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${activeTab === tab.name ? 'bg-teal-50 text-teal-700' : 'bg-slate-100 text-slate-500'}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Search bar & Dropdowns */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search name, ID, email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200/90 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 shadow-xs transition-all"
              />
            </div>
            <div className="flex gap-2">
              <div className="relative flex-1 sm:flex-none">
                <select className="w-full appearance-none bg-white border border-slate-200/90 rounded-xl px-4 py-2 pr-8 text-xs font-semibold text-slate-600 focus:outline-none shadow-xs">
                  <option>Type: All</option>
                </select>
                <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
              <div className="relative flex-1 sm:flex-none">
                <select className="w-full appearance-none bg-white border border-slate-200/90 rounded-xl px-4 py-2 pr-8 text-xs font-semibold text-slate-600 focus:outline-none shadow-xs">
                  <option>Status: All</option>
                </select>
                <Filter className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Users Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="overflow-x-auto no-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#021c35] text-white text-[11px] font-bold uppercase tracking-wider">
                <tr>
                  <th className="p-4 w-10 text-center">
                    <input 
                      type="checkbox" 
                      onChange={handleSelectAll}
                      checked={filteredUsers.length > 0 && selectedIds.length === filteredUsers.length}
                      className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer" 
                    />
                  </th>
                  <th className="p-4">User</th>
                  <th className="p-4">Type</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr 
                      key={user.id} 
                      onClick={() => handleUserClick(user)}
                      className={`hover:bg-slate-50/80 transition-colors cursor-pointer ${
                        selectedUser?.id === user.id && isDrawerOpen ? 'bg-teal-50/30' : ''
                      }`}
                    >
                      <td className="p-4 text-center">
                        <input 
                          type="checkbox" 
                          checked={selectedIds.includes(user.id)}
                          onChange={(e) => handleSelectOne(user.id, e)}
                          className="rounded border-slate-300 text-teal-600 focus:ring-teal-500 cursor-pointer" 
                        />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full object-cover border border-slate-200 shrink-0" />
                          ) : (
                            <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-700 font-bold text-xs flex items-center justify-center shrink-0 border border-slate-200">
                              {user.initials}
                            </div>
                          )}
                          <div>
                            <div className="flex items-center gap-1 font-bold text-slate-900">
                              {user.name}
                              <CheckCircle2 className="w-3.5 h-3.5 text-teal-500" />
                            </div>
                            <div className="text-[11px] text-slate-400 mt-0.5">
                              ID: {user.id} • {user.phone || user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${
                          user.type === 'Partner' ? 'bg-purple-100 text-purple-700' :
                          user.type === 'Buyer' ? 'bg-blue-100 text-blue-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {user.type}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold ${
                          user.status === 'Active' ? 'bg-emerald-100/80 text-emerald-700' : 'bg-rose-100/80 text-rose-600'
                        }`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-10 text-slate-400">
                      No matching user records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Mobile Drawer Overlay Backdrop */}
      {isDrawerOpen && (
        <div 
          onClick={() => setIsDrawerOpen(false)}
          className="fixed inset-0 bg-slate-900/30 backdrop-blur-xs lg:hidden z-40 transition-opacity"
        />
      )}

      {/* ---------------- RIGHT SIDE SLIDE-IN USER DETAILS DRAWER ---------------- */}
      <div className={`fixed lg:relative right-0 top-0 h-screen w-80 sm:w-96 bg-white border-l border-slate-200 shadow-2xl lg:shadow-none flex flex-col z-50 transition-transform duration-300 ease-in-out shrink-0 ${
        isDrawerOpen ? 'translate-x-0' : 'translate-x-full lg:hidden'
      }`}>
        
        {/* Dark Header */}
        <div className="bg-[#021c35] text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            {selectedUser.avatar ? (
              <img src={selectedUser.avatar} alt={selectedUser.name} className="w-11 h-11 rounded-full border-2 border-white/20 object-cover" />
            ) : (
              <div className="w-11 h-11 rounded-full bg-slate-700 text-white font-bold flex items-center justify-center text-sm border-2 border-white/20">
                {selectedUser.initials}
              </div>
            )}
            <div>
              <h3 className="font-bold text-base flex items-center gap-1 text-white">
                {selectedUser.name}
                <CheckCircle2 className="w-4 h-4 text-teal-400" />
              </h3>
              <p className="text-xs text-slate-300 font-medium">{selectedUser.type} • ID: {selectedUser.id}</p>
            </div>
          </div>

          {/* Close Button */}
          <button 
            onClick={() => setIsDrawerOpen(false)}
            className="p-1.5 rounded-lg hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content (Hidden Scrollbar) */}
        <div className="p-5 space-y-5 overflow-y-auto no-scrollbar flex-1">

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="flex-1 py-2 px-3 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer">
              <MessageSquare className="w-3.5 h-3.5 text-slate-500" /> Message
            </button>
            <button className="flex-1 py-2 px-3 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer">
              <Edit3 className="w-3.5 h-3.5 text-slate-500" /> Edit
            </button>
            <button className="p-2 border border-slate-200 rounded-xl text-rose-500 hover:bg-rose-50 transition-colors cursor-pointer">
              <Ban className="w-4 h-4" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="border border-slate-200/80 rounded-2xl p-4 space-y-3 bg-slate-50/30">
            <h4 className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">Contact Info</h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Email Address</p>
                  <p className="font-medium text-slate-800 mt-0.5">{selectedUser.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Mobile Number</p>
                  <p className="font-medium text-slate-800 mt-0.5">{selectedUser.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-semibold">Primary Location</p>
                  <p className="font-medium text-slate-800 mt-0.5">{selectedUser.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Activity */}
          <div className="border border-slate-200/80 rounded-2xl p-4 space-y-3 bg-slate-50/30">
            <h4 className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">Platform Activity</h4>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[10px] text-slate-400 font-semibold">Active Listings</p>
                <p className="text-xl font-black text-slate-900 mt-0.5">{selectedUser.activity.activeListings}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold">Total Leads</p>
                <p className="text-xl font-black text-slate-900 mt-0.5">{selectedUser.activity.totalLeads}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold">Wallet Balance</p>
                <p className="text-xl font-black text-teal-700 mt-0.5">{selectedUser.activity.walletBalance}</p>
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold">Conversion Rate</p>
                <p className="text-xl font-black text-slate-900 mt-0.5">{selectedUser.activity.conversionRate}</p>
              </div>
            </div>
          </div>

          {/* Recent Timeline */}
          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-bold text-slate-900">Recent Timeline</h4>
            
            <div className="relative pl-4 border-l-2 border-teal-500/80 space-y-4 text-xs">
              {selectedUser.timeline.map((event, index) => (
                <div key={index} className="relative">
                  <div className="w-2 h-2 rounded-full bg-teal-500 absolute -left-[21px] top-1 ring-4 ring-white"></div>
                  <p className="font-bold text-slate-800">{event.text}</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">{event.time}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}