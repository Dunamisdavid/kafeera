import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="section-y min-h-[60vh] bg-olive text-ivory">
      <div className="wrap">
        <h1 className="heading-1 text-gold">This page isn't part of the house</h1>
        <p className="lead mt-6 mb-10">The address may have changed. Return home or browse the departments.</p>
        <Link to="/" className="btn btn-gold">Return home</Link>
      </div>
    </section>
  );
}