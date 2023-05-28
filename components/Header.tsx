interface Props {}

export default function Header({}: React.PropsWithChildren<Props>) {
  return (
    <header className="flex items-center bg-slate-400 p-4 text-white shadow-md">
      MVP AI Manager
    </header>
  );
}
