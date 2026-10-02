import { Link, useParams } from "react-router-dom";
import { getDepartment, divisions, pathwayCta } from "../data/departments";
import NotFound from "./NotFound";

export default function Department() {
  const { slug } = useParams();
  const dept = getDepartment(slug);
  if (!dept) return <NotFound />;

  const division = divisions.find((d) => d.id === dept.division);
  const cta = pathwayCta[dept.pathway];
  const forthcoming = dept.status === "forthcoming";

  return (
    <>
      <section className="section-y bg-olive text-ivory">
        <div className="wrap">
          <p className="text-ivory/75">
            <Link to="/departments" className="hover:text-gold">Departments</Link> / {division.name}
          </p>
          <h1 className="heading-1 mt-5 text-gold">{dept.name}</h1>
          <p className="lead mt-6 max-w-xl">{dept.summary}</p>
        </div>
      </section>

      <section className="section-y bg-ivory">
        <div className="wrap max-w-2xl space-y-4">
          <p>{dept.body}</p>
          {forthcoming && (
            <p>This department is opening soon. Register your interest and a client advisor will contact you first when it opens.</p>
          )}
          <hr className="my-8 w-16 border-0 border-t border-bronze" />
          <Link to={cta.to} className="btn btn-olive">
            {forthcoming ? "Register your interest" : cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}