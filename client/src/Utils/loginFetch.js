/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";

const loginFetch = (props) =>{
  const {url, username, password} = props;
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    fetch(url, {
      "method": "POST",
      "body": {
        "username": username,
        "password": password
      }
    }
    ).then((res) => {
      if(!res.ok){
        throw Error('The data could not be fetched');
      }
      return res.json();
    })
    .then(data => {
      setData(data);
      setIsPending(false);
      setError(null);
      console.log(data);
    })
    .catch((err) => {
      setError(err.message);
      setIsPending(false);
    });
  }, [password, url, username]);

  return {data, isPending, error};
}

export default loginFetch;