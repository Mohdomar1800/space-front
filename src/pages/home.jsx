import SideNavBar from "../components/dashboard/sideNavBar";

function Home() {
  return (
    <div className="flex">
      <div className="hidden md:block md:w-64 bg-slate-50 h-screen fixed">
        <SideNavBar />
      </div>
    </div>
  );
}

export default Home;
