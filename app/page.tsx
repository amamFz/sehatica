import Homesection from "@/components/sections/Homesection/Homesection";
import Categorysection from "@/components/sections/Categorysection/Categorysection";
import Featuredsection from "@/components/sections/Featuredsection/Featuredsection";
import Shopsection from "@/components/sections/Shopsection/Shopsection";
import Comunitysection from "@/components/sections/Comunitysection/Comunitysection";

export default function Home() {
  return (
    <>
      <main>
        <Homesection />
        <Categorysection />
        <Featuredsection />
        <Shopsection />
        <Comunitysection />
      </main>
    </>
  );
}
