"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { updatePost } from "@/api/posts.api";
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Edit3 } from 'lucide-react';
import { useState } from "react"
import { useRouter } from "next/navigation";


interface Report {
  _id: string;
  title: string;
  category: string;
  city: string;
  area: string;
  date: string;
  type: "lost" | "found";
  images: string[];
}

export default function EditItem({ report }: { report: Report }) {

  const router = useRouter()

  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState(report.title);
  const [city, setCity] = useState(report.city);
  const [area, setArea] = useState(report.area);
  const [date, setDate] = useState(report.date);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {

      const updatedData = {
        title,
        city,
        area,
        date,
      };

      console.log("DATA:", updatedData);

      await updatePost(report._id, updatedData);

      setOpen(false);
      router.refresh()
    } catch (error) {
      console.error("Update failed:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button variant="outline"><Edit3 /></Button>} />
      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleUpdate}>
          <DialogHeader>
            <DialogTitle>Edit item</DialogTitle>
            <DialogDescription>
              Make changes to your item here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="title">Item Name</Label>
              <Input
                id="title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="area">Area</Label>
              <Input
                id="area"
                name="area"
                value={area}
                onChange={(e) => setArea(e.target.value)} />
            </Field>
            <Field>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
