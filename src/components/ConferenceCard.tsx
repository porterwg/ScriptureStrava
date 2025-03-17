export const ConferenceCard: React.FC = () => {
  return (
    <article className="flex flex-col gap-4">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a342b120fa56fb445f9e1887344ef171fdedb3d"
        className="object-cover rounded-2xl border border-black border-solid h-[347px] w-[328px] max-sm:w-full max-sm:h-auto"
        alt="Conference Image"
      />
      <div className="flex flex-col gap-4">
        <h2 className="text-base text-black">President Russel M. Nelson</h2>
        <p className="text-sm text-black max-w-[322px]">
          General Conference 2023 - President Nelson gave his address to the
          entire church on the power of Christ.
        </p>
      </div>
    </article>
  );
};
