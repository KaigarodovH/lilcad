import React from "react";
import { render } from "react-dom";
import { Stage, Layer, Rect, Line } from "react-konva";

const grid = 68;
const gridWidth = 5000;
const linesA = [];
const linesB = [];

for (let i = 0; i < gridWidth / grid; i++) {
  linesA.push(
    <Line
      strokeWidth={2}
      stroke={"black"}
      points={[i * grid, 0, i * grid, gridWidth]}
    />
  );

  linesB.push(
    <Line
      strokeWidth={2}
      stroke={"black"}
      points={[0, i * grid, gridWidth, i * grid]}
    />
  );
}

export default function Area(){
  return (
    <Stage width={gridWidth} height={5000}>
      <Layer>
        {linesA}
        {linesB}
      </Layer>

      <Layer>
        <Rect
          onDragEnd={(e) => {
            e.target.to({
              x: Math.round(e.target.x() / grid) * grid,
              y: Math.round(e.target.y() / grid) * grid
            });
          }}
          x={80}
          y={80}
          draggable
          width={136}
          height={136}
          fill="rgba(0, 0, 0, 1)"
        />
        <Rect
          onDragEnd={(e) => {
            e.target.to({
              x: Math.round(e.target.x() / grid) * grid,
              y: Math.round(e.target.y() / grid) * grid
            });
          }}
          x={80}
          y={80}
          draggable
          width={68}
          height={68}
          fill="rgba(0, 0, 0, 1)"
        />
      </Layer>
    </Stage>
  );
};


