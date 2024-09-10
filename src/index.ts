import app from './app'

try {
  const port = 8001

  app.listen(port, () => console.log(`Application running on port ${port}`))
} catch (error) {
  console.error('Erro ao conectar ao banco de dados:', error)
}
