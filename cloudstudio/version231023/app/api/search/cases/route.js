import Fuse from "fuse.js";
import casesdata from "/data/case.json";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { query } = await request.json();
    const allCases = casesdata.cases;

    const lowercaseQuery = query.toLowerCase();
    const fuse = new Fuse(allCases, {
      keys: ["label", "title", "abstract", "author"],
      includeScore: true,
      threshold: 0.2,
    });

    const searchResults = fuse.search(lowercaseQuery);

    return NextResponse.json({
      success: true,
      results: searchResults.map((result) => result.item),
      message: "You got it!",
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error",
      error,
    });
  }
}
