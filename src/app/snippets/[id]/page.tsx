import { fetchSnippet } from '@/api/snippets'

export default async function SnippetDetailPage({ params }: { params: { id: string } }) {
  const snippet = await fetchSnippet(params.id)

  return (
    <main style={{ padding: '2rem' }}>
      <h1>{snippet.title}</h1>
      <p style={{ opacity: 0.7 }}>{snippet.type}</p>

      {snippet.description && (
        <section style={{ marginTop: '1rem' }}>
          <h3>Description</h3>
          <p>{snippet.description}</p>
        </section>
      )}

      {snippet.code && (
        <section style={{ marginTop: '1rem' }}>
          <h3>Code</h3>
          <pre style={{ background: '#f5f5f5', padding: '1rem' }}>
            <code>{snippet.code}</code>
          </pre>
        </section>
      )}

      {snippet.tags?.length > 0 && (
        <section style={{ marginTop: '1rem' }}>
          <h3>Tags</h3>
          <ul>
            {snippet.tags.map((t: any, i: number) => (
              <li key={i}>{t.tag}</li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}
