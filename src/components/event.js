import { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "../store/index";
import { saveEvent, deleteEvent } from "../slices/event";

export default function Event({ event }) {
  const dispatch = useDispatch();
  const { savedEvents } = useSelector((state) => state.event);
  const [favorite, setFavorite] = useState(false);
  const convertDate = (date) => {
    return new Date(date).toLocaleDateString();
  };
  const onClick = (id) => {
    dispatch(saveEvent(id));
    const isFound = savedEvents.map((element) => {
      if (element === event.id) {
        return true;
      }
      return false;
    });
    setFavorite(isFound);
  };
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg">
      <div className="h-64 relative">
        <Image
          src={event.hero_url ? event.hero_url : "/default.png"}
          alt={event.name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="px-6 py-4">
        {" "}
        {/* h-60 max-h-full */}
        <div className="font-bold text-xl mb-2">{event.name}</div>
        <p className="text-gray-700 text-base mb-2">
          {event.short_description}
        </p>
        <div className="font-bold text-md mb-2">
          Start: {convertDate(event.starts_at)} - End:{" "}
          {convertDate(event.ends_at)}
        </div>
        <div className="flex justify-around">
          {event.panelists.length > 0 &&
            event.panelists.map((panel) => (
              <>
                <div className="flex flex-wrap justify-start items-center flex-col ">
                  <div className="w-16 h-16 relative">
                    <Image
                      src={panel.avatar_url ? panel.avatar_url : "/default.png"}
                      alt="..."
                      layout="fill"
                      objectFit="cover"
                      className="shadow rounded-full max-w-full h-auto align-middle border-none"
                    />
                  </div>
                  <div className="text-center">{panel.name}</div>
                  <div className="text-center">{panel.title}</div>
                  <div className="font-bold text-center text-md mb-2">
                    {panel.company}
                  </div>
                </div>
              </>
            ))}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-end mb-2">
        <button
          type="button"
          onClick={() => onClick(event.id)}
          className={
            favorite
              ? "text-red-500 border border-red-500 hover:bg-red-500 hover:text-white  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
              : "text-gray-500 border border-gray-500 hover:bg-gray-500 hover:text-white  font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
