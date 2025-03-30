import SideNavBar from "../components/dashboard/sideNavBar";

function CargoItems() {
  return (
    <div>
      <div className="hidden md:block md:w-64 bg-slate-50 h-screen fixed">
        <SideNavBar />
      </div>
    </div>
  );
}

export default CargoItems;
