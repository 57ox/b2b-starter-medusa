import ReactQueryProvider from "@lib/context/react-query"
import { getBaseURL } from "@lib/util/env"
import { GeistSans } from "geist/font/sans"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={GeistSans.variable}>
      <body>
        <ReactQueryProvider>
          <main className="relative">{props.children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
