import Fuse from "fuse.js";
import casesdata from "/data/case.json";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { query } = await request.json();
    const allCases = casesdata.cases;

    if (query.trim().length == 0) {
      return NextResponse.json({
        success: true,
        results: allCases,
        message: "You got it!",
      });
    }

    const lowercaseQuery = query.toLowerCase();
    const fuse = new Fuse(allCases, {
      keys: ["label", "title", "abstract", "author"],
      includeScore: true,
      isCaseSensitive: false,
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
