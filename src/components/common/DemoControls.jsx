import React from 'react';
import { Loader2, Package, AlertCircle, RotateCcw, Trash2 } from 'lucide-react';
import styles from './DemoControls.module.css';

export default function DemoControls({ demoMode, onSetMode, onReset }) {
  return (
    <div className={styles.floatingBar} role="toolbar" aria-label="Demo reviewer controls">
      <div className={styles.barLabel}>
        <span className={styles.labelDot}></span>
        <span>Reviewer Demo Controls</span>
      </div>

      <div className={styles.btnGroup}>
        <button
          type="button"
          className={`${styles.demoBtn} ${demoMode === 'loading' ? styles.activeBtn : ''}`}
          onClick={() => onSetMode('loading')}
          title="Preview: Custom VELOOP Loader state"
        >
          <Loader2 size={14} className={demoMode === 'loading' ? styles.spinActive : ''} />
          <span>Loading State</span>
        </button>

        <button
          type="button"
          className={`${styles.demoBtn} ${demoMode === 'empty' ? styles.activeBtn : ''}`}
          onClick={() => onSetMode('empty')}
          title="Preview: Empty State (no packages)"
        >
          <Package size={14} />
          <span>Empty State</span>
        </button>

        <button
          type="button"
          className={`${styles.demoBtn} ${demoMode === 'error' ? styles.activeBtnError : ''}`}
          onClick={() => onSetMode('error')}
          title="Preview: Error state with Retry"
        >
          <AlertCircle size={14} />
          <span>Error State</span>
        </button>

        <button
          type="button"
          className={styles.resetBtn}
          onClick={onReset}
          title="Reset to normal state"
        >
          <RotateCcw size={14} />
          <span>Reset</span>
        </button>
      </div>
    </div>
  );
}
