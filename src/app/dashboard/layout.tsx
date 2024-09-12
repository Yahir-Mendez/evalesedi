import { OpenSans } from "../fonts/fonts";
// import "normalize.css";
import "./globals.css";


export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){

  return(
    <html lang="es" className={`${OpenSans.className} antialiased dark:bg-gray-950`} >
      <body>{children}</body>
    </html>
  )
}