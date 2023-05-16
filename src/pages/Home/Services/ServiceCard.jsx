import { FaArrowRight } from 'react-icons/fa';


const ServiceCard = ({service}) => {

    const {title, img, price} = service;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={img}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-xl text-orange-600 font-bold">Price: ${price}</p>
        <div className="card-actions flex justify-between ">
          <button className="btn btn-primary">Buy Now</button>
          <button className='items-center text-orange-600 font-bold text-2xl border-2 border-gray
          -500 rounded-full p-2 mt-2'><FaArrowRight /></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;






