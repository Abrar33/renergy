import { Sun, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
      <div>
        <h1 className="text-5xl font-bold mb-6">
          Reliable Energy <br />
          <span className="text-emerald-600">Renergy</span>
        </h1>

        <p className="text-gray-600 mb-6">
          Next generation solar solutions with 25 years warranty.
        </p>

        <div className="flex gap-4">
          <div className="flex gap-2 bg-green-100 px-3 py-2 rounded">
            <Leaf size={18} /> Eco Friendly
          </div>
          <div className="flex gap-2 bg-yellow-100 px-3 py-2 rounded">
            <Sun size={18} /> High Efficiency
          </div>
        </div>
      </div>

      <img
        src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d"
        className="rounded-xl"
      />
    </section>
  );
};

export default Hero;