export const getToken = () => fetch(
  'https://opentdb.com/api_token.php?command=request',
).then((token) => token.json()
  .then((json) => (token.ok ? Promise.resolve(json) : Promise.reject(json))));

export async function getTrivia(token, category, difficulty, type) {
  return fetch(`https://opentdb.com/api.php?amount=5&token=${token}&category=${category}&difficulty=${difficulty}&type=${type}`)
    .then((trivia) => trivia
      .json()
      .then((json) => (trivia.ok ? Promise.resolve(json) : Promise.reject(json))));
}

export async function getCategory() {
  return fetch('https://opentdb.com/api_category.php')
    .then((category) => category
      .json()
      .then((json) => (category.ok ? Promise.resolve(json) : Promise.reject(json))));
}
