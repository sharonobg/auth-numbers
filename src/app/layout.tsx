import Nav from './components/Nav';
import { AuthContextProvider } from "./context";
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/*<AuthContextProvider>*/}
        <Nav />
          {children}
        {/*</AuthContextProvider>*/}
      </body>
    </html>
  )
}
