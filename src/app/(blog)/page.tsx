import { MainPage } from "@/pages/main-page";

export default function Home() {
  
  return (
    <main className="p-4 bg-white rounded-lg shadow-md flex-1" style={{ paddingBottom: '4rem' }}>
      {/* {children} */}
      <MainPage/>
    </main>
    // <div>
    //  <MainPage/>
    // </div>
  );
}
