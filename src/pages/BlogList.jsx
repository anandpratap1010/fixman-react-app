import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import blogsData from "../data/blogs.json";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

const assetMap = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
};

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  const assetMap = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
  };

  useEffect(() => {
    setBlogs(
      blogsData.map((blog) => ({
        ...blog,
        image:
          assetMap[blog.id] ||
          (blog.image.startsWith("../assets/")
            ? new URL(blog.image, import.meta.url).href
            : blog.image),
      })),
    );
  }, []);

  return (
    <section className="py-10">
      <Container>
        <div className="mb-12">
          <div>
            <h1 className="text-5xl font-bold text-zinc-900 leading-tight">
              Blog
            </h1>
            <p className="text-base font-normal leading-relaxed text-gray-600 mt-3 w-full max-w-none">
              Home projects often take more time and effort than expected.
              That’s where Fixtman steps in. Our{" "}
              <span className="font-bold">handyman services</span> cover the
              most common home assembly and installation needs, handled by
              experienced technicians who arrive prepared and ready to work.
            </p>
          </div>
        </div>

        <div className="blog-list-divider" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="rounded-lg bg-orange-500 px-6 py-3 text-white font-semibold text-base hover:bg-orange-600 transition inline-flex items-center gap-2">
            View All Blogs
            <span className="text-xl">→</span>
          </button>
        </div>
      </Container>
    </section>
  );
}
