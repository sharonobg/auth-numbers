import Categories from '@/app/components/Categories';
import Transactions from '@/app/components/Transactions';
import { AuthContextProvider,useAuthContext } from "./context";
import './globals.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <body>
      
        <AuthContextProvider>
            <p>USER P:</p>
            <Categories />
            <Transactions />
        </AuthContextProvider>
        
      </body>
    </html>
  )
}
