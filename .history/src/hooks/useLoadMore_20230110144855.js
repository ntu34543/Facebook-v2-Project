import {useEffect, useState} from 'react';
import {firestore} from '@react-native-firebase/firestore';

function useLoadMore(ref, limit) {
  const [loading, setLoading] = useState(false);
  const [endReached, setEndReached] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let query = ref.limitToFirst(limit);

    const handleData = snap => {
      if (snap.val()) {
        setItems(snap.val());
        setLoading(false);
        console.log('',items);
      } else {
        setEndReached(true);
        setLoading(false);
      }
    };

    query.on('value', handleData);

    return () => {
      query.off('value', handleData);
    };
  }, []);

  const loadMore = () => {
    if (endReached || loading) return;

    setLoading(true);

    let query = ref
      .startAt(null, items[items.length - 1].key)
      .limitToFirst(limit + 1);

    const handleData = snap => {
      if (snap.val()) {
        const newData = snap.val();
        if (newData.length > limit) {
          newData.shift();
          setItems([...items, ...newData]);
          setLoading(false);
        } else {
          setItems([...items, ...newData]);
          setLoading(false);
          setEndReached(true);
        }
      } else {
        setEndReached(true);
        setLoading(false);
      }
    };

    query.on('value', handleData);

    return () => {
      query.off('value', handleData);
    };
  };

  return {items, loading, endReached, loadMore};
}
export default useLoadMore;
