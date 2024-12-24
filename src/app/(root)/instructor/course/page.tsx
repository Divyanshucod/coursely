

import { CourseJumpButton } from "@/components/instructor/course/CourseJumpButton";
import { CourseLookUpCard } from "@/components/instructor/course/CourseLookUpCard";
import { TopNav } from "@/components/instructor/course/TopNav";


function Course() {
  return (
    <div className="flex h-[calc(100vh-80px)] ml-16">
    <div className="flex flex-col">
      <TopNav />
      <div className="p-6 space-y-4">
        <CourseJumpButton/>
        <p className="my-10">Based on your experience, we think these resources will be helpful.</p>
        <CourseLookUpCard image="/quote-image.jpg" title="Engage Your Students" description="Create engaging content for your students." />
      </div>
    </div>
  </div>
  );
}

export default Course;
