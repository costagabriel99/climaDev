import { useState, useEffect, useRef } from 'react'

import InputWithSuggestions from './InputwithSuggestions'

export default function SearchCity() {
  const [city, setCity] = useState('')
  const [suggestionsCity, setSuggestionsCity] = useState([])
  const debounce = useRef(null)

  const searchData = async () => {
    if (!city) return
    const cities_limit = 5
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=${cities_limit}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`
    )
    const json = await response.json()
    handleList(json)
  }

  const handleList = (list) => {
    const formattedList = list.map((data) => ({
      text: `${data.name}, ${data.state}, ${data.country}`,
      onClick: () => console.log(data.lat, data.lon)
    }))
    setSuggestionsCity(formattedList)
  }

  useEffect(() => {
    if (city.length >= 3) {
      if (debounce.current) clearInterval(debounce.current)
      debounce.current = setTimeout(searchData, 500)
    } else setSuggestionsCity([])
    return () => clearInterval(debounce.current)
  }, [city])

  return (
    <InputWithSuggestions
      placeholder="Digite o nome da cidade"
      value={city}
      onChange={({ target }) => {
        setCity(target.value)
      }}
      suggestions={suggestionsCity}
    />
  )
}