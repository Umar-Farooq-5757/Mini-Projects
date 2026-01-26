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
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Columns3Cog,
  Info,
  Keyboard,
  Moon,
  Settings,
  Sun,
  TableOfContents,
} from "lucide-react";
import { useState } from "react";
import { Switch } from "../ui/switch";
import { useAppContext } from "@/contexts/AppContext";

export default function SettingsModal() {
  const [selectedTab, setSelectedTab] = useState("Typing Engine");
  const {
    theme,
    countingMode,
    setCountingMode,
    backspaceBehavior,
    setBackspaceBehavior,
    quickReset,
    setQuickReset,
    caretStyle,
    setCaretStyle,
    caretAnimation,
    setCaretAnimation,
    punctuationAndNumbers,
    setPunctuationAndNumbers,
    quoteMode,
    setQuoteMode,
    programmingSyntaxMode,
    setProgrammingSyntaxMode,
    blindMode,
    setBlindMode,
    suddenDeathMode,
    setSuddenDeathMode,
    zenMode,
    setZenMode,
    font,
    setFont,
    soundEffects,
    setSoundEffects,
    highlightNextKey,
    setHighlightNextKey,
  } = useAppContext();
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer">
        <Settings className="size-5" />
      </DialogTrigger>
      <DialogContent className="bg-[#e7e7e7] h-3/5 p-4 pl-2 pt-6 pb-9 flex justify-start">
        <div className="tabs w-[30%] pt-8">
          <div
            onClick={() => setSelectedTab("Typing Engine")}
            className={`flex items-center justify-start gap-2 mb-2 cursor-pointer hover:bg-gray-300 ${
              selectedTab == "Typing Engine" ? "bg-gray-300" : ""
            } py-1 px-2 transition-all rounded-md`}
          >
            <Keyboard className="text-gray-600 size-4" />
            <p className="text-[13px]">Typing Engine</p>
          </div>
          <div
            onClick={() => setSelectedTab("Content & Modes")}
            className={`flex items-center justify-start gap-2 mb-2 cursor-pointer hover:bg-gray-300 ${
              selectedTab == "Content & Modes" ? "bg-gray-300" : ""
            } py-1 px-2 transition-all rounded-md`}
          >
            <TableOfContents className="text-gray-600 size-4" />
            <p className="text-[13px]">Content & Modes</p>
          </div>
          <div
            onClick={() => setSelectedTab("Customization")}
            className={`flex items-center justify-start gap-2 mb-2 cursor-pointer hover:bg-gray-300 ${
              selectedTab == "Customization" ? "bg-gray-300" : ""
            } py-1 px-2 transition-all rounded-md`}
          >
            <Columns3Cog className="text-gray-600 size-4" />
            <p className="text-[13px]">Customization</p>
          </div>
        </div>
        <div className="grow">
          <DialogTitle className="mb-2">{selectedTab}</DialogTitle>
          {selectedTab == "Typing Engine" && (
            <div className="bg-white h-full rounded-md p-2 pl-3 flex flex-col">
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
                      placeholder={backspaceBehavior}
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
                  id=""
                />
              </div>
              <div className="flex items-center justify-between my-2">
                <h3 className="font-semibold text-sm">Caret Style</h3>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue
                      className="text-xs text-white"
                      placeholder={
                        caretStyle.charAt(0).toUpperCase() + caretStyle.slice(1)
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Caret</SelectLabel>
                      <SelectItem onClick={()=>setCaretStyle('Line')} value="Line">Line</SelectItem>
                      <SelectItem onClick={()=>setCaretStyle('Block')} value="Block">Block</SelectItem>
                      <SelectItem onClick={()=>setCaretStyle('Underline')} value="Underline">Underline</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between my-2">
                <h3 className="font-semibold text-sm">Caret Animation</h3>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue
                      className="text-xs text-white"
                      placeholder={
                        caretAnimation.charAt(0).toUpperCase() +
                        caretAnimation.slice(1)
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Caret</SelectLabel>
                      <SelectItem value="Smooth">Smooth</SelectItem>
                      <SelectItem value="Blinking">Blinking</SelectItem>
                      <SelectItem value="Solid">Solid</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          {selectedTab == "Content & Modes" && (
            <div className="bg-white h-full rounded-md p-2 pl-3 flex flex-col">
              <div className="flex items-center justify-between my-4">
                <h3 className="flex items-center gap-2 font-semibold text-sm">
                  Punctuation & Numbers{" "}
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="size-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Toggle special characters and numbers</p>
                    </TooltipContent>
                  </Tooltip>
                </h3>
                <Switch
                  checked={punctuationAndNumbers}
                  onCheckedChange={setPunctuationAndNumbers}
                  id=""
                />
              </div>
              <div className="flex items-center justify-between my-4">
                <h3 className="flex items-center gap-2 font-semibold text-sm">
                  Quote Mode
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="size-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Type qoutes from famous persons</p>
                    </TooltipContent>
                  </Tooltip>
                </h3>
                <Switch
                  checked={quoteMode}
                  onCheckedChange={setQuoteMode}
                  id=""
                />
              </div>
              <div className="flex items-center justify-between my-4">
                <h3 className="flex items-center gap-2 font-semibold text-sm">
                  Programming Syntax Mode{" "}
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="size-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Practice typing code snippets</p>
                    </TooltipContent>
                  </Tooltip>
                </h3>
                <Switch
                  checked={programmingSyntaxMode}
                  onCheckedChange={setProgrammingSyntaxMode}
                  id=""
                />
              </div>
              <div className="flex items-center justify-between my-4">
                <h3 className="flex items-center gap-2 font-semibold text-sm">
                  Blind Mode
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="size-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Hide the text as it is typed</p>
                    </TooltipContent>
                  </Tooltip>
                </h3>
                <Switch
                  checked={blindMode}
                  onCheckedChange={setBlindMode}
                  id=""
                />
              </div>
              <div className="flex items-center justify-between my-4">
                <h3 className="flex items-center gap-2 font-semibold text-sm">
                  Sudden Death Mode
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="size-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        The test ends immediately upon making a single mistake.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </h3>
                <Switch
                  checked={suddenDeathMode}
                  onCheckedChange={setSuddenDeathMode}
                  id=""
                />
              </div>
              <div className="flex items-center justify-between my-4">
                <h3 className="flex items-center gap-2 font-semibold text-sm">
                  Zen Mode
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="size-4 text-gray-500" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        UI-free experience that removes all timers and stats
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </h3>
                <Switch checked={zenMode} onCheckedChange={setZenMode} id="" />
              </div>
            </div>
          )}
          {selectedTab == "Customization" && (
            <div className="bg-white h-full rounded-md p-2 pl-3 flex flex-col">
              <div className="flex items-center justify-between my-2">
                <h3 className="font-semibold text-sm">Theme</h3>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue
                      placeholder={
                        theme.charAt(0).toUpperCase() + theme.slice(1)
                      }
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Theme</SelectLabel>
                      <SelectItem value="dark">
                        <Moon /> Dark
                      </SelectItem>
                      <SelectItem value="light">
                        <Sun /> Light
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between my-2">
                <h3 className="font-semibold text-sm">Font</h3>
                <Select>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue
                      placeholder={font.charAt(0).toUpperCase() + font.slice(1)}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Font</SelectLabel>
                      <SelectItem value="fira code">Fira Code</SelectItem>
                      <SelectItem value="monospace">Monospace</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between my-4">
                <h3 className="flex items-center gap-2 font-semibold text-sm">
                  Sound Effects
                </h3>
                <Switch
                  checked={soundEffects}
                  onCheckedChange={setSoundEffects}
                  id=""
                />
              </div>
              <div className="flex items-center justify-between my-4">
                <h3 className="flex items-center gap-2 font-semibold text-sm">
                  Highlight Next Key
                </h3>
                <Switch
                  checked={highlightNextKey}
                  onCheckedChange={setHighlightNextKey}
                  id=""
                />
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
