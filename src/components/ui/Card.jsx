import Citation from "../Citation";

export default function Card({name}) {
  return (
    <div className="card">
      <img src={"/images/" + name + ".webp"} alt={"an AI generated" + name} />

      <Citation />
    </div>
  )
}

{/* An alternate way of doing this is */}

// export default function Card2({imgUri, altText}) {
//   return (
//     <div className="card">
//       <img src={imgUri} alt={altText} />

//       <Citation />
//     </div>
//   )
// }
