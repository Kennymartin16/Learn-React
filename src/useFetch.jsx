import { useState, useEffect } from 'react';

const useFetch = (url) => {
  //Adding url as a parameter so that the url in fetch won't be hardcoded into the project

  //Changing the blogs to data so it can be reusable in another project or files
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  //We are using this Error state to display the error message not only in the console but for the User to see
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, {signal: abortCont.signal})
        .then(res => {
          if(!res.ok){
            throw Error('Could not fetch data for that resource💀');
          }
          // console.log(res);
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          if(err.name === 'AbortError'){
            console.log('Fetch aborted');
          }else {
            setIsPending(false);
            setError(err.message);
          }
          // console.log(err.message);
        });
    }, 500)

    return () => abortCont.abort();
  }, [url]);

  return { data, isPending, error }
}

export default useFetch;