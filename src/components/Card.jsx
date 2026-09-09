export default function Card({
  title = "Nama Lengkap",
  desc,
  url,
  btnColor = "bg-emerald-500 hover:bg-emerald-600",
  onAboutClick,
}) {
  return (
    <div className="flex w-xs shrink-0 snap-center flex-col rounded-xl bg-white p-4 transition-all duration-300 hover:-translate-y-4 hover:shadow-lg/50">
      <div className="overflow-hidden rounded-2xl">
        <img
          className="rounded-2xl transition-transform duration-300 hover:scale-110"
          src={url}
          alt={title}
        />
      </div>

      <h1 className="mt-2.5 mb-1.5 text-xl font-medium">{title}</h1>

      <p className="mb-4 text-slate-700">
        {desc
          ? desc
          : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, suscipit."}
      </p>

      <button
        onClick={onAboutClick}
        className={`rounded-lg px-4 py-2 text-lg font-medium text-white transition-colors duration-300 hover:cursor-pointer ${btnColor}`}
      >
        About {title}
      </button>
    </div>
  );
}
