import React, { useState, useEffect } from "react";

function CloudAnimation() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000); // Adjust the delay as needed
  }, []);

  return <div>{/* TODO */}</div>;
}

export default CloudAnimation;
