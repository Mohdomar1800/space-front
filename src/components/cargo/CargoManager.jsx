import React from "react";
import useCargoData from "./useCargoData";
import CargoTable from "./CargoTable";
import CargoContainer3D from "./CargoContainer3D";

const placeItems = (items, containers, setContainers) => {
  setContainers((prevContainers) => {
    let updatedContainers = prevContainers.map((container) => ({
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
        for (let container of updatedContainers) {
          let removedItems = [];
          while (
            container.usedSpace + item.size > container.capacity &&
            container.items.length > 0
          ) {
            const lowestPriorityItem = container.items.reduce((min, curr) =>
              curr.priority < min.priority ? curr : min
            );

            container.items = container.items.filter(
              (i) => i.id !== lowestPriorityItem.id
            );
            container.usedSpace -= lowestPriorityItem.size;
            removedItems.push(lowestPriorityItem);
          }

          if (container.usedSpace + item.size <= container.capacity) {
            container.items.push(item);
            container.usedSpace += item.size;
            placed = true;
            console.warn(
              `Rearranged container ${container.id} to fit ${item.name}, removed ${removedItems.length} items.`
            );
            break;
          }
        }
      }

      if (!placed) {
        console.error(`🚨 No space available for ${item.name}!`);
      }
    });

    return updatedContainers;
  });
};

const retrieveItem = (itemId, containers, setContainers) => {
  setContainers((prevContainers) =>
    prevContainers.map((container) => ({
      ...container,
      items: container.items.filter((item) => item.id !== itemId),
      usedSpace: container.items
        .filter((item) => item.id !== itemId)
        .reduce((sum, item) => sum + item.size, 0),
    }))
  );
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
      <CargoTable containers={containers} />

      <h3 className="text-lg font-semibold mt-4">Retrieve Item</h3>
      <div className="flex gap-2">
        {items.map((item) => (
          <button
            key={item.id}
            className="bg-red-500 text-white px-3 py-1 rounded-md"
            onClick={() => retrieveItem(item.id, containers, setContainers)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <h3 className="text-lg font-semibold mt-4">3D Visualization</h3>
      <div className="w-full h-[400px]">
        <CargoContainer3D containers={containers} />
      </div>

    </div>
  );
};

export default CargoManager;
