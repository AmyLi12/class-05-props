import Card from './ui/Card'

export default function Gallery() {
  return (
    <div className="gallery">
      <Card name={"galaxy"}/>
      <Card name={"asteroid"}/>
      <Card name={"black-hole"}/>
      <Card name={"moon"}/>
    </div>
  )
}

{/* For the alternate way of doing this: */}
// <Card imgUri="/images/galaxy.webp" altText="an AI generated galaxy"/>
