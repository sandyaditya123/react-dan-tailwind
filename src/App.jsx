function Heading({ firstName, lastName }) {
  return (
    <h1 className="text-center text-2xl font-bold">
      {firstName}
      <span className="text-indigo-500">{lastName}</span>
    </h1>
  );
}

function Card({
  title = "Nama Lengkap",
  desc,
  url,
  btnColor = "bg-emerald-500 hover:bg-emerald-600",
  link = "#",
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
        onClick={() => window.open(link, "_blank")}
        className={`rounded-lg px-4 py-2 text-lg font-medium text-white transition-colors duration-300 hover:cursor-pointer ${btnColor}`}
      >
        About {title}
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="grid w-full snap-x snap-mandatory grid-cols-[repeat(3,auto)] justify-start gap-x-6 gap-y-4 overflow-x-auto px-6 md:justify-center">
        <Heading firstName={"김"} lastName={"유연"} />
        <Heading firstName={"정"} lastName={"하연"} />
        <Heading firstName={"곽"} lastName={"연지"} />
        <Card
          title={"Kim Yooyeon"}
          desc={
            "Kim Yooyeon adalah seorang penyanyi Korea Selatan dibawah naungan agensi Modhaus."
          }
          url={
            "https://i.pinimg.com/736x/d2/21/b9/d221b90144ddec371295d71b540ece5c.jpg"
          }
          link="https://kprofiles.com/kim-yoo-yeon-my-teenage-girl-profile-and-facts/"
        />

        <Card
          title={"Jeong Hayeon"}
          desc={
            "Jeong Hayeon adalah seorang penyanyi Korea Selatan dibawah naungan agensi Modhaus."
          }
          url={
            "https://i.pinimg.com/736x/57/12/98/571298b9af46dda103deca2b00892c7a.jpg"
          }
          btnColor="bg-rose-500 hover:bg-rose-600"
          link="https://kprofiles.com/jeong-hayeon-triples-profile-and-facts/"
        />

        <Card
          title={"Kwak Yeonji"}
          desc={
            "Kwak Yeonji adalah seorang penyanyi Korea Selatan dibawah naungan agensi Modhaus."
          }
          url={
            "https://i.pinimg.com/1200x/7c/d8/a5/7cd8a5e33199ec358996c88a0b2e731b.jpg"
          }
          btnColor="bg-indigo-500 hover:bg-indigo-600"
          link="https://kprofiles.com/kwak-yeonji-triples-profile-and-facts/"
        />
      </div>
    </div>
  );
}

export default App;
