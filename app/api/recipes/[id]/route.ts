import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php`,
      { params: { i: params.id } }
    );
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
