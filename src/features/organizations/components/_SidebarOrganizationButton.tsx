"use client"

import { SidebarMenuButton, useSidebar } from "@/components/ui/sidebar"
import { DropdownMenu , DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger} from "@/components/ui/dropdown-menu"
import { ChevronsUpDown, SettingsIcon, UserIcon, Link, LogOutIcon } from "lucide-react"
import { Avatar } from "@radix-ui/react-avatar"
import { AvatarFallback } from "@/components/ui/avatar"
import { SignOutButton } from "@/services/clerk/components/AuthButtons"
import { useClerk } from "@clerk/nextjs"



type User ={
    email:string
}

type Organization ={
    name: string
    imageUrl: string | null
}

export function SidebarOrganizationButtonClient({ user, organization }: { user: User, organization: Organization }) {
    const { isMobile , setOpenMobile }= useSidebar()
    const { openUserProfile } = useClerk()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                   size="lg" 
                   className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                 <OrganizationInfo user={user} organization={organization} />
                 <ChevronsUpDown className="ml-auto group-data-[state=collapsed]:hidden" />
                </SidebarMenuButton>

            </DropdownMenuTrigger>
            <DropdownMenuContent
              sideOffset={4}
              align="end"
              side={isMobile ? "bottom" : "right"}
              className="min-w-64 max-w-80"
            
            >
                <DropdownMenuLabel className="font-normal p-1">
                    <OrganizationInfo user={user} organization={organization} />
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem  
                   onClick={() => {
                    openUserProfile()
                    setOpenMobile(false)
                   }}
                >

                    <UserIcon className="mr-1" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/user-settings/notifications">
                    <SettingsIcon className="mr-1" /> Settings
                    
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <SignOutButton>
                    <DropdownMenuItem>
                        <LogOutIcon className="mr-1" /> Log Out
                    </DropdownMenuItem>
                </SignOutButton>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function OrganizationInfo({ organization, user}: {user: User, organization: Organization}) {
    const nameInitials = organization.name
      .split("")
      .slice(0, 2)
      .map(str => str[0])
      .join("")

    return (
        <div className="flex items-center gap-2 overflow-hidden">
            <Avatar className="rounded-lg size-8">
                <AvatarFallback className="uppercase bg-primary text-primary-foreground">
                    {nameInitials}
                </AvatarFallback>
            </Avatar>
            <div className="flex flex-col flex-1 min-w-0 leading-tight group-data-[state=collapsed]:hidden">
                <span className="truncate text-sm font-semibold">{organization.name}</span>
                <span className="truncate text-xs">{user.email}</span>
            </div>
        </div>
    )
}