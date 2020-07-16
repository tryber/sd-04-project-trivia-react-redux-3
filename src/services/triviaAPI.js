const getToken = () =>
  fetch('https://opentdb.com/api_token.php?command=request').then((token) =>
    token
      .json()
      .then((json) => (token.ok ? Promise.resolve(json) : Promise.reject(json))),
  ),

  export default getToken;
