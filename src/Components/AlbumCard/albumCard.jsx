import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

function AlbumCard({album}){
    const [isFavorite, setFavorite] = useState(false)
    var parse_data = JSON.parse(localStorage.getItem('favorite'))
    var data = {id : album.id, name:album.name, image:album.image}
    function checkFavorite(id){
        if(parse_data != null){
            parse_data.forEach(e =>{
                if(e.id === id){
                    setFavorite(true)
                }
            })
            return
        }
        setFavorite(false)
    }
    function addFavorite(){
        if(parse_data == null){
            parse_data = [data]
        }else{
            parse_data.push(data)
        }
        localStorage.setItem('favorite', JSON.stringify(parse_data))
        setFavorite(true)
    }
    function rmFavorite(){
        if(parse_data == null){
            parse_data = []
        }else{
            let i = 0
            let found = false
            parse_data.forEach(e =>{
                if(e.id === album.id){
                    found = true
                }else{
                    if(found === false){
                        i += 1
                    }
                }
            })
            parse_data.splice(i, 1)
            localStorage.setItem('favorite', JSON.stringify(parse_data))
            setFavorite(false)
        }
    }
    useEffect(() => {
        checkFavorite(album.id)   
    }, [])
    
    return(
        <div className="p-3 flex flex-row">
            <div className="bg-gray-700 w-60 min-h-92 rounded-lg flex flex-col items-center">
                <Link to={`/detail/${album.id}`}>
                    <div>
                        <img src={album.image} alt="" className="h-60 rounded-t-lg"/>        
                    </div>
                </Link>
                <div className="font-bold h-12 rounded-b-xl w-60 flex items-center justify-around text-xs  text-gray-400 bg-gray-700 text-center">
                    <div>
                        {album.name}
                    </div>
                    <div>
                    { isFavorite ?         
                        <button onClick={rmFavorite}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                        </button>
                        :                    
                        <button onClick={addFavorite}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlbumCard