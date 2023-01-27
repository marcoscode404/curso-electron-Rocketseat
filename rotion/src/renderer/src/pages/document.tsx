import { Link } from 'react-router-dom'

export function Document() {
  return (
    <main className="flex-1 flex py-12 px-10 gap-8">
      Document
      <Link to="/">Acessar blank</Link>
    </main>
  )
}
