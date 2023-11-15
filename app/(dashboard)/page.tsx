import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { CardStatsWrapper } from "@/components/stats/StatCardWrap";
import StatsCards from "@/components/stats/StatCards";
import CreateFormButton from "@/components/CreateFormButton";
import FormCardSkeleton from "@/components/form/FormCardSkeleton";
import FormCards from "@/components/form/FormCards";

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">Your forms</h2>
      <Separator className="my-6" />
      <div className="grid gric-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CreateFormButton />
        <Suspense
          fallback={[1, 2, 3, 4].map((el) => (
            <FormCardSkeleton key={el} />
          ))}
        >
          <FormCards />
        </Suspense>
      </div>
    </div>
  );
}
