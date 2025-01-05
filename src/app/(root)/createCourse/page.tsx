'use client'
import React, { useState } from "react";

function AddCoursePage() {
  const [isNewCourse, setIsNewCourse] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [studentTags, setStudentTags] = useState<string[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(Array.from(e.target.files));
    }
  };

  const handleDragAndDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setUploadedFiles(Array.from(e.dataTransfer.files));
    }
  };

  const toggleNewCourse = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNewCourse(e.target.value === "no");
  };

  const handleTagSelection = (tag: string) => {
    if (studentTags.includes(tag)) {
      setStudentTags(studentTags.filter((t) => t !== tag));
    } else {
      setStudentTags([...studentTags, tag]);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-teal-600 mb-6">Add Course Content</h1>

      {/* File Upload Section */}
      <div
        className="border-2 border-dashed border-teal-500 rounded-lg p-4 mb-6 bg-white"
        onDrop={handleDragAndDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <p className="text-center text-gray-600">
          Drag and drop files here or{" "}
          <label
            className="text-teal-500 underline cursor-pointer hover:text-teal-700"
            htmlFor="file-upload"
          >
            click to upload
          </label>
        </p>
        <input
          id="file-upload"
          type="file"
          multiple
          onChange={handleFileUpload}
          className="hidden"
        />
        {uploadedFiles.length > 0 && (
          <ul className="mt-4">
            {uploadedFiles.map((file, index) => (
              <li key={index} className="text-gray-700">
                {file.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Existing Course or New Course Selection */}
      <div className="mb-6">
        <label className="block mb-2 text-gray-700 font-medium">
          Is this part of an existing course?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="course-option"
              value="yes"
              onChange={toggleNewCourse}
              className="mr-2"
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="course-option"
              value="no"
              onChange={toggleNewCourse}
              className="mr-2"
            />
            No
          </label>
        </div>
      </div>

      {/* New Course Form */}
      {isNewCourse && (
        <form className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-teal-600 mb-4">Add New Course</h2>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Course Title</label>
            <input
              type="text"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-teal-500"
              placeholder="Enter course title"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Description</label>
            <textarea
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-teal-500"
              rows={4}
              placeholder="Enter course description"
            ></textarea>
          </div>

          {/* Price */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Price</label>
            <input
              type="number"
              value={coursePrice}
              onChange={(e) => setCoursePrice(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-teal-500"
              placeholder="Enter price in USD"
            />
          </div>

          {/* Student Tags */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Student Tags</label>
            <div className="flex gap-4">
              {["Beginner", "Intermediate", "Senior"].map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => handleTagSelection(tag)}
                  className={`px-4 py-2 rounded-md border ${
                    studentTags.includes(tag)
                      ? "bg-teal-500 text-white border-teal-500"
                      : "border-gray-300 text-gray-700"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700"
          >
            Save Course
          </button>
        </form>
      )}
    </div>
  );
}

export default AddCoursePage;
