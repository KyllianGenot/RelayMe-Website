import { useState } from 'react';

const StoreButtons = ({ className = "" }) => {
  const [hoverApple, setHoverApple] = useState(false);
  const [hoverGoogle, setHoverGoogle] = useState(false);

  return (
    <div className={`flex flex-wrap gap-6 ${className}`}>
      {/* App Store Button */}
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noopener noreferrer"
        className="app-store-button flex items-center justify-between"
        onMouseEnter={() => setHoverApple(true)}
        onMouseLeave={() => setHoverApple(false)}
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="app-store-icon mr-3">
          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.09,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
        </svg>
        <div className="app-store-text flex-1 text-center">
          <span className="app-store-label">Télécharger sur</span>
          <span className="app-store-name">App Store</span>
        </div>
        <div className={`app-store-shine ${hoverApple ? 'shine-active' : ''}`}></div>
      </a>

      {/* Google Play Button */}
      <a
        href="https://play.google.com"
        target="_blank"
        rel="noopener noreferrer"
        className="google-play-button flex items-center justify-between"
        onMouseEnter={() => setHoverGoogle(true)}
        onMouseLeave={() => setHoverGoogle(false)}
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="google-play-icon mr-3">
          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
        </svg>
        <div className="google-play-text flex-1 text-center">
          <span className="google-play-label">Disponible sur</span>
          <span className="google-play-name">Google Play</span>
        </div>
        <div className={`google-play-shine ${hoverGoogle ? 'shine-active' : ''}`}></div>
      </a>
    </div>
  );
};

export default StoreButtons;