import React, { useState, useMemo } from 'react';
import { 
  Download, 
  Search, 
  TrendingUp, 
  AlertTriangle, 
  MoreVertical, 
  Info, 
  ArrowUpRight,
  Filter,
  CheckCircle2,
  XCircle,
  RefreshCcw,
  Briefcase
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

// Mock Data Sets for Dynamic Timeframes
const DASHBOARD_DATA = {
  '30 Days': {
    stats: {
      totalCreditSales: '₹4.2M',
      creditSalesChange: '+12.5% vs last month',
      paidCredits: '84,500',
      paidCreditsPct: 85,
      promoCredits: '15,000',
      promoCreditsPct: 15,
      failedPaymentsPct: '2.4%',
      failedChange: '↑ 0.2%',
      refundsProcessed: '₹142K'
    },
    chartData: [
      { day: 'Day 1', credits: 200 },
      { day: 'Day 5', credits: 240 },
      { day: 'Day 10', credits: 210 },
      { day: 'Day 15', credits: 380 },
      { day: 'Day 20', credits: 520 },
      { day: 'Day 25', credits: 780 },
      { day: 'Day 30', credits: 650 }
    ]
  },
  'YTD': {
    stats: {
      totalCreditSales: '₹28.4M',
      creditSalesChange: '+18.2% vs last year',
      paidCredits: '540,000',
      paidCreditsPct: 88,
      promoCredits: '72,000',
      promoCreditsPct: 12,
      failedPaymentsPct: '1.8%',
      failedChange: '↓ 0.4%',
      refundsProcessed: '₹890K'
    },
    chartData: [
      { day: 'Jan', credits: 1200 },
      { day: 'Mar', credits: 2100 },
      { day: 'May', credits: 1800 },
      { day: 'Jul', credits: 3400 },
      { day: 'Sep', credits: 4200 },
      { day: 'Nov', credits: 5800 }
    ]
  },
  'All Time': {
    stats: {
      totalCreditSales: '₹94.6M',
      creditSalesChange: '+34.0% total growth',
      paidCredits: '1,820,000',
      paidCreditsPct: 91,
      promoCredits: '180,000',
      promoCreditsPct: 9,
      failedPaymentsPct: '2.1%',
      failedChange: '↑ 0.1%',
      refundsProcessed: '₹2.4M'
    },
    chartData: [
      { day: '2022', credits: 5000 },
      { day: '2023', credits: 12000 },
      { day: '2024', credits: 28000 },
      { day: '2025', credits: 45000 },
      { day: '2026', credits: 68000 }
    ]
  }
};

const INITIAL_ALERTS = [
  {
    id: 1,
    title: 'Acme Corp Properties',
    amount: '20 Cr.',
    threshold: '50 Cr.',
    lastRecharge: '12m ago',
    type: 'critical',
    reminderSent: false
  },
  {
    id: 2,
    title: 'Global Real Estate',
    amount: '46 Cr.',
    threshold: '50 Cr.',
    lastRecharge: '4h ago',
    type: 'warning',
    reminderSent: false
  },
  {
    id: 3,
    title: 'Skyline Ventures',
    amount: '88 Cr.',
    threshold: '100 Cr.',
    lastRecharge: '1d ago',
    type: 'warning',
    reminderSent: false
  }
];

const INITIAL_TRANSACTIONS = [
  { id: 'TXN-98241-S', datetime: 'Oct 26, 14:30', entity: 'Acme Corp Properties', type: 'Purchase', typeBg: 'bg-slate-100 text-slate-700', amount: '₹50,000', credits: '+500', creditColor: 'text-emerald-600', status: 'Success', statusBg: 'bg-emerald-100 text-emerald-700' },
  { id: 'TXN-98242-R', datetime: 'Oct 26, 11:15', entity: 'Urban Living', type: 'Refund', typeBg: 'bg-rose-100 text-rose-700', amount: '-₹12,000', credits: '-120', creditColor: 'text-rose-600', status: 'Processed', statusBg: 'bg-slate-200 text-slate-700' },
  { id: 'TXN-98243-P', datetime: 'Oct 25, 16:45', entity: 'Global Real Estate', type: 'Promo', typeBg: 'bg-amber-100 text-amber-700', amount: '₹0', credits: '+50', creditColor: 'text-emerald-600', status: 'Success', statusBg: 'bg-emerald-100 text-emerald-700' },
  { id: 'TXN-98244-S', datetime: 'Oct 25, 09:20', entity: 'Skyline Ventures', type: 'Purchase', typeBg: 'bg-slate-100 text-slate-700', amount: '₹25,000', credits: '-', creditColor: 'text-slate-400', status: 'Failed', statusBg: 'bg-rose-100 text-rose-600' },
  { id: 'TXN-98245-S', datetime: 'Oct 22, 18:05', entity: 'Metro Builders', type: 'Purchase', typeBg: 'bg-slate-100 text-slate-700', amount: '₹100,000', credits: '+1000', creditColor: 'text-emerald-600', status: 'Success', statusBg: 'bg-emerald-100 text-emerald-700' },
];

export default function WalletOperationsDashboard() {
  const [timeRange, setTimeRange] = useState('30 Days');
  const [alerts, setAlerts] = useState(INITIAL_ALERTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showAllAlertsModal, setShowAllAlertsModal] = useState(false);

  const activeData = DASHBOARD_DATA[timeRange];

  // Send Reminder Handler
  const handleSendReminder = (id) => {
    setAlerts(prev => prev.map(alert => alert.id === id ? { ...alert, reminderSent: true } : alert));
  };

  // Dynamic Filtering for Recent Transactions
  const filteredTransactions = useMemo(() => {
    return INITIAL_TRANSACTIONS.filter((txn) => {
      const matchesSearch = 
        txn.entity.toLowerCase().includes(searchQuery.toLowerCase()) ||
        txn.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        txn.type.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === 'All' || txn.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  return (
    <div className="min-h-screen bg-slate-50/70 p-4 md:p-8 font-sans text-slate-800">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* 1. Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">Wallet & Credit Operations</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">Overview of financial health, credit movement, and transaction logs</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Timeframe Toggle Pill */}
            <div className="inline-flex p-1 bg-slate-200/80 rounded-xl text-xs font-medium text-slate-600">
              {['30 Days', 'YTD', 'All Time'].map((time) => (
                <button
                  key={time}
                  onClick={() => setTimeRange(time)}
                  className={`px-3 py-1.5 rounded-lg transition-all ${
                    timeRange === time 
                      ? 'bg-white text-slate-900 shadow-sm font-semibold' 
                      : 'hover:text-slate-900'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>

            {/* Export Button */}
            <button 
              onClick={() => alert(`Exporting report for ${timeRange}...`)}
              className="p-2 sm:px-3 sm:py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Download className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>

        {/* 2. Top Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          {/* Card 1: Total Credit Sales */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total Credit Sales</span>
                <div className="text-3xl font-black text-slate-900 mt-2">{activeData.stats.totalCreditSales}</div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-lg">
                ₹
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 mt-4 bg-emerald-50 w-max px-2 py-0.5 rounded-md">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>{activeData.stats.creditSalesChange}</span>
            </div>
          </div>

          {/* Card 2: Paid Credits Issued */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Paid Credits Issued</span>
                <div className="text-3xl font-black text-slate-900 mt-2">{activeData.stats.paidCredits}</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs">
                CR
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-teal-800 h-full rounded-full transition-all duration-500" style={{ width: `${activeData.stats.paidCreditsPct}%` }}></div>
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5">{activeData.stats.paidCreditsPct}% of total credits in circulation</p>
            </div>
          </div>

          {/* Card 3: Promo Credits Issued */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Promo Credits Issued</span>
                <div className="text-3xl font-black text-slate-900 mt-2">{activeData.stats.promoCredits}</div>
              </div>
              <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center">
                <Briefcase className="w-4 h-4" />
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-amber-800 h-full rounded-full transition-all duration-500" style={{ width: `${activeData.stats.promoCreditsPct}%` }}></div>
              </div>
              <p className="text-[11px] text-slate-400 mt-1.5">{activeData.stats.promoCreditsPct}% of total credits in circulation</p>
            </div>
          </div>

          {/* Card 4: Failed Payments & Refunds */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-3">
            <div className="flex justify-between items-center bg-rose-50/50 p-2.5 rounded-xl border border-rose-100/50">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                  <XCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Failed Payments</p>
                  <p className="text-sm font-bold text-slate-900">{activeData.stats.failedPaymentsPct}</p>
                </div>
              </div>
              <span className="text-[11px] font-bold text-rose-500">{activeData.stats.failedChange}</span>
            </div>

            <div className="flex justify-between items-center bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center">
                  <RefreshCcw className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400">Refunds Processed</p>
                  <p className="text-sm font-bold text-slate-900">{activeData.stats.refundsProcessed}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Middle Interactive Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Interactive Area/Line Chart Canvas */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-slate-900">Credit Purchase Trends</h2>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreVertical className="w-4 h-4" />
              </button>
            </div>

            <div className="h-64 w-full pt-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activeData.chartData}>
                  <defs>
                    <linearGradient id="colorCredits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0f766e" stopOpacity={0.25}/>
                      <stop offset="95%" stopColor="#0f766e" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
                  <YAxis hide domain={['auto', 'auto']} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    formatter={(value) => [`${value} Credits`, 'Purchased']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="credits" 
                    stroke="#0f766e" 
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorCredits)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Low-Wallet Alerts Panel */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base font-bold text-slate-900">Low-Wallet Alerts</h2>
                <span className="px-2 py-0.5 text-[10px] font-bold bg-rose-100 text-rose-600 rounded-full">
                  {alerts.length} Critical
                </span>
              </div>

              {/* Dynamic Alerts List */}
              <div className="space-y-3">
                {alerts.map((alertItem) => (
                  <div 
                    key={alertItem.id} 
                    className={`p-3.5 rounded-xl border transition-all ${
                      alertItem.type === 'critical' 
                        ? 'bg-rose-50/40 border-rose-100' 
                        : 'bg-slate-50/70 border-slate-100'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        {alertItem.type === 'critical' ? (
                          <AlertTriangle className="w-4 h-4 text-rose-500 shrink-0" />
                        ) : (
                          <Info className="w-4 h-4 text-slate-400 shrink-0" />
                        )}
                        <h4 className="text-xs font-bold text-slate-900">{alertItem.title}</h4>
                      </div>
                      <span className={`text-xs font-black ${alertItem.type === 'critical' ? 'text-rose-600' : 'text-slate-700'}`}>
                        {alertItem.amount}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-500 mt-1 pl-6">
                      Threshold: {alertItem.threshold} • Last recharge: {alertItem.lastRecharge}
                    </p>

                    {alertItem.type === 'critical' && (
                      <div className="mt-2.5 pl-6">
                        {alertItem.reminderSent ? (
                          <span className="text-[11px] font-medium text-emerald-600 flex items-center gap-1">
                            <CheckCircle2 className="w-3.5 h-3.5" /> Reminder Sent
                          </span>
                        ) : (
                          <button 
                            onClick={() => handleSendReminder(alertItem.id)}
                            className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1 transition-colors"
                          >
                            Send Reminder <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => setShowAllAlertsModal(true)}
              className="w-full mt-4 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors"
            >
              View All Alerts
            </button>
          </div>

        </div>

        {/* 4. Recent Financial Transactions Table */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
          
          {/* Table Header Controls */}
          <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100">
            <h3 className="text-base font-bold text-slate-900">Recent Financial Transactions</h3>
            
            <div className="flex flex-wrap items-center gap-3">
              {/* Search Bar */}
              <div className="relative flex-1 sm:w-56">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input 
                  type="text" 
                  placeholder="Search Txn ID..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600"
                />
              </div>

              {/* Status Filter */}
              <div className="relative">
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none pl-7 pr-8 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 focus:outline-none"
                >
                  <option value="All">All Status</option>
                  <option value="Success">Success</option>
                  <option value="Processed">Processed</option>
                  <option value="Failed">Failed</option>
                </select>
                <Filter className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-900 text-white font-semibold uppercase text-[10px] tracking-wider">
                <tr>
                  <th className="p-4">Transaction ID</th>
                  <th className="p-4">Date & Time</th>
                  <th className="p-4">Entity</th>
                  <th className="p-4">Type</th>
                  <th className="p-4 text-right">Amount (₹)</th>
                  <th className="p-4 text-right">Credits</th>
                  <th className="p-4 text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((txn) => (
                    <tr key={txn.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-4 font-mono text-slate-500">{txn.id}</td>
                      <td className="p-4 text-slate-500">{txn.datetime}</td>
                      <td className="p-4 font-semibold text-slate-900">{txn.entity}</td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-md text-[11px] font-semibold ${txn.typeBg}`}>
                          {txn.type}
                        </span>
                      </td>
                      <td className="p-4 text-right font-semibold text-slate-900">{txn.amount}</td>
                      <td className={`p-4 text-right font-bold ${txn.creditColor}`}>{txn.credits}</td>
                      <td className="p-4 text-center">
                        <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold ${txn.statusBg}`}>
                          {txn.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center py-8 text-slate-400">
                      No transaction records matched your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer View All */}
          <div className="p-3 bg-slate-50/50 border-t border-slate-100 text-center">
            <button 
              onClick={() => alert("Redirecting to full transactions log...")}
              className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              View All Transactions ▼
            </button>
          </div>

        </div>

      </div>

      {/* View All Alerts Modal */}
      {showAllAlertsModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-100">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-slate-900">All System Alerts</h3>
              <button 
                onClick={() => setShowAllAlertsModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-4">There are currently {alerts.length} active low-wallet thresholds triggered.</p>
            <button 
              onClick={() => setShowAllAlertsModal(false)}
              className="w-full py-2 bg-slate-900 text-white rounded-xl text-xs font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}