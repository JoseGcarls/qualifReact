import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom';
import Navbar from '../../Components/Navbar/navbar';

function DetailPage(){
    const {id} = useParams()
    const [track, setTracks] = useState([])
    const [isFavorite, setFavorite] = useState(false)
    useEffect(()=>{
        
        fetch(`https://spotify-rest.up.railway.app/album?id=${id}`).then(
            result => result.json()
        ).then( 
            data => setTracks(data.data)
        )
        setFavorite(localStorage.getItem(id) !== null)
    },[id])

    function addFav(name){
        localStorage.setItem(id, name)
        setFavorite(true)
    }

    function rmFav(){
        localStorage.removeItem(id)
        setFavorite(false)
    }

    return (
        <div className="h-screen bg-gray-500">
            <Navbar></Navbar>
            <div className="w-auto h-auto bg-gray-500 p-5">
                <div className="flex flex-row flex-wrap justify-center sm:justify-start">
                {track?.map(e => {
                    return(
                        <div key={e.id} className="bg-white h-25 w-80 m-3 p-4 flex flex-col items-center rounded-md bg-gray-700">
                            <div className="font-bold text-gray-200 mb-3 text-xl flex justify-center w-full">
                                <div className="font-bold text-gray-200 mb-3 text-xl">
                                    {e.name}
                                </div>
                                
                            </div>
                            <audio src={e.preview_url} controls></audio>
                        </div>

                    );
                })

                }
                </div>
            </div>    
        </div>
    );

}

export default DetailPage