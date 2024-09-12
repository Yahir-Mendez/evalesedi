import { TabNav } from "@/app/dashboard/components/tabNavigation/TabNav";
import { OpenSans } from "../fonts/fonts";
// import "normalize.css";
import "./globals.css";


export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){

  return(
    <html lang="es" className={`${OpenSans.className} antialiased dark:bg-gray-950`} >
      <body>
        <header>
            <nav><TabNav/></nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}