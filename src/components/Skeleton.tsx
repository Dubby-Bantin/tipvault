import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
const SkeletonCards = ({ cards }: { cards: number }) =>
  Array(cards)
    .fill(0)
    .map((_, i) => (
      <SkeletonTheme baseColor="#111827" highlightColor="#60a5fa">
        <div key={i} className="relative border border-opacity-10 border-primary p-4 rounded-lg shadow-lg w-[35rem]">
          <div className="flex items-center justify-between">
            <Skeleton height="1rem" width="20rem"  />
            <Skeleton height="30px" borderRadius={"50%"} width="30px" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton height="10px" width="50px" />
            <Skeleton height="20px" width="20rem" className="mb-2" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Skeleton height="10px" width="3rem" />
              <Skeleton height="10px" width="3rem" />
              <Skeleton height="10px" width="3rem" />
            </div>
            <div>
              <Skeleton height="10px" width="15rem" />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    ));
export default SkeletonCards;
