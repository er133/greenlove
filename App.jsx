import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-green-600 text-white shadow-md">
      <div className="flex items-center gap-2">
        <span className="text-2xl">💚</span>
        <h1 className="font-bold text-xl">GreenHeart Dating</h1>
      </div>
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
        <Link to="/settings" className="hover:underline">Settings</Link>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="p-6">
      <h2 className="text-green-600 font-bold text-2xl mb-2">Welcome to GreenHeart 💚</h2>
      <p className="text-gray-700">Find your perfect match with our eco-friendly dating app.</p>
    </div>
  );
}

function Profile() {
  return (
    <div className="p-6">
      <h2 className="text-green-600 font-bold text-2xl mb-2">Your Profile</h2>
      <p className="text-gray-700">Edit your profile information here.</p>
    </div>
  );
}

function Settings() {
  return (
    <div className="p-6">
      <h2 className="text-green-600 font-bold text-2xl mb-2">Settings</h2>
      <p className="text-gray-700">Manage your app preferences here.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
