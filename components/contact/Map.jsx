const Map = () => {
  return (
    <div className="map-area-one p-30 mt-120 lg-mt-80 wow fadeInUp">
      <div className="box-layout">
        <div className="mapouter">
          <div className="gmap_canvas">
          <iframe
              className="gmap_iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9932208780747!2d-73.97546822472607!3d40.76217383454365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258faeafe70af%3A0x1e5ecb8daf05dff6!2s590%20Madison%20Ave%2021st%20floor%2C%20New%20York%2C%20NY%2010022%2C%20USA!5e0!3m2!1sen!2s!4v1689926758338!5m2!1sen!2s"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
