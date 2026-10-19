import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { CardStatsWrapper } from "@/components/stats/StatCardWrap";
import StatsCards from "@/components/stats/StatCards";
import CreateFormButton from "@/components/CreateFormButton";
import FormCardSkeleton from "@/components/form/FormCardSkeleton";
import FormCards from "@/components/form/FormCards";

export default function Home() {
  return (
    <div className="container pt-6 pb-10 animate-in fade-in-0 duration-500">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-8" />
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold">Forms</h2>
          <p className="text-sm text-muted-foreground mt-0.5">Create and manage your forms</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
