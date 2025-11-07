import { Outlet } from "react-router-dom";
import Breadcumb from "../../components/Breadcumb";
import { useEffect } from "react";

const CoreHr = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="content-body">
        {/* <!-- row -->	 */}
        <Breadcumb title="Home" subtitle="Core HR" />

        <Outlet />
      </div>
    </>
  );
};

export default CoreHr;
