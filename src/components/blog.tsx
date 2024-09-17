import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, ClockIcon, HashIcon } from "lucide-react";

// Sample blog data (you would typically fetch this from an API)
const blogs = [
  {
    title: "Get Started with React Native: What and How",
    excerpt:
      "React Native is an open-source mobile application development framework created by Facebook (now Meta). It allows developers to use React along with native platform capabilities to build mobile applications.",
    date: "May 21, 2023",
    readTime: "4 min read",
    tags: ["React Native", "Mobile Development"],
    url: "https://amankch.hashnode.dev/get-started-with-react-native-what-and-how",
  },
  // Add more blog posts here
];

export default function BlogPage() {
  return (
    // <div className="min-h-screen bg-[#05050a] text-[#fcfdff]">
    // <div className="container mx-auto py-12">
    //   <h1 className="text-3xl font-bold mb-8">My Blog Posts</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative w-full h-48">
            <Image
              src="/images/react_logo_icon.png?height=192&width=384"
              alt="React Native Logo"
              //   height={192}
              //   width={384}
              layout="fill"
              objectFit="contain"
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">
              <Link href={blog.url} target="_blank" className="hover:underline">
                {blog.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-400 mb-4">{blog.excerpt}</p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <CalendarIcon className="mr-1 h-4 w-4" />
                {blog.date}
              </span>
              <span className="flex items-center">
                <ClockIcon className="mr-1 h-4 w-4" />
                {blog.readTime}
              </span>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, tagIndex) => (
                <Badge
                  key={tagIndex}
                  variant={"outline"}
                  className="px-2 py-1 rounded-full text-xs flex items-center"
                >
                  <HashIcon className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
    // </div>
    // </div>
  );
}
