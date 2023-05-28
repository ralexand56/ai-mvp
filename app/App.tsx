interface Props {}

export default function App({}: React.PropsWithChildren<Props>) {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
      {Array.from({ length: 10 }, (_, i) => i).map((i) => (
        <div
          key={i}
          className={`flex items-center justify-center rounded-md bg-slate-500 text-slate-300 shadow-md ${
            i === 0 || i === 9 ? "col-span-2" : ""
          }`}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}
