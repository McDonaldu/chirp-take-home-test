"use client";
import { Input } from "@/components/ui/input";
import RandomRecipe from "./RandomRecipe";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { filterRecipe } from "@/services/recipe";
import Image from "next/image";
import Recipe from "./Recipe";
export default function GenerateRecipe() {
  const [inputValue, setInputValue] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  const { isPending, data, isError, refetch } = useQuery({
    queryKey: ["filter_recipe"],
    queryFn: () => filterRecipe(inputValue),
    enabled: false,
  });

  return (
    <div className="space-y-2">
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div className="flex gap-4 flex-wrap">
        <Button onClick={() => refetch()}>Filter Recipes</Button>
        <RandomRecipe />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 justify-center items-center">
        {!isPending && data && data?.length > 0
          ? data?.map((recipe) => (
              <div key={recipe.idMeal}>
                <h1>{recipe.strMeal}</h1>
                <Recipe image={recipe.strMealThumb} id={recipe.idMeal} />
              </div>
            ))
          : data && data?.length === 0 && <h1>No Recipes Found</h1>}
      </div>
    </div>
  );
}
