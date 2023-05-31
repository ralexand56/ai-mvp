import { LockOpenIcon } from "@heroicons/react/24/solid";

export default function Header() {
  return (
    <header className="flex items-center bg-slate-900 p-4 text-white  shadow-md">
      <LockOpenIcon className="mr-2 w-4 text-orange-200" /> MVP AI Manager
    </header>
  );
}
