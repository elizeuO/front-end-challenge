import "./blogItem.scss";

function BlogItem({ image, title, link, excerpt }) {
  return (
    <article className="l__col-4">
      <a href={link} className="c-blog-item">
        <div className="c-blog-item__thumbnail">
          <img src={image} alt={title} />
        </div>
        <div className="c-blog-item__info">
          <h2>{title}</h2>
          <p>{excerpt}</p>
        </div>
      </a>
    </article>
  );
}

export default BlogItem;
