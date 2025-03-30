import { useState } from "react";

const useCargoData = () => {
  const [containers, setContainers] = useState([
    {
      id: "A1",
      capacity: 100,
      usedSpace: 0,
      items: [],
    },
    {
      id: "B1",
      capacity: 150,
      usedSpace: 0,
      items: [],
    },
  ]);

  const [items, setItems] = useState([
    {
      id: "ITEM001",
      name: "Oxygen Tank",
      size: 20,
      priority: 5,
      expiry: "2025-10-10",
    },
    {
      id: "ITEM002",
      name: "Food Packet",
      size: 10,
      priority: 3,
      expiry: "2024-12-30",
    },
  ]);

  return { containers, setContainers, items, setItems };
};

export default useCargoData;
