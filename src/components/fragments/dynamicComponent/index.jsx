import PostsSection from "../sections/PostsSection";
import AboutSection from "../sections/AboutSection";
import ServicesSection from "../sections/ServicesSection";
import TeamSection from "../sections/TeamsSection";

const components = {
  posts: PostsSection,
  about: AboutSection,
  services: ServicesSection,
  teams: TeamSection,
};

const Index = ({ type, styles, data, uri }) => {
  const DynamicallyComponents = components[type];
  return <DynamicallyComponents uri={uri} data={data} styles={styles} />;
};
export default Index;
