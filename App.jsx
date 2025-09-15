import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then(setUsers);
  }, []);

  const likeUser = async (targetId) => {
    if (!currentUser) {
      alert("Select a current user first!");
      return;
    }

    const res = await fetch(
      `http://localhost:5000/like/${currentUser._id}/${targetId}`,
      { method: "POST" }
    );
    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-4">Mini Dating App</h1>

      <h2 className="font-semibold">Choose Current User</h2>
      <select
        onChange={(e) =>
          setCurrentUser(users.find((u) => u._id === e.target.value))
        }
      >
        <option value="">-- Select --</option>
        {users.map((u) => (
          <option key={u._id} value={u._id}>
            {u.name}
          </option>
        ))}
      </select>

      <h2 className="mt-4 font-semibold">All Users</h2>
      <div className="grid gap-4 mt-2">
        {users.map((u) => (
          <div
            key={u._id}
            className="border p-3 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-bold">{u.name}, {u.age}</p>
              <p>{u.bio}</p>
            </div>
            {currentUser && currentUser._id !== u._id && (
              <button
                className="bg-pink-500 text-white px-3 py-1 rounded-lg"
                onClick={() => likeUser(u._id)}
              >
                ❤️ Like
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
