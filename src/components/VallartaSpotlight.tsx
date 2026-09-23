import React, { useState } from 'react';
import { vallartaTabsData, vallartaStatsData } from '../data/vallarta';
import { trackEvent } from '../utils/analytics';

export const VallartaSpotlight: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('sunset');
  const [isFading, setIsFading] = useState<boolean>(false);

  const activeTab =
    vallartaTabsData.find((tab) => tab.id === activeTabId) || vallartaTabsData[0];

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTabId) return;

    const selectedTab = vallartaTabsData.find((t) => t.id === tabId);
    trackEvent('select_vallarta_tab', {
      tab_id: tabId,
      tab_title: selectedTab?.title,
    });

    setIsFading(true);
    setTimeout(() => {
      setActiveTabId(tabId);
      setIsFading(false);
    }, 200);
  };

  return (
    <section className="vallarta-spotlight-wrap reveal" id="vallarta">
      <div className="vallarta-spotlight">
        <div className="vallarta-head">
          <div>
            <p className="section-kicker" style={{ color: 'var(--gold)' }}>
              Especial Pacífico Jalisciense
            </p>
            <h2>
              Puerto Vallarta:
              <br />
              Donde la montaña abraza al mar.
            </h2>
          </div>
          <p>
            Con la recién inaugurada vía corta Compostela - Las Varas, el
            Pacífico mexicano está ahora a tan solo{' '}
            <strong>2.5 a 3 horas de Guadalajara</strong>. Disfruta de una de
            las bahías más hermosas del mundo con su combinación única de mar,
            selva y hospitalidad jalisciense.
          </p>
        </div>

        {/* Tab Buttons */}
        <div
          className="vallarta-tabs"
          role="tablist"
          aria-label="Galería interactiva de Puerto Vallarta"
        >
          {vallartaTabsData.map((tab) => (
            <button
              key={tab.id}
              className={`gallery-tab-btn ${activeTabId === tab.id ? 'active' : ''}`}
              onClick={() => handleTabChange(tab.id)}
              role="tab"
              aria-selected={activeTabId === tab.id}
            >
              {tab.tabLabel}
            </button>
          ))}
        </div>

        {/* Gallery Viewer */}
        <div className="gallery-viewer" id="vallarta-viewer">
          <img
            id="vallarta-gallery-img"
            src={activeTab.image}
            alt={activeTab.title}
            style={{
              opacity: isFading ? 0 : 1,
              transition: 'opacity 0.25s ease, transform 1.2s cubic-bezier(.2,.75,.25,1)',
            }}
          />
          <div className="gallery-overlay">
            <div className="gallery-overlay-text">
              <span className="gallery-overlay-badge" id="vallarta-gallery-badge">
                {activeTab.badge}
              </span>
              <h3 id="vallarta-gallery-title">{activeTab.title}</h3>
              <p id="vallarta-gallery-desc">{activeTab.description}</p>
            </div>
            <a
              className="gallery-btn-cta"
              href={`https://www.google.com/maps/search/?api=1&query=${activeTab.mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackEvent('click_maps_link', {
                  category: 'vallarta_spotlight',
                  place: activeTab.title,
                })
              }
            >
              Ver en Maps ↗
            </a>
          </div>
        </div>

        {/* Travel Stats Grid */}
        <div className="vallarta-stats-grid">
          {vallartaStatsData.map((stat, index) => (
            <div key={index} className="vallarta-stat-card">
              <span className="vallarta-stat-icon">{stat.icon}</span>
              <h4>{stat.title}</h4>
              <p>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
