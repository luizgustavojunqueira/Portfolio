export default function SkillItem({
    image,
    name,
}: {
    image: string;
    name: string;
}) {
    return (
        <section className="flex-center column skill-item">
            <img className="icon-img" src={image} alt="" />
            <p>{name}</p>
        </section>
    );
}
