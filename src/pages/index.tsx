import { GetServerSideProps } from 'next';
import { Banner, Explore } from '../components';
import Layout from '../layouts';
import { fetchCategories } from '../utils';
// 1:34:42
interface Props {
  categories: Category[];
}
export default function Home({ categories }: Props) {
  return (
    <Layout>
      <Banner />
<!--       <Explore categories={categories} /> -->
    </Layout>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  // rapidapi getCategories from airbnb api here
  const categories = await fetchCategories();
  return {
    props: {
      categories,
    },
  };
};
