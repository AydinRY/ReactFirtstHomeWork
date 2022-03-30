import React,{useState} from "react";

function Lessons({ Name, Date, Teacher, onClick, color}) {
    let green = "#39D1B4";
    let yellow = "#FFD712";

  const [buttonColor, setButtonColor] = useState(green);

    function handleColorChange(e) {
    const button = e.target.style.backgroundColor;
    const newButton = e.target.style.backgroundColor;

    const newColor = buttonColor === green ? yellow : green;
    setButtonColor(newColor);
  }
  
return (
      <>
    <div 
            style={{ backgroundColor: buttonColor }}
            color={buttonColor}
    >
        <table>
            <thead>
                <tr>
                    <th>
                    <h1>Lesson: {Name}</h1>
                    <h1>Teacher: {Teacher}</h1>
                    <h1>Date: {Date}</h1>
                    </th>
                </tr>
            </thead>
        </table>
    </div>

    <div>
    <button
        onClick={handleColorChange}
      >
        Change color
      </button>
    </div>
      </>
  )
}

export default Lessons


