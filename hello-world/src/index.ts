// type Draggable = {
//     drag: () => void
// };

// type Resizable = {
//     resize: () => void;
// };

// type UIWidget = Draggable & Resizable;

// let textBox:UIWidget = {
//     drag: () => {},
//     resize: () => {},
// };

// Literal ( exact , specific )
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = 'cm' | 'inch';