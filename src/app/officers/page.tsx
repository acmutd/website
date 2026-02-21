import OfficerGrid from '@/components/Officers/OfficerGrid';
import OfficerHeader from '@/components/Officers/OfficerHeader';

function Apply() {
  return (
    <div className="relative min-h-screen w-full">
      <div className="fixed inset-0 bg-[url(/assets/officer-bg.png)] bg-cover bg-center bg-no-repeat" />
      <div className="relative z-10 pb-20">
        <OfficerHeader />
        <div className="container mx-auto px-4 py-10 lg:px-8 lg:py-14">
          <OfficerGrid type="board" />
          <OfficerGrid type="media" />
          <OfficerGrid type="research" />
          <OfficerGrid type="development" />
          <OfficerGrid type="projects" />
          <OfficerGrid type="education" />
          <OfficerGrid type="community" />
          <OfficerGrid type="hackutd" />
          <OfficerGrid type="industry" />
          <OfficerGrid type="advisor" />
        </div>
      </div>
    </div>
  );
}

export default Apply;
