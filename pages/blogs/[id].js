import React, {  useState } from "react";
import Head from "next/head";
import { useRouter } from 'next/router'
import { Row } from "react-bootstrap";
import PurpleHeading from "../../components/PurpleHeading";
import axios from 'axios'


const SpecificBlog = () => {
  const router = useRouter()
const slug = router.query.slug 
  // const [data,setData] = useState(dat)
  const canonicalUrl = (`https://cdrforengineer.com` + (router.asPath === "/" ? "": router.asPath)).split("?")[0];
  return (
    <div>
      <Head>
        <title>{slug}</title>
        <meta name='description' content={slug}/>
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      <div
        style={{
          background: `linear-gradient(
        90deg,
        #60269e 0%,
        #4c1980 35.73%,
        #360b62 100%
      )`,
          minHeight: "6rem",
        }}
      >
        <div className="px-5 ">
          <Row>
            <p className="mt-5  text-center text-md-start text-white">
              Home &gt; Blogs &gt; Australia Migration &gt;{" "}
              {/* <strong>{title}</strong> */}
            </p>
          </Row>
        </div>
      </div>

      {/* <PurpleHeading title={title} /> */}
      {/* <Row><img src={image} alt="title" /></Row> */}
      {/* <Row>{description}</Row> */}
    </div>
  );
};

export default SpecificBlog;


// export const getStaticProps = async () => {
//   const dat = await axios.get(`https://cdrdashboardbackend.herokuapp.com/api/blogs?slug=${slug}`)
//   return {
//     props: {dat},
//   };
// };