import { useState } from "react";
import SideNavBar from "../components/dashboard/sideNavBar";
import useCargoData from "../components/cargo/useCargoData";

function CargoItems() {
  const { items, setItems } = useCargoData();
  const [newItem, setNewItem] = useState({ name: "", size: "", priority: "", expiry: "" });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.size || !newItem.priority || !newItem.expiry) return;
    
    const updatedItems = [...items, { id: items.length + 1, ...newItem, size: Number(newItem.size), priority: Number(newItem.priority) }];
    setItems(updatedItems);
    setNewItem({ name: "", size: "", priority: "", expiry: "" });
  };

  return (
    <div className="flex">
      <div className="hidden md:block md:w-64 bg-slate-50 h-screen fixed">
        <SideNavBar />
      </div>
      <div className="ml-64 p-6 w-full">
        <h2 className="text-xl font-semibold mb-4">Add Cargo Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            value={newItem.name}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="number"
            name="size"
            placeholder="Size"
            value={newItem.size}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="number"
            name="priority"
            placeholder="Priority"
            value={newItem.priority}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="date"
            name="expiry"
            value={newItem.expiry}
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Item</button>
        </form>

        <h2 className="text-xl font-semibold mt-6">Cargo Items</h2>
        <ul className="mt-4">
          {items.map((item) => (
            <li key={item.id} className="border p-2 mt-2">
              {item.name} - Size: {item.size}, Priority: {item.priority}, Expiry: {item.expiry}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CargoItems;
