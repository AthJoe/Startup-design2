// import { useEffect, useState } from "react";
// import {FaSun, FaMoon} from "react-icons/fa";

// export default function NavigationBar() {
//   const [darkMode, setDarkMode] = useState(false);
//   useEffect(() => {
//     if(localStorage.getItem("theme") === "dark") {
//       document.documentElement.classList.add("dark");
//       setDarkMode(true);
//     }
//   }, []);

//   const toggleTheme = () => {
//     if (darkMode) {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       setDarkMode(false);
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       setDarkMode(true);
//     }
//   };

//   return (
//     <div className="bg-body px-2 py-2 text-textmain rounded-full">
//       <nav className="bg-nav shadow-md p-4 px-1 py-5 rounded-full space-x-6 text-center">
//         <a href="#" className="text-link hover:text-secondary font-poppins">Home</a>
//         <a href="#" className="text-link hover:text-secondary font-poppins">Pricing</a>
//         <a href="#" className="text-link hover:text-secondary font-poppins">Contact Us</a>

//         {/*Toggle Button*/}
//         <button
//         onClick={toggleTheme}
//         className="ml-auto px-4 py-2 rounded-full bg-primary text-white"
//         >
//           { darkMode ? <FaMoon/> : <FaSun/> }
//         </button>
//       </nav>
//     </div>
//   )
// }



import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function NavigationBar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <div className="bg-body text-textmain">
      <nav className="bg-nav shadow-sm shadow-gray-400/40 px-6 py-3 flex items-center">
        <a href="#" className="text-link hover:text-secondary font-poppins mr-6">Home</a>
        <a href="#" className="text-link hover:text-secondary font-poppins mr-6">Pricing</a>
        <a href="#" className="text-link hover:text-secondary font-poppins">Contact Us</a>

        {/* Push button to the right */}
        <button
          onClick={toggleTheme}
          className="ml-auto px-4 py-2 bg-primary text-white rounded-full"
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
    </div>
  );
}
