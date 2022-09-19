import { useAppState } from './useAppState';

const GlobalHeader = ():JSX.Element => {
  const { articles } = useAppState()
  return (
    <header>
      総いいね: {articles.reduce((acc,{likes}) => acc + likes,0)}
    </header>
  )
}
export default GlobalHeader