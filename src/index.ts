import app from './app'

try {
  const port = 3000

  app.listen(port, () => console.log(`Application running on port ${port}`))
} catch (error) {
  console.error('Erro ao conectar ao banco de dados:', error)
}
