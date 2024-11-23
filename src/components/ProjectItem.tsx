export default function ProjectItem({
  name,
  description,
  image,
  link,
  tecnologies,
}: {
  name: string;
  description: string;
  image: string;
  link: string;
  tecnologies: string;
}) {
  return (
    <section className="project_item">
      <section className="project_image">
        <img src={image} alt="" />
      </section>
      <section className="project_description">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>{tecnologies}</p>
        <a href={link} target="_blank" rel="noreferrer">
          Link
        </a>
      </section>
    </section>
  );
}
