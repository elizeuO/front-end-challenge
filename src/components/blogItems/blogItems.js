import { useEffect, useState } from "react";
import BlogItem from "../blogItem/blogItem";

function BlogItems() {
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
      .then((res) => res.json())
      .then((data) => {
        setBlogItems(data);
      });
  }, []);

  // console.log(blogItems);

  return (
    <section className="c-section">
      <div className="c-container">
        <div className="l-flex l-flex--center l-flex--wrap l-flex--negative">
          {blogItems.map((blogItem) => {
            const imgSrc = blogItem._embedded["wp:featuredmedia"][0].source_url;

            return (
              <BlogItem
                image={imgSrc}
                title={blogItem.title.rendered}
                link={blogItem.link}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default BlogItems;
