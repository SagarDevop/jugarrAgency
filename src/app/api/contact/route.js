import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const data = await req.json();
    console.log('📬 Received Contact Submission:', data);
    return NextResponse.json({
      success: true,
      message: 'Inquiry received. Sagar will contact you within 24 hours.',
      data,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to process inquiry' }, { status: 400 });
  }
}
