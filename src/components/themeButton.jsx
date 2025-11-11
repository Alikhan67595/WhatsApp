// import React from 'react'
// import { useState, useEffect } from 'react' 

// const Button = () => {

    
//   const [theme, setTheme] = useState("light");

//   // Apply theme once on page load
//   useEffect(() => {
//     const userTheme = localStorage.theme;
//     const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

//     const currentTheme =
//       userTheme === "dark" || (!userTheme && systemPrefersDark) ? "dark" : "light";

//     setTheme(currentTheme);
//     document.documentElement.classList.toggle("dark", currentTheme === "dark");
//   }, []);





//   const toggleTheme = () => {
//     const newTheme = theme === "dark" ? "light" : "dark";
//     setTheme(newTheme);
//     localStorage.theme = newTheme;
//     document.documentElement.classList.toggle("dark", newTheme === "dark");
//   };

//   return (
  
//     <button onClick={toggleTheme}>{theme === 'dark' ? 'Light' : "Dark"}</button>  
    

//   )
// }

// export default Button
