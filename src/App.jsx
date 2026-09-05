import { useState } from "react";
import AboutPage from "./AboutPage";

function Heading({ firstName, lastName }) {
  return (
    <h1 className="text-center text-2xl font-bold tracking-widest">
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

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedMember, setSelectedMember] = useState("");

  if (currentPage === "about") {
    return (
      <AboutPage
        memberName={selectedMember.name}
        memberDesc={selectedMember.desc}
        memberImage={selectedMember.image}
        accentColor={selectedMember.color}
        onBack={() => setCurrentPage("home")}
      />
    );
  }

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
          onAboutClick={() => {
            setSelectedMember({
              name: "Kim Yooyeon",
              desc: "Kim Yooyeon adalah penyanyi asal Korea Selatan yang lahir pada 2 Maret 2001. Ia dikenal setelah mengikuti acara survival My Teenage Girl dan kini aktif sebagai anggota tripleS (S5).",
              image: new URL("./assets/yooyeon.jpg", import.meta.url).href,
              color: "bg-emerald-500 hover:bg-emerald-600",
            });
            setCurrentPage("about");
          }}
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
          onAboutClick={() => {
            setSelectedMember({
              name: "Jeong Hayeon",
              desc: "Jeong Hayeon adalah penyanyi berbakat asal Korea Selatan di bawah naungan agensi Modhaus dan merupakan anggota resmi dari grup idola tripleS (S19).",
              image: new URL("./assets/hayeon.jpg", import.meta.url).href,
              color: "bg-rose-500 hover:bg-rose-600",
            });
            setCurrentPage("about");
          }}
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
          onAboutClick={() => {
            setSelectedMember({
              name: "Kwak Yeonji",
              desc: "Kwak Yeonji lahir pada 8 Januari 2008. Ia merupakan salah satu maknae (anggota termuda) dari grup idola tripleS (S12) di bawah agensi Modhaus.",
              image: new URL("./assets/yeonji.jpg", import.meta.url).href,
              color: "bg-indigo-500 hover:bg-indigo-600",
            });
            setCurrentPage("about");
          }}
        />
      </div>
    </div>
  );
}

export default App;
