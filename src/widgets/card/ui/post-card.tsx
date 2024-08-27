'use client'

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
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
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
          />
          <div className="flex flex-col">
          <p className="text-md">{title}</p>
          <p className="text-small text-default-500">{dateSlcie}</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody>
          {/* <p>Make beautiful websites regardless of your design experience.</p> */}
          {/* <p>{shortText}</p> */}
          <p>{text}</p>
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
