"use client"
import { deletePost } from "@/api/posts.api";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash } from 'lucide-react';
import { useRouter } from "next/navigation";

interface DeleteModalProps {
  id: string;
}


export default function DeleteModal({ id }: DeleteModalProps) {

  const router = useRouter()

  const handleDelete = async (id: string) => {
    try {
      await deletePost(id)
      router.refresh()
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button className="text-red-500 bg-white hover:bg-gray-100"><Trash/></Button>} />
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            item from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="danger" onClick={() => handleDelete(id)}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
