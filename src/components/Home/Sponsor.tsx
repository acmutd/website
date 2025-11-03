import Image from 'next/image';

interface SponsorProps {
  name: string;
  tier: string;
}

const Sponsor: React.FC<SponsorProps> = ({ name, tier }) => {
  const getTierStyles = () => {
    switch (tier.toLowerCase()) {
      case 'gold':
        return {
          container:
            'bg-gradient-to-br from-yellow-400/10 via-yellow-500/5 to-yellow-600/10 border-yellow-400/50 shadow-yellow-400/20',
          badge: 'bg-gradient-to-r from-yellow-400/80 to-yellow-500/80 text-yellow-900',
          glow: 'shadow-[0_0_15px_rgba(234,179,8,0.3)]',
        };
      case 'silver':
        return {
          container:
            'bg-gradient-to-br from-gray-300/10 via-gray-400/5 to-gray-500/10 border-gray-300/50 shadow-gray-300/20',
          badge: 'bg-gradient-to-r from-gray-300/80 to-gray-400/80 text-gray-900',
          glow: 'shadow-[0_0_15px_rgba(209,213,219,0.3)]',
        };
      case 'bronze':
        return {
          container:
            'bg-gradient-to-br from-amber-600/10 via-amber-700/5 to-amber-800/10 border-amber-600/50 shadow-amber-600/20',
          badge: 'bg-gradient-to-r from-amber-600/80 to-amber-700/80 text-amber-50',
          glow: 'shadow-[0_0_15px_rgba(217,119,6,0.3)]',
        };
      default:
        return {
          container:
            'bg-gradient-to-br from-gray-300/10 via-gray-400/5 to-gray-500/10 border-gray-300/50 shadow-gray-300/20',
          badge: 'bg-gradient-to-r from-gray-300/80 to-gray-400/80 text-gray-900',
          glow: 'shadow-[0_0_15px_rgba(209,213,219,0.3)]',
        };
    }
  };

  const styles = getTierStyles();

  return (
    <div
      className={`group relative flex h-full w-full items-center justify-center rounded-2xl border-2 p-6 transition-all duration-500 hover:scale-105 hover:shadow-xl ${styles.container} ${styles.glow}`}
    >
      <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110">
        <Image
          src={`/assets/sponsors/logos/${name}.png`}
          alt={name.toUpperCase()}
          className={`object-contain drop-shadow-lg ${
            name === 'northmark' ? 'hue-rotate-180 invert' : ''
          }`}
          width="200"
          height="100"
        />
      </div>

      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 transform transition-all duration-500 group-hover:-bottom-1">
        <span
          className={`rounded-full px-3 py-1.5 text-xs font-medium ${styles.badge} shadow-md backdrop-blur-sm`}
        >
          {tier}
        </span>
      </div>
    </div>
  );
};

export default Sponsor;
