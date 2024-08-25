import { Col, Row } from 'reactstrap';
import OfferBanner from './OfferBanner';

const ShowCaseBanner = ({ dataAPI }) => {
  return (
    <div className='section-t-space section-b-space'>
      <Row className='g-md-4 g-3 ratio_30'>
        <Col md={6}>
          <OfferBanner classes={{ customHoverClass: 'banner-contain hover-effect b-left' }} imgUrl={"https://img.freepik.com/premium-photo/raw-eye-round-steak-with-spices-herbs-black-stone-concrete-background-trendy-hard-light-dark-shadow-flat-lay-banner-format_164638-19502.jpg?semt=ais_hybrid"} ratioImage={true} elem={dataAPI?.banner_1} />
        </Col>
        <Col md={6}>
          <OfferBanner classes={{ customHoverClass: 'banner-contain hover-effect b-left' }} imgUrl={"https://img.freepik.com/premium-photo/dark-horizontal-background-chocolate-cake-with-berries-copy-space-left-baking-cake-day_1010509-1082.jpg"} ratioImage={true} elem={dataAPI?.banner_2} />
        </Col>
      </Row>
    </div>
  );
};

export default ShowCaseBanner;
