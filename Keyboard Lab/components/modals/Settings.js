"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Columns3Cog, Keyboard, Settings, TableOfContents } from "lucide-react";
import { useState } from "react";
import { Switch } from "../ui/switch";

export default function SettingsModal() {
  const [selectedTab, setSelectedTab] = useState("Typing Engine");
  const [countingMode, setCountingMode] = useState("wpm");
  const [backspaceBehavior, setBackspaceBehavior] = useState("Correct Errors");
  const [quickReset, setQuickReset] = useState(false);
  const [highlightNextKey, setHighlightNextKey] = useState(true)
  const [caretStyle, setCaretStyle] = useState('line')
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <Settings className="size-5" />
      </DialogTrigger>
      <DialogContent className="bg-[#e7e7e7] h-3/5 p-4 pl-2 pt-6 pb-9 flex">
        <div className="tabs pt-8">
          <div
            onClick={() => setSelectedTab("Typing Engine")}
            className={`flex items-center justify-start gap-2 mb-2 cursor-pointer hover:bg-gray-300 ${
              selectedTab == "Typing Engine" ? "bg-gray-300" : ""
            } py-1 px-2 transition-all rounded-md`}
          >
            <Keyboard className="text-gray-600 size-4" />
            <p className="text-[14px]">Typing Engine</p>
          </div>
          <div
            onClick={() => setSelectedTab("Content & Modes")}
            className={`flex items-center justify-start gap-2 mb-2 cursor-pointer hover:bg-gray-300 ${
              selectedTab == "Content & Modes" ? "bg-gray-300" : ""
            } py-1 px-2 transition-all rounded-md`}
          >
            <TableOfContents className="text-gray-600 size-4" />
            <p className="text-[14px]">Content & Modes</p>
          </div>
          <div
            onClick={() => setSelectedTab("Customization")}
            className={`flex items-center justify-start gap-2 mb-2 cursor-pointer hover:bg-gray-300 ${
              selectedTab == "Customization" ? "bg-gray-300" : ""
            } py-1 px-2 transition-all rounded-md`}
          >
            <Columns3Cog className="text-gray-600 size-4" />
            <p className="text-[14px]">Customization</p>
          </div>
        </div>
        <div className="grow">
          <DialogTitle className="mb-2">{selectedTab}</DialogTitle>
          {selectedTab == "Typing Engine" && (
            <div className="bg-white h-full rounded-md p-2">
              <div className="flex items-center justify-between my-2">
                <h3 className="font-semibold text-sm">Counting Mode</h3>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue placeholder={countingMode.toUpperCase()} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Mode</SelectLabel>
                      <SelectItem value="cpm">CPM</SelectItem>
                      <SelectItem value="wpm">WPM</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between my-2">
                <h3 className="font-semibold text-sm">Backspace Behavior</h3>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue
                      className="text-xs text-white"
                      placeholder="Choose"
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Backspace</SelectLabel>
                      <SelectItem value="Correct Errors">
                        Correct Errors
                      </SelectItem>
                      <SelectItem value="Keep Going">Keep Going</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between my-4">
                <h3 className="font-semibold text-sm">Quick Reset</h3>
                <Switch
                  checked={quickReset}
                  onCheckedChange={setQuickReset}
                  id="airplane-mode"
                />
              </div>
              <div className="flex items-center justify-between my-4">
                <h3 className="font-semibold text-sm">Highlight Next Key</h3>
                <Switch
                  checked={highlightNextKey}
                  onCheckedChange={setHighlightNextKey}
                  id="airplane-mode"
                />
              </div>
              <div className="flex items-center justify-between my-2">
                <h3 className="font-semibold text-sm">Caret Style</h3>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue
                      className="text-xs text-white"
                      placeholder={caretStyle.toUpperCase()}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Caret</SelectLabel>
                      <SelectItem value="Line">Line</SelectItem>
                      <SelectItem value="Block">Block</SelectItem>
                      <SelectItem value="Underline">Underline</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
