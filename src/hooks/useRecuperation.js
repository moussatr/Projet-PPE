import { useEffect, useState  } from "react"


const useRecuperation = (url) => {
    const [data, setData]= useState( null);
    const [isloading, setIsloading]= useState(true)
    const [error, setError] = useState(null)

     
    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then ((res) => {
              console.log(res.ok);
              if(!res.ok) {
                 throw Error('Desole une erreur est survenu ...')
              }
              return res.json();
            }).then((data) => {
              
              setData(data);
              setIsloading(false);
              setError(null)
            })
            .catch( err => {
              console.log(err.message);
              setError(err.message)
              setIsloading(false);
            })
        }, 2000
        );
       
      }, []);
      return {data, isloading, error}
}

export default useRecuperation
