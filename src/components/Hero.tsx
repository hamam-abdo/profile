import { experience, profile } from "@/constants";
import { HiOutlineArrowDownTray, HiOutlineEnvelope } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import Overview from "./Overview";

/* Full-width intro: the claim and proof on the left, the profile as code
   (with counted facts) on the right. */
export default function Hero() {
  return (
    <section id="top" className="pt-28 sm:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-6">
          <p className="text-sm text-muted">
            <span className="font-semibold text-fg">{profile.name}</span>
            {" · "}
            {profile.role} · {profile.stack.join(" / ")}
          </p>

          <h1 className="mt-5 text-2xl font-bold tracking-display text-pretty sm:text-3xl">
            I build production web apps end to end,{" "}
            <span className="text-muted">from interface to database.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
            Solo-built{" "}
            <a href="#orderly" className="link">
              Orderly
            </a>
            , a multi-tenant restaurant SaaS
            {experience.length > 0 && (
              <>
                , and delivered a{" "}
                <a href="#experience" className="link">
                  production website with an admin CMS
                </a>{" "}
                for a security research company
              </>
            )}
            .
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button asChild>
              <a href={profile.cv} download="Hamam_Sadek_CV.pdf">
                <HiOutlineArrowDownTray aria-hidden="true" />
                Download CV
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={`mailto:${profile.email}`}>
                <HiOutlineEnvelope aria-hidden="true" />
                Email me
              </a>
            </Button>
          </div>
        </div>

        <div className="min-w-0 lg:col-span-6">
          <Overview />
        </div>
      </div>
    </section>
  );
}
