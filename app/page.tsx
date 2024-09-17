import GenerateRecipe from "@/components/pages/home/GenerateRecipe";
import RandomRecipe from "@/components/pages/home/RandomRecipe";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10 md:p-20">
      <h1>Random Recipe Selector</h1>
      <GenerateRecipe />
    </div>
  );
}
