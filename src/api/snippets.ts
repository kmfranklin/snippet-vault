const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || 'http://localhost:3000'

export async function fetchSnippets() {
  try {
    const res = await fetch(`${API_URL}/api/snippets?limit=100`)
    if (!res.ok) {
      console.error('Failed to fetch snippets:', res.status, res.statusText)
      return []
    }
    const data = await res.json()
    return data.docs || []
  } catch (error) {
    console.error('Error fetching snippets:', error)
    return []
  }
}

export async function fetchSnippet(id: string) {
  const res = await fetch(`${API_URL}/api/snippets/${id}`)
  return res.json()
}

export async function createSnippet(data: any) {
  const res = await fetch(`${API_URL}/api/snippets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return res.json()
}

export async function updateSnippet(id: string, data: any) {
  const res = await fetch(`${API_URL}/api/snippets/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return res.json()
}

export async function deleteSnippet(id: string) {
  const res = await fetch(`${API_URL}/api/snippets/${id}`, {
    method: 'DELETE',
  })
  return res.json()
}
