import { AtSymbolIcon } from "@heroicons/react/24/solid";

interface Props {}

export default function Footer({}: React.PropsWithChildren<Props>) {
  return (
    <footer className="flex items-center justify-end bg-slate-900 px-4 py-2 text-xs text-white shadow-md">
      <AtSymbolIcon className="mr-1 w-3 text-orange-200" /> 2021 MVP AI Manager
    </footer>
  );
}
