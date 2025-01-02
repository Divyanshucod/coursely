

import { CourseJumpButton } from "@/components/instructor/course/CourseJumpButton";
import { CourseLookUpCard } from "@/components/instructor/course/CourseLookUpCard";
import { TopNav } from "@/components/instructor/course/TopNav";


function Course() {
  return (
    <div className="flex ml-16 h-[100%]">
    <div className="flex flex-col w-full px-10">
      <TopNav />
      <div className="p-5 flex w-full justify-center flex-col gap-10">
        <CourseJumpButton/>
        <p className="font-medium text-xl text-slate-800 text-center">Based on your experience, we think these resources will be helpful.</p>
        <CourseLookUpCard image="/engaging-course.jpg" title="Create an Engaging Course" description="Whether you've been teaching for years or are teaching for the first time, you can make an engaging course. We've compiled resources and best practices to help you get to the next level, no matter where you're starting." />
        <div className="flex gap-3 w-full ">
        <CourseLookUpCard image="/video-creation.jpg" title="Get Started with Video" description="Quality video lectures can set your course apart. Use our resources to learn the basics." />
        <CourseLookUpCard image="/build-audience.jpg" title="Build Your Audience" description="Set your course up for success by building your audience." />
        </div>
        <CourseLookUpCard image="/newcomer-challenge.jpg" title="Join the New Instructor Challenge!" description="Get exclusive tips and resources designed to help you launch your first course faster! Eligible instructors who publish their first course on time will receive a special bonus to celebrate. Start today!" />
      </div>
      <div className="w-full flex flex-col justify-center items-center mt-10">
      <h2 className="font-medium text-2xl">Are You Ready to Begin?</h2>
      <button className="bg-purple-500 text-white px-4 py-2 rounded mt-2 hover:bg-purple-700">
        Create Your Course
      </button>
      </div>
    </div>
  </div>
  );
}

export default Course;
