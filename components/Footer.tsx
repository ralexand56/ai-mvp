interface Props {}

export default function Footer({}: React.PropsWithChildren<Props>) {
  return (
    <footer className="flex items-center bg-slate-400 px-4 py-2 text-white text-xs shadow-md">
      2021 MVP AI Manager
    </footer>
  );
}
