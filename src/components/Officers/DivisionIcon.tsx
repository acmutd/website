import Image from 'next/image';
import { OfficerSections } from '../../../lib/types';

interface DivisionIconProps {
  divisionKey: OfficerSections | 'all';
  label: string;
  size?: 'sm' | 'md';
  className?: string;
}

const DivisionIcon = ({ divisionKey, label, size = 'sm', className = '' }: DivisionIconProps) => {
  if (divisionKey === 'all' || divisionKey === 'advisor') {
    return null;
  }

  const dimensions = size === 'sm' ? { width: 16, height: 16 } : { width: 24, height: 24 };

  return (
    <Image
      src={`/assets/divisions/${divisionKey}.png`}
      alt={`${label} icon`}
      {...dimensions}
      className={`opacity-80 ${className}`}
    />
  );
};

export default DivisionIcon;
