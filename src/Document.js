import { useState } from "react";

const Document = ({ title, content }) => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setShowButton(true);
    }
  };

  return (
    <div>
      <h2 className="title">{title}</h2>
      <p className="content" onScroll={handleScroll}>
        {content}
      </p>
      {showButton && <button>I agree</button>}
    </div>
  );
};

export default Document;
