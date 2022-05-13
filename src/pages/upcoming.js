import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "../store/index";
import { getEvents } from "../slices/event";
import Event from "../components/event";
import { eventsAPI } from "../api/event";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Upcoming({ events }) {
  const [hasMore, setHasMore] = useState(false);
  const getMorePost = async () => {
    // TODO infinite scroll
  };
  return (
    <div className="flex justify-center m-10">
      <InfiniteScroll
        dataLength={events}
        next={getMorePost}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        <div className="grid grid-cols-3 gap-9">
          {events &&
            events.map((event) => (
              <div key={event.id}>
                <Event event={event} />
              </div>
            ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
export const getStaticProps = async () => {
  const events = await eventsAPI.getEvents();
  return {
    props: { events },
  };
};
