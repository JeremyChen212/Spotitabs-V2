import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect} from 'react'
import { Inter } from 'next/font/google'
import styles from '@component/styles/Home.module.css'
import {useSession, signIn, signOut} from 'next-auth/react';
import { useSpotify } from '../context/SpotifyContext'
import PlaylistDashboard from '@component/components/PlaylistDashboard'
import { Header } from '@component/components/Header'
import Layout from '@component/components/Layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {data: session} = useSession();
  const [list, setList] = useState([]);
  console.log(session)
    
  if(session){
  return (
    <Layout title="Welcome to Spotify" center={true}>
        <h1 className="text-3xl text-center my-10">Welcome {session?.token?.name}</h1>
        <PlaylistDashboard></PlaylistDashboard>
    </Layout>
  )
}  else {
  <div>

  </div>
}
}
