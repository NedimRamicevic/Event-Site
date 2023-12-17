import {Helmet} from "react-helmet";

interface SEOProps {
  title:string,
  description?:string
  image?:string
  url?:string
}

const SEO = ({ title, description, image, url }:SEOProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta property="og:url" content={url} />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
);

export default SEO;
