import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';
import mongoose from 'mongoose';

export async function GET() {
  const conn = await connectDB();
  const isMongoConnected = conn && mongoose.connection.readyState === 1;

  return NextResponse.json({
    status: 'online',
    database: isMongoConnected ? 'MongoDB (Connected)' : 'Disk Database (Ready for MongoDB Atlas URI)',
    mongoConnected: !!isMongoConnected,
    timestamp: new Date().toISOString(),
  });
}
