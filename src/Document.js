import { useState } from "react";

const Document = ({ title, content }) => {
  const [disableButton, setDisableButton] = useState(true);

  const handleScroll = (e) => {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setDisableButton(false);
    }
  };

  return (
    <div>
      <h2 className="title">{title}</h2>
      <p className="content" onScroll={handleScroll}>
        {content}
      </p>
      <button disabled={disableButton}>I Agree</button>
    </div>
  );
};

export default Document;
