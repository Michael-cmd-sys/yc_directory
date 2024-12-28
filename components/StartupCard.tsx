import React from 'react'
import { formateDate } from '../lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

const StartupCard = ({ post } : { post: StartupCardType }) => {
  const {
    views,
    category,
    title,
    _createdAt,
    img, 
    author : {_id: authorID, name},
    _id,
    description
    } = post;

  return (
    <li className="startup-card group">
        <div className="flex-between">
            <p className="startup-card_date">
                {formateDate(_createdAt)}
            </p>
            <div className="flex gap-1.5">
                <EyeIcon className="size-6 text-primary"/>
                <span className="text-16-medium">{ views }</span>
            </div>
        </div>

        <div className="flex-between gap-5 mt-5">
            <div className="flex-1">
                <Link href={`/user/${authorID}`}>
                <p className="text-16-medium line-clamp-1">
                  {name}
                </p>
                </Link>
                <Link href={`/startup/${_id}`}>
                  <p className="text-26-semibold line-clamp-1">
                    {title}
                  </p>
                </Link>
            </div>
            <Link href={`/user/{authorID}`}>
              <Image
                src="https://placehold.co/48x48" 
                alt="placeholder"
                height={48}
                width={48}
                className="rounded-full"
                />
            </Link>
        </div>

        <Link href={`/startup/{_id}`}>
          <p className="startup-card_desc">
            {description}
          </p>

          <img 
            src={img}
            alt="placeholder"
            className="startup-card_img"
            />
        </Link>

        <div className="mt-5 flex-between gap-3">
          <Link href={`/?query=${category.toLowerCase()}`}>
            <p className="text-16-medium">
              {category}
            </p> 
          </Link>

          <Button className="startup-card_btn" asChild>
            <Link href={`/startup/${_id}`}>
              Details
            </Link>
          </Button>
        </div>
    </li>
  ) 
}

export default StartupCard