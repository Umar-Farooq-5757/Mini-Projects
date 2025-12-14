"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAppContext } from "@/contexts/AppContext";
import calculateAge from "@/utils/calculateAge";
import { useState } from "react";
const toNumOrZero = (value) => (value ? Number(value) : 0);
export function UserInfo() {
  const { info, setInfo } = useAppContext();
  const [username, setUsername] = useState("");
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [isOpen, setIsOpen] = useState(Object.keys(info || {}).length == 0);
  const [isWarning, setIsWarning] = useState(false);
  // console.log(useAge(new Date("2008-08-21")));
  const isFormValid = () => {
    return username.trim() !== "" && years > 0 && months > 0 && days > 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setIsWarning(false);
      const dob = calculateAge(new Date(`${years}-${months}-${days}`));
      const userInfo = { username: username.trim(), dob };
      localStorage.setItem("userinfo", JSON.stringify(userInfo));
      setInfo(userInfo);
      setIsOpen(false);
    } else {
      setIsWarning(true);
    }
  };
  const handleCancel = () => {
    if (!username || !years || !months || !days) {
      setIsWarning(true);
    } else {
      setIsOpen(false);
    }
  };

  console.log(info?.username);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="username">Username</Label>
              <Input
                className={"border border-gray-400"}
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="year">Date of Birth (YYYY / MM / DD)</Label>
              <div className="flex gap-2">
                <Input
                  className={"border border-gray-400"}
                  type="number"
                  id="day"
                  name="day"
                  value={days}
                  onChange={(e) => setDays(toNumOrZero(e.target.value))}
                />
                <Input
                  className={"border border-gray-400"}
                  type="number"
                  id="month"
                  name="month"
                  value={months}
                  onChange={(e) => setMonths(toNumOrZero(e.target.value))}
                />
                <Input
                  className={"border border-gray-400"}
                  type="number"
                  id="year"
                  name="year"
                  value={years}
                  onChange={(e) => setYears(toNumOrZero(e.target.value))}
                />
              </div>
            </div>
          </div>
          {isWarning && (
            <p className="text-red-500 text-xs my-0">Please fill all fields</p>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button onClick={handleCancel} variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button
              className={"bg-purple-500 hover:bg-purple-600 cursor-pointer"}
              type="submit"
            >
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
