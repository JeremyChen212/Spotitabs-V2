import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react";
import { SpotifyProvider } from "../context/SpotifyContext";
import { RecoilRoot } from "recoil"
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <SessionProvider session={pageProps.session}>
      <RecoilRoot>
      <SpotifyProvider>
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
      </SpotifyProvider>
      </RecoilRoot>
    </SessionProvider>
  )
}
