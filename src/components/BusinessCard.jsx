export default function BusinessCard({name, email}) {
  return (
    <div style={
      {
        border: '1px solid #000000',
        padding: '10px',
        margin: '10px',
        maxWidth: '500px',
        backgroundColor: '#ffffff',
        color: '#000000'
      }
    }>
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}
