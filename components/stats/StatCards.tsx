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

const delays = ["0ms", "75ms", "150ms", "225ms"];

const StatsCards = (props: StatsCardProps) => {
  const { data, loading } = props;

  const cards = [
    {
      title: "Total visits",
      icon: <LuView className="text-muted-foreground" />,
      helperText: "All time form visits",
      value: data?.visits.toLocaleString() || "",
    },
    {
      title: "Total submissions",
      icon: <FaWpforms className="text-muted-foreground" />,
      helperText: "All time form submissions",
      value: data?.submissions.toLocaleString() || "",
    },
    {
      title: "Submission rate",
      icon: <HiCursorClick className="text-muted-foreground" />,
      helperText: "Visits that result in form submission",
      value: data?.submissionRate.toLocaleString() + "%" || "",
    },
    {
      title: "Bounce rate",
      icon: <TbArrowBounce className="text-muted-foreground" />,
      helperText: "Visits that leave without interacting",
      value: data?.bounceRate.toLocaleString() + "%" || "",
    },
  ];

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, i) => (
        <div
          key={card.title}
          className="animate-in fade-in-0 slide-in-from-bottom-4 duration-500 fill-mode-both"
          style={{ animationDelay: delays[i] }}
        >
          <StatsCard {...card} loading={loading} />
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
