import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-orange-600 font-bold">Services</h3>
        <h2 className="font-bold text-5xl">Our Service Area</h2>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="grid grid-cols-1md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* <p>Services{services.length}</p> */}
        {
            services.map(service => <ServiceCard
                key={service._id}
                service={service}
            ></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
