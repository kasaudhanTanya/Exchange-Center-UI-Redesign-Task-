import React, { useState, useMemo } from 'react';
import ExchangeCard from './ExchangeCard';
import { Search, Sparkles, Filter, SlidersHorizontal } from 'lucide-react';
import styles from './ExchangeGrid.module.css';

const categories = [
  { id: 'all', label: 'All Conversions' },
  { id: 'Daily', label: 'Daily Packs' },
  { id: 'Tasks', label: 'Task Rewards' },
  { id: 'Vault', label: 'Vault Bundles' },
  { id: 'Gaming', label: 'Gaming & Spins' },
  { id: 'VIP', label: 'VIP Milestone' }
];

export default function ExchangeGrid({
  options,
  userGems,
  onSelectConversion,
  onOpenEarnModal
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default'); // 'default', 'gems-asc', 'gems-desc', 'ratio'

  const filteredOptions = useMemo(() => {
    let result = [...options];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(item => item.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        item =>
          item.title.toLowerCase().includes(q) ||
          item.rewardType.toLowerCase().includes(q) ||
          item.explanation.toLowerCase().includes(q) ||
          item.requiredGems.toString().includes(q)
      );
    }

    // Sort
    if (sortBy === 'gems-asc') {
      result.sort((a, b) => a.requiredGems - b.requiredGems);
    } else if (sortBy === 'gems-desc') {
      result.sort((a, b) => b.requiredGems - a.requiredGems);
    } else if (sortBy === 'ratio') {
      result.sort((a, b) => (b.receiveVEs / b.requiredGems) - (a.receiveVEs / a.requiredGems));
    }

    return result;
  }, [options, selectedCategory, searchQuery, sortBy]);

  return (
    <section className={styles.section} id="available-conversions" aria-label="Available Conversions Catalog">
      <div className="container-custom">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.titleArea}>
            <div className={styles.sectionBadge}>
              <Sparkles size={13} className={styles.badgeIcon} />
              <span>LIVE REWARD OPPORTUNITIES</span>
            </div>
            <h2 className={styles.heading}>Available Conversions</h2>
            <p className={styles.subheading}>
              Select an exchange opportunity below to convert your Gems into VEs. All conversions are finalized at guaranteed rates.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className={styles.statsPill}>
            <span className={styles.statsCount}>{filteredOptions.length}</span>
            <span className={styles.statsLabel}>Packages Available</span>
          </div>
        </div>

        {/* Toolbar: Category Tabs & Search/Sort */}
        <div className={styles.toolbar}>
          {/* Category Tabs */}
          <div className={styles.categoryTabs} role="tablist" aria-label="Filter conversions by category">
            {categories.map(cat => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                type="button"
                className={`${styles.tabBtn} ${selectedCategory === cat.id ? styles.activeTab : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className={styles.controlsRow}>
            <div className={styles.searchBox}>
              <Search size={15} className={styles.searchIcon} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search packages, gems..."
                className={styles.searchInput}
                aria-label="Search conversion packages"
              />
              {searchQuery && (
                <button
                  type="button"
                  className={styles.clearSearchBtn}
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                >
                  ✕
                </button>
              )}
            </div>

            <div className={styles.sortBox}>
              <SlidersHorizontal size={14} className={styles.sortIcon} />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className={styles.sortSelect}
                aria-label="Sort conversion packages"
              >
                <option value="default">Default Order</option>
                <option value="gems-asc">Gems: Low to High</option>
                <option value="gems-desc">Gems: High to Low</option>
                <option value="ratio">Best Multiplier</option>
              </select>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        {filteredOptions.length > 0 ? (
          <div className={styles.grid}>
            {filteredOptions.map(option => (
              <ExchangeCard
                key={option.id}
                option={option}
                userGems={userGems}
                onSelectConversion={onSelectConversion}
                onOpenEarnModal={onOpenEarnModal}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyFilterState}>
            <div className={styles.emptyIconBox}>🔍</div>
            <h3 className={styles.emptyTitle}>No matching conversion packages</h3>
            <p className={styles.emptyDesc}>
              Try adjusting your search terms or select "All Conversions" to view all eligible opportunities.
            </p>
            <button
              type="button"
              className={styles.resetFiltersBtn}
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setSortBy('default');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
