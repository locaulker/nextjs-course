import Link from "next/link"

function ClientProjectsPage() {
  const clients = [
    { id: 1, name: "Maximilian" },
    { id: 2, name: "Manuel" },
  ]
  return (
    <div>
      <h1>The Project of a Given Client</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
      <button>Load Project A</button>
    </div>
  )
}

export default ClientProjectsPage
