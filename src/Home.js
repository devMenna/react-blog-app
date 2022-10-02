import { useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  // useEffect(() => {
  //   if(!blogs) console.log('component started')
  //   let interval ;
  //   if(blogs){
  //     console.log('the data is here')
  //      interval = setInterval(() => {
  //       console.log('hemmy')
  //     }, 1000)
  //   }

  //   return () => {clearInterval(interval)}
  // }, [ blogs ])

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}
 
export default Home;