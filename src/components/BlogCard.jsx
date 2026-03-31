export default function BlogCard({ title, description, image, category }) {
  return (
    <article className="relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-transform duration-300 hover:-translate-y-1">
      <span className="absolute top-3 left-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 z-10">
        {category}
      </span>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/2 h-44 md:h-auto">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2 p-5 flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-zinc-900 mb-3">{title}</h3>
          <p className="text-base font-normal text-gray-600 leading-relaxed mb-4">
            {description}
          </p>
          <button className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-white text-base font-semibold hover:bg-orange-600 transition">
            Read More
          </button>
        </div>
      </div>
    </article>
  );
}
