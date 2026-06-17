import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ResourceCard from "../components/ExperinceCard/ResourceCard";
import YoutubeCard from "../components/ExperinceCard/YoutubeCard";

const DATA_SOURCES = [
  { url: "/data/consejos.json", key: "consejos" },
  { url: "/data/resources.json", key: "plataformas" },
  { url: "/data/youtubers.json", key: "youtubers" },
];

function ResourceSection({ title, items, renderCard }) {
  return (
    <section className="mb-5">
      {title && <h3 className="text-center mt-5 mb-4">{title}</h3>}

      <Row className="g-4 row-cols-1 row-cols-sm-2 row-cols-lg-3">
        {items.map((item) => (
          <Col key={item.title}>
            {renderCard(item)}
          </Col>
        ))}
      </Row>
    </section>
  );
}

function Consejos() {
  const [consejos, setConsejos] = useState([]);
  const [resources, setResources] = useState([]);
  const [youtubers, setYoutubers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [consejosRes, resourcesRes, youtubersRes] = await Promise.all(
          DATA_SOURCES.map(({ url }) => fetch(url))
        );

        const [consejosData, resourcesData, youtubersData] = await Promise.all([
          consejosRes.json(),
          resourcesRes.json(),
          youtubersRes.json(),
        ]);

        setConsejos(consejosData.consejos);
        setResources(resourcesData.plataformas);
        setYoutubers(youtubersData.youtubers);
      } catch (error) {
        console.error("Error cargando recursos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <p>Cargando recursos...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h1 className="text-center mb-5">Recursos para Programadores Junior</h1>

      <ResourceSection
        items={consejos}
        renderCard={(item) => <ResourceCard {...item} />}
      />

      <ResourceSection
        title="🧪 Plataformas para Practicar"
        items={resources}
        renderCard={(item) => <ResourceCard {...item} />}
      />

      <ResourceSection
        title="🎥 Programadores en YouTube"
        items={youtubers}
        renderCard={(item) => <YoutubeCard {...item} />}
      />
    </Container>
  );
}

export default Consejos;