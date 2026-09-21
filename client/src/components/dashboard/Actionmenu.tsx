"use client"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from 'lucide-react';

export default function ActionDropdownMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger render={<Button className="bg-white text-black hover:bg-gray-100"><MoreHorizontal
            /></Button>} />
            <DropdownMenuContent className="w-40" align="start">
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        Mark as Active
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Mark as Claimed
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Mark as Resolved
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        Mark as Rejected
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
