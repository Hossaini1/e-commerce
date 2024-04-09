import { Outlet } from "react-router-dom";
import Store from "../store/Context";

const Main = () => {
  const { handleClickToSeeMore } = Store();

  return (
    <>
      <Outlet />
      <main className="text-center ">
        <button
          className="text-center bg-tertiary text-primaryDark px-3 py-2 font-bold rounded-t-2xl "
          onClick={handleClickToSeeMore}
        >
          See more
        </button>
        
      </main>
    </>
  );
};
export default Main;
