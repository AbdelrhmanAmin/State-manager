import { useState } from "react";
import { useDispatch, useSelector } from "./hooks";

const Todo = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const [newItem, setNewItem] = useState("");
  return (
    <div>
      <strong style={{ fontSize: "36px", marginBottom: "30px" }}>Todo</strong>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          onChange={(e) => setNewItem(e.target.value)}
          value={newItem}
          style={{
            height: "30px",
          }}
        />
        <button onClick={() => dispatch({ type: "ADD_ITEM", item: newItem })}>
          Add
        </button>
      </div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
