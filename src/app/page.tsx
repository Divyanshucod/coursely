import DisplayCourses from "@/components/main/DisplayCourseSection/DisplayCourses";
import ImageSection from "@/components/main/ImageSection/Main";


export default function Home() {
  return (
    <div className="h-full w-full px-20 flex flex-col gap-12">
      <ImageSection/>
      <DisplayCourses/>
   </div>
  );
}
