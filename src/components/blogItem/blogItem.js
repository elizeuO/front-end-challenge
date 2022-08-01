function BlogItem({image, title, link}){
    return(<article className="l__col-4">
        <a href={link}>
            <img src={image}/>
        <h2>{title}</h2>

        </a>

    </article>);

}

export default BlogItem;

