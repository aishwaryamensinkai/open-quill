// import React from "react";

export default function HomePage() {
  return (
    <main className="flex-1  p-4 flex flex-col gap-3 text-center sm:gap-4  justify-center pb-20">
      <h1 className="font-semibold text-5xl sm:text-6xl md:text-7xl">
        Open<span className="text-blue-400 bold">Quill</span>
      </h1>
      <h3 className="font-medium md:text-lg">
        Record <span className="text-blue-400">&rarr;</span> Transcribe{" "}
        <span className="text-blue-400">&rarr;</span> Translate
      </h3>
    </main>
  );
}
