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

const StatsCards = (props: StatsCardProps) => {
  const { data, loading } = props;

  return (
    <div className="w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard
        title="Total visits"
        icon={<LuView className="text-muted-foreground" />}
        helperText="All time form visits"
        value={data?.visits.toLocaleString() || ""}
        loading={loading}
      />
      <StatsCard
        title="Total submissions"
        icon={<FaWpforms className="text-muted-foreground" />}
        helperText="All time form submissions"
        value={data?.submissions.toLocaleString() || ""}
        loading={loading}
      />
      <StatsCard
        title="Submission rate"
        icon={<HiCursorClick className="text-muted-foreground" />}
        helperText="Visits that result in form submission"
        value={data?.submissionRate.toLocaleString() + "%" || ""}
        loading={loading}
      />
      <StatsCard
        title="Bounce rate"
        icon={<TbArrowBounce className="text-muted-foreground" />}
        helperText="Visits that leave without interacting"
        value={data?.bounceRate.toLocaleString() + "%" || ""}
        loading={loading}
      />
    </div>
  );
};

export default StatsCards;
