import { useQuery } from "@tanstack/react-query";
import Axios from 'axios'

const CatFactAPI = () => {
  const { data, isLoading, isError, refetch } = useQuery(['catfact'], async() => {
    return Axios.get('https://catfact.ninja/fact').then((res) => res.data)
  })

  if (isLoading) { return <h1 style={{marginTop: '24px'}}>Loading...</h1> }
  if (isError) { return <h1 style={{marginTop: '24px'}}>There was an error!</h1> }
  
  return (
    <div className="cat-fact-api">
      <h1>Random Cat Fact!</h1>
      <div className="api-content">
        <p>{data?.fact}</p>
        <button onClick={refetch}>Generate Fact!</button>
      </div>
    </div>
  );
}

export default CatFactAPI
