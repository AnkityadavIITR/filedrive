import { Skeleton } from "../ui/skeleton";
function LoadingData() {
  return (
    <div className="px-10 py-10 w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <Skeleton className={"w-[300px] h-[200px] rounded-xl"}></Skeleton>
      <Skeleton className={"w-[300px] h-[200px] rounded-xl"}></Skeleton>
      <Skeleton className={"w-[300px] h-[200px] rounded-xl"}></Skeleton>
      <Skeleton className={"w-[300px] h-[200px] rounded-xl"}></Skeleton>
      <Skeleton className={"w-[300px] h-[200px] rounded-xl"}></Skeleton>
      <Skeleton className={"w-[300px] h-[200px] rounded-xl"}></Skeleton>
      <Skeleton className={"w-[300px] h-[200px] rounded-xl"}></Skeleton>
      <Skeleton className={"w-[300px] h-[200px] rounded-xl"}></Skeleton>
      <Skeleton className={"w-[300px] h-[200px] rounded-xl"}></Skeleton>
      <Skeleton className={"w-[300px] h-[200px] rounded-xl"}></Skeleton>
      <Skeleton className={"w-[300px] h-[200px] rounded-xl"}></Skeleton>
      <Skeleton className={"w-[300px] h-[200px] rounded-xl"}></Skeleton>

    </div>
  );
}
export default LoadingData;
