export default async function handle(req, res) {
  const url = req.url.replace('/api/openweathermap?url=', '')
  const response = await fetch(`http://api.openweathermap.org/${url}&appid=${process.env.OWM_KEY}`)
  const json = await response.json()
  res.status(response.status).json(json)
}
