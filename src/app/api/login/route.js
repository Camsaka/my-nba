// Notice from where NextResponse is imported:
import { NextResponse, NextRequest } from "next/server";

// Notice the function definition:
export async function POST(request) {
   const res = await request.json();
   if (res.email == "camille.gaut@sfr.fr" && res.password == "azerty") {
      return NextResponse.json({
         username: "Camille",
         avatarUrl:
            "https://hoopshype.com/wp-content/uploads/sites/92/2023/06/i_fb_02_c2_lebron-james.png",
      }, {status : 200});
   }
   return NextResponse.json({message : "ERROR"}, {status : 401});
}
