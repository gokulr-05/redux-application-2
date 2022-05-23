import "./Notification.css";
import { useSelector } from "react-redux";
let Notification = () => {
  let title = useSelector((state) => {
    return state.title;
  });
  let message = useSelector((state) => {
    return state.message;
  });

  return (
    <div
      className={` ${title}  d-flex Added align-items-center justify-content-around px-4 py-2 `}
    >
      <h3 className="text-white">{title}</h3>
      <p className=" m-0 text-white">{message}</p>
    </div>
  );
};

export default Notification;
