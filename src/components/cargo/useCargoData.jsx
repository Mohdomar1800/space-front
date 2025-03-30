import { useState } from "react";

const useCargoData = () => {
  const [containers, setContainers] = useState([
    { id: 1, capacity: 100, usedSpace: 0, items: [] },
    { id: 2, capacity: 120, usedSpace: 0, items: [] },
    { id: 3, capacity: 80, usedSpace: 0, items: [] },
  ]);

  const [items, setItems] = useState([
    { id: 1, name: "Item A", size: 20, priority: 3, expiry: "2025-06-15" },
    { id: 2, name: "Item B", size: 50, priority: 1, expiry: "2025-05-01" },
    { id: 3, name: "Item C", size: 30, priority: 2, expiry: "2025-07-10" },
  ]);

  return { containers, setContainers, items, setItems };
};

export default useCargoData;
