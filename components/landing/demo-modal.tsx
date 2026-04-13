"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "@/contexts/language-context"

export function DemoModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const t = useTranslation()

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t.demoModal.title}</DialogTitle>
          <DialogDescription>
            {t.demoModal.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">{t.demoModal.fullName}</Label>
            <Input id="name" placeholder={t.demoModal.fullNamePlaceholder} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">{t.demoModal.workEmail}</Label>
            <Input id="email" type="email" placeholder={t.demoModal.emailPlaceholder} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="fleet-size">{t.demoModal.fleetSize}</Label>
            <Input id="fleet-size" type="number" placeholder={t.demoModal.fleetSizePlaceholder} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">{t.demoModal.message}</Label>
            <Textarea id="message" placeholder={t.demoModal.messagePlaceholder} />
          </div>
        </div>
        <div className="flex justify-end pt-2">
          <Button onClick={() => setOpen(false)} className="bg-primary text-primary-foreground font-semibold">
            {t.demoModal.submit}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
