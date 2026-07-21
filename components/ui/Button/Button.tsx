import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/types';

const variants = {
  primary: 'bg-white text-black hover:bg-zinc-200 dark:bg-white dark:text-black dark:hover:bg-zinc-200',
  secondary: 'bg-white/[0.06] text-white border border-white/15 hover:bg-white/[0.1] hover:border-white/30 dark:bg-white/[0.06] dark:border-white/15',
  outline: 'bg-transparent text-white border border-white/25 hover:border-white/60 hover:bg-white/5 dark:text-white dark:border-white/25',
  ghost: 'bg-transparent text-zinc-400 hover:text-white dark:text-zinc-400 dark:hover:text-white',
};

const sizes = {
  sm: 'px-5 py-2 text-[11px]',
  md: 'px-6 py-2.5 text-xs',
  lg: 'px-8 py-3.5 text-sm',
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'rounded-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300',
          'focus:outline-none focus:ring-1 focus:ring-offset-0 focus:ring-white/40',
          'disabled:opacity-40 disabled:cursor-not-allowed',
          'inline-flex items-center justify-center gap-2',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
