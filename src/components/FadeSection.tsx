import { useEffect, useState } from "react";

export default function FadeSection({
    children,
    id,
    observing,
}: {
    children: React.ReactNode;
    id: string;
    observing: boolean;
}) {
    const [visible, setVisible] = useState(false);

    const [observer, setObserver] = useState<IntersectionObserver | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(document.getElementById(id) as Element);
            } else {
                setVisible(false);
            }
        });

        setObserver(observer);

        observer.observe(document.getElementById(id) as Element);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!observer) return;
        observer.observe(document.getElementById(id) as Element);
    }, [observing]);

    return (
        <section
            id={id}
            className={`flex-start column page ${visible ? "fade-in" : ""}`}
        >
            {children}
        </section>
    );
}
