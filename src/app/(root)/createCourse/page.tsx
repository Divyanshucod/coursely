"use client";
import { Button } from "@/components/ui/button";
import { div } from "motion/react-client";
import React, { useState } from "react";

function AddCoursePage() {
  const [isNewCourse, setIsNewCourse] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [forWhom, setForWhom] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setUploadedFiles(Array.from(e.target.files));
    }
  };

  const handleThumbnailUpload = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setThumbnail(file); // Set the uploaded file to the state
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

  const handleFileRemove = (index: any) => {
    console.log(index);

    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };
  function handleTagSelection(tag: string) {
    setForWhom([...forWhom, tag]);
  }
  return (
    <div className="p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-teal-600 mb-6">
        Add Course Content
      </h1>

      {/* File Upload Section */}
      <div
        className="border-2 border-dashed border-teal-500 rounded-lg p-4 mb-6 bg-white max-h-1/2 w-full"
        onDrop={handleDragAndDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <p className="text-center text-gray-600 mr-4">
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
          <div className="w-full">
            {/* Media Section */}
            <div className="mb-6 overflow-y-auto w-full">
              <ul className="mt-2 space-y-4 overflow-y-auto w-full flex-col gap-2">
                {uploadedFiles.map((file, index) => (
                  <li
                    key={index}
                    className="flex flex-col space-y-2 w-full relative"
                  >
                    {/* Show preview for videos/images */}
                    {file.type.startsWith("video") && (
                      <video
                        controls
                        className="w-64 h-36 rounded-lg"
                        src={URL.createObjectURL(file)}
                      />
                    )}
                    {file.type.startsWith("image") && (
                      <img
                        alt={file.name}
                        src={URL.createObjectURL(file)}
                        className="w-64 h-36 object-cover rounded-lg"
                      />
                    )}
                    <span className="text-gray-700">{file.name}</span>
                    <Button
                      variant="default"
                      size="icon"
                      onClick={() =>
                        handleFileRemove(uploadedFiles.indexOf(file))
                      }
                      className="text-zinc-100 font-bold absolute top-1 right-1 bg-red-600"
                    >
                      X
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
          <h2 className="text-xl font-bold text-teal-600 mb-4">
            Add New Course
          </h2>

          {/* Title */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Course Title
            </label>
            <input
              type="text"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-teal-500"
              placeholder="Enter course title"
            />
          </div>

          {/* thumbnail */}

          <div className="mb-4">
            <label
              className="text-teal-500 underline cursor-pointer hover:text-teal-700"
              htmlFor="thumbnail-upload"
            >
              Upload Course Thumbnail
            </label>

            {thumbnail && thumbnail.type.startsWith("image/") && (
              <img
                alt={thumbnail.name}
                src={URL.createObjectURL(thumbnail)}
                className="w-64 h-36 object-cover rounded-lg mt-4"
              />
            )}

            <input
              id="thumbnail-upload"
              type="file"
              accept="image/*" // Restrict to image files only
              onChange={handleThumbnailUpload}
              className="hidden"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
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
            <label className="block text-gray-700 font-medium mb-1">
              Price
            </label>
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
            <label className="block text-gray-700 font-medium mb-1">
              Student Tags
            </label>
            <div className="flex gap-4">
              {["Beginner", "Intermediate", "Senior"].map((tag) => (
                <button
                  type="button"
                  key={tag}
                  onClick={() => handleTagSelection(tag)}
                  className={`px-4 py-2 rounded-md border ${
                    forWhom.includes(tag)
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
