import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

export default function PostStudy() {
  const [studyTime, setStudyTime] = useState("30 minutes");
  const [timePerSection, setTimePerSection] = useState("15 min per chapter");
  const [booksStudied, setBooksStudied] = useState("Mosiah 2, 3 Nephi 17");
  const [notesTaken, setNotesTaken] = useState(250);
  const [highlightedPassages, setHighlightedPassages] = useState(7);
  const [caption, setCaption] = useState("");
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Post Your Scripture Study</h1>

      <div className="card p-4">
        <div className="card-body">
          <p>
            <strong>Total Study Time:</strong> {studyTime}
          </p>
          <p>
            <strong>Time per Section:</strong> {timePerSection}
          </p>
          <p>
            <strong>Books Studied:</strong> {booksStudied}
          </p>
          <p>
            <strong>Notes Taken:</strong> {notesTaken} words written
          </p>
          <p>
            <strong>Highlighted Passages:</strong> {highlightedPassages}
          </p>
        </div>
      </div>

      <div className="mt-4">
        <label className="form-label">Add a Caption:</label>
        <textarea
          className="form-control"
          placeholder="Share your insights..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
      </div>

      <button
        className="btn btn-primary w-100 mt-3"
        onClick={() => navigate("/posts")}
      >
        Post Study Summary
      </button>
    </div>
  );
}
