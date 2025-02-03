import { useState, useEffect } from 'react';

function App() {
  const [colorPalette, setColorPalette] = useState(JSON.parse(localStorage.getItem("colors"))|| []);
  const [color, setColor] = useState(colorPalette[colorPalette.length-1]);

  useEffect(() => {
    localStorage.setItem("colors", JSON.stringify(colorPalette));
  }, [colorPalette]);

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${randomColor}`);
  };

  const save = () => {
    if (color && !colorPalette.includes(color)) {
       if(colorPalette.length = 5){
        colorPalette.shift()
        setColorPalette([...colorPalette, color]);
      }
    }
  };

  return (
    <div
      style={{ backgroundColor: color }}
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
    >
      <h1 className="text-3xl font-bold text-white mb-6">Color Generator</h1>

      <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg mb-6">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">Current Color</h2>
          <div
            style={{ backgroundColor: color }}
            className="w-full h-32 rounded-lg border border-gray-300"
          />
        </div>

        <div className="flex justify-center gap-6">
          <button
            onClick={generateColor}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Generate Color
          </button>

          <button
            onClick={save}
            className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
          >
            Save Color
          </button>
        </div>
      </div>

      <div className="w-full max-w-lg bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">Saved Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {colorPalette.map((savedColor, index) => (
            <div
              key={index}
              onClick={() => setColor(savedColor)}
              style={{ backgroundColor: savedColor }}
              className="w-full h-24 rounded-lg flex items-center justify-center text-white font-bold"
            >
              {savedColor}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
