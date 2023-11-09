import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { CardStatsWrapper } from "@/components/stats/StatCardWrap";
import StatsCards from "@/components/stats/StatCards";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
    </div>
  );
}
