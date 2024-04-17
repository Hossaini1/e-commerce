import Store from "../store/Context";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();

  const { detail } = Store();
  console.log(detail);
  return (
    <div className="">
      <h1>{detail.title}</h1>
      <h2>{detail.category}</h2>
      <div className="flex">
        <img src={detail.thumbnail} alt={detail.title} />
        <div>
          {detail.images.map((image, index) => (
            <img key={index} src={image} />
          ))}
        </div>
      </div>
      {detail.length > 0 ? <h1>Hallo Detail</h1> : ""}

      <p>{detail.description}</p>
    </div>
  );
};
// export default ProductDetails;

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { detail } = Store();

//   // Ensure detail is not null or undefined before accessing its properties
//   if (!detail) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="">
//       <h1>{detail.title}</h1>
//       <h2>{detail.category}</h2>
//       <div className="flex">
//         <img src={detail.thumbnail} alt={detail.title} />
//         <div>
//           {detail.images.map((image, i) => (
//             <img key={i} src={image} alt={`Image ${i}`} />
//           ))}
//         </div>
//       </div>
//       <p>{detail.description}</p>
//     </div>
//   );
// };

export default ProductDetails;
