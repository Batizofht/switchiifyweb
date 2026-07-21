// Button Types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

// Product Card Types
export interface ProductCardProps {
  title: string;
  description: string;
  href: string;
}

// Nav Types
export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  external?: boolean;
}

export interface DropdownSection {
  title: string;
  icon?: React.ReactNode;
  items: DropdownItem[];
}

export interface DropdownItem {
  label: string;
  href: string;
  highlight?: boolean;
}

// Section Types
export interface SectionProps {
  className?: string;
}

// Footer Types
export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface FooterLink {
  label: string;
  href: string;
}
