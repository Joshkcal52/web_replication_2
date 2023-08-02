import "./App.scss";
import React from "react";
import Profile from "./components/Profile.js";

const users = [
  {
    name: "Alice Johnson",
    age: 28,
    occupation: "Graphic Designer",
    location: "Los Angeles",
    email: "alice.j@example.com",
    phone: "+1 (555) 987-6543",
    bio: "Passionate about creating beautiful designs that captivate and inspire.",
    profile_picture_url:
      "https://www.shareicon.net/data/512x512/2016/05/26/771198_man_512x512.png",
  },
  {
    name: "Michael Smith",
    age: 35,
    occupation: "Marketing Manager",
    location: "Chicago",
    email: "m.smith@example.com",
    phone: "+1 (555) 222-3333",
    bio: "Experienced marketing professional with a passion for driving brand success.",
    profile_picture_url:
      "https://www.shareicon.net/data/512x512/2016/05/26/771188_man_512x512.png",
  },
  {
    name: "Emily Williams",
    age: 24,
    occupation: "Content Writer",
    location: "San Francisco",
    email: "emily.w@example.com",
    phone: "+1 (555) 777-8888",
    bio: "Words have the power to change the world, and I'm here to make that happen.",
    profile_picture_url:
      "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
  },
];

function App() {
  return (
    <div className="App">
      <Profile users={users} />
    </div>
  );
}

export default App;
