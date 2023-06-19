import UserProvider from './userProvider'

export const metadata = {
  title: 'My NBA',
  description: 'My NBA Project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
