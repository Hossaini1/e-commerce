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

export default ProductDetails;
