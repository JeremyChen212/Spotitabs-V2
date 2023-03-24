import { PlaylistType } from '../../types/types'
import { GetServerSideProps } from 'next';
interface IProps { 
    playlist: PlaylistType;
  }

export default function Playlist( {playlist} : IProps) {
    console.log(playlist)

    
    return (
        <div>
            {playlist?.name}
        </div>
    )
}

async function getServerSideProps() {
    
}