import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    console.log('📅 Received Strategy Session Booking:', data);
    return NextResponse.json({
      success: true,
      message: 'Strategy session booked successfully. We will reach out shortly.',
      data,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to process booking' }, { status: 400 });
  }
}
