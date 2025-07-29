import HomeIcon from "@/app/ui/home-icon";

interface NavItemProps {
  className?: string;
}

export default function NavItem({ className = "" }: NavItemProps) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="pt-[10px] pb-[10px]">
        <HomeIcon className="w-[20px] h-[20px] stroke-icon-default" />
      </div>
      <span className="customize-text-caption">Home</span>
    </div>
  );
}
