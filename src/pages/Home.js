import { useFetch } from "../hooks/useFetch"
import { Link } from "react-router-dom";
import './Home.css'
export default function Home() {

    const {data: articles, isPending, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {articles && articles.map(article => (
        <div key={article.id} className="card">
          <h3>{article.title}</h3>
          <p>Written by {article.author}</p>
          <Link to={`/articles/${article.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  )
}
