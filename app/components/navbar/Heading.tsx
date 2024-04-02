"use client";

interface HeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ ...args }) => {
  return (
    <div className={args.center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{args.title}</div>
      <div className="font-light text-neutral-500 mt-2">{args.subtitle}</div>
    </div>
  );
};

export default Heading;
