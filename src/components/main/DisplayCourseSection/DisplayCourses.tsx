import React, { PropsWithChildren } from "react";
import ListItem from "./ListItem";
import ClickAbleIcon from "./ClickAbleIcon";
import CourseCard from "./CourseCard";

type Props = PropsWithChildren<{}>;
const IconsArray = [
  { title: "Data Science", active: false },
  { title: "Python", active: false },
  { title: "Machine Learing", active: false },
  { title: "Deep Learning", active: false },
  { title: "Artificial Intelligence(AI)", active: false },
  { title: "Statistics", active: false },
  { title: "Netural Language Processing", active: false },
];
function DisplayCourses({}: Props) {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full text-left">
        <h2 className="text-4xl font-bold">
          All the skills you need in one place
        </h2>
        <p className="text-2xl font-normal text-gray-500">
          From critical skills to technical topics, Coursely supports your
          professional development.
        </p>
      </div>
      <div>
        <ul className="w-full flex gap-4 text-xl">
          <ListItem>Data Science</ListItem>
          <ListItem>IT Certification</ListItem>
          <ListItem>Leadership</ListItem>
          <ListItem>Web Development</ListItem>
          <ListItem>Communication</ListItem>
          <ListItem>Business Analytics & intelligence</ListItem>
        </ul>
        <hr className="border-t-1 border-gray-300"></hr>
      </div>
      <div className="flex w-full gap-4 overscroll-auto	">
        {IconsArray.map((val, index) => {
          return (
            <ClickAbleIcon key={index + val.title} active={val.active}>
              {val.title}
            </ClickAbleIcon>
          );
        })}
      </div>
      <div className="w-full flex gap-3">
        <CourseCard teacher="Divyanshu" rating={12} pricing={123}>
          Some Things
        </CourseCard>
      </div>
    </div>
  );
}

export default DisplayCourses;