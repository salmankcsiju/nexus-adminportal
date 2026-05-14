'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  LogOut, 
  ExternalLink, 
  ShieldCheck, 
  Activity, 
  X,
  Building2,
  Globe,
  Mail,
  Lock,
  ChevronRight,
  Search,
  Bell,
  Settings,
  Cpu,
  Database,
  Wifi,
  MoreVertical,
  PauseCircle,
  PlayCircle,
  AlertTriangle,
  History,
  TrendingUp,
  Command,
  Users,
  LayoutDashboard,
  CreditCard,
  BarChart3,
  Map as MapIcon,
  Ghost,
  Key,
  Palette,
  ArrowUpRight,
  Download,
  Filter,
  Menu,
  ShieldAlert,
  Zap,
  RefreshCw,
  Server,
  CheckCircle2,
  Package,
  Receipt,
  Eye,
  CreditCard as CardIcon,
  Link as LinkIcon,
  Fingerprint,
  Languages,
  Clock,
  ShieldEllipsis,
  Sparkles,
  Send,
  Radio,
  Check,
  Trash2,
  HardDrive,
  MousePointer2,
  Bug,
  Navigation,
  UserPlus,
  Ban,
  Smartphone,
  Laptop,
  ShieldQuestion,
  Info as InfoIcon,
  ServerCrash,
  Layers,
  ArrowDownToLine,
  RotateCcw,
  StopCircle,
  MoreHorizontal,
  CloudLightning,
  FileJson,
  ShieldHalf
} from 'lucide-react';

export default function CubelogsDashboard() {
  const [activeView, setActiveView] = useState('overview');
  const [showAddCompany, setShowAddCompany] = useState(false);
  const [showBroadcast, setShowBroadcast] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRebalancing, setIsRebalancing] = useState(false);
  
  // Settings States
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [twoFactorAuth, setTwoFactorAuth] = useState(true);
  const [backupFrequency, setBackupFrequency] = useState('6h');
  const [ipWhitelisting, setIpWhitelisting] = useState(true);

  // Security & Activity States
  const [sessionHistory] = useState([
    { id: 1, event: 'Login', device: 'macOS Chrome', ip: '192.168.1.42', time: 'Just now', status: 'Active' },
    { id: 2, event: 'Login', device: 'iPhone 15 Pro', ip: '10.0.4.12', time: '2h ago', status: 'Terminated' },
    { id: 3, event: 'Logout', device: 'macOS Safari', ip: '192.168.1.42', time: '5h ago', status: 'Completed' },
  ]);

  const [adminLogs] = useState([
    { id: 1, action: 'Rotated API Keys', module: 'Security', time: '10m ago' },
    { id: 2, action: 'Enabled Maintenance Mode', module: 'System', time: '1h ago' },
    { id: 3, action: 'Provisioned Portal: Quantum Lab', module: 'Orchestration', time: '3h ago' },
  ]);

  // Heatmap & Traffic States
  const [heatmapTimeframe, setHeatmapTimeframe] = useState('Monthly');
  const [liveRevenue, setLiveRevenue] = useState(42500);

  // Broadcast States
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [broadcastProgress, setBroadcastProgress] = useState(0);

  // Billing States
  const [showBillingLogs, setShowBillingLogs] = useState(false);
  const [showStripeSettings, setShowStripeSettings] = useState(false);

  // Notification States
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, company: 'Stellar Corp', issue: 'High Latency Detected', severity: 'critical', time: '5m ago', read: false },
    { id: 2, company: 'Nebula Systems', issue: 'Storage 92% Full', severity: 'warning', time: '12m ago', read: false },
    { id: 3, company: 'System', issue: 'Master Key Rotated', severity: 'info', time: '1h ago', read: true },
  ]);

  const [companies, setCompanies] = useState([
    { id: 1, name: 'Stellar Corp', subdomain: 'stellar', plan: 'Enterprise', status: 'Active', health: 98, usage: 82, owner: 'Alex Rivera', employees: 124, amount: 499, region: 'US-East', lastBackup: '2h ago' },
    { id: 2, name: 'Nebula Systems', subdomain: 'nebula', plan: 'Professional', status: 'Active', health: 100, usage: 45, owner: 'Sarah Chen', employees: 56, amount: 249, region: 'Europe-West', lastBackup: '5h ago' },
    { id: 3, name: 'Quantum Leap', subdomain: 'quantum', plan: 'Startup', status: 'Maintenance', health: 64, usage: 12, owner: 'Mike Ross', employees: 8, amount: 99, region: 'Asia-South', lastBackup: '1d ago' },
    { id: 4, name: 'Apex Solutions', subdomain: 'apex', plan: 'Enterprise', status: 'Active', health: 92, usage: 94, owner: 'Elena Vance', employees: 210, amount: 499, region: 'US-West', lastBackup: '3h ago' },
  ]);

  // Pending Portal Requests from External Sales App
  const [pendingRequests, setPendingRequests] = useState([
    { id: 101, name: 'Nova Dynamics', subdomain: 'nova', email: 'contact@nova.io', plan: 'Professional', region: 'Europe-West', workforce: '50-100', autoScaling: true, time: '10m ago' },
    { id: 102, name: 'Titan Grid', subdomain: 'titan', email: 'ops@titangrid.com', plan: 'Startup', region: 'US-East', workforce: '1-10', autoScaling: false, time: '1h ago' },
  ]);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const [billingLogs] = useState([
    { id: 1, event: 'Subscription Renewed', company: 'Stellar Corp', amount: '$499.00', time: '2h ago', status: 'success' },
    { id: 2, event: 'New Subscription', company: 'Nebula Systems', amount: '$249.00', time: '5h ago', status: 'success' },
    { id: 3, event: 'Payment Failed', company: 'Quantum Leap', amount: '$99.00', time: '1d ago', status: 'failed' },
    { id: 4, event: 'Invoice Generated', company: 'Apex Solutions', amount: '$499.00', time: '2d ago', status: 'pending' },
  ]);

  const hotspots = useMemo(() => {
    const multiplier = heatmapTimeframe === 'Daily' ? 0.05 : heatmapTimeframe === 'Yearly' ? 12 : 1;
    return [
      { name: 'North America', revenue: liveRevenue * multiplier, portals: 12, top: '28%', left: '18%', size: 'w-6 h-6' },
      { name: 'Europe', revenue: 28200 * multiplier, portals: 8, top: '25%', left: '48%', size: 'w-5 h-5' },
      { name: 'Middle East', revenue: 15800 * multiplier, portals: 3, top: '38%', left: '55%', size: 'w-4 h-4' },
      { name: 'Asia Pacific', revenue: 32100 * multiplier, portals: 6, top: '55%', left: '78%', size: 'w-6 h-6' },
    ];
  }, [heatmapTimeframe, liveRevenue]);

  const trafficHubs = [
    { name: 'San Francisco', load: 'Heavy', top: '32%', left: '12%', color: 'rose' },
    { name: 'New York', load: 'Heavy', top: '30%', left: '22%', color: 'rose' },
    { name: 'London', load: 'Normal', top: '24%', left: '46%', color: 'blue' },
    { name: 'Dubai', load: 'Optimal', top: '38%', left: '56%', color: 'emerald' },
    { name: 'Singapore', load: 'Heavy', top: '55%', left: '80%', color: 'rose' },
    { name: 'Tokyo', load: 'Normal', top: '32%', left: '88%', color: 'blue' },
  ];

  const [nodeMetrics, setNodeMetrics] = useState([
    { id: 'Node-01', load: 42, ram: '12/64GB', status: 'Optimal' },
    { id: 'Node-02', load: 68, ram: '32/64GB', status: 'Healthy' },
    { id: 'Node-03', load: 15, ram: '4/32GB', status: 'Standby' },
    { id: 'Node-04', load: 89, ram: '58/64GB', status: 'Heavy' },
  ]);

  const [activities, setActivities] = useState([
    { id: 1, type: 'provision', text: 'New portal provisioned for Apex Solutions', time: '2m ago', icon: Plus, color: 'text-blue-500' },
    { id: 2, type: 'alert', text: 'System load peak detected on Node-4', time: '15m ago', icon: AlertTriangle, color: 'text-amber-500' },
  ]);

  // Live Ticking Revenue Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRevenue(prev => prev + Math.floor(Math.random() * 5));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Provisioning State
  const [provisioningStep, setProvisioningStep] = useState(1);
  const [newPortalData, setNewPortalData] = useState({
    name: '', subdomain: '', email: '', plan: 'Professional', region: 'US-East', autoBackup: true
  });

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowSearch((prev) => !prev);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleRebalance = () => {
    setIsRebalancing(true);
    setTimeout(() => {
      setNodeMetrics(prev => prev.map(n => ({ ...n, load: Math.floor(Math.random() * 40) + 20, status: 'Optimal' })));
      setIsRebalancing(false);
      setActivities([{ id: Date.now(), type: 'update', text: 'Cluster optimization sequence completed', time: 'Just now', icon: Zap, color: 'text-blue-500' }, ...activities]);
    }, 2000);
  };

  const handleBroadcast = () => {
    if (!broadcastMessage.trim()) return;
    setIsBroadcasting(true);
    setBroadcastProgress(0);
    const interval = setInterval(() => {
      setBroadcastProgress(prev => prev >= 100 ? (clearInterval(interval), 100) : prev + 5);
    }, 100);
    setTimeout(() => {
      setIsBroadcasting(false);
      setShowBroadcast(false);
      setActivities([{ id: Date.now(), type: 'broadcast', text: `Global broadcast transmitted to ${companies.length} portals`, time: 'Just now', icon: Radio, color: 'text-amber-500' }, ...activities]);
      setBroadcastMessage('');
    }, 2500);
  };

  const handleApproveRequest = (request: any) => {
    const newId = Date.now();
    const planPrices: any = { Startup: 99, Professional: 249, Enterprise: 499 };
    setCompanies([...companies, { id: newId, name: request.name, subdomain: request.subdomain, plan: request.plan, status: 'Active', health: 100, usage: 0, owner: request.email.split('@')[0], employees: 0, amount: planPrices[request.plan] || 249, region: request.region, lastBackup: 'Never' }]);
    setPendingRequests(pendingRequests.filter(r => r.id !== request.id));
    setActivities([{ id: Date.now(), type: 'provision', text: `External request for "${request.name}" approved`, time: 'Just now', icon: CheckCircle2, color: 'text-emerald-500' }, ...activities]);
    setNotifications([{ id: Date.now(), company: 'Cubelogs', issue: `${request.name} portal is now live`, severity: 'info', time: 'Just now', read: false }, ...notifications]);
    setSelectedRequest(null);
  };

  const handleRejectRequest = (id: number, name: string) => {
    setPendingRequests(pendingRequests.filter(r => r.id !== id));
    setActivities([{ id: Date.now(), type: 'alert', text: `External request for "${name}" rejected`, time: 'Just now', icon: Ban, color: 'text-rose-500' }, ...activities]);
    setSelectedRequest(null);
  };

  const handleFinalProvision = () => {
    const newId = Date.now();
    const planPrices: any = { Startup: 99, Professional: 249, Enterprise: 499 };
    setCompanies([...companies, { id: newId, name: newPortalData.name, subdomain: newPortalData.subdomain, plan: newPortalData.plan, status: 'Active', health: 100, usage: 0, owner: newPortalData.email.split('@')[0], employees: 0, amount: planPrices[newPortalData.plan] || 249, region: newPortalData.region, lastBackup: 'Just now' }]);
    setActivities([{ id: Date.now(), type: 'provision', text: `Portal "${newPortalData.name}" provisioned in ${newPortalData.region}`, time: 'Just now', icon: Plus, color: 'text-blue-500' }, ...activities]);
    setShowAddCompany(false);
    setProvisioningStep(1);
    setNewPortalData({ name: '', subdomain: '', email: '', plan: 'Professional', region: 'US-East', autoBackup: true });
  };

  const dismissNotification = (id: number) => setNotifications(notifications.filter(n => n.id !== id));
  const markAllRead = () => setNotifications(notifications.map(n => ({ ...n, read: true })));

  const filteredCompanies = useMemo(() => {
    return companies.filter(c => c.name.toLowerCase().includes(searchQuery.toLowerCase()) || c.subdomain.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [companies, searchQuery]);

  const SidebarItem = ({ id, icon: Icon, label }: { id: string, icon: any, label: string }) => (
    <button onClick={() => { setActiveView(id); setShowMobileMenu(false); }} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all relative group overflow-hidden ${activeView === id ? 'text-white' : 'text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}>{activeView === id && (<motion.div layoutId="activeTabBg" className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-xl shadow-blue-600/30 z-0" />)}<Icon className={`w-5 h-5 relative z-10 ${activeView === id ? 'text-white' : 'text-slate-400 group-hover:text-blue-600'}`} /><span className="text-sm relative z-10">{label}</span></button>
  );

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 overflow-hidden relative font-sans">
      <div className="fixed inset-0 pointer-events-none z-0"><div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[120px]" /><div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-100/50 blur-[120px]" /></div>

      {/* MOBILE SIDEBAR OVERLAY */}
      <AnimatePresence>
        {showMobileMenu && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowMobileMenu(false)} className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] lg:hidden" />
            <motion.aside initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed top-0 left-0 bottom-0 w-72 bg-white z-[110] p-8 flex flex-col gap-10 lg:hidden shadow-2xl">
              <div className="flex items-center justify-between"><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-600/20"><ShieldCheck className="w-6 h-6 text-white" /></div><h1 className="text-xl font-black tracking-tighter uppercase">Cubelogs</h1></div><button onClick={() => setShowMobileMenu(false)} className="p-2 text-slate-400 hover:text-slate-900"><X className="w-6 h-6" /></button></div>
              <nav className="flex-1 space-y-2"><SidebarItem id="overview" icon={LayoutDashboard} label="Overview" /><SidebarItem id="portals" icon={Building2} label="Portals" /><SidebarItem id="analytics" icon={BarChart3} label="Analytics" /><SidebarItem id="billing" icon={CreditCard} label="Billing" /><SidebarItem id="settings" icon={Settings} label="Settings" /></nav>
              <div className="pt-8 border-t border-slate-100"><button onClick={() => { localStorage.clear(); window.location.href='/login'; }} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-rose-500 hover:bg-rose-50 transition-all group"><LogOut className="w-5 h-5" /><span className="text-sm">Logout</span></button></div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <aside className="hidden lg:flex w-72 bg-white/80 backdrop-blur-2xl border-r border-slate-200/50 p-8 flex-col gap-10 z-50">
        <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-600/20"><ShieldCheck className="w-6 h-6 text-white" /></div><h1 className="text-xl font-black tracking-tighter uppercase">Cubelogs<span className="text-blue-600">_</span>Master</h1></div>
        <nav className="flex-1 space-y-3"><SidebarItem id="overview" icon={LayoutDashboard} label="Overview" /><SidebarItem id="portals" icon={Building2} label="Portals" /><SidebarItem id="analytics" icon={BarChart3} label="Analytics" /><SidebarItem id="billing" icon={CreditCard} label="Billing" /><SidebarItem id="settings" icon={Settings} label="Settings" /></nav>
        <div className="pt-8 border-t border-slate-100"><button onClick={() => { localStorage.clear(); window.location.href='/login'; }} className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold text-rose-500 hover:bg-rose-50 transition-all group"><LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /><span className="text-sm">Logout</span></button></div>
      </aside>

      <main className="flex-1 h-screen overflow-y-auto relative z-10 scroll-smooth">
        <header className="sticky top-0 z-40 bg-white/40 backdrop-blur-2xl border-b border-slate-200/40 px-4 sm:px-6 lg:px-12 py-3 lg:py-6 flex justify-between items-center">
          <div className="flex items-center gap-4"><button onClick={() => setShowMobileMenu(true)} className="p-2.5 lg:hidden text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"><Menu className="w-6 h-6" /></button><div className="hidden sm:flex items-center gap-3 bg-white/50 px-4 py-2.5 rounded-2xl text-slate-500 text-sm font-medium border border-slate-200/50 md:min-w-[340px] shadow-sm"><Search className="w-4 h-4 text-slate-400" /><span className="hidden md:inline">Search Command Center...</span><kbd className="bg-white px-2 py-0.5 rounded-lg border border-slate-200 text-[10px] font-black ml-auto hidden md:block">⌘K</kbd></div></div>
          <div className="flex items-center gap-3 sm:gap-4 relative">
            <button onClick={() => setShowNotifications(!showNotifications)} className={`p-2.5 sm:p-3 rounded-2xl transition-all relative ${showNotifications ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/20' : 'bg-white/80 border border-slate-200/50 shadow-sm'}`}><Bell className="w-5 h-5" />{unreadCount > 0 && (<span className="absolute top-2.5 right-2.5 w-4 h-4 bg-rose-500 rounded-full border-2 border-white text-[8px] font-black flex items-center justify-center text-white">{unreadCount}</span>)}</button>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center font-black text-white shadow-xl text-xs sm:text-sm">AD</div>
            <AnimatePresence>{showNotifications && (<motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} className="absolute top-full right-0 mt-4 w-[calc(100vw-2rem)] sm:w-96 bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden z-[100]"><div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50"><h4 className="font-black text-sm uppercase tracking-widest text-slate-400">System Alerts</h4><button onClick={markAllRead} className="text-[10px] font-black text-blue-600 uppercase">Mark Read</button></div><div className="max-h-[400px] overflow-y-auto">{notifications.length > 0 ? notifications.map(n => (<div key={n.id} className={`p-5 border-b border-slate-50 flex gap-4 hover:bg-slate-50 transition-all relative ${!n.read ? 'bg-blue-50/20' : ''}`}><div className={`p-2.5 rounded-xl shrink-0 h-fit ${n.severity === 'critical' ? 'bg-rose-50 text-rose-500' : n.severity === 'warning' ? 'bg-amber-50 text-amber-500' : 'bg-blue-50 text-blue-500'}`}>{n.severity === 'critical' ? <ShieldAlert className="w-4 h-4" /> : n.severity === 'warning' ? <AlertTriangle className="w-4 h-4" /> : <InfoIcon className="w-4 h-4" />}</div><div className="flex-1"><p className="text-xs font-black text-slate-900 mb-1">{n.company}</p><p className="text-xs font-medium text-slate-500 leading-relaxed mb-2">{n.issue}</p><span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{n.time}</span></div><button onClick={() => dismissNotification(n.id)} className="p-1.5 text-slate-300 hover:text-rose-500 transition-colors h-fit"><Trash2 className="w-3.5 h-3.5" /></button></div>)) : (<div className="p-12 text-center"><Bell className="w-8 h-8 text-slate-300 mx-auto mb-4" /><p className="text-sm font-bold text-slate-400 uppercase tracking-widest">No New Alerts</p></div>)}</div><button onClick={() => setShowNotifications(false)} className="w-full py-4 text-[10px] font-black text-slate-400 uppercase border-t border-slate-50 hover:bg-slate-50 transition-all">Close Panel</button></motion.div>)}</AnimatePresence>
          </div>
        </header>

        <div className="p-4 sm:p-6 lg:p-12 max-w-[1600px] mx-auto overflow-x-hidden">
          <AnimatePresence mode="wait">
            {activeView === 'overview' && (
              <motion.div key="overview" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="space-y-8 sm:space-y-12">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6"><div><div className="flex items-center gap-2 mb-2"><Sparkles className="w-4 h-4 text-blue-600 fill-blue-600" /><span className="text-[10px] font-black uppercase tracking-widest text-blue-600">System Live</span></div><h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-none">Command Center</h2><p className="text-slate-400 text-sm sm:text-base font-medium mt-2 max-w-lg">Global SaaS orchestration dashboard.</p></div><div className="flex gap-3 w-full sm:w-auto"><button onClick={() => setShowBroadcast(true)} className="flex-1 sm:flex-none px-6 py-4 rounded-2xl bg-white border border-slate-200 font-bold text-sm shadow-sm hover:bg-slate-50 transition-colors">Broadcast</button><button onClick={() => setShowAddCompany(true)} className="flex-1 sm:flex-none px-6 py-4 rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all">New Portal</button></div></div>
                <AnimatePresence>{pendingRequests.length > 0 && (<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="bg-gradient-to-br from-indigo-600 to-blue-700 p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl relative overflow-hidden text-white mb-10"><div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px]" /><div className="relative z-10 flex flex-col xl:flex-row justify-between items-center gap-8"><div className="flex items-center gap-6 w-full xl:w-auto"><div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-xl rounded-2xl sm:rounded-[2rem] flex items-center justify-center border border-white/20"><UserPlus className="w-7 h-7 sm:w-8 sm:h-8" /></div><div><h3 className="text-xl sm:text-2xl font-black tracking-tighter">Provisioning Queue</h3><p className="text-blue-100 text-xs sm:text-sm font-medium mt-1">{pendingRequests.length} external clients waiting.</p></div></div><div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto">{pendingRequests.map(req => (<motion.div key={req.id} layout className="bg-white/10 backdrop-blur-2xl p-5 rounded-3xl border border-white/20 flex items-center justify-between sm:justify-start gap-6 group cursor-pointer hover:bg-white/20 transition-all flex-1" onClick={() => setSelectedRequest(req)}><div><p className="font-black text-sm sm:text-base leading-tight">{req.name}</p><p className="text-[9px] font-black text-blue-200 uppercase tracking-widest mt-1">{req.plan} • {req.time}</p></div><button onClick={(e) => { e.stopPropagation(); handleApproveRequest(req); }} className="p-3 bg-white text-blue-600 rounded-xl hover:scale-110 active:scale-90 transition-all shadow-lg"><CheckCircle2 className="w-4 h-4" /></button></motion.div>))}</div></div></motion.div>)}</AnimatePresence>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">{[{ label: 'Live Portals', value: '24', sub: '+3 today', icon: Globe, color: 'from-blue-500 to-indigo-600' }, { label: 'Global Uptime', value: '99.98%', sub: 'Healthy', icon: Activity, color: 'from-emerald-400 to-teal-600' }, { label: 'Total Staff', value: '398', sub: 'Across nodes', icon: Users, color: 'from-violet-500 to-purple-600' }, { label: 'MRR Growth', value: '$12.4k', sub: '+18.2%', icon: TrendingUp, color: 'from-blue-400 to-cyan-500' }].map((stat, i) => (<motion.div key={i} whileHover={{ y: -5 }} className="bg-white/60 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-white shadow-xl relative overflow-hidden group"><div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 blur-[60px]`} /><div className="flex justify-between items-center mb-6"><div className={`p-2.5 sm:p-3 rounded-2xl bg-gradient-to-br ${stat.color} text-white shadow-lg`}><stat.icon className="w-5 h-5" /></div><span className="text-emerald-500 text-[10px] font-black bg-emerald-50 px-2 py-1 rounded-lg">{stat.sub}</span></div><p className="text-3xl sm:text-4xl font-black tracking-tight mb-1">{stat.value}</p><p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</p></motion.div>))}</div>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 sm:gap-10">
                  <div className="xl:col-span-8 bg-white/60 backdrop-blur-xl p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-white shadow-2xl relative overflow-hidden group"><div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 relative z-10 gap-6"><div className="flex items-center gap-4"><div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100"><MapIcon className="w-6 h-6 text-blue-600" /></div><div><h3 className="font-black text-xl sm:text-2xl tracking-tighter">Revenue Heatmap</h3><p className="text-xs text-slate-400 font-medium">Global transaction density.</p></div></div></div><div className="aspect-[1.5/1] sm:aspect-[2.2/1] bg-slate-50/50 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/50 flex items-center justify-center relative overflow-hidden group/map shadow-inner"><div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-contain bg-center bg-no-repeat opacity-20 grayscale invert" />{hotspots.map((h, i) => (<motion.div key={i} className={`absolute ${h.size} bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full cursor-pointer border-2 border-white shadow-2xl z-20`} style={{ top: h.top, left: h.left }}><div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-30 scale-150" /></motion.div>))}</div></div>
                  <div className="xl:col-span-4 bg-white/60 backdrop-blur-xl p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3rem] border border-white shadow-2xl"><h3 className="font-black text-xl sm:text-2xl mb-10 flex items-center gap-3 tracking-tighter"><div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center"><History className="w-5 h-5 text-slate-500" /></div> Audit Trail</h3><div className="space-y-8">{activities.map(act => (<div key={act.id} className="flex gap-5 relative group/item"><div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-sm shrink-0 relative z-10 group-hover/item:scale-110 transition-transform"><act.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${act.color}`} /></div><div className="pt-1"><p className="text-xs sm:text-sm font-bold leading-tight text-slate-800 mb-1">{act.text}</p><span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{act.time}</span></div></div>))}</div></div>
                </div>
              </motion.div>
            )}

            {activeView === 'analytics' && (
              <motion.div key="analytics" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10 sm:space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div><h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-none">Usage Intelligence</h2><p className="text-slate-400 text-sm sm:text-base font-medium mt-2">Global orchestration telemetry and traffic flow.</p></div>
                  <div className="flex gap-4 w-full md:w-auto"><button className="flex-1 md:flex-none px-6 py-4 bg-white border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest shadow-sm">Export</button><button className="flex-1 md:flex-none px-6 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl">Filter</button></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">{[{ label: 'Active Sessions', value: '1,284', trend: '+12%', icon: MousePointer2, color: 'blue' }, { label: 'API Requests', value: '2.4M', trend: '+8.4%', icon: Zap, color: 'amber' }, { label: 'Storage Used', value: '1.2TB', trend: '92%', icon: HardDrive, color: 'rose' }, { label: 'Error Rate', value: '0.02%', trend: 'Stable', icon: Bug, color: 'emerald' }].map((stat, i) => (<div key={i} className="bg-white/60 backdrop-blur-xl p-6 sm:p-8 rounded-[2rem] sm:rounded-[2.5rem] border border-white shadow-xl"><div className="flex justify-between items-center mb-6"><div className={`p-3 rounded-2xl bg-${stat.color}-50 text-${stat.color}-600 border border-${stat.color}-100`}><stat.icon className="w-5 h-5" /></div><span className={`text-[10px] font-black uppercase px-2 py-1 rounded-lg ${stat.color === 'rose' ? 'bg-rose-50 text-rose-500' : 'bg-emerald-50 text-emerald-500'}`}>{stat.trend}</span></div><p className="text-3xl font-black tracking-tighter mb-1">{stat.value}</p><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</p></div>))}</div>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 sm:gap-10">
                  <div className="xl:col-span-8 bg-white/60 backdrop-blur-xl p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3.5rem] border border-white shadow-2xl relative overflow-hidden group">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 relative z-10 gap-6"><div className="flex items-center gap-4"><div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center border border-indigo-100"><Navigation className="w-6 h-6 text-indigo-600" /></div><div><h3 className="font-black text-xl sm:text-2xl tracking-tighter">Traffic Map</h3><p className="text-xs text-slate-400 font-medium">Real-time data flow.</p></div></div><div className="flex gap-2 bg-slate-100/50 p-1 rounded-2xl">{['7d', '30d', '90d'].map(d => (<button key={d} className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${d === '30d' ? 'bg-white text-slate-900 shadow-md' : 'text-slate-400 hover:text-slate-600'}`}>{d}</button>))}</div></div>
                    <div className="aspect-[1.5/1] sm:aspect-[2.2/1] bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] relative overflow-hidden shadow-inner group/traffic"><div className="absolute inset-0 opacity-40 flex items-center justify-center p-8 grayscale"><div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-contain bg-center bg-no-repeat opacity-20 grayscale invert" /></div><svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 400"><motion.path d="M120,120 Q300,100 460,100" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 0 }} transition={{ repeat: Infinity, duration: 3, ease: 'linear' }} /><motion.path d="M460,100 Q600,150 800,220" fill="none" stroke="url(#lineGradient)" strokeWidth="1" strokeDasharray="5,5" initial={{ strokeDashoffset: 100 }} animate={{ strokeDashoffset: 0 }} transition={{ repeat: Infinity, duration: 4, ease: 'linear' }} /><defs><linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="rgba(59, 130, 246, 0)" /><stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" /><stop offset="100%" stopColor="rgba(59, 130, 246, 0)" /></linearGradient></defs></svg>{trafficHubs.map((hub, i) => (<div key={i} className="absolute group/hub cursor-pointer z-20" style={{ top: hub.top, left: hub.left }}><div className={`w-2.5 h-2.5 rounded-full bg-${hub.color}-500 shadow-[0_0_20px_rgba(244,63,94,0.5)]`} /><div className={`absolute inset-0 w-2.5 h-2.5 rounded-full bg-${hub.color}-500 animate-ping opacity-50 scale-150`} /></div>))}</div>
                  </div>
                  <div className="xl:col-span-4 bg-slate-900 p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] text-white border-0 shadow-2xl relative overflow-hidden flex flex-col justify-between"><div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[80px]" /><div className="relative z-10"><h3 className="font-black text-2xl tracking-tighter mb-8">System Integrity</h3><div className="space-y-8">{[{ label: 'Database Sync', value: '99.9%', color: 'emerald' }, { label: 'Cache Hit Rate', value: '84.2%', color: 'blue' }, { label: 'SLA Compliance', value: '100%', color: 'indigo' }].map(item => (<div key={item.label}><div className="flex justify-between items-center mb-3"><span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</span><span className={`text-xs font-black text-${item.color}-400`}>{item.value}</span></div><div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: item.value }} className={`h-full bg-${item.color}-400 rounded-full`} /></div></div>))}</div></div><div className="p-8 bg-white/5 border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] mt-10 relative z-10"><p className="text-3xl sm:text-4xl font-black tracking-tighter text-emerald-400">Perfect</p></div></div>
                </div>
              </motion.div>
            )}

            {activeView === 'portals' && (
              <motion.div key="portals" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-12">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                  <div><h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-none mb-4">Environment Hub</h2><p className="text-slate-400 text-sm sm:text-base font-medium">Orchestrating {companies.length} active global portals.</p></div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"><button className="flex-1 lg:flex-none px-6 py-4 bg-white border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest shadow-sm flex items-center justify-center gap-2">Export CSV</button><button onClick={() => setShowAddCompany(true)} className="flex-[2] lg:flex-none bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 sm:px-10 py-5 rounded-2xl font-black shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all">Provision Portal</button></div>
                </div>

                <div className="bg-white/60 backdrop-blur-xl p-4 sm:p-8 rounded-[2rem] sm:rounded-[3.5rem] border border-white shadow-2xl relative overflow-hidden group">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    <div className="w-full md:w-96 bg-slate-50/50 border border-slate-100 rounded-2xl px-6 py-4 flex items-center gap-4 focus-within:ring-2 ring-blue-500/20 transition-all"><Search className="w-5 h-5 text-slate-400" /><input placeholder="Filter portals..." className="bg-transparent outline-none font-bold text-sm w-full" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /></div>
                    <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto w-full md:w-auto pb-2 sm:pb-0 scrollbar-hide">{['All Tiers', 'Enterprise', 'Professional', 'Startup'].map(t => (<button key={t} className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-xl text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all ${t === 'All Tiers' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-900'}`}>{t}</button>))}</div>
                  </div>

                  {/* RESPONSIVE TABLE -> CARDS ON MOBILE */}
                  <div className="hidden lg:block overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50/50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 border-b border-slate-100">
                        <tr><th className="p-8">Portal Entity</th><th className="p-8">Health & Usage</th><th className="p-8">Region</th><th className="p-8">Tier Status</th><th className="p-8 text-right">Actions</th></tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {filteredCompanies.map(c => (
                          <tr key={c.id} className="hover:bg-white/80 transition-all group">
                            <td className="p-8"><div className="flex items-center gap-5"><div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 transition-colors shadow-sm relative"><Building2 className="w-8 h-8 text-slate-400 group-hover:text-white" /><div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${c.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} /></div><div><p className="font-black text-lg leading-tight tracking-tight text-slate-900">{c.name}</p><p className="text-[10px] text-blue-600 font-black uppercase tracking-widest mt-1">{c.subdomain}.cubelogs</p></div></div></td>
                            <td className="p-8"><div className="space-y-3 w-48"><div className="flex justify-between items-center"><span className="text-[9px] font-black text-slate-400 uppercase">Load: {c.usage}%</span><span className={`text-[9px] font-black uppercase ${c.health > 80 ? 'text-emerald-500' : 'text-rose-500'}`}>Health: {c.health}%</span></div><div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${c.usage}%` }} className={`h-full ${c.usage > 90 ? 'bg-rose-500' : 'bg-blue-600'}`} /></div></div></td>
                            <td className="p-8"><div className="flex items-center gap-3"><Globe className="w-4 h-4 text-slate-300" /><span className="text-xs font-bold text-slate-600">{c.region}</span></div></td>
                            <td className="p-8"><div className="flex flex-col gap-2"><span className={`w-fit px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest ${c.plan === 'Enterprise' ? 'bg-indigo-50 text-indigo-600 border border-indigo-100' : c.plan === 'Professional' ? 'bg-blue-50 text-blue-600 border border-blue-100' : 'bg-slate-100 text-slate-500'}`}>{c.plan}</span><span className="text-[9px] font-black text-slate-300 uppercase tracking-widest">Backup: {c.lastBackup}</span></div></td>
                            <td className="p-8 text-right"><div className="flex justify-end gap-2 sm:gap-3"><button title="Ghost Mode" className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-400 hover:bg-slate-900 hover:text-white transition-all shadow-sm"><Ghost className="w-4 h-4" /></button><button title="Restart" className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-all shadow-sm"><RotateCcw className="w-4 h-4" /></button><button title="Suspend" className="p-3.5 rounded-xl bg-white border border-slate-200 text-slate-400 hover:bg-rose-50 hover:text-rose-500 transition-all shadow-sm"><StopCircle className="w-4 h-4" /></button></div></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* MOBILE/TABLET CARD VIEW */}
                  <div className="lg:hidden space-y-4">
                    {filteredCompanies.map(c => (
                      <div key={c.id} className="bg-white/40 border border-white rounded-3xl p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-4"><div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center relative"><Building2 className="w-6 h-6 text-slate-400" /><div className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${c.status === 'Active' ? 'bg-emerald-500' : 'bg-amber-500'}`} /></div><div><p className="font-black text-slate-900 leading-tight">{c.name}</p><p className="text-[10px] text-blue-600 font-black uppercase tracking-widest">{c.subdomain}.cubelogs</p></div></div>
                          <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${c.plan === 'Enterprise' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>{c.plan}</span>
                        </div>
                        <div className="space-y-4 mb-6">
                          <div className="flex justify-between items-center"><span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Health & Usage</span><span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">{c.usage}% Load • {c.health}% Health</span></div>
                          <div className="w-full h-1.5 bg-slate-100/50 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${c.usage}%` }} className={`h-full ${c.usage > 90 ? 'bg-rose-500' : 'bg-blue-600'}`} /></div>
                        </div>
                        <div className="flex items-center justify-between pt-6 border-t border-slate-100/50">
                          <div className="flex items-center gap-2"><Globe className="w-3 h-3 text-slate-300" /><span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{c.region}</span></div>
                          <div className="flex gap-2"><button className="p-2.5 rounded-xl bg-white border border-slate-100 text-slate-400 active:bg-slate-900 active:text-white transition-all"><Ghost className="w-4 h-4" /></button><button className="p-2.5 rounded-xl bg-white border border-slate-100 text-slate-400 active:bg-blue-600 active:text-white transition-all"><RotateCcw className="w-4 h-4" /></button><button className="p-2.5 rounded-xl bg-white border border-slate-100 text-slate-400 active:bg-rose-600 active:text-white transition-all"><StopCircle className="w-4 h-4" /></button></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 p-6 sm:p-8 bg-slate-50/50 rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-4 sm:gap-6"><div className="flex -space-x-3">{[1, 2, 3].map(i => (<div key={i} className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center font-black text-[10px] text-slate-500">AD</div>))}</div><p className="text-[10px] sm:text-xs font-bold text-slate-500 tracking-tight text-center md:text-left">3 Active Administrators currently orchestrating portals.</p></div>
                    <button className="w-full md:w-auto px-8 py-4 bg-white border border-slate-200 rounded-2xl font-black text-[10px] uppercase tracking-widest">Audit Access</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                   {[{ label: 'Auto-Scaling', icon: CloudLightning, color: 'blue', text: 'Dynamic resource allocation based on traffic.' }, { label: 'API Manifest', icon: FileJson, color: 'indigo', text: 'Centralized documentation for webhooks.' }, { label: 'Isolation Policy', icon: ShieldHalf, color: 'rose', text: 'Ensure zero-trust environment boundaries.' }].map((card, i) => (
                     <div key={i} className="bg-white/60 backdrop-blur-xl p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3.5rem] border border-white shadow-2xl flex flex-col justify-between group hover:border-slate-200 transition-all"><div className={`w-14 h-14 bg-${card.color}-50 text-${card.color}-600 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform`}><card.icon className="w-7 h-7" /></div><div><h4 className="text-2xl font-black tracking-tighter mb-4">{card.label}</h4><p className="text-slate-400 text-sm font-medium leading-relaxed mb-10">{card.text}</p><button className="w-full py-5 bg-slate-100 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">Configure</button></div></div>
                   ))}
                </div>
              </motion.div>
            )}

            {activeView === 'billing' && (
              <motion.div key="billing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10 sm:space-y-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div><h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-none">Financial Engine</h2><p className="text-slate-400 text-sm sm:text-base font-medium mt-2">Revenue streams and global gateway monitoring.</p></div>
                  <div className="flex gap-4 w-full md:w-auto"><button className="flex-1 md:flex-none px-6 py-4 bg-white border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest shadow-sm">Reports</button><button className="flex-1 md:flex-none px-6 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl">Invoices</button></div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 sm:gap-10">
                  <div className="xl:col-span-2 bg-white/60 backdrop-blur-xl p-6 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] border border-white shadow-2xl">
                    <div className="flex justify-between items-center mb-10"><h3 className="font-black text-slate-400 text-[10px] tracking-[0.3em] uppercase">Active Portals Revenue</h3><span className="hidden sm:inline bg-blue-50 text-blue-600 px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-blue-100">{companies.length} Active Portals</span></div>
                    <div className="space-y-6">
                      {companies.map(c => (
                        <div key={c.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:p-8 bg-white/40 border border-white rounded-[2rem] sm:rounded-[2.5rem] shadow-sm hover:shadow-md transition-all gap-6">
                          <div className="flex items-center gap-5"><div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black shadow-lg text-lg">$</div><div><p className="font-black text-slate-900 text-base sm:text-lg leading-tight">{c.name}</p><p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{c.plan} • Monthly</p></div></div>
                          <div className="flex items-center justify-between sm:justify-end gap-8 text-left sm:text-right w-full sm:w-auto">
                            <div><p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Status</p><span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Paid</span></div>
                            <div className="border-l border-slate-100 pl-8"><p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Amount</p><p className="font-black text-xl sm:text-2xl text-slate-900 tracking-tighter">${c.amount}.00</p></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-8 sm:space-y-10">
                    <div className="bg-slate-900 p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3.5rem] text-white border-0 shadow-2xl flex flex-col justify-between h-fit sm:aspect-square">
                      <div><h3 className="font-black mb-10 text-slate-500 text-[10px] tracking-[0.3em] uppercase">Revenue Overview</h3><div className="space-y-4 mb-8"><button onClick={() => setShowBillingLogs(true)} className="w-full bg-white/5 hover:bg-white/10 p-5 rounded-2xl font-black flex items-center justify-between border border-white/10 group"><div className="flex items-center gap-4 text-sm"><History className="w-5 h-5 text-blue-400" /> Logs</div><ChevronRight className="w-4 h-4 group-hover:translate-x-1" /></button><button onClick={() => setShowStripeSettings(true)} className="w-full bg-white/5 hover:bg-white/10 p-5 rounded-2xl font-black flex items-center justify-between border border-white/10 group"><div className="flex items-center gap-4 text-sm"><LinkIcon className="w-5 h-5 text-indigo-400" /> Stripe</div><ChevronRight className="w-4 h-4 group-hover:translate-x-1" /></button></div></div>
                      <div className="p-6 sm:p-8 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] sm:rounded-[2.5rem] text-center shadow-xl relative overflow-hidden"><p className="text-[9px] font-black uppercase text-blue-100 mb-2 tracking-[0.2em]">Projected Monthly</p><p className="text-3xl sm:text-4xl font-black tracking-tighter">${companies.reduce((acc, c) => acc + c.amount, 0).toLocaleString()}.00</p></div>
                    </div>
                    <div className="bg-white/60 backdrop-blur-xl p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3.5rem] border border-white shadow-2xl">
                      <h3 className="font-black mb-8 text-slate-400 text-[10px] tracking-[0.3em] uppercase">Gateway Health</h3>
                      <div className="space-y-6">
                         <div className="flex justify-between items-center"><span className="text-xs font-bold text-slate-600">Status</span><span className="text-[10px] font-black text-emerald-500 uppercase flex items-center gap-1"><div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" /> Operational</span></div>
                         <div className="flex justify-between items-center"><span className="text-xs font-bold text-slate-600">Latency</span><span className="text-[10px] font-black text-slate-900 uppercase">12ms</span></div>
                         <div className="flex justify-between items-center"><span className="text-xs font-bold text-slate-600">Region</span><span className="text-[10px] font-black text-blue-600 uppercase">us-east-1</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeView === 'settings' && (
              <motion.div key="settings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-10 sm:space-y-12">
                <h2 className="text-3xl sm:text-5xl font-black tracking-tighter leading-none">System Policy</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
                  <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2.5rem] sm:rounded-[3rem] border border-white shadow-2xl flex flex-col justify-between"><div className="flex items-center gap-4 mb-8"><div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100"><Key className="w-6 h-6 text-amber-500" /></div><h3 className="font-black text-xl tracking-tight">Access Keys</h3></div><div className="space-y-5"><div className="p-5 bg-slate-50/50 rounded-2xl border border-slate-100 flex justify-between items-center group shadow-inner"><code className="text-[10px] font-black text-slate-500 tracking-widest uppercase">cl_...92x</code><button className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Rotate</button></div><button className="w-full bg-slate-900 text-white p-5 rounded-2xl font-black shadow-xl text-xs tracking-widest uppercase">Generate Global Key</button></div></div>
                  <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2.5rem] sm:rounded-[3rem] border border-white shadow-2xl flex flex-col justify-between"><div className="flex items-center gap-4 mb-8"><div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center border border-rose-100"><ShieldEllipsis className="w-6 h-6 text-rose-500" /></div><h3 className="font-black text-xl tracking-tight">Maintenance</h3></div><p className="text-slate-400 text-xs font-medium mb-8 leading-relaxed">Lock active portals for critical system updates.</p><button onClick={() => setMaintenanceMode(!maintenanceMode)} className={`w-full py-5 rounded-2xl font-black flex items-center justify-center gap-3 transition-all text-xs tracking-widest uppercase shadow-lg ${maintenanceMode ? 'bg-rose-600 text-white shadow-rose-600/20' : 'bg-slate-100 text-slate-900'}`}>{maintenanceMode ? <PlayCircle className="w-5 h-5" /> : <PauseCircle className="w-5 h-5" />} {maintenanceMode ? 'Locked' : 'Unlock'}</button></div>
                  <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2.5rem] sm:rounded-[3rem] border border-white shadow-2xl flex flex-col justify-between"><div className="flex items-center gap-4 mb-8"><div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100"><Fingerprint className="w-6 h-6 text-blue-600" /></div><h3 className="font-black text-xl tracking-tight">Super Security</h3></div><div className="space-y-4"><div className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100 shadow-inner"><span className="text-xs font-bold uppercase tracking-widest text-slate-600">2FA</span><button onClick={() => setTwoFactorAuth(!twoFactorAuth)} className={`w-12 h-6 rounded-full transition-all relative ${twoFactorAuth ? 'bg-blue-600' : 'bg-slate-300'}`}><motion.div animate={{ x: twoFactorAuth ? 24 : 4 }} className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm" /></button></div><div className="flex items-center justify-between p-5 bg-slate-50/50 rounded-2xl border border-slate-100 shadow-inner"><span className="text-xs font-bold uppercase tracking-widest text-slate-600">IP Whitelist</span><button onClick={() => setIpWhitelisting(!ipWhitelisting)} className={`w-12 h-6 rounded-full transition-all relative ${ipWhitelisting ? 'bg-blue-600' : 'bg-slate-300'}`}><motion.div animate={{ x: ipWhitelisting ? 24 : 4 }} className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm" /></button></div></div></div>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
                   <div className="xl:col-span-8 bg-white/60 backdrop-blur-xl p-6 sm:p-10 rounded-[2.5rem] sm:rounded-[3.5rem] border border-white shadow-2xl overflow-hidden"><div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-6"><h3 className="text-2xl font-black tracking-tighter flex items-center gap-3"><ShieldQuestion className="w-6 h-6 text-blue-600" /> Session History</h3><button className="text-[9px] font-black text-rose-500 uppercase tracking-widest border border-rose-100 px-4 py-2 rounded-xl">Terminate All</button></div><div className="overflow-x-auto"><table className="w-full text-left min-w-[500px]"><thead className="bg-slate-50/50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400"><tr><th className="p-6">Event</th><th className="p-6">Device</th><th className="p-6">IP Address</th><th className="p-6 text-right">Time</th></tr></thead><tbody className="divide-y divide-slate-50">{sessionHistory.map(session => (<tr key={session.id} className="group hover:bg-slate-50/50 transition-all"><td className="p-6"><div className="flex items-center gap-3"><div className={`w-2 h-2 rounded-full ${session.event === 'Login' ? 'bg-emerald-500' : 'bg-slate-300'}`} /><span className="font-bold text-sm">{session.event}</span></div></td><td className="p-6 text-sm font-medium text-slate-600">{session.device}</td><td className="p-6 text-xs font-black text-slate-400 uppercase tracking-widest">{session.ip}</td><td className="p-6 text-right text-xs font-bold text-slate-900">{session.time}</td></tr>))}</tbody></table></div></div>
                   <div className="xl:col-span-4 bg-slate-900 p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] text-white shadow-2xl relative overflow-hidden flex flex-col justify-between"><div className="relative z-10 mb-10"><h3 className="text-2xl font-black tracking-tighter mb-10 flex items-center gap-3"><Clock className="w-6 h-6 text-blue-400" /> Admin Logs</h3><div className="space-y-6">{adminLogs.map(log => (<div key={log.id} className="p-6 bg-white/5 border border-white/10 rounded-[1.5rem] sm:rounded-[2rem] hover:bg-white/10 transition-all group"><div className="flex justify-between items-start mb-2"><p className="font-black text-sm text-white group-hover:text-blue-400 transition-colors">{log.action}</p><span className="text-[9px] font-black uppercase text-slate-500 tracking-widest">{log.time}</span></div><p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">{log.module} System</p></div>))}</div></div><button className="w-full py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all relative z-10">Download Full Audit</button></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* ALL MODALS - RESPONSIVE OPTIMIZED */}
      <AnimatePresence>
        {selectedRequest && (
          <div className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-8">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setSelectedRequest(null)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-xl" />
            <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="bg-white w-full max-w-2xl rounded-t-[3rem] sm:rounded-[3.5rem] border-t sm:border border-white relative z-[210] shadow-2xl overflow-hidden p-8 sm:p-12 lg:p-16">
               <button onClick={() => setSelectedRequest(null)} className="absolute top-6 right-6 sm:top-8 sm:right-8 p-3 text-slate-300 hover:text-slate-900 transition-all"><X className="w-7 h-7 sm:w-8 sm:h-8" /></button>
               <div className="flex items-center gap-5 sm:gap-6 mb-10"><div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-600 rounded-2xl sm:rounded-[2.5rem] flex items-center justify-center text-white shadow-xl shadow-blue-600/20"><Building2 className="w-8 h-8 sm:w-10 sm:h-10" /></div><div><h3 className="text-2xl sm:text-3xl font-black tracking-tighter leading-none mb-2">{selectedRequest.name}</h3><div className="flex items-center gap-3"><span className="px-3 py-1 bg-blue-50 text-blue-600 text-[9px] sm:text-[10px] font-black uppercase tracking-widest rounded-lg border border-blue-100">{selectedRequest.plan}</span><span className="text-slate-400 text-[10px] font-medium">Requested {selectedRequest.time}</span></div></div></div>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-10"><div className="p-5 sm:p-6 bg-slate-50 border border-slate-100 rounded-2xl sm:rounded-3xl"><p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 sm:mb-2">Subdomain</p><p className="font-black text-slate-900 text-sm sm:text-base">{selectedRequest.subdomain}.cubelogs</p></div><div className="p-5 sm:p-6 bg-slate-50 border border-slate-100 rounded-2xl sm:rounded-3xl"><p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 sm:mb-2">Region</p><p className="font-black text-slate-900 text-sm sm:text-base">{selectedRequest.region}</p></div><div className="p-5 sm:p-6 bg-slate-50 border border-slate-100 rounded-2xl sm:rounded-3xl"><p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 sm:mb-2">Email</p><p className="font-black text-slate-900 text-sm sm:text-base truncate">{selectedRequest.email}</p></div><div className="p-5 sm:p-6 bg-slate-50 border border-slate-100 rounded-2xl sm:rounded-3xl"><p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 sm:mb-2">Staff</p><p className="font-black text-slate-900 text-sm sm:text-base">{selectedRequest.workforce}</p></div></div>
               <div className="flex items-center justify-between p-5 sm:p-6 bg-blue-50/50 border border-blue-100 rounded-2xl sm:rounded-3xl mb-10"><div className="flex items-center gap-4"><div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center text-white"><Zap className="w-5 h-5" /></div><div><p className="font-black text-xs sm:text-sm text-slate-900">Auto-Scaling</p><p className="text-[10px] text-blue-600 font-bold">{selectedRequest.autoScaling ? 'Provision with Dynamic Nodes' : 'Static Node'}</p></div></div></div>
               <div className="flex flex-col sm:flex-row gap-4"><button onClick={() => handleRejectRequest(selectedRequest.id, selectedRequest.name)} className="py-4 sm:py-5 bg-rose-50 text-rose-500 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-rose-500 hover:text-white transition-all order-2 sm:order-1 flex-1">Decline</button><button onClick={() => handleApproveRequest(selectedRequest) } className="py-4 sm:py-5 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] transition-all shadow-xl shadow-slate-900/20 order-1 sm:order-2 flex-[2]">Provision Environment</button></div>
            </motion.div>
          </div>
        )}
        {showBroadcast && (<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => !isBroadcasting && setShowBroadcast(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl" /><motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 40 }} className="bg-white w-full max-w-lg p-8 sm:p-10 rounded-[2.5rem] sm:rounded-[3.5rem] relative z-[110] shadow-2xl text-center overflow-hidden">{isBroadcasting && (<motion.div initial={{ width: 0 }} animate={{ width: `${broadcastProgress}%` }} className="absolute top-0 left-0 h-1.5 bg-gradient-to-r from-amber-400 to-orange-600 transition-all duration-100" />)}<div className={`w-16 h-16 sm:w-20 sm:h-20 bg-amber-50 text-amber-600 rounded-[1.5rem] sm:rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 border border-amber-100 shadow-lg ${isBroadcasting ? 'animate-pulse' : ''}`}>{isBroadcasting ? <Radio className="w-8 h-8 sm:w-10 sm:h-10 animate-bounce" /> : <Send className="w-8 h-8 sm:w-10 sm:h-10" />}</div><h3 className="text-2xl sm:text-3xl font-black mb-2 tracking-tighter">{isBroadcasting ? 'Broadcasting...' : 'Global Broadcast'}</h3><p className="text-slate-400 font-medium text-xs sm:text-sm mb-10 leading-relaxed">Transmit system-wide notification.</p>{!isBroadcasting ? (<motion.div key="input" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}><textarea value={broadcastMessage} onChange={(e) => setBroadcastMessage(e.target.value)} placeholder="Enter message..." className="w-full bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 h-32 sm:h-40 mb-8 font-bold text-sm outline-none focus:ring-2 ring-amber-500/10 transition-all" /><div className="flex gap-4 w-full"><button onClick={() => setShowBroadcast(false)} className="flex-1 bg-white border border-slate-200 py-4 sm:py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest">Cancel</button><button onClick={handleBroadcast} disabled={!broadcastMessage.trim()} className={`flex-1 py-4 sm:py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl transition-all ${broadcastMessage.trim() ? 'bg-amber-600 text-white shadow-amber-600/20' : 'bg-slate-100 text-slate-400'}`}>Transmit</button></div></motion.div>) : (<motion.div key="loading" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="py-10"><div className="flex justify-center gap-1">{[1, 2, 3, 4, 5].map(i => (<motion.div key={i} animate={{ height: [10, 30, 10] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }} className="w-1.5 bg-amber-500 rounded-full" />))}</div><p className="mt-8 text-[10px] font-black text-amber-600 uppercase tracking-[0.3em]">{broadcastProgress}% Synchronized</p></motion.div>)}</motion.div></div>)}
        {showAddCompany && (<div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 lg:p-8"><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowAddCompany(false)} className="absolute inset-0 bg-slate-900/40 backdrop-blur-xl" /><motion.div initial={{ opacity: 0, scale: 0.9, y: 40 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 40 }} className="bg-white w-full max-w-5xl h-full sm:h-auto sm:rounded-[3rem] lg:rounded-[4rem] border border-white relative z-[110] shadow-2xl overflow-hidden flex flex-col md:flex-row"><div className="md:w-1/3 bg-slate-900 p-8 sm:p-12 text-white flex flex-col justify-between relative"><div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px]" /><div className="relative z-10"><div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl sm:rounded-[2rem] flex items-center justify-center mb-8 sm:mb-10"><Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" /></div><h3 className="text-3xl sm:text-4xl font-black tracking-tighter leading-tight mb-4 sm:mb-6">Orchestrate Environment</h3><p className="text-slate-400 text-xs sm:text-sm font-medium">Provision a new dedicated tenant.</p></div></div><div className="md:w-2/3 p-8 sm:p-12 lg:p-20 relative bg-slate-50/30 overflow-y-auto"><button onClick={() => setShowAddCompany(false)} className="absolute top-6 right-6 sm:top-8 sm:right-8 p-3 text-slate-300 hover:text-slate-900 transition-all"><X className="w-7 h-7 sm:w-8 sm:h-8" /></button><div className="space-y-10">{provisioningStep === 1 ? (<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8"><div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"><div className="space-y-3"><label className="text-[9px] font-black uppercase text-slate-400 tracking-[0.3em]">Brand Name</label><input value={newPortalData.name} onChange={(e) => setNewPortalData({...newPortalData, name: e.target.value})} placeholder="Quantum Lab" className="w-full bg-white border border-slate-200 rounded-2xl py-4 sm:py-5 px-6 sm:px-8 outline-none font-black text-base sm:text-lg focus:ring-2 ring-blue-500/10 transition-all" /></div><div className="space-y-3"><label className="text-[9px] font-black uppercase text-slate-400 tracking-[0.3em]">Handle</label><input value={newPortalData.subdomain} onChange={(e) => setNewPortalData({...newPortalData, subdomain: e.target.value})} placeholder="quantum" className="w-full bg-white border border-slate-200 rounded-2xl py-4 sm:py-5 px-6 sm:px-8 outline-none font-black text-base sm:text-lg focus:ring-2 ring-blue-500/10 transition-all" /></div></div><button onClick={() => setProvisioningStep(2)} className="w-full bg-slate-900 text-white py-5 sm:py-6 rounded-[1.5rem] sm:rounded-[2rem] font-black text-xs sm:text-sm uppercase shadow-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all">Continue <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" /></button></motion.div>) : (<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10"><div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">{['Startup', 'Professional', 'Enterprise'].map(p => (<button key={p} onClick={() => setNewPortalData({...newPortalData, plan: p})} className={`p-6 rounded-[2rem] border-2 transition-all font-black text-sm text-center flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-4 sm:gap-0 ${newPortalData.plan === p ? 'border-blue-600 bg-blue-50/50 text-blue-600 shadow-lg' : 'border-white bg-white text-slate-400'}`}><Package className={`w-8 h-8 sm:mb-4 shrink-0 ${newPortalData.plan === p ? 'text-blue-600' : 'text-slate-200'}`} /> {p}</button>))}</div><div className="flex gap-4 sm:gap-6 pt-6"><button onClick={() => setProvisioningStep(1)} className="flex-1 bg-white border border-slate-200 text-slate-600 py-5 sm:py-6 rounded-[1.5rem] sm:rounded-[2rem] font-black text-[10px] sm:text-xs uppercase shadow-sm">Back</button><button onClick={handleFinalProvision} className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-5 sm:py-6 rounded-[1.5rem] sm:rounded-[2rem] font-black text-[10px] sm:text-xs uppercase shadow-2xl hover:scale-[1.02] active:scale-95 transition-all">Initiate</button></div></motion.div>)}</div></div></motion.div></div>)}
        {showBillingLogs && (<div className="fixed inset-0 z-[120] flex items-end sm:items-center justify-center p-0 sm:p-6"><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowBillingLogs(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" /><motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} className="bg-white w-full max-w-2xl rounded-t-[2.5rem] sm:rounded-[3rem] p-6 sm:p-10 relative z-[130] shadow-2xl max-h-[80vh] overflow-hidden flex flex-col"><div className="flex justify-between items-center mb-8 shrink-0"><h3 className="text-xl sm:text-2xl font-black flex items-center gap-2 tracking-tighter">Subscription Logs</h3><button onClick={() => setShowBillingLogs(false)} className="p-2 sm:p-3 hover:bg-slate-100 rounded-2xl"><X className="w-6 h-6" /></button></div><div className="space-y-4 overflow-y-auto pr-2 scrollbar-hide flex-1">{billingLogs.map(log => (<div key={log.id} className="p-5 sm:p-6 bg-slate-50 border border-slate-100 rounded-2xl flex justify-between items-center gap-4"><div><p className="font-black text-xs sm:text-sm">{log.event}</p><p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase mt-1 leading-tight">{log.company} • {log.time}</p></div><div className="text-right shrink-0"><p className="font-black text-blue-600 text-sm sm:text-base">{log.amount}</p><span className={`text-[9px] font-black uppercase ${log.status === 'success' ? 'text-emerald-500' : 'text-rose-500'}`}>{log.status}</span></div></div>))}</div></motion.div></div>)}
        {showSearch && (<div className="fixed inset-0 z-[120] flex items-start justify-center p-4 sm:p-6 pt-16 sm:pt-24"><motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowSearch(false)} className="absolute inset-0 bg-slate-900/10 backdrop-blur-[4px]" /><motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-white/90 backdrop-blur-2xl w-full max-w-2xl rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl relative z-[130] border border-white/50 overflow-hidden"><div className="p-6 sm:p-8 flex items-center gap-4 sm:gap-6 border-b border-slate-100/50"><Search className="w-6 h-6 text-slate-400" /><input autoFocus placeholder="Find environments..." className="w-full bg-transparent outline-none font-black text-xl sm:text-2xl tracking-tighter" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /></div><div className="p-4 sm:p-6 max-h-[400px] overflow-y-auto scrollbar-hide">{filteredCompanies.map(c => (<button key={c.id} className="w-full flex justify-between items-center p-5 rounded-2xl sm:rounded-3xl hover:bg-white transition-all mb-2 text-left"><div className="flex items-center gap-4 sm:gap-5"><div className="p-2 sm:p-3 bg-white border border-slate-100 rounded-xl"><Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-slate-300" /></div><div><p className="font-black text-slate-900 text-base sm:text-lg leading-tight">{c.name}</p><p className="text-[9px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest">{c.subdomain}.cubelogs</p></div></div><ChevronRight className="w-5 h-5 text-slate-200" /></button>))}</div></motion.div></div>)}
      </AnimatePresence>
      <style jsx global>{`
        .glass-card { background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.8); box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.05); }
        .animate-pulse-slow { animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        @keyframes pulse { 0%, 100% { opacity: 0.1; } 50% { opacity: 0.2; } }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

function Info(props: any) { return (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>); }
