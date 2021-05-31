const key = 'CAuArjUhj2W8Cd5PcnK6mnoVIMyzPz3b'

// get weather information
const getWeather = async (id) => {
  const base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`
  const query = `?apikey=${key}`

  const response = await fetch(base + query)
  const data = await response.json()

  return data[0]
}

// get city information
const getCity = async (city) => {
  const base =  'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${key}&q=${city}`

  const response = await fetch(base + query)
  const data = await response.json()

  return data[0]
}

// getCity('moscow')
//   .then(data => getWeather(data.Key))
//   .then(data => console.log(data))
//   .catch(err => console.error(err))