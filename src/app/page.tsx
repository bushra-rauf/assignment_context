'use client'

import { useUser } from "@/contexts/userContext"

export default function Home() {

  const { user } = useUser();
  return <div className="flex flex-col items-center justify-center h-full">
    <div className="text-center">
      <h2 className="text-8xl font-(family-name:--font-style-script)">Welcome {user.name}!</h2>
      <h3 className="text-4xl">This is a site where you can find a tasteless dish to cook. Have fun!</h3>
    </div>
  </div>
}
