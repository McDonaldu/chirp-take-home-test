"use client";

import { getRandomRecipe } from "@/services/recipe";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function RandomRecipe() {
  const [isOpen, setIsOpen] = useState(false);
  const queryClient = useQueryClient();
  const { isPending, data, isError, refetch } = useQuery({
    queryKey: ["random_recipe"],
    queryFn: () => getRandomRecipe(),
    enabled: false,
  });

  const handleButtonClick = () => {
    setIsOpen(true);
    queryClient.resetQueries({ queryKey: ["random_recipe"] });
    refetch();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button onClick={handleButtonClick}>Generate Random Recipe</Button>
      <DialogContent className="bg-slate-900">
        <DialogHeader>
          {isPending ? (
            <DialogTitle>Loading...</DialogTitle>
          ) : data ? (
            <>
              <DialogTitle>
                <h1 className="text-2xl font-bold">{data.strMeal}</h1>
              </DialogTitle>
              <DialogDescription className="text-white py-8 space-y-8">
                <Image
                  src={data.strMealThumb}
                  alt="Meal Image"
                  width={300}
                  height={300}
                  className="mx-auto"
                ></Image>
                <div className=" max-h-52 overflow-auto">
                  <h1 className="font-bold text-base">Instructions</h1>
                  <p className="text-sm">{data.strInstructions}</p>
                </div>
              </DialogDescription>
            </>
          ) : null}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
