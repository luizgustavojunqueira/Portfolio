export default function SkillItem({
    image,
    name,
}: {
    image: string;
    name: string;
}) {
    return (
        <section className="flex-center column skill-item">
            <section className="flex-center column icon">
                <img className="icon-img" src={image} alt="" />
            </section>
            <p>{name}</p>
        </section>
    );
}
