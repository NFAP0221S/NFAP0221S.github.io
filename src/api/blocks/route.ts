import { getBlocks } from '@/lib/notion';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const blockId = searchParams.get('id');
  console.log('searchParamssearchParamssearchParams', searchParams)
  if (!blockId) {
    return NextResponse.json({ error: 'Missing blockId parameter' }, { status: 400 });
  }

  try {
    const blocks = await getBlocks(blockId);
    return NextResponse.json(blocks, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    return NextResponse.error();
  }
}
