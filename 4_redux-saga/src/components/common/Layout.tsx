import { PropsWithChildren } from 'react'
import Nav from './Nav'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Nav />

      <main className="h-[calc(100vh-5rem)]">{children}</main>
    </div>
  )
}
