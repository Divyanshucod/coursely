// components/CreateCourseCard.js
export function CourseJumpButton() {
  return (
    <div className="bg-zinc-50 rounded-lg flex w-full justify-between items-center h-30 p-10 shadow-[3px_4px_6px_rgba(0,0,0,0.5)]">
      <h2 className="font-bold text-lg">Jump Into Course Creation</h2>
      <button className="bg-purple-500 text-white px-4 py-2 rounded mt-2 hover:bg-purple-700">
        Create Your Course
      </button>
    </div>
  );
}
