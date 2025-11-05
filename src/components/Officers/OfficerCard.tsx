import { type Officer } from '../../../config/officers.config';
import { OfficerImageWithFallback } from './OfficerImageWithFallback';

type OfficerCardProps = {
  officer: Officer & { division?: string };
};

export const OfficerCard = ({ officer }: OfficerCardProps) => (
  <div className="group flex-shrink-0">
    <div className="relative rounded-xl p-4">
      <div className="flex items-center space-x-4">
        <div className="relative h-16 w-16 flex-shrink-0 sm:h-20 sm:w-20">
          <OfficerImageWithFallback
            src={officer.image}
            alt={officer.name}
            fallbackSrc="/assets/officer/OfficerImage.png"
            className="h-full w-full rounded-full object-cover ring-2 ring-white/20 transition-all duration-200 group-hover:ring-4 group-hover:ring-blue-400/60"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-white transition-colors duration-200 group-hover:text-blue-300">
            {officer.name}
          </h3>
          <p className="text-sm leading-tight text-gray-200/90 transition-colors duration-200 group-hover:text-gray-100">
            {officer.position}
          </p>
        </div>
      </div>
    </div>
  </div>
);
