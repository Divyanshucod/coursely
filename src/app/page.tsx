import DisplayCourses from "@/components/main/DisplayCourseSection/DisplayCourses";
import Footer from "@/components/main/footer/Footer";
import ImageSection from "@/components/main/ImageSection/Main";
import Partner from "@/components/main/partnerSection/Partner";
import PricingCard from "@/components/main/SubscriptionSection/PricingCard";
import Testimonial from "@/components/main/testimonialSection/Testimonial";


export default function Home() {
  return (
    <div className="h-full w-full flex flex-col gap-12">
    <div className="h-full w-full px-20 flex flex-col gap-12">
      <ImageSection/>
      <DisplayCourses/>
      <Partner/>
      <div className="w-full flex justify-between">
        <PricingCard />
      </div>
      <div className="mt-10 w-full">
        <h2 className="text-4xl text-left font-semibold">
          See what others are achieving through learning
        </h2>
        <div className="flex justify-between mt-5">
          <Testimonial />
        </div>
      </div>
   </div>
   <div>
        <Footer/>
      </div>
   </div>
  );
}
