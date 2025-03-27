import React, { useState } from "react";

const ProfilePage = () => {
    const [tasks, setTasks] = useState([
        "Pray",
        "Read Scriptures",
        "Serve Others",
        "Attend Church",
        "Express Gratitude",
    ]);
    const [checkedItems, setCheckedItems] = useState({});
    const [newTask, setNewTask] = useState("");

    // Handle checkbox toggle
    const handleCheckboxChange = (index) => {
        setCheckedItems((prevState) => ({
            ...prevState,
            [index]: !prevState[index], // Toggle the checked state
        }));
    };

    // Add new task
    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask]);
            setNewTask(""); // Clear input
        }
    };

    // Edit a task
    const handleEditTask = (index) => {
        const updatedTask = prompt("Edit task:", tasks[index]);
        if (updatedTask !== null) {
            const updatedTasks = [...tasks];
            updatedTasks[index] = updatedTask;
            setTasks(updatedTasks);
        }
    };

    // Delete a task
    const handleDeleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
        setCheckedItems((prevState) => {
            const updatedCheckedItems = { ...prevState };
            delete updatedCheckedItems[index]; // Remove checked state
            return updatedCheckedItems;
        });
    };

    return (
        <div
            style={{
                backgroundColor: "#f0f2f5",
                padding: "40px",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
            }}
        >
            {/* Profile Card */}
            <div
                style={{
                    background: "white",
                    maxWidth: "500px",
                    margin: "auto",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    marginBottom: "20px",
                }}
            >
                <img
                    src="/img/familyphoto.jpg"
                    alt="Profile"
                    style={{
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginBottom: "20px",
                    }}
                />
                <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
                    Emma J. Pratt
                </h2>
                <p style={{ fontSize: "16px", color: "#555" }}>
                    Let's follow Jesus
                </p>
                <div style={{ marginTop: "30px" }}>
                    <button
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#4CAF50",
                            color: "white",
                            borderRadius: "25px",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                            marginRight: "15px",
                        }}
                    >
                        Edit Profile
                    </button>
                    <button
                        style={{
                            padding: "10px 20px",
                            backgroundColor: "#f44336",
                            color: "white",
                            borderRadius: "25px",
                            border: "none",
                            cursor: "pointer",
                            fontSize: "16px",
                        }}
                    >
                        Log Out
                    </button>
                </div>
            </div>

            {/* Checklist Section */}
            <div
                style={{
                    background: "white",
                    maxWidth: "500px",
                    margin: "auto",
                    padding: "30px",
                    borderRadius: "12px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
            >
                <h3 style={{ fontSize: "20px", marginBottom: "20px" }}>
                    Study Tasks
                </h3>

                {/* Add New Task Input */}
                <div style={{ marginBottom: "20px" }}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="New task..."
                        style={{
                            padding: "8px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            width: "70%",
                        }}
                    />
                    <button
                        onClick={handleAddTask}
                        style={{
                            marginLeft: "10px",
                            padding: "8px 15px",
                            borderRadius: "5px",
                            border: "none",
                            backgroundColor: "#007bff",
                            color: "white",
                            cursor: "pointer",
                        }}
                    >
                        Add
                    </button>
                </div>

                {/* Task List */}
                <div style={{ textAlign: "left" }}>
                    {tasks.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "10px",
                                textDecoration: checkedItems[index]
                                    ? "line-through"
                                    : "none",
                                opacity: checkedItems[index] ? 0.6 : 1, // Fade effect when checked
                            }}
                        >
                            {/* Checkbox */}
                            <input
                                type="checkbox"
                                id={`checkbox-${index}`}
                                checked={checkedItems[index] || false}
                                onChange={() => handleCheckboxChange(index)}
                                style={{ marginRight: "10px" }}
                            />

                            {/* Label */}
                            <label
                                htmlFor={`checkbox-${index}`}
                                style={{ fontSize: "16px", flex: 1 }}
                            >
                                {item}
                            </label>

                            {/* Dropdown Select */}
                            <select
                                disabled={checkedItems[index] || false} // Disable when checked
                                style={{
                                    padding: "5px",
                                    borderRadius: "5px",
                                    border: "1px solid #ccc",
                                    backgroundColor: checkedItems[index]
                                        ? "#e0e0e0"
                                        : "white", // Grey out when disabled
                                    cursor: checkedItems[index]
                                        ? "not-allowed"
                                        : "pointer",
                                    marginRight: "10px",
                                }}
                            >
                                <option value="">Select...</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                                <option value="Daily">Daily</option>
                                <option value="Weekly">Weekly</option>
                                <option value="Monthly">Monthly</option>
                            </select>

                            {/* Edit Button */}
                            <button
                                onClick={() => handleEditTask(index)}
                                style={{
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    border: "none",
                                    backgroundColor: "#4CAF50",
                                    color: "white",
                                    cursor: "pointer",
                                    marginRight: "5px",
                                }}
                            >
                                Edit
                            </button>

                            {/* Delete Button */}
                            <button
                                onClick={() => handleDeleteTask(index)}
                                style={{
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    border: "none",
                                    backgroundColor: "#f44336",
                                    color: "white",
                                    cursor: "pointer",
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
