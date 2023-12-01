import ScholarshipFAQ from '@/components/Scholarship/ScholarshipFAQ';
import ScholarshipHeader from '@/components/Scholarship/ScholarshipHeader';

export default function Scholarship() {
  return (
    <div className="h-screen w-full bg-[url(/assets/apply/apply-bg.png)] bg-cover bg-center py-20">
      <ScholarshipHeader />
      <ScholarshipFAQ />
    </div>
  );
}
