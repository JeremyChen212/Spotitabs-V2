import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSpotify } from "../context/SpotifyContext";
import { RiHome5Fill, RiHome5Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdList } from "react-icons/io";
import styles from '../styles/PlaylistSidebar.module.css'
import { useRecoilState } from 'recoil'
import { isActiveState } from '../atoms/playlistAtom'

const activeLink = "bg-[#282828] text-white";
const inactiveLink = "bg-transparent text-gray";

export default function PlaylistDashboard() {
  const router = useRouter();
  const { playlists, fetchPlaylists } = useSpotify();
  const { playlistComponent, setPlaylistComponent } = useState();

  useEffect(() => {
    fetchPlaylists();
    console.log(playlists)
  }, []);

  if (router.pathname === "/login") {
    return null;
  }
    return (
      <div className={'grid grid-cols-1 gap-[1.5rem] max-w-[50rem] sm:grid-cols-3 m-auto'}>
          {playlists.map((playlist, index) => (
                //         <Link key={playlist.id} href={`/playlist/${playlist.id}`}>
              <Link key={playlists.name} href={`/playlist/${playlist.id}`} onClick={() => setIsActive(true)} >
                <div className={'relative cursor-pointer hover:scale-90 transition-all'} id={playlist.id}  >
                    <img className={"w-50"} src={playlist?.images?.[0]?.url} />
                    <h1 className="absolute w-[100%] text-center bg-[#000000cd] text-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-3" >{playlist.name}</h1>
                </div>
              </Link>
          ))}
      </div>
    )
  }