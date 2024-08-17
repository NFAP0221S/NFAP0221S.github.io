import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { getBlocks } from '@/lib/notion';

interface CardProps {
  id: string
  title: string
  date: string
}

export default async function _Card({ id, title, date }: CardProps) {
  const blocks: any = await getBlocks(id);
  const text = blocks[1]?.paragraph?.rich_text[0]?.plain_text
  const shortText = text ? text.substring(0, 8) : '';
  const dateSlcie = date ? date.substring(0, 10) : '';

  // console.log('paragraph', blocks[1].created_time)
  return (
    <Card className='cursor-pointer'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="truncate">{dateSlcie}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{shortText}</p>
      </CardContent>
      <CardFooter>
        <p>test1111</p>
      </CardFooter>
    </Card>
  );
}
