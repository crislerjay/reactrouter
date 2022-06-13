import React, { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

function Article() {
    const {id} = useParams()

    const url = 'https://jsonplaceholder.typicode.com/posts/' + id
    const {data: article, isPending, error } = useFetch(url)

    
    return (
        <div>
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {article && (
            <div key={article.id}>
            <h2>{article.title}</h2>
            <p>By {article.author}</p>
            <p>{article.body}</p>
            </div>
        )}
        </div>
    )
}

export default Article