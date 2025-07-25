'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn as clsx } from '@/lib/utils'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

export function HeaderLink({ href = '', className, children, ...props }: Props) {
  const pathname = usePathname()
  const subpath = pathname?.match(/[^\/]+/g)
  const isActive = href === pathname || href === `/${subpath?.[0]}`

  return (
    <Link
      href={href}
      className={clsx(
        'hover:text-black dark:hover:text-white',
        'hover:font-medium hover:cursor-pointer transition-all duration-100 ease-in-out',
        isActive
          ? 'text-black dark:text-white font-medium'
          : 'text-gray-400 dark:text-gray-500 font-medium',
        className
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
