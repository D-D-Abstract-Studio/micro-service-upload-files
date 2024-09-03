declare module 'translatte' {
  const translatte: <Translate>(text: string, options: { to: string; from: string }) => Promise<Translate>

  export = translatte
}
