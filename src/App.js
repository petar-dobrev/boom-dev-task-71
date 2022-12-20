import "./App.css";
import { useState, useEffect } from "react";
import Document from "./Document";

function App() {
  const [content, setContent] = useState(null);

  const fetchText = () => {
    const apiUrl = "https://jaspervdj.be/lorem-markdownum/markdown.txt";
    fetch(apiUrl)
      .then((response) => response.text())
      .then((content) => setContent(content));
  };

  useEffect(() => {
    fetchText();
  }, []);

  return (
    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
      <Document title="Terms and Conditions" content={content} />
    </div>
  );
}

export default App;
