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
import { useEffect, useState } from "react";
const toNumOrZero = (value) => (value ? Number(value) : 0);
export function UserInfo() {
  const { info, setInfo } = useAppContext();
  const [username, setUsername] = useState("");
  const [year, setyear] = useState(0);
  const [month, setmonth] = useState(0);
  const [day, setday] = useState(0);
  const [isOpen, setIsOpen] = useState(Object.keys(info || {}).length == 0);
  const [isWarning, setIsWarning] = useState(false);
  // console.log(useAge(new Date("2008-08-21")));
  useEffect(() => {
    setUsername(info?.username || "");
    setyear(info?.dob?.year || 0);
    setmonth(info?.dob?.month || 0);
    setday(info?.dob?.day || 0);
  }, [info]);

  const isFormValid = () => {
    return username.trim() !== "" && year > 0 && month > 0 && day > 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      setIsWarning(false);
      const dob = { year, month, day };
      const userInfo = { username: username.trim(), dob };
      localStorage.setItem("userinfo", JSON.stringify(userInfo));
      setInfo(userInfo);
      setIsOpen(false);
    } else {
      setIsWarning(true);
    }
  };
  const handleCancel = () => {
    if (!username || !year || !month || !day) {
      setIsWarning(true);
    } else {
      setIsOpen(false);
    }
  };
  const getInitials = (fullName) => {
    if (
      !fullName ||
      typeof fullName !== "string" ||
      fullName.trim().length == 0
    ) {
      return "";
    }
    const nameParts = fullName
      .trim()
      .split(/\s+/)
      .filter((part) => part.length > 0);
    const initials = nameParts.map((part) => part.charAt(0));
    return initials.join("").toUpperCase();
  };
  // const [userAge, setUserAge] = useState("");
  // useEffect(() => {
  //   const age = calculateAge(
  //     new Date(
  //       `${info?.dob?.year || 0}-${info?.dob?.month || 0}-${
  //         info?.dob?.day || 0
  //       }`
  //     )
  //   );
  //   setUserAge(age);
  // }, [info]);
  // console.log(year);
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          <div className="bg-purple-500 text-white py-1 px-2 rounded-full">
            {getInitials(username)}
          </div>
          <div>
            <p>{username}</p>
            <p>Age: </p>
          </div>
        </Button>
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
              <Label htmlFor="year">Date of Birth (DD / MM / YYYY)</Label>
              <div className="flex gap-2">
                <Input
                  className={"border border-gray-400"}
                  type="number"
                  id="day"
                  name="day"
                  value={day}
                  onChange={(e) => setday(toNumOrZero(e.target.value))}
                />
                <Input
                  className={"border border-gray-400"}
                  type="number"
                  id="month"
                  name="month"
                  value={month}
                  onChange={(e) => setmonth(toNumOrZero(e.target.value))}
                />
                <Input
                  className={"border border-gray-400"}
                  type="number"
                  id="year"
                  name="year"
                  value={year}
                  onChange={(e) => setyear(toNumOrZero(e.target.value))}
                />
              </div>
            </div>
          </div>
          {isWarning && (
            <p className="text-red-500 text-xs my-0">Please fill all fields</p>
          )}
          <DialogFooter className="mt-2">
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
