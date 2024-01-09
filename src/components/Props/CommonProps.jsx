import { useState } from "react";

const CommonProps = ({ children }) => {
  const [like, setLike] = useState(0);

  const handleLike = () => {
    setLike((prevState) => prevState + 1);
  };

  return children({ like, handleLike });
};

export default CommonProps;
