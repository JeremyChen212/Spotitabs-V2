import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import { SpotifyContextProvider } from "../context/SpotifyContext";
import { RecoilRoot } from "recoil"
import { useRouter } from "next/router";
import {useSession, signIn, signOut} from 'next-auth/react';
import Header from '@component/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
      <SpotifyContextProvider>
        <Header />
          {router.pathname === "/login" ? (
            <Component {...pageProps} />
          ) : (
            <>
                <main className="mt-4">
                  <Component {...pageProps} />
                </main>
              {/* <PlayerTwo /> */}
            </>
          )}
      </SpotifyContextProvider>
      </RecoilRoot>
    </SessionProvider>
  )
}

