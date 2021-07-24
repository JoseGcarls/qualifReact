import { Link } from "react-router-dom";
import AlbumCard from "../../Components/AlbumCard/albumCard";
import Navbar from "../../Components/Navbar/navbar";

function FavoritePage(){
    var parse_data = JSON.parse(localStorage.getItem('favorite'))

    return(
        <div className="h-screen bg-gray-500">
            <Navbar></Navbar>
            <div className="w-auto h-auto bg-gray-500 p-5">
                <div className="flex flex-row flex-wrap justify-center sm:justify-start">
                    {
                        parse_data?.map(e =>{
                            return(
                                <div className="p-3 flex flex-row">
                                    <div className="bg-gray-700 w-60 min-h-92 rounded-lg flex flex-col items-center">
                                        <Link to={`/detail/${e.id}`}>
                                            <div>
                                                <img src={e.image} alt="" className="h-60 rounded-t-lg"/>        
                                            </div>
                                        </Link>
                                        <div className="font-bold h-12 rounded-b-xl w-60 flex items-center justify-center text-xs  text-gray-400 bg-gray-700 text-center">
                                                {e.name}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>    
        </div>
        
    );
}
export default FavoritePage