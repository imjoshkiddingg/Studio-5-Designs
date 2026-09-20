import { caseStudies, projects, type CaseStudy, type Project } from "./site";

export type WorkEntry =
  | { kind: "case-study"; data: CaseStudy }
  | { kind: "project"; data: Project };

export function getWorkEntry(slug: string): WorkEntry | null {
  const study = caseStudies.find((c) => c.slug === slug);
  if (study) return { kind: "case-study", data: study };

  const project = projects.find((p) => p.slug === slug);
  if (project) return { kind: "project", data: project };

  return null;
}

export function getAllWorkSlugs(): string[] {
  return [
    ...caseStudies.map((c) => c.slug),
    ...projects.map((p) => p.slug),
  ];
}
