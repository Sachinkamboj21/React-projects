import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInitialItems } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  // console.log('Fetch status = ', fetchStatus);
  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(addInitialItems(items[0]));
        // console.log("items fetched", items);
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus, dispatch]);

  return (
    <>
      <div>
        Fetch Done: {fetchStatus.fetchDone}
        currently Fetching: {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};

export default FetchItems;
