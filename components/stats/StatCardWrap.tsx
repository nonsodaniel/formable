import { GetFormStats } from "@/actions/form";
import StatsCards from "./StatCards";

export async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} data={stats} />;
}
