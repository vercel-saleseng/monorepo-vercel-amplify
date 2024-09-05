'use client'

import * as React from "react"
import Link from "next/link"
import { Badge } from "@repo/ui/components/ui/badge"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@repo/ui/components/ui/navigation-menu"

export default function NavHeader(props) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex-1 flex h-32 items-center justify-between p-4">
                <div className="flex items-center space-x-4">
                    <a href="/" className="flex items-center gap-2">
                        <MountainIcon className="h-6 w-6 flex items-center" />
                        <span className="text-lg font-semibold">Zeit</span>
                    </a>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/docs" className={navigationMenuTriggerStyle()}>
                                    Docs
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink href="/dashboard" className={navigationMenuTriggerStyle()}>
                                    Dashboard
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex items-center space-x-2 text-center">
                    <Badge variant="outline" className="text-primary">
                        Page on {props.deployment}
                    </Badge>
                </div>
            </div>
        </header>
    )
}

function MountainIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}