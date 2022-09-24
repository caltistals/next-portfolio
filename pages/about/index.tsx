import type { NextPage } from "next";
import InternSection from "../../components/InternSection";
import Layout from "../../components/Layout";
import MetaData from "../../components/MetaData";
import ProfileSection from "../../components/ProfileSection";
import SkillSection from "../../components/SkillSection";

const About: NextPage = () => {
  return (
    <Layout>
      <MetaData title="私について" />
      <div className="flex flex-col items-center justify-center">
        <ProfileSection bio="Web開発の勉強を本格的に始めて6ヶ月目です。長期インターンに挑戦したい。" />
        <InternSection />
        <SkillSection />
      </div>
    </Layout>
  );
};

export default About;
