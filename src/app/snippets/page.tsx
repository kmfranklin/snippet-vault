import { fetchSnippets } from '@/api/snippets'

export default async function SnippetListPage() {
  const snippets = await fetchSnippets()

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Snippets</h1>

      <ul style={{ marginTop: '1rem', lineHeight: '1.8' }}>
        {snippets.map((s: any) => (
          <li key={s.id}>
            <strong>{s.title}</strong>
            <span style={{ opacity: 0.6 }}>({s.type})</span>
          </li>
        ))}
      </ul>
    </main>
  )
}
