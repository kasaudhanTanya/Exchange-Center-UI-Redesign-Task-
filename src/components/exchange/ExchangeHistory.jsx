import React, { useState } from 'react';
import { History, CheckCircle2, Clock, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import styles from './ExchangeHistory.module.css';

export default function ExchangeHistory({ history }) {
  const [filter, setFilter] = useState('all');

  const filteredHistory = history.filter(item => {
    if (filter === 'completed') return item.status === 'completed';
    if (filter === 'processing') return item.status === 'processing';
    if (filter === 'failed') return item.status === 'failed';
    return true;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case 'completed':
        return (
          <span className={styles.statusCompleted}>
            <CheckCircle2 size={13} className={styles.statusIcon} />
            <span>Completed</span>
          </span>
        );
      case 'processing':
        return (
          <span className={styles.statusProcessing}>
            <Clock size={13} className={styles.statusIcon} />
            <span>Processing</span>
          </span>
        );
      case 'failed':
        return (
          <span className={styles.statusFailed}>
            <AlertTriangle size={13} className={styles.statusIcon} />
            <span>Failed</span>
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.section} id="recent-conversions" aria-label="Recent Conversions History">
      <div className="container-custom">
        <div className={styles.sectionHeader}>
          <div className={styles.titleArea}>
            <div className={styles.badge}>
              <History size={13} className={styles.badgeIcon} />
              <span>TRANSACTION AUDIT</span>
            </div>
            <h2 className={styles.heading}>Recent Conversions</h2>
            <p className={styles.subheading}>
              Track your past reward conversions with verified transaction receipts and status records.
            </p>
          </div>

          {/* Filter Pills */}
          <div className={styles.filterPills}>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'all' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('all')}
            >
              All ({history.length})
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${filter === 'completed' ? styles.activeFilter : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
        </div>

        {/* History Table / Card List */}
        <div className={styles.historyCard}>
          {filteredHistory.length > 0 ? (
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Date & Time</th>
                    <th>Package / Type</th>
                    <th>Conversion Flow</th>
                    <th>Ref ID</th>
                    <th style={{ textAlign: 'right' }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredHistory.map((item) => (
                    <tr key={item.id} className={styles.tableRow}>
                      <td className={styles.dateCell}>
                        <span className={styles.dateText}>{item.date}</span>
                      </td>
                      <td className={styles.titleCell}>
                        <span className={styles.packageTitle}>{item.title}</span>
                      </td>
                      <td className={styles.flowCell}>
                        <div className={styles.flowWrapper}>
                          <span className={styles.gemVal}>
                            <img src="/images/single_gem.png" alt="" className={styles.microIcon} />
                            {item.requiredGems} Gems
                          </span>
                          <span className={styles.flowArrow}>➔</span>
                          <span className={styles.veVal}>
                            <img src="/images/single_VEs.png" alt="" className={styles.microIcon} />
                            {item.receiveVEs.toLocaleString()} VEs
                          </span>
                        </div>
                      </td>
                      <td className={styles.refCell}>
                        <span className={styles.refCode}>{item.txRef || 'VLP-AUTO'}</span>
                      </td>
                      <td className={styles.statusCell}>
                        {getStatusBadge(item.status)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className={styles.emptyHistory}>
              <span className={styles.emptyIcon}>📂</span>
              <p className={styles.emptyText}>No conversions matching selected filter.</p>
            </div>
          )}

          {/* Footer note */}
          <div className={styles.tableFooter}>
            <div className={styles.footerNote}>
              <ShieldCheck size={14} className={styles.shieldIcon} />
              <span>Conversions are permanently verified on the VELOOP Rewards ledger.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
