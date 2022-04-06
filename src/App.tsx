import React from "react";
import {
  //Link,
  Outlet,
} from "react-router-dom";
import Button from "@mui/material/Button";

/**
 * @challenge - Find and solve any bugs you find in the project
 * @challenge2 - Improve the project design (not just UI but UX)
 * @tip - This project is using tailwindcss for styling. https://tailwindcss.com/docs/.
 * @tip - Be sure to make it as typesafe as you can.
 */

export default function App() {
  React.useEffect(() => {}, []);
  return (
    <div className='bg-gray-100 dark:bg-gray-800 min-h-screen p-4 font-mono leading-tight'>
      <div className='container mx-auto w-4/5 my-10'>
        <Button variant='contained'>Hello World</Button>
        <Outlet />
      </div>
    </div>
  );
}
