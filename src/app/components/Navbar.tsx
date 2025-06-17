'use client'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { DropdownMenuContent } from '@radix-ui/react-dropdown-menu'
// import Link from 'next/link'

export function Navbar() {
    const { setTheme } = useTheme()
  return (
    <nav className='flex flex-row items-center justify-between mx-3 mt-2'>
    <div className="">
        <span className="text-3xl font-bold">Gribbly</span>
    </div>
    <div className='flex gap-10' >
        <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
        </DropdownMenu>
        <Button variant={'link'} className='cursor-pointer'>Home</Button>
        <Button variant={'link'} className='cursor-pointer'>Pricing</Button>
        <Button variant={'link'} className='cursor-pointer'>Sign Up</Button>
        <Button variant={'default'} className='cursor-pointer'>Login</Button>
    </div>
    </nav>
  )
}

export default Navbar
