import { ProjHeader } from './../../components/Projects/ProjHeader';
import ProjCarousel from '@/components/Projects/ProjCarousel';

export default function Page() {
  return (
    <div className="h-screen w-full bg-[url(/assets/projects/projects-bg.png)] bg-cover bg-center py-20">
      <ProjCarousel />
      <ProjHeader />
    </div>
  );
}
