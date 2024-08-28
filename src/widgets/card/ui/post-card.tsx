'use client'

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";
interface CardProps {
  id: string
  title: string
  date: string
  blocks: any
}

export const PostCard = ({ id, title, date, blocks }: CardProps) => {
  const text = blocks[1]?.paragraph?.rich_text[0]?.plain_text
  const shortText = text ? text.substring(0, 8) : '';
  const dateSlcie = date ? date.substring(0, 10) : '';

    return ( 
      <Card className="max-w-[450px]">
        <CardHeader className="flex gap-3">
          <Button
            radius="md" 
            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            size="sm"
            isIconOnly={true}
          >
            {"->"}
          </Button>
          <div className="flex flex-col">
          <p className="text-md line-clamp-1">{title}</p>
          <p className="text-small text-default-500">{dateSlcie}</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody className="min-h-[72px]">
          <p className="line-clamp-2">
            {text}
          </p>
        </CardBody>
        <Divider/>
        <CardFooter>
          {/* <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
          >
          Visit source code on GitHub.
          </Link> */}
        </CardFooter>
      </Card>
     );
}
