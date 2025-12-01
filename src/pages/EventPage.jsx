import Event2 from "../components/Event2.jsx";
import Event3 from "../components/Event3.jsx";
import Event3Sidebar from "../components/Event3Sidebar.jsx";

export default function EventPage() {
  return (
    <div className="flex w-full bg-white">
      {/* LEFT SIDE – EVENT LIST */}
      <div className="w-1">
        {/* <Event2 /> */}
        {/* <Event3 /> */}
      </div>

      {/* MIDDLE – CALENDAR */}
      <div className="w-1 flex-10 ml-80 mr-0">
        <Event3 />
      </div>

      {/* RIGHT SIDE – TIME SLOTS */}
      <div className="w-1">
        <Event3Sidebar />
      </div>
    </div>
  );
}
