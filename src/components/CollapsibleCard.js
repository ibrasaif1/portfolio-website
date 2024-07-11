'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from './ui/collapsible';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from './ui/card';
import { ChevronDownIcon } from 'lucide-react';

const CollapsibleCard = ({ company, role, description, skills = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState('0px');
  const contentRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight('0px');
    }
  }, [isOpen]);

  return (
    <div className="my-4">
      <Card className="cursor-pointer bg-sky-100">
        <div
          className="flex justify-between items-center"
          onClick={handleToggle}
        >
          <CardHeader>
            <CardTitle>{company}</CardTitle>
            <CardDescription>{role}</CardDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <span key={index} className="bg-white text-gray-800 text-xs font-semibold px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </CardHeader>
          <div className="p-4 transition-transform duration-300">
            <ChevronDownIcon
              className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </div>
        <div
          ref={contentRef}
          style={{ maxHeight: maxHeight }}
          className={`transition-max-height duration-300 ease-in-out overflow-hidden`}
        >
          <CardContent className="pb-4 text-base leading-loose text-gray-800">
            {description.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
            ))}
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default CollapsibleCard;
