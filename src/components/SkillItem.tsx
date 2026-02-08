export default function SkillItem({
  image,
  name,
}: {
  image: string;
  name: string;
}) {
  return (
    <section className="w-25 md:w-40 flex flex-col items-center justify-center gap-2 bg-slate-100 dark:bg-darkgray p-2 text-sm rounded-xl text-current hover:bg-slate-300 dark:hover:bg-midgray">
      <img className="w-20 h-20 object-contain" src={image} alt="" />
      <p>{name}</p>
    </section>
  );
}
