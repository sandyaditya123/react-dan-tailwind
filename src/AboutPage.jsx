function AboutPage({
  onBack,
  memberName,
  memberDesc,
  memberImage,
  accentColor,
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
      <img
        src={memberImage}
        alt={memberName}
        className="mb-4 h-36 w-36 rounded-full object-cover object-top transition-transform duration-300 hover:rotate-12"
      />
      <h1 className="text-3xl font-semibold text-slate-800">
        About {memberName}
      </h1>
      <p className="mt-2 max-w-lg text-center text-slate-600">{memberDesc}</p>
      <button
        onClick={onBack}
        className={`mt-4 mb-20 rounded-lg px-4 py-2 text-lg font-medium text-white transition-colors duration-300 hover:cursor-pointer ${accentColor}`}
      >
        Kembali
      </button>
    </div>
  );
}

export default AboutPage;
