export default function Note({ text, index, completed, deleteNote, toggleComplete }) {
  return (
    <div className="bg-white text-gray-900 p-4 rounded-lg shadow-md flex items-center justify-between transition-transform transform hover:scale-105 hover:shadow-lg">
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(index)}
          className="w-5 h-5 accent-green-500 cursor-pointer"
        />
        <span className={`flex-1 ${completed ? "line-through text-gray-500" : ""}`}>
          {text}
        </span>
      </div>
      <button
        onClick={() => deleteNote(index)}
        className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded-full transition"
      >
        🗑
      </button>
    </div>
  );
}
