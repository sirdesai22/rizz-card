import { NextRequest, NextResponse } from "next/server"

let studentData = {}

// GET handler
export async function GET() {
        return NextResponse.json(studentData, { status: 200 })
}

// POST handler
export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const encodedUsername = encodeURIComponent(body.username)
        const encodedPassword = encodeURIComponent(body.password)

        const response = await fetch(`http://pesubackend-production.up.railway.app/api/pesu-data?username=${encodedUsername}&password=${encodedPassword}`);

        const data = await response.json();

        if (!data || data.error) {
            return NextResponse.json(
                { error: "Invalid credentials or server error" },
                { status: 401 }
            )
        }
        studentData = data;
        console.log(data);
        return NextResponse.json(data, { status: 200 })
    } catch (error) {
        return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 }
        )
    }
}