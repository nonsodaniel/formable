import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import { StatsCard } from "./StatsCard";
import { GetFormStats } from "@/actions/form";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";

interface StatsCardProps {
  data?: Awaited<ReturnType<typeof GetFormStats>>;
  loading: boolean;
}

const cards = (data: StatsCardProps["data"]) => [
  {
    title: "Total visits",
    icon: (
      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
        <LuView className="h-4 w-4 text-blue-600 dark:text-blue-400" />
      </div>
    ),
    helperText: "All time form visits",
    value: data?.visits.toLocaleString() ?? "",
    accent: "border-t-2 border-t-blue-500",
    delay: "0ms",
  },
  {
    title: "Total submissions",
    icon: (
      <div className="p-2 rounded-lg bg-violet-100 dark:bg-violet-900/30">
        <FaWpforms className="h-4 w-4 text-violet-600 dark:text-violet-400" />
      </div>
    ),
    helperText: "All time form submissions",
    value: data?.submissions.toLocaleString() ?? "",
    accent: "border-t-2 border-t-violet-500",
    delay: "75ms",
  },
  {
    title: "Submission rate",
    icon: (
      <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
        <HiCursorClick className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
      </div>
    ),
    helperText: "Visits that result in form submission",
    value: (data?.submissionRate.toLocaleString() ?? "") + "%",
    accent: "border-t-2 border-t-emerald-500",
    delay: "150ms",
  },
  {
    title: "Bounce rate",
    icon: (
      <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/30">
        <TbArrowBounce className="h-4 w-4 text-amber-600 dark:text-amber-400" />
      </div>
    ),
    helperText: "Visits that leave without interacting",
    value: (data?.bounceRate.toLocaleString() ?? "") + "%",
    accent: "border-t-2 border-t-amber-500",
    delay: "225ms",
  },
];

const StatsCards = ({ data, loading }: StatsCardProps) => {
  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {cards(data).map((card) => (
        <div
          key={card.title}
          className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500 fill-mode-both"
          style={{ animationDelay: card.delay }}
        >
          <StatsCard
            title={card.title}
            icon={card.icon}
            helperText={card.helperText}
            value={card.value}
            loading={loading}
            className={card.accent}
          />
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
