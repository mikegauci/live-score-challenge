import "./globals.css"
import type { Metadata } from "next"

import StyledComponentsRegistry from "./registry"

export const metadata: Metadata = {
  title: "Live Score Challenge",
  description: "Live Score Challenge",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
