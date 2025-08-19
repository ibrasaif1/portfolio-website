'use client';

import { useState, useRef, useEffect } from 'react';
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

  // Priority order based on tech stack section
  const skillPriority = [
    'React.js', 'Node.js', 'Go', 'Terraform', 'CI/CD', 
    'Python', 'AWS', 'SQL', 'NoSQL', 'NLP',
    'JavaScript', 'Express', 'REST APIs'
  ];

  const getSkillColor = (skill) => {
    const colorMap = {
      'AWS': 'bg-orange-100 text-orange-800 border-orange-200',
      'Node.js': 'bg-green-100 text-green-800 border-green-200',
      'Go': 'bg-blue-100 text-blue-800 border-blue-200',
      'React.js': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'React': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'Terraform': 'bg-purple-100 text-purple-800 border-purple-200',
      'CI/CD': 'bg-gray-100 text-gray-800 border-gray-200',
      'Python': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'JavaScript': 'bg-amber-100 text-amber-800 border-amber-200',
      'SQL': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'NoSQL': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'NLP': 'bg-gradient-to-r from-blue-100 to-purple-100 text-purple-800 border-purple-300',
      'Express': 'bg-slate-100 text-slate-800 border-slate-200',
      'REST APIs': 'bg-teal-100 text-teal-800 border-teal-200'
    };
    return colorMap[skill] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const sortSkillsByPriority = (skills) => {
    return [...skills].sort((a, b) => {
      const priorityA = skillPriority.indexOf(a);
      const priorityB = skillPriority.indexOf(b);
      
      // If skill not in priority list, put it at the end
      const indexA = priorityA === -1 ? skillPriority.length : priorityA;
      const indexB = priorityB === -1 ? skillPriority.length : priorityB;
      
      return indexA - indexB;
    });
  };

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
      <Card className="cursor-pointer bg-white/80 backdrop-blur-lg border border-white/20 shadow-2xl">
        <div
          className="flex justify-between items-center"
          onClick={handleToggle}
        >
          <CardHeader>
            <CardTitle>{company}</CardTitle>
            <CardDescription>{role}</CardDescription>
            <div className="flex flex-wrap gap-2 mt-2">
              {sortSkillsByPriority(skills).map((skill, index) => (
                <span key={index} className={`${getSkillColor(skill)} text-xs font-medium px-2.5 py-1 rounded-full border`}>
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
          className={`transition-all duration-300 ease-in-out overflow-hidden`}
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
