import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/random.php"
    );
    console.log("data", data);
    return NextResponse.json({
      success: true,
      data: data.meals[0],
    });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return new Response(error.message);
    } else {
      return new Response("Error in getting random recipe");
    }
  }
}
