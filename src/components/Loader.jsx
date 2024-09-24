/** @format */

// /** @format */

// // /** @format */

// import React from 'react';
// import './Loader.css';
// const Loader = () => {
//   {
//     var Loaderparent = document.querySelector('.Loaderparent');

//     setTimeout(function () {
//       Loaderparent.style.display = 'none';
//     }, 3000);
//   }

//   return (
//     <div className="Loaderparent">
//       <div className="loaderline"></div>
//       <div className="loadercircle"></div>
//     </div>
//   );
// };
// export default Loader;
/** @format */

import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="Loaderparent">
      <div className="loaderline"></div>
      <div className="loadercircle"></div>
    </div>
  );
};

export default Loader;
