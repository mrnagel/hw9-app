import Image from "next/image";
import Counter from "./count"

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Matt Nagel's First Next.js
          </h1>
          <div>
            <Counter countBy={1}/>
            <Counter countBy={2}/>
          </div>
          <hr style={{ width: "90%", borderColor: 'cyan', borderWidth: '2px', margin: "2px" }}/>
          <div>

          </div>
        
        </div>
      </main>
    </div>
  );
}
