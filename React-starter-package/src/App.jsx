import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Link } from 'react-router';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full text-center">
        <div className="flex justify-center space-x-4 mb-6">
          <img src={reactLogo} alt="React Logo" className="h-16 animate-spin-slow" />
          <img src={viteLogo} alt="Vite Logo" className="h-16" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Hello, World!</h1>
        <p className="text-gray-600 mb-6">
          This is a starter package including <span className="font-semibold text-blue-500">React Router</span>, <span className="font-semibold text-blue-500">Axios</span>, <span className="font-semibold text-blue-500">Tailwind</span>, and <span className="font-semibold text-blue-500">Redux Toolkit</span>.
        </p>
        <p className="text-gray-600">
          Created by
          <Link
            to="https://github.com/Parmanand-Parveen"
            target="_blank"
            className="text-blue-500 hover:text-blue-700 ml-1 underline"
          >
            @parmanand
          </Link>
        </p>
      </div>
    </div>
  );
}

export default App;
