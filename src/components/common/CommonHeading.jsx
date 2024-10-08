export default function CommonHeading({ heading, title, subtitle }) {
  return (
    <>
      {/* Centered container for the heading section */}
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        {/* Section title with primary color and uppercase styling */}
        <h6 className="section-title text-center text-primary text-uppercase">
          {heading}
        </h6>
        {/* Main title with subtitle and highlighted title in primary color */}
        <h1 className="mb-5">
          {subtitle}{" "}
          <span className="text-primary text-uppercase">{title}</span>
        </h1>
      </div>
    </>
  );
}
