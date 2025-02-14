export default function SkillItem({
    image,
    name,
}: {
    image: string;
    name: string;
}) {
    return (
        <div className="item">
            <div className="icon">
                <img src={image} alt="" />
            </div>
            <p>{name}</p>
        </div>
    );
}
