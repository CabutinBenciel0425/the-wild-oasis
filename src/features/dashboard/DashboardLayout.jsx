import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import styled from "styled-components";
import Spinner from "../../ui/Spinner";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

export default function DashboardLayout() {
  const { recentBookings, isLoading: isLoading1 } = useRecentBookings();
  const {
    recentStays,
    isLoading: isLoading2,
    confirmedStays,
  } = useRecentStays();

  if (isLoading1 || isLoading2) return <Spinner />;

  console.log(recentBookings, recentStays, confirmedStays);
  return (
    <StyledDashboardLayout>
      <div>Statistics</div>
      <div>Today&apos;s activity</div>
      <div>Chart stay duration</div>
      <div>Chart sales</div>
    </StyledDashboardLayout>
  );
}
