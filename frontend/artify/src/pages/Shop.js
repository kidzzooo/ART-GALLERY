import React,{useEffect,useState} from 'react'
import arts from "../data/data.json";
import Card from "../components/Card";
export default function Shop() {
  const [data,setData] = useState([])
 
  useEffect(() => {
    setData(arts)
  },[])
  return (
    <div className='p-5' >
        <div className="p-14 grid grid-cols-3">
      {
        data.length>0 && data.map((item) => {
          return (
            <Card
              url={item.url}
              title={item.title}
              price={item.price}
              artist = {item.artist}
            />
          ) 
        }
        )
      }
      </div>
    </div>
  )
}
