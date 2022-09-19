import { useAppState } from './useAppState';
import { useAppStateDispatch } from './useAppStateDispatch';
type Props = {
  id:string
}

const Article = ({id}:Props):JSX.Element => {
  const { articles } = useAppState()
  const dispatch = useAppStateDispatch()

  const article = articles.find((article) => article.id === id )
  if(article === undefined){
    return <article>404</article>
  }

  const { contents, likes } = article


  return (
    <article>
      <p>{contents}</p>
      <div>この記事のいいね: {likes}</div>
      <button onClick={() => {
        dispatch({
          type:"like",
          payload: {
            articleId:id
          }
        })
      }} >いいね</button>
    </article>
  )
}

export default Article