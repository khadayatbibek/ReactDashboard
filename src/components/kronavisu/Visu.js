import React, { useState, useEffect } from 'react';




const Visu = () => {
  useEffect(() => {
    window.open("http://localhost:8000/KRONA.html","_blank");
  }, []);
  

  return (
    <div>
      <h2></h2>
    </div>
  );
}

export default Visu;