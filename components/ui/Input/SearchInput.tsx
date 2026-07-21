'use client';

import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isExpanded: boolean;
  onClose: () => void;
  variant?: 'glass' | 'solid';
}

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ isExpanded, onClose, variant = 'glass', className, ...props }, ref) => {
    const glassStyle = 'bg-white/10 backdrop-blur-md border-white/30 text-white placeholder-white/70';
    const solidLight = 'bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-500';
    const solidDark = 'dark:bg-zinc-800 dark:border-zinc-600 dark:text-white dark:placeholder-gray-400';

    return (
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: isExpanded ? '100%' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="flex items-center overflow-hidden min-w-0"
      >
        <div className={`flex items-center w-full px-4 py-2 rounded-full border transition-all ${
          variant === 'glass' ? glassStyle : `${solidLight} ${solidDark}`
        } ${className}`}>
          <svg className="w-4 h-4 mr-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={ref}
            type="text"
            
            className="w-full bg-transparent outline-none text-sm"
            {...props}
          />
          <button onClick={onClose} className="ml-2 opacity-70 hover:opacity-100 transition-opacity">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </motion.div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;
