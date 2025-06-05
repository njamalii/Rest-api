import React, { useState, useEffect } from "react";
import $ from "jquery";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'
function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    $.ajax({
      url: "http://localhost:3000/posts",
      method: "GET",
      success: (response) => {
        setPosts(response);
      },
      error: (err) => {
        console.error("Error fetching data:", err);
      },
    });
  }, []);


  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((item, index) => (
          <Card
            key={index}
            img={item.image}
            item={item.items}
            price={item.price}
            content={item.content}
          />
        ))}
      </div>
    </>
  )
}

export default App
