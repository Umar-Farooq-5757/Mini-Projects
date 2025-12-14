"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Columns3Cog, Keyboard, Settings, TableOfContents } from "lucide-react";
import { useState } from "react";

export default function SettingsModal() {
  const [selectedTab, setSelectedTab] = useState("Typing Engine");
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <Settings />
      </DialogTrigger>
      <DialogContent className="bg-[#e7e7e7] h-3/5 p-4 pl-2 pt-6 pb-9 flex">
        <div className="tabs pt-8">
          <div onClick={()=>setSelectedTab('Typing Engine')} className={`flex items-center justify-start gap-2 mb-2 cursor-pointer hover:bg-gray-300 ${selectedTab=="Typing Engine"?'bg-gray-300':''} py-1 px-2 transition-all rounded-md`}>
            <Keyboard className="text-gray-600 size-4" />
            <p className="text-[14px]">Typing Engine</p>
          </div>
          <div onClick={()=>setSelectedTab('Content & Modes')} className={`flex items-center justify-start gap-2 mb-2 cursor-pointer hover:bg-gray-300 ${selectedTab=="Content & Modes"?'bg-gray-300':''} py-1 px-2 transition-all rounded-md`}>
            <TableOfContents className="text-gray-600 size-4" />
            <p className="text-[14px]">Content & Modes</p>
          </div>
          <div onClick={()=>setSelectedTab('Customization')} className={`flex items-center justify-start gap-2 mb-2 cursor-pointer hover:bg-gray-300 ${selectedTab=="Customization"?'bg-gray-300':''} py-1 px-2 transition-all rounded-md`}>
            <Columns3Cog className="text-gray-600 size-4" />
            <p className="text-[14px]">Customization</p>
          </div>
        </div>
        <div className="grow">
          <DialogTitle className="mb-2">{selectedTab}</DialogTitle>
          <div className="bg-white h-full rounded-md p-2">lorem50</div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
