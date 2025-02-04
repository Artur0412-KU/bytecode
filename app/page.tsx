import Main from "@/components/MainPage/Main/Main";
import Solutions from "@/components/MainPage/Solutions/Solutions";
import Map from "@/components/MainPage/Map/Map";


export default function Home() {
  return (
    <div className="min-h-screen">
        <Main/>
        <Solutions/>
        <Map/>
    </div>
  );
}
