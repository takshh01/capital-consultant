import React, { useState } from 'react';
import logoImg from '../assets/images/logo.png';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  subtitle?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  subtitle = 'Loan & Financial Advisory'
}) => {
  const [imageError, setImageError] = useState(false);

  const dimensionMap = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const titleSizeMap = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Uploaded Logo Asset */}
      <div className={`relative ${dimensionMap[size]} rounded-xl overflow-hidden shrink-0 bg-white border border-white/20 shadow-md shadow-black/40 flex items-center justify-center p-0.5 group-hover:border-white/40 transition-colors`}>
        {!imageError ? (
          <img
            src={logoImg}
            alt="Capital Consultancy Logo"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
            onError={() => {
              setImageError(true);
            }}
          />
        ) : (
          /* Exact Vector Fallback */
          <svg className="w-full h-full" viewBox="0 0 500 500" fill="none">
            <rect width="500" height="500" fill="#ffffff" />
            <path
              d="M 335 110 C 255 58, 135 88, 80 180 C 42 245, 52 320, 108 382 C 92 336, 92 268, 122 208 C 162 132, 242 98, 335 110 Z"
              fill="#000000"
            />
            <path
              d="M 185 438 C 248 460, 318 438, 362 392 C 324 416, 260 422, 206 408 C 194 406, 188 416, 185 438 Z"
              fill="#000000"
            />
            <path
              d="M 370 174 C 314 90, 194 90, 138 162 C 92 220, 96 302, 142 358 L 126 442 L 198 388 C 252 412, 326 394, 370 330 L 322 298 C 288 344, 234 354, 192 332 C 150 306, 142 242, 174 196 C 206 150, 278 146, 322 190 Z"
              fill="#E52020"
            />
          </svg>
        )}
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className={`${titleSizeMap[size]} font-extrabold tracking-tight text-white leading-tight`}>
            Capital Consultancy
          </span>
          {subtitle && (
            <span className="text-[10px] font-semibold text-zinc-400 tracking-wider uppercase mt-0.5">
              {subtitle}
            </span>
          )}
        </div>
      )}
    </div>
  );
};
