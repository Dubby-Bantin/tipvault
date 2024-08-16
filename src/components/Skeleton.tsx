import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const SkeletonCards = ({ cards }: { cards: number }) =>
  Array(cards)
    .fill(0)
    .map((_, i) => (
      <SkeletonTheme baseColor="#111827" highlightColor="#60a5fa" key={i}>
        <div className="relative border border-opacity-10 border-primary p-4 rounded-lg shadow-lg w-full max-w-full sm:max-w-[35rem] mx-auto">
          <div className="flex items-center justify-between">
            <Skeleton height="1rem" width="60%" /> {/* Ensure enough width */}
            <Skeleton height="30px" borderRadius={"50%"} width="30px" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton height="10px" width="50%" /> {/* Adjusted for better fit */}
            <Skeleton height="20px" width="100%" className="mb-2" /> {/* Full width for better rendering */}
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <Skeleton height="10px" width="25%" /> {/* Adjusted widths */}
              <Skeleton height="10px" width="25%" />
              <Skeleton height="10px" width="25%" />
            </div>
            <div>
              <Skeleton height="10px" width="100%" /> {/* Full width for footer element */}
            </div>
          </div>
        </div>
      </SkeletonTheme>
    ));

export default SkeletonCards;
