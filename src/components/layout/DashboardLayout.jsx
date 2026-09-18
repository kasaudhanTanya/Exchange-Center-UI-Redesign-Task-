import { LayoutDashboard, ArrowLeftRight, History, Settings, Bell, Search, Menu } from "lucide-react";
import styles from "./DashboardLayout.module.css";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <aside className={`${styles.sidebar} ${sidebarOpen ? styles.sidebarOpen : ""}`}>
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>V</span>
            <span className={styles.logoText}>VELOOP</span>
          </div>
          <button className={styles.closeBtn} onClick={() => setSidebarOpen(false)}>×</button>
        </div>
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </a>
          <a href="#" className={`${styles.navLink} ${styles.active}`}>
            <ArrowLeftRight size={20} />
            <span>Exchange</span>
          </a>
          <a href="#" className={styles.navLink}>
            <History size={20} />
            <span>History</span>
          </a>
          <a href="#" className={styles.navLink}>
            <Settings size={20} />
            <span>Settings</span>
          </a>
        </nav>
      </aside>
      
      {sidebarOpen && <div className={styles.overlay} onClick={() => setSidebarOpen(false)} />}

      <div className={styles.main}>
        <header className={styles.header}>
          <button className={styles.menuBtn} onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          
          <div className={styles.headerLeft}>
            <h1 className={styles.pageTitle}>Exchange Center</h1>
          </div>
          
          <div className={styles.headerRight}>
            <button className={styles.iconBtn}>
              <Search size={20} />
            </button>
            <button className={styles.iconBtn}>
              <Bell size={20} />
            </button>
            <div className={styles.profile}>
              <img src="https://i.pravatar.cc/100?img=11" alt="User" />
              <div className={styles.profileInfo}>
                <span className={styles.profileName}>Alex M.</span>
                <span className={styles.profileRole}>Pro Member</span>
              </div>
            </div>
          </div>
        </header>

        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
}
