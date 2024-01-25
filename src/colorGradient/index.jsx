import { useState } from "react";

function ColorBox() {
  const [colors, setColors] = useState(["#FF0000", "#00FF00"]);

  const handleColorChange = (color, index) => {
    const updatedColors = [...colors];
    updatedColors[index] = color;
    setColors(updatedColors);
  };

  const addColorBox = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColors([...colors, randomColor]);
  };

  const removeColorBox = () => {
    if (colors.length > 2) {
      const updatedColors = [...colors];
      updatedColors.pop();
      setColors(updatedColors);
    } else {
      alert("Minimum 2 colors needed!");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div style={{ display: "flex" }}>
        {colors.map((color, index) => (
          <input
            key={index}
            type="color"
            value={color}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "5px",
              cursor: "pointer",
              marginRight: "10px",
            }}
            onChange={(e) => handleColorChange(e.target.value, index)}
          />
        ))}
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "200px",
          height: "200px",
          backgroundColor: "white",
          border: "1px solid #ccc",
          position: "relative",
        }}
      >
        {colors.length > 0 && (
          <div
            className="color-box"
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              background: `linear-gradient(to right, ${colors.join(",")})`,
            }}
          ></div>
        )}
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={addColorBox}
          style={{ marginRight: "20px" }}
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Add Color
        </button>
        <button
          onClick={removeColorBox}
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Remove Color
        </button>
      </div>
    </div>
  );
}

export default ColorBox;
