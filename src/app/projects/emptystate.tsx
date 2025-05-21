import Image from "next/image";

const EmptyState = () => {
  return (
    <div className="flex flex-col flex-grow items-center justify-center h-full text-center text-secondaryLightBlue ">
      <Image
        src="/projects/empty.svg"
        alt="No Projects"
        width={200}
        height={200}
      />
      <h2 className="mt-4 text-xl font-semibold">No Projects Found</h2>
      <p className="mt-2">
        This is most likely an error on my part. Come back later!
      </p>
    </div>
  );
};

export default EmptyState;
