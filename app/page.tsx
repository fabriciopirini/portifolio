import { Hero } from '@/components/Hero'
import { NavBar } from '@/components/NavBar'
import { SocialsSidebar } from '@/components/SocialsSidebar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-20">
      <NavBar />
      <Hero />
      <SocialsSidebar />
    </main>
  )
}
