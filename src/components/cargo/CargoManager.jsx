import React from "react";
import useCargoData from "./useCargoData";

const placeItems = (items, containers, setContainers) => {
  setContainers((prevContainers) => {
    const updatedContainers = prevContainers.map((container) => ({
      ...container,
      items: [],
      usedSpace: 0,
    }));

    const sortedItems = [...items].sort((a, b) => {
      if (a.priority !== b.priority) return b.priority - a.priority;
      return new Date(a.expiry) - new Date(b.expiry);
    });

    sortedItems.forEach((item) => {
      let placed = false;
      for (let container of updatedContainers) {
        if (container.usedSpace + item.size <= container.capacity) {
          container.items.push(item);
          container.usedSpace += item.size;
          placed = true;
          break;
        }
      }
      if (!placed) {
        console.warn(`⚠️ No space for ${item.name}`);
      }
    });

    return updatedContainers;
  });
};

const CargoManager = () => {
  const { containers, setContainers, items } = useCargoData();

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Cargo Tracking System</h2>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        onClick={() => placeItems(items, containers, setContainers)}
      >
        Place Items
      </button>

      <h3 className="text-lg font-semibold mb-2">Containers</h3>
      <div className="space-y-4">
        {containers.map((container) => (
          <div key={container.id} className="border p-2 rounded-md bg-gray-100">
            <h4 className="font-medium">
              Container {container.id} ({container.usedSpace}/{container.capacity} units used)
            </h4>
            <ul className="list-disc pl-4">
              {container.items.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.size} units
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CargoManager;
