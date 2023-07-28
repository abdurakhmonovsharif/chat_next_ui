"use client"
import Chat from "@/components/Chat"
import LeftSidebar from "@/components/LeftSidebar"
export default function Home() {
  return (
    <main className="mx-auto flex items-center justify-between">
      <LeftSidebar />
      <Chat />
    </main>
  )
}
