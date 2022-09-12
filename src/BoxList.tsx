import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

interface BoxInterface {
  id: string;
  height: number;
  width: number;
  backgroundColor: string;
}
/** Manage list of boxes
 *
 * State:
 * - boxes: [ { id, width, height, backgroundColor }, ... ]
 */

function BoxList() {
  const [boxes, setBoxes] = useState<[BoxInterface] | []>([])

  /** add box with given { id, width, height, backgroundColor } */
  function add(newBox: BoxInterface) {
    setBoxes(boxes => [...boxes, newBox]);
  }

  /** remove box matching that id. */
  function remove(id: string) {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  }

  return (
    <div>
      <NewBoxForm createBox={add} />
      {boxes.map(({ id, width, height, backgroundColor }) => (
        <Box
          key={id}
          id={id}
          width={width}
          height={height}
          remove={remove}
          backgroundColor={backgroundColor}
        />
      ))}
    </div>
  );
}

export default BoxList;
