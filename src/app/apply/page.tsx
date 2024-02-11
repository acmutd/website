import ApplyHeader from '@/components/Apply/ApplyHeader';
import ApplyPrograms from '@/components/Apply/ApplyPrograms';
import React from 'react';

function Apply() {
  return (
    <div className="h-fit w-full bg-[url(/assets/apply/apply-bg.png)] bg-cover bg-center py-20">
      <ApplyHeader />
      <ApplyPrograms />
    </div>
  );
}

export default Apply;
