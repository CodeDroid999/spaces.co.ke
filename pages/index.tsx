import Layout from "components/layout/Layout";


const IndexPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        {/* Your sign-up form and content */}
        <form className="max-w-md mx-auto">
          {/* Your form fields, labels, and buttons go here */}
        </form>
      </div>
    </Layout>
  );
};

export default IndexPage;
