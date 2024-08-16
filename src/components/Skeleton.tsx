import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCards = ({ cards }: { cards: number }) =>
  Array(cards)
    .fill(0)
    .map((_, i) => (
      <SkeletonTheme baseColor="#111827" highlightColor="#60a5fa" key={i}>
        <div className="border border-opacity-10 border-primary relative p-4 rounded-lg shadow-lg w-full max-w-[35rem]">
          {/* Skeleton for Title and Badge */}
          <div className="flex justify-between items-center mb-2">
            <Skeleton width={200} height={20} />
            <Skeleton circle={true} width={20} height={20} />
          </div>

          {/* Skeleton for Description */}
          <Skeleton width={50} height={15} className="mb-4" />
          <Skeleton height={15} className="mb-4" />

          {/* Skeleton for Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Skeleton width={60} height={20} />
            <Skeleton width={60} height={20} />
            <Skeleton width={60} height={20} />
          </div>

          {/* Skeleton for Date and Category */}
          <div className="flex justify-between">
            <Skeleton width={100} height={15} />
            <Skeleton width={100} height={15} />
          </div>
        </div>
      </SkeletonTheme>
    ));

export default SkeletonCards;
