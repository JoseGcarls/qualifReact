import { useParams } from "react-router";
import Navbar from "../../Components/Navbar/navbar";
import {gql, useQuery} from '@apollo/client'
import AlbumCard from "../../Components/AlbumCard/albumCard";
function SearchPage(){
    const {name} = useParams()
    console.log(name)
    const GET_SEARCH_ARTIST = gql`
        query GetArtist($n: String!){
            artist(name:$n){
                albums{
                    id
                    name
                    image
                }
            }
        }
    `
    const {loading, error, data} = useQuery(GET_SEARCH_ARTIST,{
        variables:{
            n: name
        }
    });
    if(error){
        return(
            <div className="h-screen bg-gray-500">
                <Navbar></Navbar>
                <div className="font-bold text-4xl text-gray-300 p-5 h-5/6 flex justify-center items-center">
                    Album Not Found!
                </div>
            </div>
        );
    }
    if (loading) {
        return (
            <div className="h-screen w-screen bg-gray-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-72 w-72 animate-spin text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"  stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
            </div>
        );
    }
    const search_album = data.artist.albums
    return(
        <div className="h-screen bg-gray-500">
            <Navbar></Navbar>
            <div className="w-auto h-auto bg-gray-500 p-5">
                <div className="flex flex-row flex-wrap justify-center sm:justify-start">
                {search_album?.map(album => {
                    return(
                        <AlbumCard album={album}></AlbumCard>
                    );
                })}
                </div>
            </div>    
        </div>
    );
}
export default SearchPage